import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { cleanup, render } from "@testing-library/react";
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

const options = { config: "cfg", apiUrl: "https://api.example.com" };
const renderMarkdown = (md: string) => <p>{md}</p>;

/** jsdom has no layout; control whether the body counts as overflowing. */
function mockScrollHeight(px: number) {
  Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
    configurable: true,
    get: () => px,
  });
}

const renderOverview = (props: Partial<React.ComponentProps<typeof SearchOverview>> = {}) =>
  render(
    <SearchOverview
      type="conversational"
      term="q"
      options={options}
      renderMarkdown={renderMarkdown}
      {...props}
    />,
  );

const root = (c: HTMLElement) => c.querySelector<HTMLElement>(".insytful-search-overview")!;
const body = (c: HTMLElement) => c.querySelector<HTMLElement>(".insytful-search-overview-body")!;
const toggle = (c: HTMLElement) => c.querySelector<HTMLElement>(".insytful-search-overview-show-more");

beforeEach(() => {
  responseCtx.response = null;
  responseCtx.loading = false;
  responseCtx.error = null;
  conversationCtx.messages = [];
  conversationCtx.loading = false;
  conversationCtx.error = null;
  mockScrollHeight(100);
});
afterEach(cleanup);

describe("Search.Overview reserve", () => {
  it("holds the teaser height, with no toggle, while loading", () => {
    conversationCtx.loading = true;
    const { container } = renderOverview({ reserve: true });

    expect(root(container).hasAttribute("data-loading")).toBe(true);
    expect(body(container).style.minHeight).toBe("220px");
    expect(toggle(container)).toBeNull();
  });

  it("marks the root while the first answer streams", () => {
    conversationCtx.loading = true;
    conversationCtx.messages = [
      { role: "user", content: "q" },
      { role: "assistant", content: "Partial" },
    ];
    const { container } = renderOverview({ reserve: true });

    expect(root(container).hasAttribute("data-streaming")).toBe(true);
    expect(root(container).hasAttribute("data-loading")).toBe(false);
    expect(body(container).style.minHeight).toBe("220px");
  });

  it("shows the toggle once there is an answer, keeping the reserved height", () => {
    conversationCtx.messages = [
      { role: "user", content: "q" },
      { role: "assistant", content: "Short answer" },
    ];
    const { container } = renderOverview({ reserve: true });

    expect(toggle(container)).not.toBeNull();
    expect(body(container).style.minHeight).toBe("220px");
  });

  it("doesn't reserve space around an error", () => {
    conversationCtx.error = "boom";
    const { container } = renderOverview({ reserve: true });

    expect(body(container).style.minHeight).toBe("");
    expect(toggle(container)).toBeNull();
  });

  it("reserves space by default", () => {
    conversationCtx.loading = true;
    const { container } = renderOverview();

    expect(body(container).style.minHeight).toBe("220px");
    expect(toggle(container)).toBeNull();
  });

  it("sizes to its content with reserve={false}", () => {
    conversationCtx.loading = true;
    const { container } = renderOverview({ reserve: false });

    expect(body(container).style.minHeight).toBe("");
    expect(toggle(container)).toBeNull();
  });
});

describe("Search.Overview reserve skeleton", () => {
  const items = (c: HTMLElement) => c.querySelectorAll(".insytful-search-skeleton-item").length;
  const text = (c: HTMLElement) => c.querySelector(".insytful-search-skeleton-text");

  it("fills the reserved box with an answer-shaped skeleton and no visible message", () => {
    conversationCtx.loading = true;
    const { container } = renderOverview();

    const skeleton = container.querySelector(".insytful-search-skeleton-content")!;
    expect(skeleton.querySelector(".insytful-search-skeleton-intro")).not.toBeNull();
    expect(skeleton.querySelector(".insytful-search-skeleton-divider")).not.toBeNull();
    expect(items(container)).toBe(2);
    expect(skeleton.getAttribute("aria-hidden")).toBe("true");
    expect(text(container)).toBeNull();
    // Loading is still announced through the status region.
    expect(container.querySelector('[role="status"]')?.textContent).toMatch(/generating response/i);
  });

  it("keeps the three-bar skeleton and its message with reserve={false}", () => {
    conversationCtx.loading = true;
    const { container } = renderOverview({ reserve: false });

    expect(container.querySelector(".insytful-search-skeleton-fill")).toBeNull();
    expect(container.querySelectorAll(".insytful-search-skeleton-bar").length).toBe(3);
    expect(text(container)).not.toBeNull();
  });
});

describe("Search.Overview reserve height", () => {
  it("a number sets the teaser height, threshold and CSS variable", () => {
    mockScrollHeight(300);
    responseCtx.response = "Long answer";
    const { container } = renderOverview({ type: "keyword", reserve: 250 });

    expect(root(container).style.getPropertyValue("--insytful-overview-collapsed-height")).toBe("250px");
    expect(root(container).hasAttribute("data-overflowing")).toBe(true);
    expect(body(container).style.height).toBe("250px");
    expect(body(container).style.minHeight).toBe("250px");
  });

  it("defaults to 220px", () => {
    mockScrollHeight(150);
    responseCtx.response = "Answer";
    const { container } = renderOverview({ type: "keyword" });

    expect(root(container).style.getPropertyValue("--insytful-overview-collapsed-height")).toBe("220px");
    expect(root(container).hasAttribute("data-overflowing")).toBe(false);
  });
});
