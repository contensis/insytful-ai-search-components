import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import type { Cta } from "../rag.types";
import { useRAGConversation } from "../use-rag-conversation";
import {
  mockFetchResponse,
  sseCtaFrame,
  sseDataFrame,
  sseDoneFrame,
  stubFetch,
} from "./sse-test-helpers";

vi.mock("react-google-recaptcha-v3", () => ({
  useGoogleReCaptcha: vi.fn(() => ({ executeRecaptcha: undefined })),
}));

/** Raw wire-shape CTAs (pre-sanitization) for cta frames. */
const rawCtas = [
  { type: "link", label: "Contact us", url: "https://example.com/contact", intent: "primary" },
  { type: "call", label: "Call us", phone: "+44 1234 567890" },
] as unknown as Cta[];

/** What `sanitizeCtas` produces for {@link rawCtas}. */
const expectedCtas = [
  {
    type: "link",
    label: "Contact us",
    intent: "primary",
    url: "https://example.com/contact",
    newTab: false,
  },
  { type: "call", label: "Call us", intent: "secondary", phone: "+441234567890" },
];

/**
 * An SSE body whose chunks are released manually — lets a test hold a stream
 * open across a follow-up ask(). `cancel()` (invoked by readSSEFrames on
 * abort) resolves any pending read with `done: true`, mirroring a real
 * ReadableStream reader.
 */
function controlledSSEBody() {
  const encoder = new TextEncoder();
  const queue: string[] = [];
  let closed = false;
  let pendingResolve:
    | ((r: { value: Uint8Array | undefined; done: boolean }) => void)
    | null = null;

  const tryFlush = () => {
    if (!pendingResolve) return;
    if (queue.length > 0) {
      const resolve = pendingResolve;
      pendingResolve = null;
      resolve({ value: encoder.encode(queue.shift()!), done: false });
    } else if (closed) {
      const resolve = pendingResolve;
      pendingResolve = null;
      resolve({ value: undefined, done: true });
    }
  };

  return {
    push(chunk: string) {
      queue.push(chunk);
      tryFlush();
    },
    close() {
      closed = true;
      tryFlush();
    },
    body: {
      getReader() {
        return {
          read: () =>
            new Promise<{ value: Uint8Array | undefined; done: boolean }>(
              (resolve) => {
                pendingResolve = resolve;
                tryFlush();
              },
            ),
          releaseLock: () => {},
          cancel: async () => {
            closed = true;
            queue.length = 0;
            tryFlush();
          },
        };
      },
    },
  };
}

describe("useRAGConversation — CTA frames", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.mocked(useGoogleReCaptcha).mockReturnValue({ executeRecaptcha: undefined });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  it("keeps ctas attached when token frames arrive after the cta frame (clobber regression)", async () => {
    stubFetch(async () =>
      mockFetchResponse({
        chunks: [
          sseCtaFrame(rawCtas),
          sseDataFrame("Hello "),
          sseDataFrame("world"),
          sseDoneFrame,
        ],
      }),
    );

    const { result } = renderHook(() =>
      useRAGConversation("my-config", "https://api.example.com"),
    );

    await act(async () => {
      await result.current.ask("Hello?");
    });

    expect(result.current.messages).toEqual([
      { role: "user", content: "Hello?" },
      { role: "assistant", content: "Hello world", ctas: expectedCtas },
    ]);
    expect(result.current.error).toBeNull();
  });

  it("keeps ctas on the message they arrived with across a follow-up turn", async () => {
    stubFetch(async () =>
      mockFetchResponse({
        chunks: [sseCtaFrame(rawCtas), sseDataFrame("First answer"), sseDoneFrame],
      }),
    );
    const { result } = renderHook(() =>
      useRAGConversation("my-config", "https://api.example.com"),
    );

    await act(async () => {
      await result.current.ask("First question");
    });

    stubFetch(async () =>
      mockFetchResponse({ chunks: [sseDataFrame("Second answer"), sseDoneFrame] }),
    );

    await act(async () => {
      await result.current.ask("Second question");
    });

    expect(result.current.messages).toEqual([
      { role: "user", content: "First question" },
      { role: "assistant", content: "First answer", ctas: expectedCtas },
      { role: "user", content: "Second question" },
      { role: "assistant", content: "Second answer" },
    ]);
    expect(result.current.messages[3]).not.toHaveProperty("ctas");
  });

  it("aborts the previous in-flight stream on a follow-up ask(); late frames never corrupt the new turn", async () => {
    const first = controlledSSEBody();
    let call = 0;
    stubFetch(async () => {
      call += 1;
      return call === 1
        ? mockFetchResponse({ body: first.body })
        : mockFetchResponse({
            chunks: [sseDataFrame("Second answer"), sseDoneFrame],
          });
    });

    const { result } = renderHook(() =>
      useRAGConversation("my-config", "https://api.example.com"),
    );

    let firstAsk!: Promise<void>;
    act(() => {
      firstAsk = result.current.ask("q1");
    });

    await act(async () => {
      first.push(sseDataFrame("First partial"));
    });
    await waitFor(() =>
      expect(result.current.messages[1]?.content).toBe("First partial"),
    );

    // Follow-up ask() aborts the first stream before starting the second.
    await act(async () => {
      await result.current.ask("q2");
    });

    // Release late frames from the (aborted) first stream.
    await act(async () => {
      first.push(sseDataFrame(" LATE"));
      first.push(sseCtaFrame(rawCtas));
      first.close();
      await firstAsk;
    });

    expect(result.current.messages).toEqual([
      { role: "user", content: "q1" },
      { role: "assistant", content: "First partial" },
      { role: "user", content: "q2" },
      { role: "assistant", content: "Second answer" },
    ]);
    // Aborting is expected — never an error, never a loading flip.
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it("warns and keeps streaming when a cta frame carries malformed JSON", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    stubFetch(async () =>
      mockFetchResponse({
        chunks: [
          "event: cta\ndata: {not-json\n\n",
          sseDataFrame("Still fine"),
          sseDoneFrame,
        ],
      }),
    );

    const { result } = renderHook(() =>
      useRAGConversation("my-config", "https://api.example.com"),
    );

    await act(async () => {
      await result.current.ask("question");
    });

    expect(result.current.messages[1]).toEqual({
      role: "assistant",
      content: "Still fine",
    });
    expect(result.current.error).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("[Insytful]"),
      expect.anything(),
      expect.anything(),
    );
  });

  it("attaches no ctas field for an empty cta payload", async () => {
    stubFetch(async () =>
      mockFetchResponse({
        chunks: [sseCtaFrame([]), sseDataFrame("Answer"), sseDoneFrame],
      }),
    );

    const { result } = renderHook(() =>
      useRAGConversation("my-config", "https://api.example.com"),
    );

    await act(async () => {
      await result.current.ask("question");
    });

    expect(result.current.messages[1]).toEqual({
      role: "assistant",
      content: "Answer",
    });
    expect(result.current.messages[1]).not.toHaveProperty("ctas");
  });
});
