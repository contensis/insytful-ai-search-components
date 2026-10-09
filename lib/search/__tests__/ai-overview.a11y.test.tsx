import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";

// Drive the Overview through a controllable AI context instead of the network.
const aiCtx = {
  response: null as string | null,
  ctas: [],
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
    useAIResponseContext: () => aiCtx,
  };
});

import { SearchOverview } from "../ai-overview";

const options = { config: "cfg", apiUrl: "https://api.example.com" };
const renderMarkdown = (md: string) => (
  <p>
    {md} <a href="/a">first</a> <a href="/b">second</a>
  </p>
);

/** jsdom has no layout; pretend the body is taller than the collapsed height. */
function mockScrollHeight(px: number) {
  Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
    configurable: true,
    get: () => px,
  });
}

beforeEach(() => {
  aiCtx.response = null;
  aiCtx.loading = false;
  aiCtx.error = null;
  mockScrollHeight(1000);
});
afterEach(cleanup);

describe("Search.Overview accessibility", () => {
  it("keeps the toggle mounted, wires aria-expanded/aria-controls, and flips to Show less", () => {
    aiCtx.response = "Answer";
    render(<SearchOverview term="q" options={options} renderMarkdown={renderMarkdown} />);

    const btn = screen.getByRole("button", { name: /show more of the response/i });
    const bodyId = btn.getAttribute("aria-controls");
    expect(bodyId).toBeTruthy();
    expect(document.getElementById(bodyId!)).not.toBeNull();
    expect(btn.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(btn);
    // Same element, still focusable, now reads "Show less".
    expect(screen.getByRole("button", { name: /show less of the response/i })).toBe(btn);
    expect(btn.getAttribute("aria-expanded")).toBe("true");
    expect(document.getElementById(bodyId!)?.style.overflow).toBe("visible");

    fireEvent.click(btn);
    expect(btn.getAttribute("aria-expanded")).toBe("false");
  });

  it("expands when keyboard focus lands inside the clipped body", () => {
    aiCtx.response = "Answer";
    render(<SearchOverview term="q" options={options} renderMarkdown={renderMarkdown} />);

    const btn = screen.getByRole("button", { name: /show more/i });
    const body = document.getElementById(btn.getAttribute("aria-controls")!)!;
    expect(body.style.overflow).toBe("hidden");

    act(() => {
      screen.getByRole("link", { name: "second" }).focus();
    });
    expect(body.style.overflow).toBe("visible");
    expect(btn.getAttribute("aria-expanded")).toBe("true");
  });

  it("announces loading and then a single 'ready' via role=status", () => {
    aiCtx.loading = true;
    const { rerender } = render(
      <SearchOverview
        term="q"
        options={options}
        renderMarkdown={renderMarkdown}
        searching={[{ from: 0, to: "Infinity", text: "Thinking..." }]}
      />,
    );
    const status = screen.getByRole("status");
    expect(status.textContent).toBe("Thinking...");

    aiCtx.loading = false;
    aiCtx.response = "Answer";
    rerender(<SearchOverview term="q" options={options} renderMarkdown={renderMarkdown} />);
    expect(status.textContent).toBe("AI Overview ready");

    // Further re-renders with the same finished response don't re-announce.
    aiCtx.response = "Answer (edited)";
    rerender(<SearchOverview term="q" options={options} renderMarkdown={renderMarkdown} />);
    expect(status.textContent).toBe("AI Overview ready");
  });

  it("does not announce errors via status (the callout's role=alert covers them)", () => {
    aiCtx.error = "boom";
    render(<SearchOverview term="q" options={options} renderMarkdown={renderMarkdown} />);
    expect(screen.getByRole("status").textContent).toBe("");
    expect(screen.getByRole("alert")).toBeTruthy();
  });
});
