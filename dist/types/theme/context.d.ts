/** Class every shipped rule is scoped under. Applied by <Theme> and mirrored
 *  onto Search.Portal's mount. */
export declare const THEME_CLASS = "insytful-theme";
export type ThemeContextValue = {
    /** Class the portal must place on its mount element. */
    className: string;
    /** Raw CSS injected inside the portal (unlayered, so it wins). */
    css?: string;
};
export declare const ThemeContext: import('react').Context<ThemeContextValue | null>;
/** `null` when there is no <Theme> ancestor, i.e. unstyled mode. */
export declare function useThemeContext(): ThemeContextValue | null;
