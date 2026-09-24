import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { SearchPortal, SearchRoot } from "../search-root";
import { SearchMessages } from "../search-messages";
import { useSearchContext } from "../context";
import type { SearchOverviewFeedback } from "../feedback-reporting";

//
// End to end through Search.Root's real RAGProvider: each streamed answer in
// the modal thread gets its own feedback row, voting against the
// `X-Session-Id` header and that answer's `mid` from its `done` frame. The
// modal counterpart of ai-overview.feedback-stream.test.tsx.
//
const baseUrl = "https://api.example.com/v1";
const options = { config: "cfg", baseUrl };
const sid = "s_streamsession01";
const mid1 = "5f0f4b0e-0000-4000-8000-000000000001";
const mid2 = "5f0f4b0e-0000-4000-8000-000000000002";

class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

function sseResponse(content: string, done: Record<string, unknown>) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
      controller.enqueue(encoder.encode(`event: done\ndata: ${JSON.stringify(done)}\n\n`));
      controller.close();
    },
  });
  return new Response(stream, {
    status: 200,
    headers: { "Content-Type": "text/event-stream", "X-Session-Id": sid },
  });
}

/** Answers query-collection with the next queued answer; accepts any vote. */
function mockApi(answers: { content: string; done: Record<string, unknown> }[]) {
  const queue = [...answers];
  return vi.fn(async (input: RequestInfo | URL) => {
    if (String(input).endsWith("/vote")) return new Response(JSON.stringify({ ok: true }), { status: 200 });
    const next = queue.shift()!;
    return sseResponse(next.content, next.done);
  });
}

/** Test-only way to ask a question, standing in for Search.Input. */
function Ask() {
  const { onSend } = useSearchContext("Ask");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.currentTarget.elements.namedItem("q") as HTMLInputElement;
        void onSend(input.value);
      }}
    >
      <input name="q" aria-label="Question" />
      <button type="submit">Send</button>
    </form>
  );
}

const ask = (question: string) => {
  fireEvent.change(screen.getByLabelText("Question"), { target: { value: question } });
  fireEvent.click(screen.getByRole("button", { name: "Send" }));
};

const renderModal = (feedback: SearchOverviewFeedback, disclaimer?: string) =>
  render(
    <SearchRoot options={options} open>
      <SearchPortal isolation="none">
        <Ask />
        <SearchMessages feedback={feedback} disclaimer={disclaimer} />
      </SearchPortal>
    </SearchRoot>,
  );

/** The <li> for an answer, found by its text. */
const answerItem = (text: string) => screen.getByText(text).closest("li") as HTMLElement;

// jsdom has no Element.scrollTo; a follow-up scrolls its question to the top
// two animation frames later, which can land after a test's cleanup. Stubbed
// for the whole file (each file gets its own jsdom), never removed.
Element.prototype.scrollTo = () => {};

