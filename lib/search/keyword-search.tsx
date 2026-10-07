import React, { useEffect, useMemo, useRef } from "react";
import {
  useKeywordSearch,
  useResolvedSearchConfig,
  type KeywordSearchError,
  type KeywordSearchHit,
  type SearchConfig,
} from "../api";
import { useMockFetch } from "../utilities/mock-fetch";
import { Pagination } from "./keyword-pagination";
import { ResultsCard } from "./keyword-result-card";
import { SearchErrorCallout } from "./search-error-callout";

export type KeywordSearchProps = {
  className?: string;
  /** Enables mock responses -- no real network requests are made. */
  isDevMode?: boolean;
  /** Connection config. Omit it inside `InsytfulSearch.Provider` to use the provider's. */
  options?: SearchConfig;
  /** The search term. A new term runs a new search; an empty one runs none. */
  term: string;
  /** Renders one result. Defaults to the library's result card (styled under
   *  `<Theme>`). `card.snippet` is HTML (only `<mark>`, already escaped by the
   *  API), so it's safe for `dangerouslySetInnerHTML`. */
  renderHit?: (hit: KeywordSearchHit, index: number) => React.ReactNode;
  /** Heading level of the default card's title. Defaults to 3. */
  hLevel?: number;
  /** Shown while a search is in flight. Defaults to card-shaped skeletons. */
  renderLoading?: () => React.ReactNode;
  /** Shown when a search fails. Branch on `error.code`, e.g. `index_not_built`
   *  ("coming soon") or `keyword_search_disabled` (hide search). Defaults to
   *  the library's error callout. */
  renderError?: (error: KeywordSearchError) => React.ReactNode;
  /** Shown when a search succeeds with no results. Renders nothing by default. */
  renderEmpty?: () => React.ReactNode;
};

/** Number of skeleton cards in the default loading state. */
const SKELETON_CARDS = 3;

const DefaultLoading = () => (
  <ul className="insytful-search-keyword-list" aria-hidden="true">
    {Array.from({ length: SKELETON_CARDS }, (_, i) => (
      <li key={i} className="insytful-search-keyword-item">
        <div className="insytful-search-skeleton-card">
          <div className="insytful-search-skeleton-card-image" />
          <div className="insytful-search-skeleton-card-body">
            <div className="insytful-search-skeleton-bar" />
            <div className="insytful-search-skeleton-bar" />
            <div className="insytful-search-skeleton-bar" />
            <div className="insytful-search-skeleton-bar" />
          </div>
        </div>
      </li>
    ))}
  </ul>
);

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

/** "28 September 2026", or "" when there's no date or it doesn't parse. */
const formatDate = (iso: string | null) => {
  const date = iso ? new Date(iso) : null;
  if (!date || Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // Publish dates are usually midnight UTC; local time would show the day before west of UTC.
    timeZone: "UTC",
  });
};

// The API's message can be technical ("Unexpected response (502)"), so the
// default shows a general one; the code is still on the root's `data-error`.
const DefaultError = () => (
  <SearchErrorCallout
    title="Something went wrong"
    text="We couldn't load search results right now. Please try again later."
  />
);

const DefaultHit = (hit: KeywordSearchHit, hLevel: number) => (
  <ResultsCard
    hLevel={hLevel}
    title={hit.card.title}
    url={hit.canonicalUrl ?? hit.url}
    date={formatDate(hit.card.published)}
    // The card renders HTML: the snippet already is, the plain-text
    // description fallback isn't.
    snippet={hit.card.snippet ?? escapeHtml(hit.card.description)}
    image={hit.card.image ?? undefined}
  />
);

/**
 * InsytfulSearch.Keyword — keyword search results.
 *
 * Fetches results for `term` and renders each through `renderHit`, or the
 * default result card when it's omitted, with pagination below when there's
 * more than one page. State attributes on the root: `data-loading`,
 * `data-error` (the error code), `data-empty`.
 */
export const KeywordSearch = ({
  className,
  options,
  isDevMode = false,
  term,
  hLevel = 3,
  renderHit = (hit) => DefaultHit(hit, hLevel),
  renderLoading = DefaultLoading,
  renderError = DefaultError,
  renderEmpty,
}: KeywordSearchProps) => {
  const resolved = useResolvedSearchConfig(options);
  const opts = useMemo(
    () => resolved,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [resolved.config, resolved.baseUrl, resolved.recaptchaSiteKey],
  );

  const { results, pagination, loading, error, search } = useKeywordSearch(
    opts.config,
    opts.baseUrl,
  );

  // Before the search effect: effects run in order, so the mock is in place for the first request.
  useMockFetch(isDevMode, opts.baseUrl);

  useEffect(() => {
    if (term) search(term);
  }, [search, term]);

  // After a page change, move focus (and the view) to the top of the new
  // results, so keyboard and screen reader users aren't left at the bottom.
  const rootRef = useRef<HTMLDivElement>(null);
  const focusOnLoadRef = useRef(false);
  useEffect(() => {
    if (loading || !focusOnLoadRef.current) return;
    focusOnLoadRef.current = false;
    rootRef.current?.scrollIntoView?.({ block: "start" });
    rootRef.current?.focus({ preventScroll: true });
  }, [loading]);

  const changePage = (page: number) => {
    focusOnLoadRef.current = true;
    search(term, page);
  };

  // `pagination` is set only after a successful search, so this is false
  // before the first search and while one is loading.
  const empty = !loading && !error && pagination !== null && results.length === 0;

  return (
    <div
      ref={rootRef}
      tabIndex={-1}
      className={`insytful-search-keyword ${className ?? ""}`.trim()}
      aria-busy={loading}
      data-loading={loading || undefined}
      data-error={error?.code}
      data-empty={empty || undefined}
    >
      {loading && renderLoading()}
      {error && renderError(error)}
      {empty && renderEmpty?.()}
      {results.length > 0 && (
        <ol className="insytful-search-keyword-list">
          {results.map((hit, i) => (
            <li key={hit.id} className="insytful-search-keyword-item">
              {renderHit(hit, i)}
            </li>
          ))}
        </ol>
      )}
      {pagination && pagination.totalPages > 1 && (
        <Pagination
          pageIndex={pagination.pageIndex}
          totalPages={pagination.totalPages}
          hasPreviousPage={pagination.hasPreviousPage}
          hasNextPage={pagination.hasNextPage}
          onPageChange={changePage}
        />
      )}
    </div>
  );
};

KeywordSearch.displayName = "Search.Keyword";
