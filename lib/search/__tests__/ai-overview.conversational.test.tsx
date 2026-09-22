import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import type { RAGMessage } from "../../api";

// Drive both variants through controllable RAG contexts instead of the network.
const responseCtx = {
  response: null as string | null,
  ctas: [],
  loading: false,
  elapsed: 0,
  error: null as string | null,
  ask: vi.fn(),
};

const conversationCtx = {
  messages: [] as RAGMessage[],
  loading: false,
  elapsed: 0,
  error: null as string | null,
  ask: vi.fn(),
};

vi.mock("../../api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../api")>();
  return {
    ...actual,
    RAGProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    useRAGResponseContext: () => responseCtx,
    useRAGConversationContext: () => conversationCtx,
  };
});

import { SearchOverview } from "../ai-overview";

const options = { config: "cfg", baseUrl: "https://api.example.com" };
const renderMarkdown = (md: string) => <p>{md}</p>;

/** A thread with the search term and its first answer. */
const firstAnswer = (content = "First answer"): RAGMessage[] => [
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
    expect(body.style.height).toBe("400px");
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
