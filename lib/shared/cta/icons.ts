/**
 * Built-in CTA icons — one shared module of stroke-based `currentColor` SVG
 * strings (≤~300 B each) consumed by both the React and Web Component
 * renderers (D9). `currentColor` strokes track the button's `-text` token on
 * hover and in dark themes. Unknown icon names render label-only.
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access; logic-only (no Tailwind classes) — importable by both entry points.
 */

/** Shared `<svg>` attributes: 24px grid, stroke-only, hidden from AT. */
const SVG_OPEN =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';

/** Builds one single-path icon string. */
function icon(d: string): string {
  return `${SVG_OPEN}<path d="${d}"/></svg>`;
}

/**
 * Icon map — null-prototype so `__proto__`/`constructor` lookups are inert.
 */
const CTA_ICONS: Record<string, string> = Object.create(null);
CTA_ICONS.phone = icon(
  "M6 3h3.5l1.7 4.3-2.4 1.9a12.5 12.5 0 0 0 6 6l1.9-2.4L21 14.5V18a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3z",
);
CTA_ICONS.email = icon(
  "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 6.5 8-6.5",
);
CTA_ICONS.external = icon(
  "M14 4h6v6m0-6L10 14m8-1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6",
);
CTA_ICONS.chat = icon(
  "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2z",
);

/** Icon keys must be short identifier-ish names (CMS `icon` is untrusted). */
const ICON_KEY_PATTERN = /^[a-z][a-z0-9_-]{0,31}$/i;

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
export function getCtaIcon(name: string): string | null {
  if (typeof name !== "string" || !ICON_KEY_PATTERN.test(name)) return null;
  return Object.hasOwn(CTA_ICONS, name) ? CTA_ICONS[name] : null;
}
