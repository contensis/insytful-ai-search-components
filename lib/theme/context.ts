import { createContext, useContext } from "react";

/** Class every shipped rule is scoped under. Applied by <Theme> and mirrored
 *  onto Search.Portal's mount. */
export const THEME_CLASS = "insytful-theme";

export type ThemeContextValue = {
  /** Class the portal must place on its mount element. */
  className: string;
  /** Raw CSS injected inside the portal, after the base sheet (so it wins ties). */
  css?: string;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

/** `null` when there is no <Theme> ancestor, i.e. unstyled mode. */
export function useThemeContext(): ThemeContextValue | null {
  return useContext(ThemeContext);
}
