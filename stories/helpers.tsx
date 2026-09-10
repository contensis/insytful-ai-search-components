import React, { useEffect } from "react";
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
