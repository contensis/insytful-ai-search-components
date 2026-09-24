import { useCallback, useEffect, useRef, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ctasFromFrameData } from "../shared/cta/validation";
import { readSSEFrames } from "../shared/sse";
import { debug } from "../shared/debug";
import { midFromDoneData } from "../shared/vote";
import { useElapsedTime } from "../utilities/use-elapsed-time";
import type { Cta } from "../api/rag.types";

const history = false;
const stream = true;

export const useRAGResponse = (
  config: string,
  baseUrl: string,
  recaptchaSiteKey?: string,
) => {
  const [response, setResponse] = useState<string>(""); // accumulated streamed text
  const [loading, setLoading] = useState(false);
  const [ctas, setCtas] = useState<Cta[]>([]); // accumulated CTAs
  const [error, setError] = useState<string | null>(null);
  // Vote ids for the current answer; `mid` only arrives for substantive answers.
  const [answerIds, setAnswerIds] = useState<{ sid: string; mid: string } | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { elapsed, setElapsed } = useElapsedTime(loading);

  // One AbortController per ask(); a newer ask() (or unmount) aborts the
  // previous stream so its late frames can't touch state. Without this, an
  // old answer's `done` frame could set answerIds while a newer answer is
  // shown, and the vote would go to the wrong answer.
  const abortRef = useRef<AbortController | null>(null);
  useEffect(() => () => abortRef.current?.abort(), []);

  /**
   * Asks a question and returns a response.
   *
   * @param question - The user’s question.
   * @param sections - Optional list of section slugs to scope the question.
   * @returns A promise that resolves when the request completes.
   * @throws An error if the request fails.
   */
  const ask = useCallback(
    async (question: string, sections?: string[]) => {
      // Supersede any in-flight request before doing anything else.
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      const { signal } = controller;

      let recaptchaToken: string | null = null;
      if (recaptchaSiteKey) {
        try {
          if (executeRecaptcha) {
            recaptchaToken = await executeRecaptcha("rag_search");
          }
        } catch {
          console.warn("reCAPTCHA skipped: no provider found");
        }
      }
      if (signal.aborted) return; // superseded while awaiting reCAPTCHA

      setLoading(true);
      setError(null);
      setElapsed(0);
      setCtas([]);
      setResponse("");
      setAnswerIds(null);

      try {
        // POST body — the API moved off query-string params, so there is no
        // URL length ceiling on `question` and no encoding to get wrong.
        const body: Record<string, unknown> = {
          question,
          config,
          history,
          stream,
        };

        if (sections && sections?.length >= 1) {
          body.sections = sections.join(",");
        }

        const headers = new Headers({
          Accept: "text/event-stream",
          "Content-Type": "application/json",
        });

        // only include token if we generated one
        if (recaptchaToken) headers.append("X-Recaptcha-Token", recaptchaToken);

        const sid = localStorage.getItem("rag-session-id");
        if (sid) headers.append("X-Session-Id", sid);

        const payload = await fetch(`${baseUrl}/query-collection`, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
          signal,
        });

        if (!payload.ok) {
          let message = `Request failed (${payload.status})`;
          try {
            const json = await payload.json();
            message = json?.message ?? message;
          } catch {
            const text = await payload.text();
            if (text) message = text;
          }
          throw new Error(message);
        }

        if (payload.headers.has("X-Session-Id")) {
          localStorage.setItem(
            "rag-session-id",
            payload.headers.get("X-Session-Id")!,
          );
        }

        if (!payload.body) throw new Error("No payload body");

        for await (const frame of readSSEFrames(payload.body, signal)) {
          switch (frame.event) {
            case "done": {
              const mid = midFromDoneData(frame.data);
              // This answer's session, captured now: a later request can overwrite
              // the stored id before the user votes.
              const answerSid = payload.headers.get("X-Session-Id") ?? sid ?? undefined;

              debug("stream", mid ? "answer ids" : "done without mid, voting hidden", { mid, sid: answerSid });
              if (mid && answerSid) setAnswerIds({ sid: answerSid, mid });
              setLoading(false);
              setElapsed(0);
              return;
            }
            case "cta": {
              const ctas = ctasFromFrameData(frame.data);
              if (ctas.length > 0) setCtas(ctas);
              break;
            }
            case "message": {
              try {
                const json = JSON.parse(frame.data);
                if (json?.content) setResponse((prev) => prev + json.content);
              } catch (parseErr) {
                console.error("Failed to parse SSE chunk", parseErr, frame.data);
              }
              break;
            }
          }
        }

        if (signal.aborted) return; // superseded — the newer ask() owns state now
        setLoading(false);
        setElapsed(0);
      } catch (err) {
        // An abort is expected (superseded or unmounted), never an error state.
        if (signal.aborted) return;
        const errorMessage =
          err instanceof Error && err.message
            ? err.message
            : "Something went wrong";
        console.error(err);
        setError(errorMessage);
        setElapsed(0);
        setLoading(false);
      }
    },
    [config, baseUrl, recaptchaSiteKey, executeRecaptcha, setElapsed],
  );

  return { response, ctas, loading, elapsed, error, ask, answerIds };
};
