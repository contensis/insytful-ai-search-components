import { useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import type { RAGMessage } from "./rag.types";
import { useElapsedTime } from "../utilities/use-elapsed-time";

export const useRAGConversation = (
  config: string,
  baseUrl: string,
  recaptchaSiteKey?: string,
) => {
  const [messages, setMessages] = useState<RAGMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { elapsed, setElapsed } = useElapsedTime(loading);

  /**
   * Asks a question and returns a response.
   *
   * @param question - The user’s question.
   * @param sections - Optional list of section slugs to scope the question.
   * @returns A promise that resolves when the request completes.
   */
  const ask = useCallback(
    async (question: string, sections?: string[]) => {
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

      // add the user’s message immediately
      setMessages((prev) => [...prev, { role: "user", content: question }]);
      setLoading(true);
      setElapsed(0);
      setError(null);

      try {
        const params = new URLSearchParams({
          question,
          config,
          history: String(true),
          stream: String(true),
        });

        if (sections && sections?.length >= 1) {
          params.set("sections", sections.join(","));
        }

        const query = params.toString();
        const headers = new Headers({ Accept: "text/event-stream" });

        // only include token if we generated one
        if (recaptchaToken) headers.append("X-Recaptcha-Token", recaptchaToken);

        const sid = localStorage.getItem("rag-session-id");
        if (sid) headers.append("X-Session-Id", sid);

        const response = await fetch(`${baseUrl}/query-collection?${query}`, {
          method: "GET",
          headers,
        });

        if (!response.ok) {
          let message = `Request failed (${response.status})`;
          try {
            const json = await response.json();
            message = json?.message ?? message;
          } catch {
            // fallback if not JSON
            const text = await response.text();
            if (text) message = text;
          }
          throw new Error(message);
        }

        if (response.headers.has("X-Session-Id")) {
          localStorage.setItem(
            "rag-session-id",
            response.headers.get("X-Session-Id")!,
          );
        }

        if (!response.body) throw new Error("No response body");

        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");

        let buffer = "";
        let assistantMsg = ""; // accumulate assistant’s message

        // add a placeholder assistant message we’ll update while streaming
        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const parts = buffer.split("\n\n");
          buffer = parts.pop() || "";

          for (const part of parts) {
            if (part.startsWith("event: done")) {
              setLoading(false);
              setElapsed(0);
              return;
            }

            if (part.startsWith("data:")) {
              try {
                const json = JSON.parse(part.replace("data: ", ""));
                if (json?.content) {
                  assistantMsg += json.content;
                  setMessages((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                      role: "assistant",
                      content: assistantMsg,
                    };
                    return updated;
                  });
                }
              } catch (parseErr) {
                console.error("Failed to parse SSE chunk", parseErr, part);
              }
            }
          }
        }

        setLoading(false);
        setElapsed(0);
      } catch (err) {
        const errorMessage =
          err instanceof Error && err.message
            ? err.message
            : "Something went wrong";
        console.error(err);
        setError(errorMessage);
        setLoading(false);
        setElapsed(0);
      }
    },
    [config, baseUrl, recaptchaSiteKey, executeRecaptcha, setElapsed],
  );

  return { messages, loading, error, elapsed, ask };
};
