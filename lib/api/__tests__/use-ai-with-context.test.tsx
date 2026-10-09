import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { SearchConfigProvider } from "../search-config";
import { useAIConversationContext, useAIResponseContext } from "../use-ai-with-context";
import { mockFetchResponse, requestBody, sseDataFrame, stubFetch } from "./sse-test-helpers";

vi.mock("react-google-recaptcha-v3", () => ({
  useGoogleReCaptcha: vi.fn(() => ({ executeRecaptcha: undefined })),
  GoogleReCaptchaProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

function wrapperFor(config: string, apiUrl: string) {
  return ({ children }: { children: React.ReactNode }) => (
    <SearchConfigProvider config={config} apiUrl={apiUrl}>
      {children}
    </SearchConfigProvider>
  );
}

describe("useAIResponseContext / useAIConversationContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("useAIResponseContext sends requests using the SearchConfigProvider's config and apiUrl", async () => {
    const fetchMock = stubFetch(async () => mockFetchResponse({ chunks: [sseDataFrame("answer")] }));

    const { result } = renderHook(() => useAIResponseContext(), {
      wrapper: wrapperFor("ctx-config", "https://ctx.example.com"),
    });

    await act(async () => {
      await result.current.ask("question");
    });

    expect(fetchMock.mock.calls[0][0]).toBe("https://ctx.example.com/query-collection");
    expect(requestBody(fetchMock).config).toBe("ctx-config");
    expect(result.current.response).toBe("answer");
  });

  it("useAIConversationContext sends requests using the SearchConfigProvider's config and apiUrl", async () => {
    const fetchMock = stubFetch(async () => mockFetchResponse({ chunks: [sseDataFrame("answer")] }));

    const { result } = renderHook(() => useAIConversationContext(), {
      wrapper: wrapperFor("ctx-config", "https://ctx.example.com"),
    });

    await act(async () => {
      await result.current.ask("question");
    });

    expect(fetchMock.mock.calls[0][0]).toBe("https://ctx.example.com/query-collection");
    expect(requestBody(fetchMock).config).toBe("ctx-config");
    expect(result.current.messages).toEqual([
      { role: "user", content: "question" },
      { role: "assistant", content: "answer" },
    ]);
  });

  it("throws when used outside of SearchConfigProvider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useAIResponseContext())).toThrow(
      "useSearchConfig must be used within <InsytfulSearch.Provider>"
    );
    consoleError.mockRestore();
  });
});
