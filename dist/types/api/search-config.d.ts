import { default as React } from 'react';
export type SearchConfig = {
    /**
     * A site's config alias. With `searchConfig` it is optional and names the
     * member site the search is embedded on, whose pages are favoured; an alias
     * that isn't a member is ignored.
     */
    config?: string;
    /**
     * The slug of an aggregated search, which answers from several sites' content
     * under its own settings. Sessions, votes and usage are keyed on the slug.
     */
    searchConfig?: string;
    baseUrl: string;
    /**
     * Optional reCAPTCHA site key for human verification. When set, every query
     * needs a successful reCAPTCHA challenge before it reaches the backend.
     */
    recaptchaSiteKey?: string;
};
/**
 * Shares the search connection config with everything below it. Exposed as
 * `InsytfulSearch.Provider`; components and hooks underneath can then omit
 * their own `options`.
 */
export declare const SearchConfigProvider: ({ children, baseUrl, config, searchConfig, recaptchaSiteKey, }: {
    children: React.ReactNode;
    config?: string;
    searchConfig?: string;
    baseUrl: string;
    recaptchaSiteKey?: string;
}) => React.JSX.Element;
/** The config from the nearest provider. Throws outside one. */
export declare const useSearchConfig: () => SearchConfig;
/** The config from the nearest provider, or `null` outside one. */
export declare const useSearchConfigSafe: () => SearchConfig | null;
/**
 * `options` when passed, otherwise the nearest provider's config. Lets a
 * component work standalone or inside `InsytfulSearch.Provider`. Not memoised:
 * callers that key effects on the result should memo on its fields.
 */
export declare const useResolvedSearchConfig: (options?: SearchConfig) => SearchConfig;
