import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, renderHook } from "@testing-library/react";
import type { GoogleReCaptchaProvider as GoogleReCaptchaProviderType } from "react-google-recaptcha-v3";
import {
  SearchConfigProvider,
  useResolvedSearchConfig,
  useSearchConfig,
  useSearchConfigSafe,
} from "../search-config";
import { Provider } from "../../search";

const googleReCaptchaProvider = vi.fn(
  ({ children }: React.ComponentProps<typeof GoogleReCaptchaProviderType>) => <>{children}</>
);

vi.mock("react-google-recaptcha-v3", () => ({
  GoogleReCaptchaProvider: (props: React.ComponentProps<typeof GoogleReCaptchaProviderType>) =>
    googleReCaptchaProvider(props),
}));

describe("SearchConfigProvider / useSearchConfig", () => {
  it("throws when useSearchConfig is used outside of SearchConfigProvider", () => {
    // React logs the thrown render error to the console; silence it for this expected-failure case.
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useSearchConfig())).toThrow(
      "useSearchConfig must be used within <InsytfulSearch.Provider>"
    );
    consoleError.mockRestore();
  });

  it("exposes the config passed to SearchConfigProvider", () => {
    const { result } = renderHook(() => useSearchConfig(), {
      wrapper: ({ children }) => (
        <SearchConfigProvider config="my-config" apiUrl="https://api.example.com">
          {children}
        </SearchConfigProvider>
      ),
    });

    expect(result.current).toEqual({
      config: "my-config",
      apiUrl: "https://api.example.com",
      recaptchaSiteKey: undefined,
    });
  });

  it("does not wrap children in GoogleReCaptchaProvider when no recaptchaSiteKey is set", () => {
    render(
      <SearchConfigProvider config="my-config" apiUrl="https://api.example.com">
        <div>content</div>
      </SearchConfigProvider>
    );

    expect(googleReCaptchaProvider).not.toHaveBeenCalled();
  });

  it("wraps children in GoogleReCaptchaProvider when a recaptchaSiteKey is set", () => {
    render(
      <SearchConfigProvider config="my-config" apiUrl="https://api.example.com" recaptchaSiteKey="site-key">
        <div>content</div>
      </SearchConfigProvider>
    );

    expect(googleReCaptchaProvider).toHaveBeenCalledWith(
      expect.objectContaining({ reCaptchaKey: "site-key" })
    );
  });
});

describe("useSearchConfigSafe / useResolvedSearchConfig", () => {
  const providerConfig = { config: "provider-config", apiUrl: "https://provider.example.com" };
  const propConfig = { config: "prop-config", apiUrl: "https://prop.example.com" };
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <SearchConfigProvider {...providerConfig}>{children}</SearchConfigProvider>
  );

  it("useSearchConfigSafe returns null outside a provider", () => {
    const { result } = renderHook(() => useSearchConfigSafe());
    expect(result.current).toBeNull();
  });

  it("prefers passed options over the provider", () => {
    const { result } = renderHook(() => useResolvedSearchConfig(propConfig), { wrapper });
    expect(result.current).toBe(propConfig);
  });

  it("falls back to the provider when no options are passed", () => {
    const { result } = renderHook(() => useResolvedSearchConfig(), { wrapper });
    expect(result.current).toMatchObject(providerConfig);
  });

  it("throws with both fixes named when there are no options and no provider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useResolvedSearchConfig())).toThrow(
      "Pass `options` or wrap in <InsytfulSearch.Provider>"
    );
    consoleError.mockRestore();
  });

  it("InsytfulSearch.Provider is SearchConfigProvider", () => {
    expect(Provider).toBe(SearchConfigProvider);
  });
});

describe("nested SearchConfigProvider", () => {
  it("wraps in GoogleReCaptchaProvider once when the outer provider has the same key", () => {
    googleReCaptchaProvider.mockClear();
    render(
      <SearchConfigProvider config="outer" apiUrl="https://api.example.com" recaptchaSiteKey="site-key">
        <SearchConfigProvider config="inner" apiUrl="https://api.example.com" recaptchaSiteKey="site-key">
          <div>content</div>
        </SearchConfigProvider>
      </SearchConfigProvider>
    );

    expect(googleReCaptchaProvider).toHaveBeenCalledTimes(1);
  });

  it("wraps again when the inner provider has a different key", () => {
    googleReCaptchaProvider.mockClear();
    render(
      <SearchConfigProvider config="outer" apiUrl="https://api.example.com" recaptchaSiteKey="outer-key">
        <SearchConfigProvider config="inner" apiUrl="https://api.example.com" recaptchaSiteKey="inner-key">
          <div>content</div>
        </SearchConfigProvider>
      </SearchConfigProvider>
    );

    expect(googleReCaptchaProvider).toHaveBeenCalledTimes(2);
    expect(googleReCaptchaProvider).toHaveBeenLastCalledWith(
      expect.objectContaining({ reCaptchaKey: "inner-key" })
    );
  });
});
