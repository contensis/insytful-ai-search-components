import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import type { AIMessage } from "../../api";

// Drive both variants through controllable AI contexts instead of the network.
const responseCtx = {
  response: null as string | null,
  ctas: [],
  loading: false,
  elapsed: 0,
  error: null as string | null,
  ask: vi.fn(),
};

const conversationCtx = {
  messages: [] as AIMessage[],
  loading: false,
  elapsed: 0,
  error: null as string | null,
  ask: vi.fn(),
};

vi.mock("../../api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../api")>();
  return {
    ...actual,
    SearchConfigProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    useAIResponseContext: () => responseCtx,
    useAIConversationContext: () => conversationCtx,
  };
});

import { SearchOverview } from "../ai-overview";

const options = { config: "cfg", baseUrl: "https://api.example.com" };
const renderMarkdown = (md: string) => <p>{md}</p>;

/** A thread with the search term and its first answer. */
const firstAnswer = (content = "First answer"): AIMessage[] => [
  { role: "user", content: "q" },
  { role: "assistant", content },
];

/** jsdom has no layout; control whether the body counts as overflowing. */
function mockScrollHeight(px: number) {
  Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
    configurable: true,
    get: () => px,
  });
}

const renderConversational = (props: Partial<React.ComponentProps<typeof SearchOverview>> = {}) =>
  render(
    <SearchOverview
      type="conversational"
      term="q"
      options={options}
      renderMarkdown={renderMarkdown}
      {...props}
    />,
  );

beforeEach(() => {
  responseCtx.response = null;
  responseCtx.loading = false;
  responseCtx.error = null;
  responseCtx.ask = vi.fn();
  conversationCtx.messages = [];
  conversationCtx.loading = false;
  conversationCtx.error = null;
  conversationCtx.ask = vi.fn();
  mockScrollHeight(100);
});
afterEach(cleanup);

