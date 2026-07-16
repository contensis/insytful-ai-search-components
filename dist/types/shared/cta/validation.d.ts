import { Cta } from '../../api/rag.types';
/**
 * Normalizes a raw URL string to a safe absolute `http:`/`https:` href, or
 * `null` when it fails to parse or carries any other scheme.
 *
 * - The allowlist is checked on `parsed.protocol` **after** WHATWG parsing —
 *   never on the raw string — so `JaVaScRiPt:`, `java\nscript:`, and
 *   control-char-prefixed schemes are auto-defeated by the parser's own
 *   normalization (which strips tabs/newlines/controls and lowercases the
 *   scheme). Passing a base does not sanitize: `javascript:` still parses.
 * - The caller must use the **returned** `parsed.href`, never the raw string —
 *   this kills `<base>`-tag hijack of relative URLs, `https:\\evil.com`
 *   backslash-parsing divergence, and middle-click-uses-raw-href bypass.
 * - Protocol-relative `//host/path` passes by design (cross-origin contact
 *   links are intended and resolve against the page origin).
 * - SSR/node-test safe: falls back to a placeholder base when no `location`
 *   exists — only the protocol check matters there.
 *
 * @internal Shared with `executeCta`'s defense-in-depth re-check.
 */
export declare function normalizeHttpUrl(url: string): string | null;
/**
 * Parses the raw `data:` payload of an SSE `cta` frame and returns sanitized
 * CTAs. This is the single place that knows the wire shape —
 * `{"ctas":[...]}` per the API contract — so the React hook and the Web
 * Component client cannot diverge on it (the WC originally passed the whole
 * `{ctas}` wrapper to `sanitizeCtas` and silently dropped every CTA).
 * Malformed JSON warns and returns empty: never fail an answer over a
 * decoration.
 */
export declare function ctasFromFrameData(data: string): Cta[];
/**
 * Sanitizes raw CMS CTA data into normalized `Cta` objects.
 *
 * Normalize-and-rewrite, not just filter: link URLs are rewritten to the
 * parsed `href`, phone numbers to `+`-and-digits, email bodies to `\r\n`
 * newlines, `intent` defaulted to `"secondary"`, `newTab` to `false`.
 * Unknown types and unknown fields are dropped/ignored; at most
 * {@link MAX_CTAS} CTAs are kept. Every drop logs
 * `console.warn("[Insytful] CTA dropped: …")`.
 *
 * Run exactly once per `cta` frame; the returned array (and each element)
 * is frozen for the message's lifetime, so renderers never re-derive.
 *
 * @param input - The parsed JSON payload of a `cta` SSE frame (untrusted).
 * @returns Clean, frozen CTAs — possibly empty, never `null`.
 */
export declare function sanitizeCtas(input: unknown): Cta[];
