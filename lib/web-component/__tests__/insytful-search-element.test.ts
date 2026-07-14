/**
 * Element-level tests for the CTA streaming behaviour of <insytful-search>
 * (Phase 4): once-only CTA row insertion as a contentDiv sibling, repaint and
 * error-path survival, clean-abort handling, generation guarding, and the
 * insytful-cta-click / insytful-message events.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { MockInstance } from "vitest";
import type { RAGMessage } from "../../api/rag.types";
import { CTA_BAR_CLASS } from "../../shared/cta/view-model";
import { InsytfulSearchElement } from "../insytful-search-element";

/* ------------------------------------------------------------------ */
/* jsdom polyfills                                                      */
/* ------------------------------------------------------------------ */

class ResizeObserverStub {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

/* ------------------------------------------------------------------ */
/* Custom element registration — once per file                          */
/* ------------------------------------------------------------------ */

if (!customElements.get("insytful-search")) {
  customElements.define("insytful-search", InsytfulSearchElement);
}

/* ------------------------------------------------------------------ */
/* Local SSE frame helpers (sse-test-helpers.ts is React-side owned)    */
/* ------------------------------------------------------------------ */

const sseDataFrame = (content: string): string =>
  `data: ${JSON.stringify({ content })}\n\n`;

const sseCtaFrame = (ctas: unknown[]): string =>
  `event: cta\ndata: ${JSON.stringify(ctas)}\n\n`;

const sseDoneFrame = (): string => "event: done\ndata: {}\n\n";

/** Two wire-shape CTAs: one anchor type, one event type. */
const wireCtas = [
  { type: "call", label: "Call us", phone: "+441234567890", intent: "primary" },
  { type: "event", label: "Start web chat", event: "openWebChat" },
];

/* ------------------------------------------------------------------ */
/* Controllable mock SSE fetch                                          */
/* ------------------------------------------------------------------ */

interface MockStream {
  push(frame: string): void;
  error(err: Error): void;
  close(): void;
}

/** Stubs global fetch; each call opens a new controllable SSE stream. */
function installMockFetch(): MockStream[] {
  const streams: MockStream[] = [];
  const encoder = new TextEncoder();
  const fetchFn = vi.fn(async (): Promise<Response> => {
    let controller!: ReadableStreamDefaultController<Uint8Array>;
    const body = new ReadableStream<Uint8Array>({
      start(c) {
        controller = c;
      },
    });
    streams.push({
      push: (frame) => controller.enqueue(encoder.encode(frame)),
      error: (err) => controller.error(err),
      close: () => {
        try {
          controller.close();
        } catch {
          // already closed/errored
        }
      },
    });
    return new Response(body, {
      status: 200,
      headers: { "Content-Type": "text/event-stream" },
    });
  });
  vi.stubGlobal("fetch", fetchFn);
  return streams;
}

/* ------------------------------------------------------------------ */
/* Element helpers                                                      */
/* ------------------------------------------------------------------ */

/** Typed access to the element's private conversation internals. */
interface ElementInternals {
  _runConversation(query: string): Promise<void>;
  _handleSend(text?: string): void;
  _messages: RAGMessage[];
}

const internalsOf = (el: InsytfulSearchElement): ElementInternals =>
  el as unknown as ElementInternals;

function createElement(): InsytfulSearchElement {
  const el = document.createElement("insytful-search") as InsytfulSearchElement;
  el.setAttribute("api-uri", "https://api.test");
  el.setAttribute("project-id", "proj");
  document.body.appendChild(el);
  return el;
}

function assistantLis(el: InsytfulSearchElement): HTMLLIElement[] {
  return Array.from(
    el.dialogElements!.messagesList.querySelectorAll<HTMLLIElement>(
      "li[data-role='assistant']",
    ),
  );
}

function ctaBars(el: InsytfulSearchElement): HTMLElement[] {
  return Array.from(
    el.dialogElements!.messagesList.querySelectorAll<HTMLElement>(
      `.${CTA_BAR_CLASS}`,
    ),
  );
}

function contentDivOf(li: HTMLLIElement): HTMLDivElement {
  return li.querySelector<HTMLDivElement>(".insytful-search-message-content")!;
}

/** Flushes the stream → SSE decoder → element pipeline. */
async function settle(): Promise<void> {
  await new Promise<void>((r) => setTimeout(r, 0));
  await new Promise<void>((r) => setTimeout(r, 0));
}

/* ------------------------------------------------------------------ */

describe("InsytfulSearchElement CTA streaming", () => {
  let warnSpy: MockInstance;
  let streams: MockStream[];
  let element: InsytfulSearchElement;

  beforeEach(() => {
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.stubGlobal("ResizeObserver", ResizeObserverStub);
    // jsdom implements neither Element scrolling nor smooth window scrolling
    Element.prototype.scrollTo = vi.fn() as unknown as typeof Element.prototype.scrollTo;
    vi.stubGlobal("scrollTo", vi.fn());
    streams = installMockFetch();
    element = createElement();
  });

  afterEach(() => {
    for (const s of streams) s.close();
    element.remove();
    vi.unstubAllGlobals();
    warnSpy.mockRestore();
    localStorage.clear();
    document.body.innerHTML = "";
  });

  it("inserts the CTA row once, as a sibling above contentDiv, without touching the skeleton", async () => {
    const run = internalsOf(element)._runConversation("How do I contact you?");
    await settle();

    // cta frame FIRST — before any token
    streams[0].push(sseCtaFrame(wireCtas));
    streams[0].push(sseCtaFrame(wireCtas)); // duplicate frame must not add a second row
    await settle();

    const li = assistantLis(element)[0];
    const contentDiv = contentDivOf(li);
    expect(ctaBars(element)).toHaveLength(1);

    // Row wrapper is the immediate previous sibling of contentDiv
    const wrapper = contentDiv.previousElementSibling as HTMLElement;
    expect(wrapper.querySelector(`.${CTA_BAR_CLASS}`)).not.toBeNull();
    expect(wrapper.getAttribute("aria-live")).toBe("off");

    // The token accumulator was untouched: skeleton still visible
    expect(contentDiv.querySelector(".insytful-search-skeleton-content")).not.toBeNull();

    // Token repaints (innerHTML rewrites of contentDiv) must not destroy the row
    streams[0].push(sseDataFrame("Here is "));
    streams[0].push(sseDataFrame("how."));
    await settle();
    expect(contentDiv.querySelector(".insytful-search-skeleton-content")).toBeNull();
    expect(contentDiv.textContent).toContain("Here is how.");
    expect(ctaBars(element)).toHaveLength(1);
    expect(contentDiv.previousElementSibling).toBe(wrapper);

    // Finish the stream: message + event carry the sanitized ctas
    const messageListener = vi.fn();
    element.addEventListener("insytful-message", messageListener);
    streams[0].push(sseDoneFrame());
    streams[0].close();
    await run;

    expect(messageListener).toHaveBeenCalledTimes(1);
    const detail = (messageListener.mock.calls[0][0] as CustomEvent).detail;
    expect(detail.role).toBe("assistant");
    expect(detail.content).toBe("Here is how.");
    expect(detail.ctas).toHaveLength(2);
    expect(detail.ctas[0]).toMatchObject({ type: "call", phone: "+441234567890" });

    const messages = internalsOf(element)._messages;
    expect(messages[messages.length - 1]).toMatchObject({
      role: "assistant",
      content: "Here is how.",
    });
    expect(messages[messages.length - 1].ctas).toHaveLength(2);
  });

  it("dispatches insytful-cta-click (bubbles, composed, detail = the CTA) on chip click", async () => {
    const run = internalsOf(element)._runConversation("q");
    await settle();
    streams[0].push(sseCtaFrame(wireCtas));
    streams[0].push(sseDataFrame("Answer"));
    streams[0].push(sseDoneFrame());
    streams[0].close();
    await run;

    const clickListener = vi.fn();
    element.addEventListener("insytful-cta-click", clickListener);

    // Use the event-type chip (a button — no jsdom navigation attempts)
    const button = ctaBars(element)[0].querySelector("button")!;
    button.click();

    expect(clickListener).toHaveBeenCalledTimes(1);
    const ev = clickListener.mock.calls[0][0] as CustomEvent;
    expect(ev.bubbles).toBe(true);
    expect(ev.composed).toBe(true);
    expect(ev.detail).toMatchObject({
      type: "event",
      event: "openWebChat",
      label: "Start web chat",
    });
  });

  it("keeps the assistant li and the CTA row through the error path, swapping in the callout", async () => {
    const errorListener = vi.fn();
    element.addEventListener("insytful-error", errorListener);

    const run = internalsOf(element)._runConversation("q");
    await settle();
    streams[0].push(sseCtaFrame(wireCtas));
    await settle();

    const li = assistantLis(element)[0];
    const contentDiv = contentDivOf(li);
    const wrapper = contentDiv.previousElementSibling as HTMLElement;

    streams[0].error(new Error("boom"));
    await run;

    // Never removed: same li, same untouched CTA row nodes
    expect(li.isConnected).toBe(true);
    expect(contentDiv.previousElementSibling).toBe(wrapper);
    expect(ctaBars(element)).toHaveLength(1);

    // contentDiv's contents were swapped for the error callout
    expect(contentDiv.querySelector(".insytful-search-error-callout-inner")).not.toBeNull();
    expect(contentDiv.querySelector(".insytful-search-skeleton-content")).toBeNull();
    expect(contentDiv.textContent).toContain("boom");

    expect(errorListener).toHaveBeenCalledTimes(1);
    expect((errorListener.mock.calls[0][0] as CustomEvent).detail).toEqual({
      error: "boom",
    });
  });

  it("clean abort via a follow-up query: no stale message push, no orphan li", async () => {
    const messageListener = vi.fn();
    element.addEventListener("insytful-message", messageListener);
    const internals = internalsOf(element);

    const first = internals._runConversation("first");
    await settle();
    streams[0].push(sseCtaFrame(wireCtas));
    streams[0].push(sseDataFrame("partial gen-1 answer"));
    await settle();
    expect(ctaBars(element)).toHaveLength(1);

    // Follow-up aborts the in-flight stream and starts generation 2
    internals._handleSend("second");
    await settle();
    await first;

    // Gen-1's li (and its CTA row) was removed; only gen-2's skeleton li remains
    expect(assistantLis(element)).toHaveLength(1);
    expect(ctaBars(element)).toHaveLength(0);

    // No assistant message was pushed and no insytful-message fired for gen-1
    expect(messageListener).not.toHaveBeenCalled();
    expect(internals._messages.map((m) => m.role)).toEqual(["user", "user"]);

    // Gen-2 completes normally with its own content only
    streams[1].push(sseDataFrame("gen-2 answer"));
    streams[1].push(sseDoneFrame());
    streams[1].close();
    await settle();

    expect(messageListener).toHaveBeenCalledTimes(1);
    const detail = (messageListener.mock.calls[0][0] as CustomEvent).detail;
    expect(detail.content).toBe("gen-2 answer");
    expect(detail.content).not.toContain("partial gen-1");
    expect(detail.ctas).toBeUndefined();
  });

  it("generation guard: a late cta frame from a superseded stream is never rendered", async () => {
    const internals = internalsOf(element);

    const first = internals._runConversation("first");
    await settle();
    // Supersede gen-1 without aborting it (direct call bypasses _handleSend's abort)
    const second = internals._runConversation("second");
    await settle();
    expect(assistantLis(element)).toHaveLength(2);

    // Late cta frame arrives on the gen-1 stream: the guard must bail before
    // rendering and clean up gen-1's orphaned li.
    streams[0].push(sseCtaFrame(wireCtas));
    await settle();
    await first;

    expect(ctaBars(element)).toHaveLength(0);
    expect(assistantLis(element)).toHaveLength(1); // gen-2's skeleton only

    // Gen-2 is unaffected
    streams[1].push(sseDataFrame("hi"));
    streams[1].push(sseDoneFrame());
    streams[1].close();
    await second;
    expect(contentDivOf(assistantLis(element)[0]).textContent).toContain("hi");
  });
});
