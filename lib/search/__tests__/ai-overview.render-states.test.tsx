import { afterEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { SearchOverview } from "../ai-overview";

//
// `renderError` and `renderEmpty` replace the Overview's error and empty
// states, as on InsytfulSearch.Keyword.
//
const options = { config: "c", baseUrl: "https://api.example.com" };
const renderMarkdown = (md: string) => <p>{md}</p>;

/** An SSE stream of the given content chunks, then `done`. */
function sseResponse(chunks: string[]) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      for (const content of chunks) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
      }
      controller.enqueue(encoder.encode("event: done\ndata: {}\n\n"));
      controller.close();
    },
  });
  return new Response(stream, { status: 200, headers: { "Content-Type": "text/event-stream" } });
}

const failedResponse = () =>
  new Response(JSON.stringify({ message: "Boom" }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });

const stubFetch = (respond: () => Response | Promise<Response>) =>
  vi.stubGlobal("fetch", vi.fn(async () => respond()));

const root = (container: HTMLElement) =>
  container.querySelector(".insytful-search-overview") as HTMLElement;

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  localStorage.clear();
});

describe.each(["keyword", "conversational"] as const)("Search.Overview (%s) render states", (type) => {
  it("renders renderEmpty when the answer finishes with no text", async () => {
    stubFetch(() => sseResponse([]));
    const { container } = render(
      <SearchOverview
        type={type}
        term="q"
        options={options}
        renderMarkdown={renderMarkdown}
        renderEmpty={() => <p>No overview</p>}
        disclaimer="Small print"
      />,
    );

    await waitFor(() => expect(screen.getByText("No overview")).toBeTruthy());
    expect(root(container).hasAttribute("data-empty")).toBe(true);
    // An empty answer has no footer and doesn't hold the teaser's space.
    expect(screen.queryByText("Small print")).toBeNull();
    const body = container.querySelector(".insytful-search-overview-body") as HTMLElement;
    expect(body.style.minHeight).toBe("");
  });

  it("doesn't render renderEmpty before the request finishes", async () => {
    // Never resolves: the overview stays loading.
    stubFetch(() => new Promise<Response>(() => {}));
    // A spy, not a DOM check: the first commit, before the ask effect runs,
    // is the one that could flash, and render() has flushed past it.
    const renderEmpty = vi.fn(() => <p>No overview</p>);
    const { container } = render(
      <SearchOverview
        type={type}
        term="q"
        options={options}
        renderMarkdown={renderMarkdown}
        renderEmpty={renderEmpty}
      />,
    );

    await act(async () => {});
    expect(renderEmpty).not.toHaveBeenCalled();
    expect(root(container).hasAttribute("data-empty")).toBe(false);
  });

  it("doesn't render renderEmpty when there's an answer", async () => {
    stubFetch(() => sseResponse(["Answer."]));
    const { container } = render(
      <SearchOverview
        type={type}
        term="q"
        options={options}
        renderMarkdown={renderMarkdown}
        renderEmpty={() => <p>No overview</p>}
      />,
    );

    await waitFor(() => expect(screen.getByText("Answer.")).toBeTruthy());
    expect(screen.queryByText("No overview")).toBeNull();
    expect(root(container).hasAttribute("data-empty")).toBe(false);
  });

  it("renders renderError with the error message instead of the callout", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    stubFetch(failedResponse);
    const renderError = vi.fn((error: string) => <p>Custom: {error}</p>);
    const { container } = render(
      <SearchOverview
        type={type}
        term="q"
        options={options}
        renderMarkdown={renderMarkdown}
        renderError={renderError}
        renderEmpty={() => <p>No overview</p>}
      />,
    );

    await waitFor(() => expect(screen.getByText("Custom: Boom")).toBeTruthy());
    expect(renderError).toHaveBeenLastCalledWith("Boom");
    expect(container.querySelector(".insytful-search-error-callout-inner")).toBeNull();
    // An error isn't also empty.
    expect(screen.queryByText("No overview")).toBeNull();
    expect(root(container).hasAttribute("data-empty")).toBe(false);
  });

  it("shows the default callout with a general message, not the API's", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    stubFetch(failedResponse);
    render(<SearchOverview type={type} term="q" options={options} renderMarkdown={renderMarkdown} />);

    await waitFor(() => expect(screen.getByRole("alert")).toBeTruthy());
    expect(screen.getByText("Something went wrong")).toBeTruthy();
    expect(screen.queryByText("Boom")).toBeNull();
  });
});
