import { default as React } from 'react';
import { KeywordSearchError, KeywordSearchHit, SearchConfig } from '../api';
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
/**
 * InsytfulSearch.Keyword — keyword search results.
 *
 * Fetches results for `term` and renders each through `renderHit`, or the
 * default result card when it's omitted, with pagination below when there's
 * more than one page. State attributes on the root: `data-loading`,
 * `data-error` (the error code), `data-empty`.
 */
export declare const KeywordSearch: {
    ({ className, options, isDevMode, term, hLevel, renderHit, renderLoading, renderError, renderEmpty, }: KeywordSearchProps): React.JSX.Element;
    displayName: string;
};
