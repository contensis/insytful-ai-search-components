/**
 * Built-in CTA icons — one shared module of stroke-based `currentColor` SVG
 * strings (≤~300 B each) consumed by both the React and Web Component
 * renderers (D9). `currentColor` strokes track the button's `-text` token on
 * hover and in dark themes. Unknown icon names render label-only.
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access; logic-only (no Tailwind classes) — importable by both entry points.
 */
/**
 * Looks up a built-in CTA icon by name.
 *
 * Guarded by a key-format check plus `Object.hasOwn` on a null-prototype
 * map, so prototype keys (`__proto__`, `constructor`, …) and arbitrary CMS
 * strings return `null` rather than resolving up the prototype chain.
 *
 * @param name - Icon name, e.g. `"phone"` — from `Cta.icon` or a per-type
 *   default.
 * @returns The inline `<svg>` markup string, or `null` for unknown names
 *   (callers render label-only).
 */
export declare function getCtaIcon(name: string): string | null;
