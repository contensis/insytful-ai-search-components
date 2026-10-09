import { afterEach, describe, expect, it, vi } from "vitest";
import React, { StrictMode } from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { SearchConfigProvider } from "../../api";
import { SearchOverview } from "../ai-overview";
import { SearchRoot } from "../search-root";
import { useSearchContext } from "../context";

//
// Overview and Root take their config from `InsytfulSearch.Provider` when
// `options` is omitted, and `options` wins when both are present.
//
const provider = { config: "from-provider", apiUrl: "https://provider.example.com" };
const prop = { config: "from-prop", apiUrl: "https://prop.example.com" };

function sseResponse(content: string) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
      controller.enqueue(encoder.encode("event: done\ndata: {}\n\n"));
      controller.close();
    },
  });
  return new Response(stream, { status: 200, headers: { "Content-Type": "text/event-stream" } });
}

function stubFetch() {
  const fetchMock = vi.fn(async () => sseResponse("Answer."));
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

/** The URL and the body's `config` of the first request. */
function firstRequest(fetchMock: ReturnType<typeof stubFetch>) {
  const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
  return { url, config: JSON.parse(String(init.body)).config };
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  localStorage.clear();
});

describe("Search.Overview config resolution", () => {
  it.each(["keyword", "conversational"] as const)(
    "%s: uses the provider's config when options is omitted",
    async (type) => {
      const fetchMock = stubFetch();
      render(
        <SearchConfigProvider {...provider}>
          <SearchOverview type={type} term="q" renderMarkdown={(md) => <p>{md}</p>} />
        </SearchConfigProvider>,
      );

      await waitFor(() => expect(screen.getByText("Answer.")).toBeTruthy());
      expect(firstRequest(fetchMock)).toEqual({
        url: `${provider.apiUrl}/query-collection`,
        config: provider.config,
      });
    },
  );

  it("prefers options over the provider", async () => {
    const fetchMock = stubFetch();
    render(
      <SearchConfigProvider {...provider}>
        <SearchOverview term="q" options={prop} renderMarkdown={(md) => <p>{md}</p>} />
      </SearchConfigProvider>,
    );

    await waitFor(() => expect(fetchMock).toHaveBeenCalled());
    expect(firstRequest(fetchMock)).toEqual({
      url: `${prop.apiUrl}/query-collection`,
      config: prop.config,
    });
  });

  // StrictMode runs the mount effect twice; the cancelled first ask leaves its
  // user message in the thread, so the answer isn't at messages[1].
  it.each(["keyword", "conversational"] as const)(
    "%s: shows the answer, not the search term, under StrictMode",
    async (type) => {
      stubFetch();
      const { container } = render(
        <StrictMode>
          <SearchOverview type={type} term="my term" options={prop} renderMarkdown={(md) => <p>{md}</p>} />
        </StrictMode>,
      );

      await waitFor(() => expect(screen.getByText("Answer.")).toBeTruthy());
      const body = container.querySelector(".insytful-search-overview-content");
      expect(body?.textContent).toBe("Answer.");
    },
  );

  it("throws when there are no options and no provider", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<SearchOverview term="q" />)).toThrow(
      "Pass `options` or wrap in <InsytfulSearch.Provider>",
    );
  });
});

describe("Search.Root config resolution", () => {
  function Options() {
    const { options } = useSearchContext("Options");
    return <output>{`${options.config} ${options.apiUrl}`}</output>;
  }

  it("uses the provider's config when options is omitted", () => {
    render(
      <SearchConfigProvider {...provider}>
        <SearchRoot>
          <Options />
        </SearchRoot>
      </SearchConfigProvider>,
    );
    expect(screen.getByRole("status").textContent).toBe(`${provider.config} ${provider.apiUrl}`);
  });

  it("prefers options over the provider", () => {
    render(
      <SearchConfigProvider {...provider}>
        <SearchRoot options={prop}>
          <Options />
        </SearchRoot>
      </SearchConfigProvider>,
    );
    expect(screen.getByRole("status").textContent).toBe(`${prop.config} ${prop.apiUrl}`);
  });
});
