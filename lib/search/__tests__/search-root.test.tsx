import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import type { GoogleReCaptchaProvider as GoogleReCaptchaProviderType } from "react-google-recaptcha-v3";
import { SearchRoot } from "../search-root";

const googleReCaptchaProvider = vi.fn(
  ({ children }: React.ComponentProps<typeof GoogleReCaptchaProviderType>) => <>{children}</>
);

vi.mock("react-google-recaptcha-v3", () => ({
  GoogleReCaptchaProvider: (props: React.ComponentProps<typeof GoogleReCaptchaProviderType>) =>
    googleReCaptchaProvider(props),
  useGoogleReCaptcha: () => ({ executeRecaptcha: vi.fn().mockResolvedValue("token") }),
}));

describe("SearchRoot recaptcha wiring", () => {
  it("does not wrap children in GoogleReCaptchaProvider when no recaptchaSiteKey is set", () => {
    render(
      <SearchRoot options={{ config: "my-config", baseUrl: "https://api.example.com" }}>
        <div>content</div>
      </SearchRoot>
    );

    expect(googleReCaptchaProvider).not.toHaveBeenCalled();
  });

  it("passes options.recaptchaSiteKey through to GoogleReCaptchaProvider", () => {
    render(
      <SearchRoot
        options={{
          config: "my-config",
          baseUrl: "https://api.example.com",
          recaptchaSiteKey: "site-key",
        }}
      >
        <div>content</div>
      </SearchRoot>
    );

    expect(googleReCaptchaProvider).toHaveBeenCalledWith(
      expect.objectContaining({ reCaptchaKey: "site-key" })
    );
  });
});
