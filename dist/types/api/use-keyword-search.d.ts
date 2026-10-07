export type KeywordResultCard = {
    title: string;
    description: string;
    snippet: string | null;
    image: string | null;
    imageSource: string | null;
    siteName: string | null;
    published: string | null;
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
    score: number;
    rank: number;
    card: KeywordResultCard;
    language: string | null;
    sections: string[];
    sourceType: string;
    contentDate: string | null;
    ogType: string | null;
    pageLevel: number;
    wordCount: number;
    facets: Record<string, string[]>;
    site: string | null;
    highlights: KeywordHighlights;
    meta: Record<string, string>;
};
export type KeywordPagination = {
    page: number;
    pageIndex: number;
    pageSize: number;
    from: number;
    totalResults: number;
    totalPages: number;
    totalIsCapped: boolean;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
};
export type KeywordSearchResponse = {
    ok: true;
    sid: string;
    fused: boolean;
    results: KeywordSearchHit[];
    pagination: KeywordPagination;
    indexName: string;
    tookMs: number;
} | {
    ok: false;
    code: string;
    message: string;
};
/**
 * A failed search. `code` is the API's error code (e.g. `index_not_built`,
 * `keyword_search_disabled`) to branch on, or `network_error` when the request
 * never got a usable response. `message` is for developers, not end users.
 */
export type KeywordSearchError = {
    code: string;
    message: string;
};
/**
 * Keyword search against the Insytful search API (`POST {baseUrl}/search`).
 * Headless: returns the hits, pagination and any error for you to render;
 * `InsytfulSearch.Keyword` is the ready-made wrapper.
 *
 * @param config - The search config alias.
 * @param baseUrl - The API base URL, as for the AI hooks.
 */
export declare const useKeywordSearch: (config: string, baseUrl: string) => {
    error: KeywordSearchError | null;
    results: KeywordSearchHit[];
    pagination: KeywordPagination | null;
    loading: boolean;
    search: (query: string, pageNumber?: number, pageSize?: number) => Promise<void>;
};
