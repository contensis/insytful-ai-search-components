import { Cta } from '../api/rag.types';
/**
 * One event from a streamed `ask()` response.
 *
 * Named `kind` (not `type`) deliberately: this is an envelope whose `ctas`
 * payload holds objects with their own `type` field — reusing the name would
 * be a readability trap.
 */
export type RAGStreamEvent = 
/** One streamed answer token. */
{
    kind: 'token';
    content: string;
}
/** The sanitized CTAs for this answer (yielded only when non-empty). */
 | {
    kind: 'ctas';
    ctas: Cta[];
};
export interface RAGClientConfig {
    baseUrl: string;
    projectId: string;
    sections?: string;
    /** Optional custom fetch function (e.g. mock for dev-mode). Defaults to window.fetch. */
    fetchFn?: typeof fetch;
}
export declare class RAGClient {
    private baseUrl;
    private projectId;
    private sections?;
    private fetchFn;
    constructor(config: RAGClientConfig);
    /**
     * Send a question to the RAG API and yield {@link RAGStreamEvent} objects
     * as Server-Sent Events arrive.
     *
     * BREAKING CHANGE (v3.0.0): `ask()` previously yielded plain content
     * strings. It now yields discriminated events so CTA frames can be
     * surfaced alongside answer tokens:
     *
     * - `{ kind: "token", content: string }` — one streamed answer chunk
     * - `{ kind: "ctas", ctas: Cta[] }` — sanitized CTAs (only when non-empty)
     *
     * Migration for existing `ragClient` consumers:
     * ```ts
     * let answer = "";
     * for await (const ev of client.ask(question)) {
     *   if (ev.kind === "token") answer += ev.content;
     * }
     * ```
     *
     * Malformed `cta` frame JSON logs a `[Insytful]` warn and is skipped —
     * streaming continues (never fail an answer over a decoration).
     */
    ask(question: string, signal?: AbortSignal): AsyncGenerator<RAGStreamEvent, void, void>;
    /** Remove the stored session ID from localStorage. */
    static clearSession(): void;
}
