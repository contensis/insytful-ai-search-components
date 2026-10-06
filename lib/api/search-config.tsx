import React, { createContext, useContext } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export type SearchConfig = {
  config: string;
  baseUrl: string;
  recaptchaSiteKey?: string;
};

const SearchConfigContext = createContext<SearchConfig | null>(null);

/**
 * Shares the search connection config with everything below it. Exposed as
 * `InsytfulSearch.Provider`; components and hooks underneath can then omit
 * their own `options`.
 */
export const SearchConfigProvider = ({
  children,
  baseUrl,
  config,
  recaptchaSiteKey,
}: {
  children: React.ReactNode;
  config: string;
  baseUrl: string;
  recaptchaSiteKey?: string;
}) => {
  const content = (
    <SearchConfigContext.Provider value={{ config, baseUrl, recaptchaSiteKey }}>
      {children}
    </SearchConfigContext.Provider>
  );

  // only wrap in GoogleReCaptchaProvider if the site key exists
  if (recaptchaSiteKey) {
    return (
      <GoogleReCaptchaProvider
        reCaptchaKey={recaptchaSiteKey}
        scriptProps={{ async: true, defer: true, appendTo: "head" }}
      >
        {content}
      </GoogleReCaptchaProvider>
    );
  }

  return content;
};

/** The config from the nearest provider. Throws outside one. */
// eslint-disable-next-line react-refresh/only-export-components
export const useSearchConfig = () => {
  const ctx = useContext(SearchConfigContext);
  if (!ctx) throw new Error("useSearchConfig must be used within <InsytfulSearch.Provider>");
  return ctx;
};

/** The config from the nearest provider, or `null` outside one. */
// eslint-disable-next-line react-refresh/only-export-components
export const useSearchConfigSafe = () => useContext(SearchConfigContext);

/**
 * `options` when passed, otherwise the nearest provider's config. Lets a
 * component work standalone or inside `InsytfulSearch.Provider`. Not memoised:
 * callers that key effects on the result should memo on its fields.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useResolvedSearchConfig = (options?: SearchConfig): SearchConfig => {
  const ctx = useSearchConfigSafe();
  const resolved = options ?? ctx;
  if (!resolved) throw new Error("Pass `options` or wrap in <InsytfulSearch.Provider>");
  return resolved;
};