describe("Search.Overview type=conversational", () => {
  it("asks the search term through the conversation hook on mount", () => {
    renderConversational();
    expect(conversationCtx.ask).toHaveBeenCalledWith("q");
    expect(responseCtx.ask).not.toHaveBeenCalled();
  });

  it("shows the first answer as the overview body and hides the user's term", () => {
    conversationCtx.messages = firstAnswer();
    renderConversational();
    expect(screen.getByText("First answer")).toBeTruthy();
    expect(screen.queryByText("q")).toBeNull();
    expect(document.querySelector(".insytful-search-overview")?.hasAttribute("data-conversational")).toBe(true);
  });

  it("offers Show more even for a short answer, and reveals the input on click", () => {
    conversationCtx.messages = firstAnswer();
    const onExpandedChange = vi.fn();
    renderConversational({ onExpandedChange });

    // No input until the user opts in.
    expect(screen.queryByRole("textbox")).toBeNull();

    const btn = screen.getByRole("button", { name: /show more of the response/i });
    expect(btn.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(btn);

    expect(onExpandedChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole("textbox", { name: /ask a question/i })).toBeTruthy();
    // Conversational expansion is one-way: the toggle goes, the input stays.
    expect(screen.queryByRole("button", { name: /show (more|less)/i })).toBeNull();
  });

  it("labels the toggle Show more when the answer overflows too", () => {
    mockScrollHeight(1000);
    conversationCtx.messages = firstAnswer();
    renderConversational();
    expect(screen.getByRole("button", { name: /show more of the response/i })).toBeTruthy();
  });

  it("sends a follow-up through the conversation hook", () => {
    conversationCtx.messages = firstAnswer();
    renderConversational();
    fireEvent.click(screen.getByRole("button", { name: /show more/i }));

    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "  Tell me more  " } });
    fireEvent.keyDown(textarea, { key: "Enter" });

    expect(conversationCtx.ask).toHaveBeenLastCalledWith("Tell me more");
    expect((textarea as HTMLTextAreaElement).value).toBe("");
  });

  it("keeps the toggle away once a follow-up has been sent", () => {
    conversationCtx.messages = firstAnswer();
    const { rerender } = renderConversational();
    fireEvent.click(screen.getByRole("button", { name: /show more/i }));

    conversationCtx.messages = [
      ...firstAnswer(),
      { role: "user", content: "Tell me more" },
      { role: "assistant", content: "Second answer" },
    ];
    rerender(
      <SearchOverview type="conversational" term="q" options={options} renderMarkdown={renderMarkdown} />,
    );

    // Collapsing would hide the input mid-thread, so no Show more / Show less
    // toggle is offered once expanded — the input is the only control.
    expect(screen.queryByRole("button", { name: /show (more|less)/i })).toBeNull();
    expect(screen.getByText("Second answer")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  it("shows the thread and a skeleton for the streaming reply once expanded", () => {
    conversationCtx.messages = firstAnswer();
    const { rerender } = renderConversational();
    fireEvent.click(screen.getByRole("button", { name: /show more/i }));

    conversationCtx.messages = [
      ...firstAnswer(),
      { role: "user", content: "Tell me more" },
      { role: "assistant", content: "" },
    ];
    conversationCtx.loading = true;
    rerender(
      <SearchOverview type="conversational" term="q" options={options} renderMarkdown={renderMarkdown} />,
    );

    const thread = document.querySelector(".insytful-search-overview-thread")!;
    expect(thread).not.toBeNull();
    expect(thread.querySelectorAll(".insytful-search-message")).toHaveLength(2);
    expect(screen.getByText("Tell me more")).toBeTruthy();
    // The first answer's body must not fall back to its skeleton while a
    // follow-up streams.
    expect(screen.getByText("First answer")).toBeTruthy();
    expect((screen.getByRole("textbox") as HTMLTextAreaElement).disabled).toBe(true);
  });

  it("scrolls a new follow-up question to the top of the page", () => {
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    });
    window.scrollTo = vi.fn();
    conversationCtx.messages = firstAnswer();
    const { rerender } = renderConversational();
    fireEvent.click(screen.getByRole("button", { name: /show more/i }));
    expect(window.scrollTo).not.toHaveBeenCalled();

    conversationCtx.messages = [...firstAnswer(), { role: "user", content: "Tell me more" }];
    conversationCtx.loading = true;
    rerender(
      <SearchOverview
        type="conversational"
        term="q"
        options={options}
        renderMarkdown={renderMarkdown}
      />,
    );

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    const spacer = document.querySelector<HTMLElement>(".insytful-search-overview-spacer")!;
    expect(spacer.style.height).toBe(`${window.innerHeight}px`);

    // Reply done: the spacer is released.
    conversationCtx.loading = false;
    rerender(
      <SearchOverview type="conversational" term="q" options={options} renderMarkdown={renderMarkdown} />,
    );
    expect(spacer.style.height).toBe("0px");
    vi.unstubAllGlobals();
  });

  it("stretches the follow-ups block to the viewport bottom on expand", () => {
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    });
    conversationCtx.messages = firstAnswer();
    renderConversational();
    fireEvent.click(screen.getByRole("button", { name: /show more/i }));

    // jsdom: block top is 0, so the block spans the full (default 768px) viewport.
    const block = document.querySelector<HTMLElement>(".insytful-search-overview-followups")!;
    expect(block.style.minHeight).toBe(`${window.innerHeight}px`);
    vi.unstubAllGlobals();
  });

  it("surfaces conversation errors through the callout", () => {
    conversationCtx.messages = firstAnswer();
    conversationCtx.error = "boom";
    renderConversational({ error: { title: "Oops", text: "Try again" } });
    expect(screen.getByRole("alert").textContent).toContain("Oops");
  });
});

describe("Search.Overview type=keyword (default)", () => {
  it("never renders a follow-up input, even when expanded", () => {
    mockScrollHeight(1000);
    responseCtx.response = "Answer";
    render(<SearchOverview term="q" options={options} renderMarkdown={renderMarkdown} />);

    expect(responseCtx.ask).toHaveBeenCalledWith("q");
    expect(conversationCtx.ask).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: /show more/i }));
    expect(screen.queryByRole("textbox")).toBeNull();
    expect(document.querySelector("[data-conversational]")).toBeNull();
  });

  it("has no toggle at all for a short answer", () => {
    responseCtx.response = "Answer";
    render(<SearchOverview term="q" options={options} renderMarkdown={renderMarkdown} />);
    expect(screen.queryByRole("button")).toBeNull();
  });
});

