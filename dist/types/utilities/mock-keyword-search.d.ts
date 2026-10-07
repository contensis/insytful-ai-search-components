import { KeywordSearchResponse } from '../api/use-keyword-search';
/**
 * One page of `total` mock hits. Hits are numbered across pages, so each page
 * shows different results.
 */
export declare function mockResults(term: string, total: number, page?: number, pageSize?: number): KeywordSearchResponse;
/**
 * Resolves with `body` as JSON after `delay` ms, so the loading state shows.
 * Rejects like a real request if `signal` aborts first.
 */
export declare function mockKeywordResponse(body: unknown, { status, delay, signal }?: {
    status?: number;
    delay?: number;
    signal?: AbortSignal | null;
}): Promise<Response>;
