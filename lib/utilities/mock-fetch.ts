import { useEffect } from 'react';
import { mockKeywordResponse, mockResults } from './mock-keyword-search';

const setupMockFetch = (baseUrl: string, isDevMode: boolean = false): (() => void) => {
  const originalFetch = window.fetch;

  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input.toString();

    // Vote API: accept every vote, so dev mode never reaches the real API.
    if (url.startsWith(baseUrl) && /\/sessions\/.+\/vote$/.test(url)) {
      const body = init?.method === 'DELETE'
        ? { ok: true, retracted: true }
        : { ok: true, vote: { ...JSON.parse(String(init?.body ?? '{}')), updatedAt: new Date().toISOString() } };
      return new Response(JSON.stringify(body), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Keyword search: the requested page of 25 results for the posted term
    // (3 pages at the hook's default page size of 10). Before the catch-all
    // below, which answers every other request with the AI stream.
    if (url.startsWith(baseUrl) && /\/search$/.test(url)) {
      const { q = '', page = 1, pageSize = 10 } = JSON.parse(String(init?.body ?? '{}'));
      return mockKeywordResponse(mockResults(q, 25, page, pageSize), { signal: init?.signal });
    }

    if (url.startsWith(baseUrl)) {
      const chunks = [
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

      // One of each CTA type, mixed intents — mirrors what the AI Search API sends
      // in its `event: cta` frame so dev mode exercises the full CTA bar.
      const ctas = [
        { type: 'link', label: 'Contact Us', url: 'https://example.com/contact', intent: 'primary', newTab: false },
        { type: 'call', label: 'Call us on 01234 567890', phone: '01234 567890', intent: 'secondary' },
        { type: 'email', label: 'Email the team', email: 'help@example.com', subject: 'Website enquiry', intent: 'secondary' },
        { type: 'event', label: 'Start web chat', event: 'openWebChat', detail: { topic: 'general' }, intent: 'primary' },
      ];

      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();

          // In dev mode, delay the response by 8 seconds so skeleton loading messages have time to display
          if (isDevMode) {
            await new Promise(res => setTimeout(res, 8000));
          }

          // The API sends the cta frame before any token frames.
          controller.enqueue(encoder.encode(`event: cta\ndata: ${JSON.stringify({ ctas })}\n\n`));

          for (const chunk of chunks) {
            const sse = `data: ${JSON.stringify({ content: chunk })}\n\n`;
            controller.enqueue(encoder.encode(sse));
            await new Promise(res => setTimeout(res, 30));
          }

          // `mid` makes the answer voteable (see lib/shared/vote.ts). Unique per
          // answer; not crypto.randomUUID(), which is missing on plain-http
          // non-localhost origins (e.g. Storybook opened via a LAN IP).
          const mid = `mock-${Date.now()}-${Math.random().toString(36).slice(2)}`;
          controller.enqueue(encoder.encode(`event: done\ndata: ${JSON.stringify({ mid })}\n\n`));
          controller.close();
        },
      });

      return new Response(stream, {
        status: 200,
        headers: { 'Content-Type': 'text/event-stream', 'X-Session-Id': 's_mocksession0001' },
      });
    }

    return originalFetch(input, init);
  };

  return () => { window.fetch = originalFetch; };
};

export const useMockFetch = (isDevMode = false, base: string) => {
  useEffect(() => {
    if (!isDevMode) return;
    return setupMockFetch(base, isDevMode);
  }, [isDevMode, base]);
};