describe("Search.Overview controlled expansion", () => {
  it("collapses when the host sets expanded=false, hiding the input and restoring Show more", () => {
    conversationCtx.messages = firstAnswer();
    const onExpandedChange = vi.fn();
    const { rerender } = renderConversational({ expanded: true, onExpandedChange });

    // Host says expanded: input shown, no toggle.
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.queryByRole("button", { name: /show (more|less)/i })).toBeNull();

    // Host collapses (e.g. switches to a results tab): input goes, Show more returns.
    rerender(
      <SearchOverview
        type="conversational"
        term="q"
        options={options}
        renderMarkdown={renderMarkdown}
        expanded={false}
        onExpandedChange={onExpandedChange}
      />,
    );
    expect(screen.queryByRole("textbox")).toBeNull();
    const btn = screen.getByRole("button", { name: /show more of the response/i });

    // Clicking Show more reports the change but does not expand on its own.
    fireEvent.click(btn);
    expect(onExpandedChange).toHaveBeenCalledWith(true);
    expect(screen.queryByRole("textbox")).toBeNull();
  });

  it("still calls onExpandedChange when uncontrolled", () => {
    conversationCtx.messages = firstAnswer();
    const onExpandedChange = vi.fn();
    renderConversational({ onExpandedChange });
    fireEvent.click(screen.getByRole("button", { name: /show more/i }));
    expect(onExpandedChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});

describe("Search.Overview host offset", () => {
  it("adds the measured data-insytful-offset height to the follow-up scroll", () => {
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    });
    vi.stubGlobal("scrollY", 0);
    window.scrollTo = vi.fn();
    const header = document.createElement("header");
    header.setAttribute("data-insytful-offset", "");
    Object.defineProperty(header, "offsetHeight", { configurable: true, get: () => 88 });
    document.body.appendChild(header);

    conversationCtx.messages = firstAnswer();
    const { rerender } = renderConversational();
    fireEvent.click(screen.getByRole("button", { name: /show more/i }));

    conversationCtx.messages = [...firstAnswer(), { role: "user", content: "Tell me more" }];
    conversationCtx.loading = true;
    rerender(
      <SearchOverview
        type="conversational"
        term="q"
        options={options}
        renderMarkdown={renderMarkdown}
      />,
    );

    // jsdom: message top is 0, so the target is simply -(header + 16px gap).
    expect(window.scrollTo).toHaveBeenCalledWith({ top: -(88 + 16), behavior: "smooth" });
    header.remove();
    vi.unstubAllGlobals();
  });
});

describe("Search.Overview collapsible", () => {
  it("collapsible=true clips a short answer behind Show more", () => {
    conversationCtx.messages = firstAnswer();
    renderConversational({ collapsible: true });
    const body = document.querySelector<HTMLElement>(".insytful-search-overview-body")!;
    expect(body.style.height).toBe("220px");
    expect(screen.getByRole("button", { name: /show more of the response/i })).toBeTruthy();
    expect(screen.queryByRole("textbox")).toBeNull();
  });

  it("collapsible=true does not clip while the answer is still generating", () => {
    conversationCtx.messages = [{ role: "user", content: "q" }];
    conversationCtx.loading = true;
    renderConversational({ collapsible: true });
    const body = document.querySelector<HTMLElement>(".insytful-search-overview-body")!;
    expect(body.style.height).toBe("auto");
    expect(screen.queryByRole("button", { name: /show more/i })).toBeNull();
  });

  it("collapsible=false never clips, even when the answer overflows", () => {
    mockScrollHeight(1000);
    conversationCtx.messages = firstAnswer();
    renderConversational({ collapsible: false });
    const body = document.querySelector<HTMLElement>(".insytful-search-overview-body")!;
    expect(body.style.height).toBe("auto");
    // Conversational still offers Show more as the way into the thread.
    expect(screen.getByRole("button", { name: /show more of the response/i })).toBeTruthy();
    expect(screen.queryByRole("textbox")).toBeNull();
    // Measurement is still reported for themes.
    expect(document.querySelector(".insytful-search-overview")!.hasAttribute("data-overflowing")).toBe(true);
  });

  it("re-measures when collapsing, so a late layout change is not missed", () => {
    // Short at the last response change...
    mockScrollHeight(100);
    conversationCtx.messages = firstAnswer();
    const { rerender } = renderConversational({ expanded: true });
    expect(document.querySelector(".insytful-search-overview")!.hasAttribute("data-overflowing")).toBe(false);

    // ...then taller by the time the host collapses it (e.g. webfont swap).
    mockScrollHeight(1000);
    rerender(
      <SearchOverview
        type="conversational"
        term="q"
        options={options}
        renderMarkdown={renderMarkdown}
        expanded={false}
      />,
    );
    expect(document.querySelector(".insytful-search-overview")!.hasAttribute("data-overflowing")).toBe(true);
    expect(screen.getByRole("button", { name: /show more of the response/i })).toBeTruthy();
  });
});

