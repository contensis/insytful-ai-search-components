import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useKeywordSearch } from "../use-keyword-search";
import { SESSION_STORAGE_KEY } from "../../shared/session";
import { mockResults } from "../../utilities/mock-keyword-search";
import { requestBody, stubFetch } from "./sse-test-helpers";

const json = (body: unknown, init: ResponseInit = {}) =>
  new Response(JSON.stringify(body), {
    status: 200,
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
  });

const renderSearch = () =>
  renderHook(() => useKeywordSearch("my-config", "https://api.example.com"));

describe("useKeywordSearch", () => {
  beforeEach(() => {
    localStorage.clear();
    // Expected failures log; keep the output clean.
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("POSTs the config and term to {baseUrl}/search", async () => {
    const fetchMock = stubFetch(async () => json(mockResults("q", 1)));
    const { result } = renderSearch();

    await act(async () => {
      await result.current.search("q");
    });

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.example.com/search");
    expect(init?.method).toBe("POST");
    expect(requestBody(fetchMock)).toEqual({ config: "my-config", q: "q", page: 1, pageSize: 10 });
  });

  it("sets results and pagination on success", async () => {
    const data = mockResults("q", 3);
    stubFetch(async () => json(data));
    const { result } = renderSearch();

    await act(async () => {
      await result.current.search("q");
    });

    expect(result.current.results).toEqual(data.ok && data.results);
    expect(result.current.pagination).toEqual(data.ok && data.pagination);
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it("keeps the API's error code and message on ok:false", async () => {
    stubFetch(async () =>
      json({ ok: false, code: "index_not_built", message: "Not built" }, { status: 503 }),
    );
    const { result } = renderSearch();

    await act(async () => {
      await result.current.search("q");
    });

    expect(result.current.error).toEqual({ code: "index_not_built", message: "Not built" });
    expect(result.current.results).toEqual([]);
    expect(result.current.pagination).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it("reports a body that isn't JSON as network_error", async () => {
    stubFetch(async () => new Response("<html>Bad gateway</html>", { status: 502 }));
    const { result } = renderSearch();

    await act(async () => {
      await result.current.search("q");
    });

    expect(result.current.error).toEqual({
      code: "network_error",
      message: "Unexpected response (502)",
    });
    expect(result.current.loading).toBe(false);
  });

  it("reports a failed fetch as network_error", async () => {
    stubFetch(async () => {
      throw new TypeError("Failed to fetch");
    });
    const { result } = renderSearch();

    await act(async () => {
      await result.current.search("q");
    });

    expect(result.current.error).toEqual({ code: "network_error", message: "Failed to fetch" });
  });

  it("round-trips the session id via localStorage and the X-Session-Id header", async () => {
    localStorage.setItem(SESSION_STORAGE_KEY, "s_old");
    const fetchMock = stubFetch(async () =>
      json(mockResults("q", 1), { headers: { "X-Session-Id": "s_new" } }),
    );
    const { result } = renderSearch();

    await act(async () => {
      await result.current.search("q");
    });

    const headers = fetchMock.mock.calls[0][1]!.headers as Headers;
    expect(headers.get("X-Session-Id")).toBe("s_old");
    expect(localStorage.getItem(SESSION_STORAGE_KEY)).toBe("s_new");
  });

  it("ignores a superseded search: its late response can't overwrite the newer one", async () => {
    let releaseFirst!: () => void;
    const firstResponse = new Promise<Response>((resolve) => {
      releaseFirst = () => resolve(json(mockResults("old", 2)));
    });
    // The first fetch ignores its signal, so only the hook's guard stops it.
    stubFetch(
      vi
        .fn()
        .mockImplementationOnce(() => firstResponse)
        .mockImplementationOnce(async () => json(mockResults("new", 1))),
    );
    const { result } = renderSearch();

    let first!: Promise<void>;
    await act(async () => {
      first = result.current.search("old");
      await result.current.search("new");
    });
    await act(async () => {
      releaseFirst();
      await first;
    });

    expect(result.current.results).toHaveLength(1);
    expect(result.current.results[0].card.snippet).toContain("new");
    expect(result.current.error).toBeNull();
    expect(console.error).not.toHaveBeenCalled();
  });
});
