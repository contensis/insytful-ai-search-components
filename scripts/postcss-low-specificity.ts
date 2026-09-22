/**
 * PostCSS plugin: low-specificity scoping for the shipped stylesheet.
 *
 * Authors write plain scoped selectors:
 *
 *     .insytful-theme .insytful-search-message-input[data-embedded] .insytful-search-message-input-textarea
 *
 * and the build emits every compound except the last wrapped in `:where()`:
 *
 *     :where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-textarea
 *
 * `:where()` contributes zero specificity, so each rule weighs only its final
 * compound — one hook class for almost every rule. That is the sweet spot
 * for a component library rendered in the light DOM:
 *
 *   - A host `* { margin: 0; padding: 0 }` reset, or a bare `textarea {}`
 *     rule, is out-specified and can't strip the components' layout.
 *   - A consumer override written against the hook class (`.insytful-search-x`)
 *     ties on specificity and wins on source order, because consumer CSS
 *     (a `<Theme css>` <style>, a stylesheet imported after ours, the Web
 *     Component's `theme` attribute) always comes later. No `!important`.
 *
 * Cascade layers (`@layer`) would give consumers an even freer hand, but a
 * layered library loses to *every* unlayered host rule, including the
 * universal resets found on most sites — that is what broke the Overview.
 *
 * Selectors that already contain `:where(` are left alone (reset.css scopes
 * itself to zero specificity by hand), as are single-compound selectors
 * (`.insytful-theme { tokens }`, `.insytful-sr-only`) and anything inside
 * `@keyframes` / `@font-face`.
 */

type Node = {
  type: string;
  name?: string;
  parent?: Node | null;
  selectors?: string[];
  selector?: string;
};

const SKIP_AT_RULES = new Set(["keyframes", "-webkit-keyframes", "font-face", "page"]);

const isInsideSkippedAtRule = (node: Node) => {
  for (let p = node.parent; p; p = p.parent) {
    if (p.type === "atrule" && p.name && SKIP_AT_RULES.has(p.name)) return true;
  }
  return false;
};

/**
 * Split a complex selector into compounds and the combinators between them,
 * ignoring whitespace/combinators inside `()` and `[]` (so `:has(a > b)` and
 * `[class*="x y"]` stay intact).
 */
export const splitCompounds = (selector: string): { compounds: string[]; combinators: string[] } => {
  const compounds: string[] = [];
  const combinators: string[] = [];
  let depth = 0;
  let current = "";
  let pendingCombinator = "";

  const flushCompound = () => {
    if (!current) return;
    if (compounds.length > 0) combinators.push(pendingCombinator || " ");
    compounds.push(current);
    current = "";
    pendingCombinator = "";
  };

  for (const ch of selector) {
    if (ch === "(" || ch === "[") depth++;
    if (ch === ")" || ch === "]") depth--;
    if (depth === 0 && (ch === " " || ch === ">" || ch === "+" || ch === "~")) {
      flushCompound();
      if (ch !== " ") pendingCombinator = ch;
      continue;
    }
    current += ch;
  }
  flushCompound();
  return { compounds, combinators };
};

/** Wrap every compound but the last in `:where()`. */
export const transformSelector = (selector: string): string => {
  const trimmed = selector.trim();
  if (!trimmed || trimmed.includes(":where(")) return selector;

  const { compounds, combinators } = splitCompounds(trimmed);
  if (compounds.length < 2) return selector;

  const last = compounds[compounds.length - 1];
  const lastCombinator = combinators[combinators.length - 1];
  let ancestors = compounds[0];
  for (let i = 1; i < compounds.length - 1; i++) {
    const c = combinators[i - 1];
    ancestors += c === " " ? ` ${compounds[i]}` : ` ${c} ${compounds[i]}`;
  }
  const join = lastCombinator === " " ? " " : ` ${lastCombinator} `;
  return `:where(${ancestors})${join}${last}`;
};

export const lowSpecificity = () => ({
  postcssPlugin: "insytful-low-specificity",
  Rule(rule: Node) {
    if (!rule.selectors || isInsideSkippedAtRule(rule)) return;
    rule.selectors = rule.selectors.map(transformSelector);
  },
});
lowSpecificity.postcss = true;

/** Drop-in `css` block for every Vite config in this repo. */
export const cssConfig = { postcss: { plugins: [lowSpecificity()] } };
