import { readSSEFrames } from '../shared/sse';

const SESSION_KEY = 'rag-session-id';

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

    // readSSEFrames owns decoding, abort checks, and reader cleanup
    // (mirrors the useRAGConversation / useRAGResponse stream loops).
    for await (const frame of readSSEFrames(response.body, signal)) {
      switch (frame.event) {
        case 'done': {
          return;
        }
        case 'cta': {
          // TODO(Phase 4): re-shape ask() to yield RAGStreamEvent and surface CTAs.
          // See docs/plans/2026-07-14-001-feat-cta-quick-actions-above-answers-plan.md
          break;
        }
        case 'message': {
          try {
            const json = JSON.parse(frame.data);
            if (json?.content) {
              yield json.content;
            }
          } catch {
            // Malformed JSON frame — skip
          }
          break;
        }
      }
    }
  }

  /** Remove the stored session ID from localStorage. */
  static clearSession(): void {
    localStorage.removeItem(SESSION_KEY);
  }
}