beforeEach(() => {
  vi.stubGlobal("ResizeObserver", ResizeObserverStub);
  // …and no window.scrollTo; Search.Root scrolls the page to the top on open.
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("Search.Messages feedback with streamed answers", () => {
  it("votes against the streamed answer's sid and mid", async () => {
    const fetchMock = mockApi([{ content: "Hello world.", done: { mid: mid1 } }]);
    vi.stubGlobal("fetch", fetchMock);
    const onVote = vi.fn();
    renderModal({ report: { text: "Report an error", href: "/report" }, onVote });

    ask("How do I apply?");
    await waitFor(() => expect(screen.getByRole("button", { name: "Helpful" })).toBeTruthy());
    expect(screen.getByRole("link", { name: "Report an error" })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Helpful" }));
    await waitFor(() => expect(onVote).toHaveBeenCalledWith("helpful", { mid: mid1 }));
    expect(fetchMock).toHaveBeenLastCalledWith(
      `${baseUrl}/sessions/cfg/${sid}/${mid1}/vote`,
      expect.objectContaining({ method: "PUT" }),
    );
    expect(document.querySelector(".insytful-search-overview-feedback-status")!.textContent).toBe(
      "Thanks for your feedback",
    );
  });

  it("gives a follow-up its own row and keeps the earlier vote", async () => {
    const fetchMock = mockApi([
      { content: "First answer.", done: { mid: mid1 } },
      { content: "Second answer.", done: { mid: mid2 } },
    ]);
    vi.stubGlobal("fetch", fetchMock);
    const onVote = vi.fn();
    renderModal({ onVote });

    ask("First question");
    await waitFor(() => expect(screen.getByRole("button", { name: "Helpful" })).toBeTruthy());
    fireEvent.click(within(answerItem("First answer.")).getByRole("button", { name: "Helpful" }));
    await waitFor(() => expect(onVote).toHaveBeenCalledWith("helpful", { mid: mid1 }));

    ask("Second question");
    await waitFor(() => expect(screen.getAllByRole("button", { name: "Unhelpful" })).toHaveLength(2));
    fireEvent.click(within(answerItem("Second answer.")).getByRole("button", { name: "Unhelpful" }));
    await waitFor(() => expect(onVote).toHaveBeenLastCalledWith("unhelpful", { mid: mid2 }));
    expect(fetchMock).toHaveBeenLastCalledWith(
      `${baseUrl}/sessions/cfg/${sid}/${mid2}/vote`,
      expect.objectContaining({ method: "PUT" }),
    );

    const first = within(answerItem("First answer."));
    expect(first.getByRole("button", { name: "Helpful" }).getAttribute("aria-pressed")).toBe("true");
    const second = within(answerItem("Second answer."));
    expect(second.getByRole("button", { name: "Helpful" }).getAttribute("aria-pressed")).toBe("false");
  });

  it("shows the disclaimer below each answer's feedback row", async () => {
    vi.stubGlobal(
      "fetch",
      mockApi([
        { content: "First answer.", done: { mid: mid1 } },
        { content: "Second answer.", done: { mid: mid2 } },
      ]),
    );
    renderModal({ report: { text: "Report an error", href: "/report" } }, "AI can be wrong.");

    ask("First question");
    await waitFor(() => expect(within(answerItem("First answer.")).getByText("AI can be wrong.")).toBeTruthy());

    ask("Second question");
    await waitFor(() => expect(within(answerItem("Second answer.")).getByText("AI can be wrong.")).toBeTruthy());
    expect(within(answerItem("First answer.")).getByText("AI can be wrong.")).toBeTruthy();
    expect(screen.getAllByText("AI can be wrong.")).toHaveLength(2);

    const footer = answerItem("Second answer.").querySelector(".insytful-search-message-footer")!;
    expect(Array.from(footer.children, (el) => el.className)).toEqual([
      "insytful-search-overview-feedback",
      "insytful-search-message-disclaimer",
    ]);
  });

  it("offers no vote when the done frame has no mid", async () => {
    vi.stubGlobal("fetch", mockApi([{ content: "Not sure.", done: {} }]));
    renderModal({ report: { text: "Report an error", href: "/report" } });

    ask("Something vague");
    await waitFor(() => expect(screen.getByRole("link", { name: "Report an error" })).toBeTruthy());
    expect(screen.queryByRole("button", { name: "Helpful" })).toBeNull();
  });

  it("renders no footer under an answer whose stream fails", async () => {
    // Content arrives, then the connection drops on the next read. (Erroring
    // in start() would discard the queued chunk.)
    const encoder = new TextEncoder();
    let reads = 0;
    const failing = new ReadableStream({
      pull(controller) {
        if (reads++ === 0) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: "Partial answer" })}\n\n`));
        } else {
          controller.error(new Error("connection dropped"));
        }
      },
    });
    vi.stubGlobal("fetch", vi.fn(async () => new Response(failing, { status: 200, headers: { "X-Session-Id": sid } })));
    vi.spyOn(console, "error").mockImplementation(() => {});
    renderModal({ report: { text: "Report an error", href: "/report" } }, "AI can be wrong.");

    ask("How do I apply?");
    await waitFor(() => expect(screen.getByText("Partial answer")).toBeTruthy());
    await waitFor(() => expect(console.error).toHaveBeenCalled()); // the hook caught the dropped stream
    expect(answerItem("Partial answer").querySelector(".insytful-search-message-footer")).toBeNull();
    expect(screen.queryByRole("link", { name: "Report an error" })).toBeNull();
    expect(screen.queryByText("AI can be wrong.")).toBeNull();
  });
});
