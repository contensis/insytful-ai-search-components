const SESSION_KEY = 'rag-session-id';
const DATA_PREFIX = /^data:\s?/;

export interface RAGClientConfig {
  baseUrl: string;
  projectId: string;
  sections?: string;
  /** Optional custom fetch function (e.g. mock for dev-mode). Defaults to window.fetch. */
  fetchFn?: typeof fetch;
}

export class RAGClient {
  private baseUrl: string;
  private projectId: string;
  private sections?: string;
  private fetchFn: typeof fetch;

  constructor(config: RAGClientConfig) {
    this.baseUrl = config.baseUrl;
    this.projectId = config.projectId;
    this.sections = config.sections;
    this.fetchFn = config.fetchFn ?? window.fetch.bind(window);
  }

  /**
   * Send a question to the RAG API and yield content chunks as they arrive
   * via Server-Sent Events.
   */
  async *ask(question: string, signal?: AbortSignal): AsyncGenerator<string> {
    const params = new URLSearchParams({
      question,
      config: this.projectId,
      history: 'true',
      stream: 'true',
    });

    if (this.sections) {
      params.set('sections', this.sections);
    }

    const headers = new Headers({ Accept: 'text/event-stream' });

    const sid = localStorage.getItem(SESSION_KEY);
    if (sid) {
      headers.append('X-Session-Id', sid);
    }

    const response = await this.fetchFn(
      `${this.baseUrl}/query-collection?${params.toString()}`,
      {
        method: 'GET',
        headers,
        signal,
      }
    );

    if (!response.ok) {
      let message = `Request failed (${response.status})`;
      try {
        const json = await response.json();
        message = json?.message ?? message;
      } catch {
        try {
          const text = await response.text();
          if (text) message = text;
        } catch {
          // body already consumed or unreadable — use default message
        }
      }
      throw new Error(message);
    }

    // Persist session ID from response headers
    const newSid = response.headers.get('X-Session-Id');
    if (newSid) {
      localStorage.setItem(SESSION_KEY, newSid);
    }

    if (!response.body) {
      throw new Error('No response body');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    try {
      while (true) {
        // Respect abort signal between reads
        if (signal?.aborted) {
          return;
        }

        const { value, done: streamDone } = await reader.read();
        if (streamDone) break;

        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split('\n\n');
        buffer = parts.pop() || '';

        for (const part of parts) {
          // Respect abort signal between frames
          if (signal?.aborted) {
            return;
          }

          if (part.startsWith('event: done')) {
            return;
          }

          if (part.startsWith('data:')) {
            const jsonStr = part.replace(DATA_PREFIX, '');
            try {
              const json = JSON.parse(jsonStr);
              if (json?.content) {
                yield json.content;
              }
            } catch {
              // Malformed JSON frame — skip
            }
          }
        }
      }

      // Flush any remaining multi-byte UTF-8 sequences
      buffer += decoder.decode();
    } finally {
      try { reader.cancel(); } catch { /* already closed */ }
      reader.releaseLock();
    }
  }

  /** Remove the stored session ID from localStorage. */
  static clearSession(): void {
    localStorage.removeItem(SESSION_KEY);
  }
}
