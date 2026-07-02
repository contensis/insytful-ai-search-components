import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, renderHook } from "@testing-library/react";
import type { GoogleReCaptchaProvider as GoogleReCaptchaProviderType } from "react-google-recaptcha-v3";
import { RAGProvider, useRAGConfig } from "../rag-context";

const googleReCaptchaProvider = vi.fn(
  ({ children }: React.ComponentProps<typeof GoogleReCaptchaProviderType>) => <>{children}</>
);

vi.mock("react-google-recaptcha-v3", () => ({
  GoogleReCaptchaProvider: (props: React.ComponentProps<typeof GoogleReCaptchaProviderType>) =>
    googleReCaptchaProvider(props),
}));

describe("RAGProvider / useRAGConfig", () => {
  it("throws when useRAGConfig is used outside of RAGProvider", () => {
    // React logs the thrown render error to the console; silence it for this expected-failure case.
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useRAGConfig())).toThrow(
      "useRAGConfig must be used within RAGProvider"
    );
    consoleError.mockRestore();
  });

  it("exposes the config passed to RAGProvider", () => {
    const { result } = renderHook(() => useRAGConfig(), {
      wrapper: ({ children }) => (
        <RAGProvider config="my-config" baseUrl="https://api.example.com">
          {children}
        </RAGProvider>
      ),
    });

    expect(result.current).toEqual({
      config: "my-config",
      baseUrl: "https://api.example.com",
      recaptchaSiteKey: undefined,
    });
  });

  it("does not wrap children in GoogleReCaptchaProvider when no recaptchaSiteKey is set", () => {
    render(
      <RAGProvider config="my-config" baseUrl="https://api.example.com">
        <div>content</div>
      </RAGProvider>
    );

    expect(googleReCaptchaProvider).not.toHaveBeenCalled();
  });

  it("wraps children in GoogleReCaptchaProvider when a recaptchaSiteKey is set", () => {
    render(
      <RAGProvider config="my-config" baseUrl="https://api.example.com" recaptchaSiteKey="site-key">
        <div>content</div>
      </RAGProvider>
    );

    expect(googleReCaptchaProvider).toHaveBeenCalledWith(
      expect.objectContaining({ reCaptchaKey: "site-key" })
    );
  });
});
