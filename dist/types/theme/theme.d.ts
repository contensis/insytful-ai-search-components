import { default as React } from 'react';
/**
 * Theme — opt-in styling boundary, following the pattern used by modern UI libraries.
 *
 * Every component always emits its `insytful-search-*` hook classes and
 * `data-*` state attributes. All CSS the library ships is scoped under
 * `.insytful-theme`, so:
 *
 *   - Without a <Theme> ancestor nothing matches: components are unstyled
 *     and you style them yourself against the hooks.
 *   - With a <Theme> ancestor they pick up the default look. Every rule is
 *     built at low specificity (ancestors wrapped in `:where()`, see
 *     lib/styles/index.css), so a consumer override against the hook class
 *     ties and wins on source order, while host resets (`* { padding: 0 }`)
 *     and bare element rules can't strip the components' layout.
 *
 * Portalled content (Search.Portal) is not a DOM descendant of this element,
 * so the portal reads ThemeContext and re-applies the theme on its mount.
 */
export type ThemeProps = {
    children: React.ReactNode;
    /**
     * Raw CSS applied alongside the theme, e.g. token overrides:
     *   `.insytful-theme { --insytful-brand-primary: #5128c3; }`
     * In light-DOM use this is emitted as a <style> next to the wrapper; in
     * the Shadow DOM portal it is injected inside the shadow root, where your
     * page stylesheet cannot reach. Prefer a normal stylesheet when you can.
     */
    css?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;
export declare const Theme: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    /**
     * Raw CSS applied alongside the theme, e.g. token overrides:
     *   `.insytful-theme { --insytful-brand-primary: #5128c3; }`
     * In light-DOM use this is emitted as a <style> next to the wrapper; in
     * the Shadow DOM portal it is injected inside the shadow root, where your
     * page stylesheet cannot reach. Prefer a normal stylesheet when you can.
     */
    css?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & React.RefAttributes<HTMLDivElement>>;
