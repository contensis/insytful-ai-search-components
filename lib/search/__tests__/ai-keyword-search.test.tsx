import { afterEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SearchConfigProvider } from "../../api";
import { KeywordSearch } from "../keyword-search";
import { mockResults } from "../../utilities/mock-keyword-search";

const provider = { config: "from-provider", apiUrl: "https://provider.example.com" };
const prop = { config: "from-prop", apiUrl: "https://prop.example.com" };

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

function stubFetch(body: unknown, status = 200) {
  const fetchMock = vi.fn(async () => json(body, status));
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

/** The URL and the body's `config` of the first request. */
function firstRequest(fetchMock: ReturnType<typeof stubFetch>) {
  const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
  return { url, config: JSON.parse(String(init.body)).config };
}

const renderHit = (hit: { card: { title: string } }) => <span>{hit.card.title}</span>;

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  localStorage.clear();
});

describe("InsytfulSearch.Keyword", () => {
  it("renders each hit through renderHit, in a list", async () => {
    stubFetch(mockResults("q", 3));
    render(<KeywordSearch term="q" options={prop} renderHit={renderHit} />);

    await waitFor(() => expect(screen.getAllByRole("listitem")).toHaveLength(3));
    expect(screen.getByRole("list").tagName).toBe("OL");
    expect(screen.getByText("Undergraduate admissions")).toBeTruthy();
  });

  it("renders the default result card when renderHit is omitted", async () => {
    stubFetch(mockResults("admissions", 1));
    const { container } = render(<KeywordSearch term="admissions" options={prop} />);

    const link = await screen.findByRole("link", { name: "Undergraduate admissions" });
    expect(link.getAttribute("href")).toBe("https://www.example.com/undergraduate-admissions");
    const card = container.querySelector(".insytful-search-result-card")!;
    expect(card.querySelector("mark")?.textContent).toBe("admissions");
    expect(card.querySelector(".insytful-search-result-card-date")?.textContent).toBe(
      "28 September 2026",
    );
  });

  it("falls back to the description, escaped, when a hit has no snippet", async () => {
    const data = mockResults("q", 1);
    if (data.ok) {
      data.results[0].card.snippet = null;
      data.results[0].card.description = "Fees & <funding>";
    }
    stubFetch(data);
    const { container } = render(<KeywordSearch term="q" options={prop} />);

    await waitFor(() =>
      expect(container.querySelector(".insytful-search-result-card-snippet")?.textContent).toBe(
        "Fees & <funding>",
      ),
    );
  });

  it("uses the provider's config when options is omitted", async () => {
    const fetchMock = stubFetch(mockResults("q", 1));
    render(
      <SearchConfigProvider {...provider}>
        <KeywordSearch term="q" renderHit={renderHit} />
      </SearchConfigProvider>,
    );

    await waitFor(() => expect(fetchMock).toHaveBeenCalled());
    expect(firstRequest(fetchMock)).toEqual({
      url: `${provider.apiUrl}/search`,
      config: provider.config,
    });
  });

  it("prefers options over the provider", async () => {
    const fetchMock = stubFetch(mockResults("q", 1));
    render(
      <SearchConfigProvider {...provider}>
        <KeywordSearch term="q" options={prop} renderHit={renderHit} />
      </SearchConfigProvider>,
    );

    await waitFor(() => expect(fetchMock).toHaveBeenCalled());
    expect(firstRequest(fetchMock)).toEqual({ url: `${prop.apiUrl}/search`, config: prop.config });
  });

  it("doesn't search for an empty term", () => {
    const fetchMock = stubFetch(mockResults("q", 1));
    render(<KeywordSearch term="" options={prop} renderHit={renderHit} />);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("shows the default skeleton while loading", () => {
    vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));
    const { container } = render(<KeywordSearch term="q" options={prop} renderHit={renderHit} />);

    const root = container.querySelector(".insytful-search-keyword")!;
    expect(root.hasAttribute("data-loading")).toBe(true);
    expect(root.getAttribute("aria-busy")).toBe("true");
    expect(container.querySelectorAll(".insytful-search-skeleton-card")).toHaveLength(3);
  });

  it("renders renderEmpty after a search with no hits", async () => {
    stubFetch(mockResults("q", 0));
    const { container } = render(
      <KeywordSearch
        term="q"
        options={prop}
        renderHit={renderHit}
        renderEmpty={() => <p>Nothing found</p>}
      />,
    );

    await waitFor(() => expect(screen.getByText("Nothing found")).toBeTruthy());
    expect(container.querySelector("[data-empty]")).toBeTruthy();
    expect(screen.queryByRole("list")).toBeNull();
  });

  it("passes the error to renderError and sets data-error to its code", async () => {
    stubFetch({ ok: false, code: "index_not_built", message: "Not built" }, 503);
    const { container } = render(
      <KeywordSearch
        term="q"
        options={prop}
        renderHit={renderHit}
        renderError={(error) => <p>{error.code}</p>}
      />,
    );

    await waitFor(() => expect(screen.getByText("index_not_built")).toBeTruthy());
    expect(container.querySelector(".insytful-search-keyword")?.getAttribute("data-error")).toBe(
      "index_not_built",
    );
  });

  it("shows the error callout when renderError is omitted", async () => {
    stubFetch({ ok: false, code: "index_not_built", message: "Not built" }, 503);
    const { container } = render(<KeywordSearch term="q" options={prop} renderHit={renderHit} />);

    const alert = await screen.findByRole("alert");
    expect(alert.classList.contains("insytful-search-error-callout-inner")).toBe(true);
    expect(alert.textContent).toContain("Something went wrong");
    expect(alert.textContent).not.toContain("Not built");
    expect(container.querySelector("[data-error]")?.getAttribute("data-error")).toBe(
      "index_not_built",
    );
  });

  it("shows no pagination for a single page of results", async () => {
    stubFetch(mockResults("q", 3));
    render(<KeywordSearch term="q" options={prop} renderHit={renderHit} />);

    await waitFor(() => expect(screen.getAllByRole("listitem")).toHaveLength(3));
    expect(screen.queryByRole("navigation")).toBeNull();
  });

  it("pages: requests the chosen page, then focuses the results", async () => {
    const fetchMock = vi.fn(async (_url: string, init: RequestInit) => {
      const { page } = JSON.parse(String(init.body));
      return json(mockResults("q", 25, page, 10));
    });
    vi.stubGlobal("fetch", fetchMock);
    const { container } = render(<KeywordSearch term="q" options={prop} renderHit={renderHit} />);

    const nav = await screen.findByRole("navigation", { name: "Pagination" });
    expect(nav.querySelector("[aria-current=page]")?.textContent).toBe("1");
    expect(screen.queryByText("Previous")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Page 2" }));

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Page 2" }).getAttribute("aria-current")).toBe(
        "page",
      ),
    );
    expect(JSON.parse(String(fetchMock.mock.calls[1][1].body)).page).toBe(2);
    expect(screen.getByRole("button", { name: "Previous page" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Next page" })).toBeTruthy();
    expect(document.activeElement).toBe(container.querySelector(".insytful-search-keyword"));
  });

  it("uses hLevel for the default card's title and skips a date that doesn't parse", async () => {
    const data = mockResults("q", 1);
    if (data.ok) data.results[0].card.published = "not a date";
    stubFetch(data);
    const { container } = render(<KeywordSearch term="q" options={prop} hLevel={2} />);

    await screen.findByRole("heading", { level: 2, name: "Undergraduate admissions" });
    expect(container.querySelector(".insytful-search-result-card-date")).toBeNull();
  });

  it("isDevMode answers from the mock, without calling the real fetch", async () => {
    const fetchMock = stubFetch({});
    render(<KeywordSearch term="q" options={prop} isDevMode renderHit={renderHit} />);

    // The first of 3 pages: 10 of 25 results.
    await waitFor(
      () => expect(document.querySelectorAll(".insytful-search-keyword-item")).toHaveLength(10),
      { timeout: 2000 },
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
