import { default as React } from 'react';
export type SearchConfig = {
    /** A site's config alias or, with `aggregated`, an aggregated search's slug. */
    config: string;
    /**
     * Treat `config` as the slug of an aggregated search, which answers from
     * several sites' content under its own settings. Sessions, votes and usage
     * are keyed on the slug.
     */
    aggregated?: boolean;
    /** Root URL of the Insytful AI Search API. */
    apiUrl: string;
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
export declare const SearchConfigProvider: ({ children, apiUrl, config, aggregated, recaptchaSiteKey, }: {
    children: React.ReactNode;
    config: string;
    aggregated?: boolean;
    apiUrl: string;
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
