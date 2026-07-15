import { useEffect } from 'react';

const setupMockFetch = (baseUrl: string, isDevMode: boolean = false): (() => void) => {
  const originalFetch = window.fetch;

  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input.toString();

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

      // One of each CTA type, mixed intents — mirrors what the RAG API sends
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

          controller.enqueue(encoder.encode(`event: done\ndata: {}\n\n`));
          controller.close();
        },
      });

      return new Response(stream, {
        status: 200,
        headers: { 'Content-Type': 'text/event-stream' },
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
