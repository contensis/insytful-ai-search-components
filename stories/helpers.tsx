import React, { useEffect, useLayoutEffect } from "react";
import ReactMarkdown from "react-markdown";
import { mockKeywordResponse, mockResults } from "../lib/utilities/mock-keyword-search";

export const options = { config: "demo", apiUrl: "https://api.insytful.com/v1" };
export const renderMarkdown = (md: string) => <ReactMarkdown>{md}</ReactMarkdown>;
export const useFailingFetch = (
  status = 500,
  message = "Search service unavailable",
) => {
  useEffect(() => {
    const original = window.fetch;
    window.fetch = async () =>
      new Response(JSON.stringify({ message }), {
        status,
        headers: { "Content-Type": "application/json" },
      });
    return () => {
      window.fetch = original;
    };
  }, [status, message]);
};

/**
 * Every request stays pending, so the component sits in its loading state.
 * A layout effect so it's in place before the component's first request
 * (fired from a passive effect); a request that's aborted still rejects.
 */
export const usePendingFetch = () => {
  useLayoutEffect(() => {
    const original = window.fetch;
    window.fetch = (_input, init) =>
      new Promise<Response>((_resolve, reject) => {
        init?.signal?.addEventListener("abort", () =>
          reject(new DOMException("Aborted", "AbortError")),
        );
      });
    return () => {
      window.fetch = original;
    };
  }, []);
};

export type KeywordMockMode =
  /** `count` is the total across pages, served at the requested page size. */
  | { kind: "results"; count: number }
  | { kind: "error"; code: string; message: string };

/**
 * Answers `POST …/search` with a chosen outcome, for the states dev mode
 * can't reach (no results, API errors). Dev mode itself always returns
 * results. A layout effect so it's in place before the component's first
 * request.
 */
export function useMockKeywordFetch(mode: KeywordMockMode) {
  useLayoutEffect(() => {
    const original = window.fetch;
    window.fetch = (input, init) => {
      const url = typeof input === "string" ? input : input.toString();
      if (!url.startsWith(options.apiUrl) || !url.endsWith("/search")) {
        return original(input, init);
      }
      const { q = "", page = 1, pageSize = 10 } = JSON.parse(String(init?.body ?? "{}"));
      return mode.kind === "results"
        ? mockKeywordResponse(mockResults(q, mode.count, page, pageSize), { signal: init?.signal })
        : mockKeywordResponse(
            { ok: false, code: mode.code, message: mode.message },
            { status: 503, signal: init?.signal },
          );
    };
    return () => {
      window.fetch = original;
    };
  }, [mode]);
}
