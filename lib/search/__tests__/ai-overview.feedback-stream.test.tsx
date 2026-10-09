import { afterEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { SearchOverview } from "../ai-overview";

//
// End to end through the real SearchConfigProvider: a streamed SSE answer (the same
// frame shape as lib/utilities/mock-fetch.ts) must end with the feedback row
// visible and voteable, with the vote addressed by the `X-Session-Id` header
// and the `mid` from the `done` frame. Guards against the row being gated on
// a state the stream never reaches.
//
const apiUrl = "https://api.example.com/v1";
const options = { config: "cfg", apiUrl };
const sid = "s_streamsession01";
const mid = "5f0f4b0e-0000-4000-8000-000000000001";
const followUpMid = "5f0f4b0e-0000-4000-8000-000000000002";

function sseResponse(chunks: string[], done: Record<string, unknown>) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`event: cta\ndata: ${JSON.stringify({ ctas: [] })}\n\n`));
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`));
      }
      controller.enqueue(encoder.encode(`event: done\ndata: ${JSON.stringify(done)}\n\n`));
      controller.close();
    },
  });
  return new Response(stream, {
    status: 200,
    headers: { "Content-Type": "text/event-stream", "X-Session-Id": sid },
  });
}

/** Streams the answer for query-collection; accepts any vote. */
function mockApi(chunks: string[], done: Record<string, unknown> = { mid }) {
  return vi.fn(async (input: RequestInfo | URL) =>
    String(input).endsWith("/vote")
      ? new Response(JSON.stringify({ ok: true }), { status: 200 })
      : sseResponse(chunks, done),
  );
}

const renderOverview = (type: "keyword" | "conversational", onVote = vi.fn()) =>
  render(
    <SearchOverview
      type={type}
      term="How do I apply?"
      options={options}
      renderMarkdown={(md) => <p>{md}</p>}
      collapsible={false}
      feedback={{ report: { text: "Report an error", href: "/report" }, onVote }}
    />,
  );

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  localStorage.clear();
});

describe("Search.Overview feedback with a streamed answer", () => {
  it.each(["keyword", "conversational"] as const)(
    "%s: votes against the streamed answer's sid and mid",
    async (type) => {
      const fetchMock = mockApi(["Hello", " world", "."]);
      vi.stubGlobal("fetch", fetchMock);
      const onVote = vi.fn();
      renderOverview(type, onVote);

      // Nothing to vote on while the skeleton is up.
      expect(document.querySelector(".insytful-search-overview-feedback")).toBeNull();

      await waitFor(() => expect(screen.getByText("Hello world.")).toBeTruthy());
      await waitFor(() => expect(screen.getByRole("button", { name: "Helpful" })).toBeTruthy());
      expect(screen.getByRole("link", { name: "Report an error" })).toBeTruthy();

      fireEvent.click(screen.getByRole("button", { name: "Helpful" }));
      await waitFor(() =>
        expect(onVote).toHaveBeenCalledWith("helpful", { mid }),
      );
      expect(fetchMock).toHaveBeenLastCalledWith(
        `${apiUrl}/sessions/cfg/${sid}/${mid}/vote`,
        expect.objectContaining({ method: "PUT" }),
      );
      expect(document.querySelector(".insytful-search-overview-feedback-status")!.textContent).toBe(
        "Thanks for your feedback",
      );
    },
  );

  it("offers no vote when the done frame has no mid", async () => {
    vi.stubGlobal("fetch", mockApi(["Not sure."], {}));
    renderOverview("conversational");

    await waitFor(() => expect(screen.getByRole("link", { name: "Report an error" })).toBeTruthy());
    expect(screen.queryByRole("button", { name: "Helpful" })).toBeNull();
  });

  it("conversational: each follow-up gets its own feedback row and disclaimer", async () => {
    // First answer, then the follow-up, each with its own mid.
    const answers = [
      { chunks: ["First answer."], done: { mid } },
      { chunks: ["Follow-up answer."], done: { mid: followUpMid } },
    ];
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      if (String(input).endsWith("/vote")) return new Response(JSON.stringify({ ok: true }), { status: 200 });
      const next = answers.shift()!;
      return sseResponse(next.chunks, next.done);
    });
    vi.stubGlobal("fetch", fetchMock);
    // The follow-up question is scrolled to the top of the page.
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    const onVote = vi.fn();
    const overview = (expanded: boolean) => (
      <SearchOverview
        type="conversational"
        term="How do I apply?"
        options={options}
        renderMarkdown={(md) => <p>{md}</p>}
        expanded={expanded}
        feedback={{ onVote }}
        disclaimer="AI can be wrong."
      />
    );
    const { rerender } = render(overview(true));

    await waitFor(() => expect(screen.getByRole("button", { name: "Helpful" })).toBeTruthy());
    fireEvent.change(screen.getByRole("textbox", { name: "Ask a question" }), { target: { value: "And the deadline?" } });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    await waitFor(() => expect(screen.getAllByRole("button", { name: "Helpful" })).toHaveLength(2));
    const followUp = within(screen.getByText("Follow-up answer.").closest("li") as HTMLElement);
    expect(followUp.getByText("AI can be wrong.")).toBeTruthy();
    expect(screen.getAllByText("AI can be wrong.")).toHaveLength(2); // first answer's footer + follow-up's

    fireEvent.click(followUp.getByRole("button", { name: "Unhelpful" }));
    await waitFor(() => expect(onVote).toHaveBeenCalledWith("unhelpful", { mid: followUpMid }));
    expect(fetchMock).toHaveBeenLastCalledWith(
      `${apiUrl}/sessions/cfg/${sid}/${followUpMid}/vote`,
      expect.objectContaining({ method: "PUT" }),
    );

    // Collapsing unmounts the follow-ups; the vote must survive re-expanding.
    rerender(overview(false));
    expect(screen.queryByText("Follow-up answer.")).toBeNull();
    rerender(overview(true));
    const reopened = within(screen.getByText("Follow-up answer.").closest("li") as HTMLElement);
    expect(reopened.getByRole("button", { name: "Unhelpful" }).getAttribute("aria-pressed")).toBe("true");
  });

  it("renders no footer when the answer's stream fails", async () => {
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
    const { container } = render(
      <SearchOverview
        type="conversational"
        term="How do I apply?"
        options={options}
        renderMarkdown={(md) => <p>{md}</p>}
        collapsible={false}
        feedback={{ report: { text: "Report an error", href: "/report" } }}
        disclaimer="AI can be wrong."
      />,
    );

    await waitFor(() => expect(screen.getByRole("alert")).toBeTruthy());
    expect(screen.getByText("Partial answer")).toBeTruthy(); // there was an answer to put a footer under
    expect(container.querySelector(".insytful-search-overview-footer")).toBeNull();
    expect(screen.queryByText("AI can be wrong.")).toBeNull();
  });
});
