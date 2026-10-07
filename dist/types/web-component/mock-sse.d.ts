/**
 * Mock SSE fetch for dev-mode testing.
 *
 * Returns a fetch-compatible function that intercepts AI Search API requests
 * and streams mock SSE chunks. Does NOT patch `window.fetch` — the
 * returned function is injected into the AI client constructor instead.
 *
 * Mock chunks are copied from lib/utilities/mock-fetch.ts.
 */
/**
 * Create a fetch-compatible function that intercepts requests to `baseUrl`
 * and returns a mock SSE stream. All other requests are passed through to
 * the real `window.fetch`.
 */
export declare function createMockFetch(baseUrl: string): typeof fetch;
