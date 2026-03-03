import { useEffect } from 'react';

const setupMockFetch = (baseUrl: string) => {
  const originalFetch = window.fetch;

  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input.toString();

    if (url.includes(baseUrl)) {
      const chunks = [
        '## Heading 2\n\n',
        'Second-level',
        ' heading',
        ' paragraph',
        ' text.',
        '\n\n',

        '### Heading 3\n\n',
        'Some',
        ' more',
        ' paragraph',
        ' text',
        ' under',
        ' H3.',
        '\n\n',

        '#### Heading 4\n\n',
        'Example',
        ' paragraph',
        ' for',
        ' H4.',
        '\n\n',

        '##### Heading 5\n\n',
        'Example',
        ' paragraph',
        ' for',
        ' H5.',
        '\n\n',

        '###### Heading 6\n\n',
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

      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();

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

  return () => window.fetch = originalFetch;
};

export const useMockFetch = (isDevMode = false, base: string) => {
  useEffect(() => {
    if (!isDevMode || !base) return;
    setupMockFetch(base);
    
  }, [isDevMode, base]);
};