describe("Search.Overview feedback", () => {
  const mid = "5f0f4b0e-0000-4000-8000-000000000001";
  const sid = "s_testsession0001";
  const voteUrl = `https://api.example.com/sessions/cfg/${sid}/${mid}/vote`;

  /** First answer carrying the vote ids from its `done` frame. */
  const votableAnswer = (content = "First answer", answerMid = mid): AIMessage[] =>
    firstAnswer(content).map((m) => (m.role === "assistant" ? { ...m, mid: answerMid, sid } : m));

  /** Stubs the vote API with one status for every call. */
  const stubVoteApi = (status = 200) => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: status < 400 }), { status }));
    vi.stubGlobal("fetch", fetchMock);
    return fetchMock;
  };

  const status = () => document.querySelector(".insytful-search-overview-feedback-status")!.textContent;

  afterEach(() => vi.unstubAllGlobals());

  it("renders nothing without the prop", () => {
    conversationCtx.messages = votableAnswer();
    renderConversational();
    expect(document.querySelector(".insytful-search-overview-feedback")).toBeNull();
  });

  it("stays hidden while generating and on the collapsed teaser", () => {
    conversationCtx.messages = [{ role: "user", content: "q" }];
    conversationCtx.loading = true;
    const { unmount } = renderConversational({ feedback: {} });
    expect(document.querySelector(".insytful-search-overview-feedback")).toBeNull();
    unmount();

    conversationCtx.loading = false;
    conversationCtx.messages = votableAnswer();
    renderConversational({ feedback: {}, collapsible: true });
    expect(document.querySelector(".insytful-search-overview-feedback")).toBeNull();
    // No disclaimer either, so no empty footer box.
    expect(document.querySelector(".insytful-search-overview-footer")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /show more of the response/i }));
    expect(document.querySelector(".insytful-search-overview-feedback")).toBeTruthy();
  });

  it("shows the report link but no vote buttons when the answer has no mid", () => {
    conversationCtx.messages = firstAnswer();
    renderConversational({ feedback: { report: { text: "Report an error", href: "/report" } }, expanded: true });
    expect(screen.getByRole("link", { name: "Report an error" })).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Helpful" })).toBeNull();
  });

  it("PUTs the vote, then reports it and announces thanks", async () => {
    const fetchMock = stubVoteApi();
    conversationCtx.messages = votableAnswer("The answer");
    const onVote = vi.fn();
    renderConversational({ feedback: { onVote }, expanded: true });
    const helpful = screen.getByRole("button", { name: "Helpful" });
    expect(helpful.getAttribute("aria-pressed")).toBe("false");

    fireEvent.click(helpful);
    expect(helpful.getAttribute("aria-pressed")).toBe("true"); // optimistic
    await waitFor(() => expect(onVote).toHaveBeenCalledWith("helpful", { mid }));
    expect(fetchMock).toHaveBeenCalledWith(voteUrl, expect.objectContaining({
      method: "PUT",
      body: JSON.stringify({ rating: "helpful" }),
    }));
    expect(status()).toBe("Thanks for your feedback");
  });

  it("changes the vote with the other button and retracts it with the pressed one", async () => {
    const fetchMock = stubVoteApi();
    conversationCtx.messages = votableAnswer();
    const onVote = vi.fn();
    renderConversational({ feedback: { onVote }, expanded: true });
    const helpful = screen.getByRole("button", { name: "Helpful" });
    const unhelpful = screen.getByRole("button", { name: "Unhelpful" });

    fireEvent.click(helpful);
    await waitFor(() => expect(onVote).toHaveBeenCalledTimes(1));
    fireEvent.click(unhelpful);
    await waitFor(() => expect(onVote).toHaveBeenLastCalledWith("unhelpful", expect.anything()));
    expect(helpful.getAttribute("aria-pressed")).toBe("false");
    expect(unhelpful.getAttribute("aria-pressed")).toBe("true");

    fireEvent.click(unhelpful);
    await waitFor(() => expect(onVote).toHaveBeenLastCalledWith(null, expect.anything()));
    expect(fetchMock).toHaveBeenLastCalledWith(voteUrl, { method: "DELETE" });
    expect(unhelpful.getAttribute("aria-pressed")).toBe("false");
    expect(status()).toBe("Feedback removed");
  });

  it("ignores clicks while a vote is in flight", async () => {
    const fetchMock = stubVoteApi();
    conversationCtx.messages = votableAnswer();
    renderConversational({ feedback: {}, expanded: true });
    const helpful = screen.getByRole("button", { name: "Helpful" });

    helpful.focus();
    fireEvent.click(helpful);
    // aria-disabled, not disabled: a disabled button would drop keyboard focus.
    expect(helpful.getAttribute("aria-disabled")).toBe("true");
    expect(document.activeElement).toBe(helpful);
    fireEvent.click(screen.getByRole("button", { name: "Unhelpful" }));
    await waitFor(() => expect(helpful.getAttribute("aria-disabled")).toBe("false"));
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("rolls back and announces the failure on a network error", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => { throw new TypeError("Failed to fetch"); }));
    conversationCtx.messages = votableAnswer();
    renderConversational({ feedback: {}, expanded: true });

    fireEvent.click(screen.getByRole("button", { name: "Helpful" }));
    await waitFor(() => expect(status()).toBe("Couldn't send your feedback, please try again"));
    expect(screen.getByRole("button", { name: "Helpful" }).getAttribute("aria-pressed")).toBe("false");
  });

  it("keeps the vote when the host's onVote throws", async () => {
    stubVoteApi();
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    conversationCtx.messages = votableAnswer();
    renderConversational({ feedback: { onVote: () => { throw new Error("analytics down"); } }, expanded: true });

    fireEvent.click(screen.getByRole("button", { name: "Helpful" }));
    await waitFor(() => expect(status()).toBe("Thanks for your feedback"));
    expect(screen.getByRole("button", { name: "Helpful" }).getAttribute("aria-pressed")).toBe("true");
    expect(consoleError).toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it("rolls back and announces the failure on a retryable error", async () => {
    stubVoteApi(429);
    conversationCtx.messages = votableAnswer();
    const onVote = vi.fn();
    renderConversational({ feedback: { onVote }, expanded: true });

    fireEvent.click(screen.getByRole("button", { name: "Helpful" }));
    await waitFor(() => expect(status()).toBe("Couldn't send your feedback, please try again"));
    expect(screen.getByRole("button", { name: "Helpful" }).getAttribute("aria-pressed")).toBe("false");
    expect(onVote).not.toHaveBeenCalled();
  });

  it("hides the vote buttons when the answer can't be voted on (404)", async () => {
    stubVoteApi(404);
    conversationCtx.messages = votableAnswer();
    renderConversational({ feedback: {}, expanded: true });

    fireEvent.click(screen.getByRole("button", { name: "Helpful" }));
    await waitFor(() => expect(screen.queryByRole("button", { name: "Helpful" })).toBeNull());
    expect(status()).toBe("Feedback isn't available for this answer");
  });

  it("moves focus to the report link when the focused vote button is removed", async () => {
    stubVoteApi(404);
    conversationCtx.messages = votableAnswer();
    renderConversational({ feedback: { report: { text: "Report an error", href: "/report" } }, expanded: true });
    const helpful = screen.getByRole("button", { name: "Helpful" });

    helpful.focus();
    fireEvent.click(helpful);
    await waitFor(() => expect(screen.queryByRole("button", { name: "Helpful" })).toBeNull());
    expect(document.activeElement).toBe(screen.getByRole("link", { name: "Report an error" }));
  });

  it("moves focus to the row when there's no report link", async () => {
    stubVoteApi(404);
    conversationCtx.messages = votableAnswer();
    renderConversational({ feedback: {}, expanded: true });
    const helpful = screen.getByRole("button", { name: "Helpful" });

    helpful.focus();
    fireEvent.click(helpful);
    await waitFor(() => expect(screen.queryByRole("button", { name: "Helpful" })).toBeNull());
    expect(document.activeElement).toBe(document.querySelector(".insytful-search-overview-feedback"));
  });

  it("clears the vote when a new answer arrives", async () => {
    stubVoteApi();
    conversationCtx.messages = votableAnswer("First");
    const { rerender } = renderConversational({ feedback: {}, expanded: true });
    fireEvent.click(screen.getByRole("button", { name: "Unhelpful" }));
    await waitFor(() => expect(status()).toBe("Thanks for your feedback"));

    conversationCtx.messages = votableAnswer("Second", "5f0f4b0e-0000-4000-8000-000000000002");
    rerender(
      <SearchOverview type="conversational" term="q" options={options} renderMarkdown={renderMarkdown} feedback={{}} expanded />,
    );
    expect(screen.getByRole("button", { name: "Unhelpful" }).getAttribute("aria-pressed")).toBe("false");
    expect(status()).toBe("");
  });

  it("renders the report link, marking a new-tab link for screen readers", async () => {
    stubVoteApi();
    conversationCtx.messages = votableAnswer();
    renderConversational({
      feedback: { report: { text: "Report an error", href: "/report", newTab: true }, helpful: "Yes", unhelpful: "No", thanks: "Cheers" },
      expanded: true,
    });
    const link = screen.getByRole("link", { name: /report an error \(opens in a new tab\)/i });
    expect(link.getAttribute("href")).toBe("/report");
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toContain("noopener");
    fireEvent.click(screen.getByRole("button", { name: "Yes" }));
    await waitFor(() => expect(status()).toBe("Cheers"));
  });
});
