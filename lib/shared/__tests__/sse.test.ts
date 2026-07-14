import { describe, expect, it, vi } from "vitest";
import { readSSEFrames, type SSEFrame } from "../sse";

const encoder = new TextEncoder();

/** Builds a ReadableStream that enqueues each chunk in order, then closes. */
function streamOf(
  chunks: Array<string | Uint8Array>,
  onCancel?: () => void,
): ReadableStream<Uint8Array> {
  return new ReadableStream<Uint8Array>({
    start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(
          typeof chunk === "string" ? encoder.encode(chunk) : chunk,
        );
      }
      controller.close();
    },
    cancel() {
      onCancel?.();
    },
  });
}

async function collect(
  body: ReadableStream<Uint8Array>,
  signal?: AbortSignal,
): Promise<SSEFrame[]> {
  const frames: SSEFrame[] = [];
  for await (const frame of readSSEFrames(body, signal)) {
    frames.push(frame);
  }
  return frames;
}

describe("readSSEFrames", () => {
  it("decodes a data frame with the default 'message' event name", async () => {
    const frames = await collect(streamOf(['data: {"content":"hi"}\n\n']));
    expect(frames).toEqual([{ event: "message", data: '{"content":"hi"}' }]);
  });

  it("honors the event: name when it precedes data:", async () => {
    const frames = await collect(streamOf(["event: cta\ndata: [1]\n\n"]));
    expect(frames).toEqual([{ event: "cta", data: "[1]" }]);
  });

  it("honors the event: name regardless of field order (data: before event:)", async () => {
    const frames = await collect(streamOf(["data: [1]\nevent: cta\n\n"]));
    expect(frames).toEqual([{ event: "cta", data: "[1]" }]);
  });

  it("supports CRLF line endings", async () => {
    const frames = await collect(
      streamOf(["event: cta\r\ndata: x\r\n\r\ndata: y\r\n\r\n"]),
    );
    expect(frames).toEqual([
      { event: "cta", data: "x" },
      { event: "message", data: "y" },
    ]);
  });

  it("supports lone-CR line endings", async () => {
    const frames = await collect(streamOf(["data: x\r\rdata: y\r\r"]));
    expect(frames).toEqual([
      { event: "message", data: "x" },
      { event: "message", data: "y" },
    ]);
  });

  it("handles a CRLF delimiter split across two chunks (chunk ends \\r, next starts \\n)", async () => {
    const frames = await collect(
      streamOf(["data: a\r\n\r", "\ndata: b\n\n"]),
    );
    expect(frames).toEqual([
      { event: "message", data: "a" },
      { event: "message", data: "b" },
    ]);
  });

  it("survives a multibyte character split across two chunks", async () => {
    const bytes = encoder.encode('data: {"content":"héllo 👋"}\n\n');
    // Split inside the emoji's 4-byte UTF-8 sequence.
    const splitAt = bytes.length - 8;
    const frames = await collect(
      streamOf([bytes.slice(0, splitAt), bytes.slice(splitAt)]),
    );
    expect(frames).toEqual([
      { event: "message", data: '{"content":"héllo 👋"}' },
    ]);
  });

  it("ignores comment lines (proxy keep-alives) without corrupting frames", async () => {
    const frames = await collect(
      streamOf([": keep-alive\n\ndata: x\n: mid-frame comment\ndata: y\n\n"]),
    );
    expect(frames).toEqual([{ event: "message", data: "x\ny" }]);
  });

  it("joins multiple data: lines with \\n", async () => {
    const frames = await collect(streamOf(["data: line1\ndata: line2\n\n"]));
    expect(frames).toEqual([{ event: "message", data: "line1\nline2" }]);
  });

  it("strips exactly one leading space from field values", async () => {
    const frames = await collect(
      streamOf(["data:  two-spaces\n\ndata:none\n\n"]),
    );
    expect(frames).toEqual([
      { event: "message", data: " two-spaces" },
      { event: "message", data: "none" },
    ]);
  });

  it("does not dispatch frames with neither an event name nor data", async () => {
    const frames = await collect(
      streamOf(["\n\n", "id: 1\n\n", ": comment only\n\n", "retry: 100\n\n"]),
    );
    expect(frames).toEqual([]);
  });

  it("dispatches a named frame with no data lines as data:'' (documented deviation — dataless done)", async () => {
    const frames = await collect(streamOf(["event: done\n\n"]));
    expect(frames).toEqual([{ event: "done", data: "" }]);
  });

  it("dispatches an event: done frame that carries data, by name", async () => {
    const frames = await collect(streamOf(["event: done\ndata: {}\n\n"]));
    expect(frames).toEqual([{ event: "done", data: "{}" }]);
  });

  it("ignores id: and retry: fields on data-bearing frames", async () => {
    const frames = await collect(
      streamOf(["id: 42\nretry: 3000\ndata: x\n\n"]),
    );
    expect(frames).toEqual([{ event: "message", data: "x" }]);
  });

  it("strips a leading BOM", async () => {
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    const frames = await collect(streamOf([bom, "data: x\n\n"]));
    expect(frames).toEqual([{ event: "message", data: "x" }]);
  });

  it("flushes a final unterminated frame at end of stream", async () => {
    const frames = await collect(
      streamOf(['data: a\n\nevent: cta\ndata: {"tail":true}']),
    );
    expect(frames).toEqual([
      { event: "message", data: "a" },
      { event: "cta", data: '{"tail":true}' },
    ]);
  });

  it("handles frames split at arbitrary chunk boundaries", async () => {
    const frames = await collect(
      streamOf(["eve", "nt: c", "ta\nda", "ta: [1,", "2]\n", "\n"]),
    );
    expect(frames).toEqual([{ event: "cta", data: "[1,2]" }]);
  });

  it("stops yielding and cancels the reader when the signal aborts mid-stream", async () => {
    const onCancel = vi.fn();
    const controller = new AbortController();
    const frames: SSEFrame[] = [];

    for await (const frame of readSSEFrames(
      streamOf(["data: first\n\n", "data: second\n\n"], onCancel),
      controller.signal,
    )) {
      frames.push(frame);
      controller.abort();
    }

    expect(frames).toEqual([{ event: "message", data: "first" }]);
    expect(onCancel).toHaveBeenCalled();
  });

  it("cancels the reader when the consumer breaks out early", async () => {
    const onCancel = vi.fn();
    // Deliberately left open — the underlying cancel() callback is only
    // invoked when the stream hasn't already closed.
    const body = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(encoder.encode("data: first\n\ndata: second\n\n"));
      },
      cancel() {
        onCancel();
      },
    });

    for await (const frame of readSSEFrames(body)) {
      expect(frame).toEqual({ event: "message", data: "first" });
      break;
    }

    expect(onCancel).toHaveBeenCalled();
  });
});
