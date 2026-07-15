/**
 * A decoded Server-Sent Events frame.
 * `event` defaults to `"message"` when the frame has no `event:` field.
 */
export interface SSEFrame {
    event: string;
    data: string;
}
/**
 * Decodes a Server-Sent Events byte stream into frames.
 *
 * Splitting is owned here (one `TextDecoder` per stream with `{ stream: true }`
 * semantics, so multibyte characters and line delimiters split across chunks
 * survive); field/frame semantics are delegated to `eventsource-parser`.
 *
 * WHATWG rules honored (each unit-tested in `__tests__/sse.test.ts`):
 * - CRLF, lone CR, and lone LF line endings — including a CRLF delimiter
 *   split across two chunks
 * - `:` comment lines ignored; `id:`/`retry:` fields ignored
 * - multiple `data:` lines joined with `\n`; exactly one leading space
 *   stripped from field values
 * - `event:` name honored regardless of field order
 * - leading BOM stripped; frames with neither an event name nor data
 *   dispatch nothing
 *
 * Deliberate deviations from WHATWG §9.2.6 (documented and tested):
 * - a frame with an explicit `event:` name but no `data:` lines IS dispatched
 *   with `data: ""` — the RAG API's `done` terminator may arrive dataless and
 *   must never be dropped
 * - a final unterminated frame is flushed at end of stream, not discarded
 *
 * The reader is always cancelled and released when the generator settles
 * (normal completion, consumer `break`/`return`, abort, or error).
 *
 * @param body - The SSE response body (e.g. `response.body` from `fetch`).
 * @param signal - Optional abort signal; aborting cancels the underlying
 *   reader and ends iteration.
 */
export declare function readSSEFrames(body: ReadableStream<Uint8Array>, signal?: AbortSignal): AsyncGenerator<SSEFrame, void, void>;
