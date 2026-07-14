/**
 * Shared SSE decoding — flavour-agnostic, used by both the React hooks and
 * the Web Component's RAGClient.
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access; logic-only (no Tailwind classes) — importable by both entry points.
 */
import { createParser } from "eventsource-parser";

/**
 * A decoded Server-Sent Events frame.
 * `event` defaults to `"message"` when the frame has no `event:` field.
 */
export interface SSEFrame {
  event: string;
  data: string;
}

const LF = 10;
const CR = 13;
const SPACE = 32;

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
export async function* readSSEFrames(
  body: ReadableStream<Uint8Array>,
  signal?: AbortSignal,
): AsyncGenerator<SSEFrame, void, void> {
  const reader = body.getReader();
  const decoder = new TextDecoder("utf-8");
  const queue: SSEFrame[] = [];

  const parser = createParser({
    onEvent(event) {
      queue.push({ event: event.event ?? "message", data: event.data });
    },
  });

  /** The current frame's `event:` name, tracked so dataless named frames (e.g. `event: done`) still dispatch. */
  let pendingEventName: string | null = null;
  let lineBuffer = "";

  const handleLine = (line: string): void => {
    if (line === "") {
      // End of frame — the parser only dispatches frames that had data lines.
      const lengthBefore = queue.length;
      parser.feed("\n");
      if (queue.length === lengthBefore && pendingEventName) {
        queue.push({ event: pendingEventName, data: "" });
      }
      pendingEventName = null;
      return;
    }
    parser.feed(`${line}\n`);
    if (line.startsWith("event:")) {
      pendingEventName =
        line.slice(line.charCodeAt(6) === SPACE ? 7 : 6) || null;
    }
  };

  /** Splits decoded text into lines (CRLF/CR/LF), holding back a trailing CR that may be half of a split CRLF. */
  const processText = (text: string): void => {
    lineBuffer += text;
    let start = 0;
    for (let i = 0; i < lineBuffer.length; i++) {
      const code = lineBuffer.charCodeAt(i);
      if (code === CR) {
        if (i === lineBuffer.length - 1) break; // possible CRLF split across chunks — wait for the next chunk
        handleLine(lineBuffer.slice(start, i));
        if (lineBuffer.charCodeAt(i + 1) === LF) i++;
        start = i + 1;
      } else if (code === LF) {
        handleLine(lineBuffer.slice(start, i));
        start = i + 1;
      }
    }
    lineBuffer = lineBuffer.slice(start);
  };

  const onAbort = () => {
    reader.cancel().catch(() => {
      // stream already closed or errored
    });
  };
  signal?.addEventListener("abort", onAbort, { once: true });

  try {
    while (true) {
      if (signal?.aborted) return;
      const { value, done } = await reader.read();
      if (done) break;

      processText(decoder.decode(value, { stream: true }));
      while (queue.length > 0) {
        if (signal?.aborted) return;
        yield queue.shift()!;
      }
    }

    if (signal?.aborted) return;

    // End of stream: flush any buffered multibyte sequence, then treat an
    // unterminated final line/frame as complete rather than discarding it.
    processText(decoder.decode());
    if (lineBuffer !== "") {
      handleLine(
        lineBuffer.endsWith("\r") ? lineBuffer.slice(0, -1) : lineBuffer,
      );
      lineBuffer = "";
    }
    handleLine("");
    while (queue.length > 0) {
      if (signal?.aborted) return;
      yield queue.shift()!;
    }
  } finally {
    signal?.removeEventListener("abort", onAbort);
    try {
      await reader.cancel();
    } catch {
      // reader already closed or errored
    }
    reader.releaseLock();
  }
}
