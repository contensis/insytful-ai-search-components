import { useCallback, useEffect, useRef, useState } from "react";
import { SESSION_STORAGE_KEY } from "../shared/session";

export type KeywordResultCard = {
  title: string; // never empty
  description: string; // plain text
  snippet: string | null; // HTML with <mark> only; null: show description
  image: string | null; // absolute URL
  imageSource: string | null; // e.g. "og:image"
  siteName: string | null;
  published: string | null; // ISO date
};
export type KeywordHighlights = {
  title?: string[];
  heading?: string[];
  description?: string[];
  content?: string[];
};

export type KeywordSearchHit = {
  id: string;
  url: string;
  canonicalUrl: string | null;
  path: string;
  score: number; // BM25; not comparable across sites
  rank: number; // 1-based, continues across pages
  card: KeywordResultCard;
  language: string | null;
  sections: string[];
  sourceType: string;
  contentDate: string | null;
  ogType: string | null;
  pageLevel: number;
  wordCount: number;
  facets: Record<string, string[]>; // {} for sites without facets
  site: string | null; // config alias the page came from
  highlights: KeywordHighlights;
  meta: Record<string, string>; // other meta tags, original key casing
};

export type KeywordPagination = {
  page: number; // 1-based
  pageIndex: number; // 0-based
  pageSize: number;
  from: number;
  totalResults: number; // capped at 10,000
  totalPages: number;
  totalIsCapped: boolean; // true: show "N+"
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type KeywordSearchResponse =
  | {
      ok: true;
      sid: string;
      fused: boolean;
      results: KeywordSearchHit[];
      pagination: KeywordPagination;
      indexName: string;
      tookMs: number;
    }
  | { ok: false; code: string; message: string };

/**
 * A failed search. `code` is the API's error code (e.g. `index_not_built`,
 * `keyword_search_disabled`) to branch on, or `network_error` when the request
 * never got a usable response. `message` is for developers, not end users.
 */
export type KeywordSearchError = { code: string; message: string };

/**
 * Keyword search against the Insytful search API (`POST {baseUrl}/search`).
 * Headless: returns the hits, pagination and any error for you to render;
 * `InsytfulSearch.Keyword` is the ready-made wrapper.
 *
 * @param config - The search config alias.
 * @param baseUrl - The API base URL, as for the AI hooks.
 */
export const useKeywordSearch = (config: string, baseUrl: string) => {
  const [results, setResults] = useState<KeywordSearchHit[]>([]);
  const [pagination, setPagination] = useState<KeywordPagination | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<KeywordSearchError | null>(null);

  // One AbortController per search(); a newer search (or unmount) aborts the
  // previous request so a slow, older response can't overwrite newer results.
  const abortRef = useRef<AbortController | null>(null);
  useEffect(() => () => abortRef.current?.abort(), []);

  /**
   * Runs a keyword search for `query`. Results, pagination and any error land
   * in the hook's state; the promise never rejects.
   *
   * @param query - The search term.
   * @param pageNumber - The 1-based page to fetch. Defaults to 1.
   * @param pageSize - Results per page. Defaults to 10.
   */
  const search = useCallback(
    async (query: string, pageNumber?: number, pageSize?: number) => {
      // Supersede any in-flight request before doing anything else.
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      const { signal } = controller;

      const payloadToSend = {
        config: config,
        q: query,
        page: pageNumber ?? 1,
        pageSize: pageSize ?? 10,
        // lang: <lang_code>
        // sections: <section_sys_ids>
        // pathPrefix: <path_prefix>
        // correlationId: <correlation_id>
      };

      setResults([]);
      setPagination(null);
      setError(null);
      setLoading(true);

      try {
        const headers = new Headers({
          "Content-Type": "application/json",
        });

        const sid = localStorage.getItem(SESSION_STORAGE_KEY);
        if (sid) headers.append("X-Session-Id", sid);

        const payload = await fetch(`${baseUrl}/search`, {
          method: "POST",
          headers,
          body: JSON.stringify(payloadToSend),
          signal,
        });

        // Error responses carry a JSON body too, so read it whatever the status.
        // A body that isn't JSON (e.g. a proxy's HTML 502) is a network error.
        let data: KeywordSearchResponse;
        try {
          data = await payload.json();
        } catch {
          throw new Error(`Unexpected response (${payload.status})`);
        }

        if (signal.aborted) return; // superseded — the newer search owns state now

        // Keep one session across keyword and AI search; the API mints one when none was sent.
        const newSid = payload.headers.get("X-Session-Id");
        if (newSid) localStorage.setItem(SESSION_STORAGE_KEY, newSid);

        if (data.ok) {
          setResults(data.results);
          setPagination(data.pagination);
        } else {
          setError({ code: data.code, message: data.message });
        }
        setLoading(false);
      } catch (err) {
        // An abort is expected (superseded or unmounted), never an error state.
        if (signal.aborted) return;
        console.error(err);

        setError({
          code: "network_error",
          message: err instanceof Error && err.message ? err.message : "Something went wrong",
        });
        setLoading(false);
      }
    },
    [config, baseUrl],
  );

  return { error, results, pagination, loading, search };
};
