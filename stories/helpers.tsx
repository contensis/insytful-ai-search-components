import React, { useEffect, useLayoutEffect } from "react";
import ReactMarkdown from "react-markdown";

export const options = { config: "demo", baseUrl: "https://api.insytful.com/v1" };
export const renderMarkdown = (md: string) => <ReactMarkdown>{md}</ReactMarkdown>;
export const useFailingFetch = (
  status = 500,
  message = "Search service unavailable",
) => {
  useEffect(() => {
    const original = window.fetch;
    window.fetch = async () =>
      new Response(JSON.stringify({ message }), {
        status,
        headers: { "Content-Type": "application/json" },
      });
    return () => {
      window.fetch = original;
    };
  }, [status, message]);
};

/**
 * Every request stays pending, so the component sits in its loading state.
 * A layout effect so it's in place before the component's first request
 * (fired from a passive effect); a request that's aborted still rejects.
 */
export const usePendingFetch = () => {
  useLayoutEffect(() => {
    const original = window.fetch;
    window.fetch = (_input, init) =>
      new Promise<Response>((_resolve, reject) => {
        init?.signal?.addEventListener("abort", () =>
          reject(new DOMException("Aborted", "AbortError")),
        );
      });
    return () => {
      window.fetch = original;
    };
  }, []);
};
