import type { KeywordSearchHit, KeywordSearchResponse } from "../api/use-keyword-search";

// ---------------------------------------------------------------------------
// Mock keyword search data, for dev mode and stories. Shaped like the Keyword & Course Search API's `/search` response.
// ---------------------------------------------------------------------------

const TOPICS = [
  "Undergraduate admissions",
  "Postgraduate funding",
  "Student accommodation",
  "International students",
  "Open days",
  "Course fees",
  "Library services",
  "Careers and employability",
];

/** Escape, then wrap the term in `<mark>`, as the API does. */
function markTerm(text: string, term: string) {
  const escaped = text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  if (!term) return escaped;
  const pattern = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return escaped.replace(pattern, "<mark>$1</mark>");
}

function mockHit(term: string, i: number): KeywordSearchHit {
  const topic = TOPICS[i % TOPICS.length];
  const slug = topic.toLowerCase().replace(/\s+/g, "-");
  const description = `Everything you need to know about ${topic.toLowerCase()}.`;
  const content = `Find out how ${term} relates to ${topic.toLowerCase()}, with guidance, deadlines and who to contact.`;
  return {
    id: `hit-${i}`,
    url: `https://www.example.com/${slug}`,
    canonicalUrl: null,
    path: `/${slug}`,
    score: 12.5 - i,
    rank: i + 1,
    card: {
      title: topic,
      description,
      // Every third hit has no snippet, so the card falls back to description.
      snippet: i % 3 === 2 ? null : markTerm(content, term),
      image: i % 2 === 0 ? "https://picsum.photos/200/140" : null,
      imageSource: i % 2 === 0 ? "og:image" : null,
      siteName: "Example University",
      published: new Date(Date.UTC(2026, 8, 28 - i)).toISOString(),
    },
    language: "en-GB",
    sections: [],
    sourceType: "web",
    contentDate: null,
    ogType: "article",
    pageLevel: 1,
    wordCount: 600 + i * 40,
    facets: {},
    site: null,
    highlights: { content: [markTerm(content, term)] },
    meta: {},
  };
}

/**
 * One page of `total` mock hits. Hits are numbered across pages, so each page
 * shows different results.
 */
export function mockResults(
  term: string,
  total: number,
  page = 1,
  pageSize = 10,
): KeywordSearchResponse {
  const totalPages = Math.ceil(total / pageSize);
  const from = (page - 1) * pageSize;
  const count = Math.max(0, Math.min(pageSize, total - from));
  return {
    ok: true,
    sid: "s_mocksession0001",
    fused: false,
    results: Array.from({ length: count }, (_, i) => mockHit(term, from + i)),
    pagination: {
      page,
      pageIndex: page - 1,
      pageSize,
      from,
      totalResults: total,
      totalPages,
      totalIsCapped: false,
      hasPreviousPage: page > 1,
      hasNextPage: page < totalPages,
    },
    indexName: "mock-index",
    tookMs: 12,
  };
}

/**
 * Resolves with `body` as JSON after `delay` ms, so the loading state shows.
 * Rejects like a real request if `signal` aborts first.
 */
export function mockKeywordResponse(
  body: unknown,
  { status = 200, delay = 600, signal }: { status?: number; delay?: number; signal?: AbortSignal | null } = {},
) {
  return new Promise<Response>((resolve, reject) => {
    const timer = setTimeout(
      () =>
        resolve(
          new Response(JSON.stringify(body), {
            status,
            headers: { "Content-Type": "application/json", "X-Session-Id": "s_mocksession0001" },
          }),
        ),
      delay,
    );
    signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}
