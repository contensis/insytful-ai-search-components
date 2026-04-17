/**
 * Mock SSE fetch for dev-mode testing.
 *
 * Returns a fetch-compatible function that intercepts RAG API requests
 * and streams mock SSE chunks. Does NOT patch `window.fetch` — the
 * returned function is injected into the RAG client constructor instead.
 *
 * Mock chunks are copied from lib/utilities/mock-fetch.ts.
 */

const MOCK_CHUNKS = [
  '# Heading 1\n\n',
  'Second-level',
  ' heading',
  ' paragraph',
  ' text',
  ' under',
  ' H1.',
  '\n\n',

  '# Heading 2\n\n',
  'Second-level',
  ' heading',
  ' paragraph',
  ' text',
  ' under',
  ' H2.',
  '\n\n',

  '## Heading 3\n\n',
  'Some',
  ' more',
  ' paragraph',
  ' text',
  ' under',
  ' H3.',
  '\n\n',

  '### Heading 4\n\n',
  'Example',
  ' paragraph',
  ' for',
  ' H4.',
  '\n\n',

  '#### Heading 5\n\n',
  'Example',
  ' paragraph',
  ' for',
  ' H5.',
  '\n\n',

  '##### Heading 6\n\n',
  'Example',
  ' paragraph',
  ' for',
  ' H6.',
  '\n\n',

  'Regular',
  ' paragraph',
  ' text',
  ' with',
  ' some',
  ' inline',
  ' `code`',
  ' and',
  ' a',
  ' [link](https://example.com).',
  '\n\n',

  '> This',
  ' is',
  ' a',
  ' blockquote',
  ' example.',
  '\n\n',

  '- First',
  ' unordered',
  ' list',
  ' item\n',
  '- Second',
  ' unordered',
  ' list',
  ' item\n',
  '- Third',
  ' unordered',
  ' list',
  ' item\n\n',

  '1. First',
  ' ordered',
  ' list',
  ' item\n',
  '2. Second',
  ' ordered',
  ' list',
  ' item\n',
  '3. Third',
  ' ordered',
  ' list',
  ' item\n\n',

  '```javascript\n',
  'console.log("Hello, AI Search!");\n',
  '```\n\n',

  'End',
  ' of',
  ' mock',
  ' response.',
  '\n',
];

/**
 * Create a fetch-compatible function that intercepts requests to `baseUrl`
 * and returns a mock SSE stream. All other requests are passed through to
 * the real `window.fetch`.
 */
export function createMockFetch(
  baseUrl: string,
): typeof fetch {
  const realFetch = window.fetch.bind(window);

  return async (
    input: RequestInfo | URL,
    init?: RequestInit,
  ): Promise<Response> => {
    const url = typeof input === 'string'
      ? input
      : input instanceof URL
        ? input.href
        : input.url;

    // Use origin comparison to avoid prefix-match false positives
    // (e.g. baseUrl "https://api.example.com" matching "https://api.example.com.evil.com")
    try {
      const reqOrigin = new URL(url).origin;
      const baseOrigin = new URL(baseUrl).origin;
      if (reqOrigin !== baseOrigin || !url.startsWith(baseUrl)) {
        return realFetch(input, init);
      }
    } catch {
      return realFetch(input, init);
    }

    // Build a ReadableStream that emits mock SSE frames
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        const signal = init?.signal;

        // Delay the response by 3 seconds so skeleton has time to show
        await new Promise(res => setTimeout(res, 3000));

        for (const chunk of MOCK_CHUNKS) {
          if (signal?.aborted) {
            controller.close();
            return;
          }

          const sse = `data: ${JSON.stringify({ content: chunk })}\n\n`;
          controller.enqueue(encoder.encode(sse));
          await new Promise((res) => setTimeout(res, 30));
        }

        controller.enqueue(encoder.encode('event: done\ndata: {}\n\n'));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: { 'Content-Type': 'text/event-stream' },
    });
  };
}
