/**
 * CTA sanitization — the single choke point between raw CMS data and every
 * renderer/handler ("parse, don't validate"). Output objects are built clean
 * (never spread from raw input), normalized, and frozen; renderers and
 * handlers only ever see post-invariant values, never raw CMS strings.
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access; logic-only (no Tailwind classes) — importable by both entry points.
 */
import type { Cta, CtaIntent } from "../../api/rag.types";

/** Maximum CTAs kept per call — guards against CMS-driven layout abuse. */
const MAX_CTAS = 8;
/** Maximum label length; longer labels are dropped, not truncated. */
const MAX_LABEL_LENGTH = 160;

/**
 * Phone shape gate: optional `+`, then 3-32 of digits/space/`()`/`.`/`-`.
 * The bare character class accepts `"---"`, so a separate ≥3-digits check
 * is applied alongside it.
 */
const PHONE_PATTERN = /^\+?[\d\s().-]{3,32}$/;

/**
 * Strict email allowlist. Deliberately rejects `%` (a pre-encoded `%0A`
 * smuggles bcc headers through denylists), whitespace, `;`, `,`, `?`, `&`.
 */
const EMAIL_PATTERN = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

/** Event names: word char first, then word chars / `.` / `-`, ≤64 total. */
const EVENT_NAME_PATTERN = /^[\w][\w.-]{0,63}$/;

/** C0 controls (CR/LF included) + DEL — stripped from mailto subjects. */
// eslint-disable-next-line no-control-regex
const C0_CONTROLS = /[\u0000-\u001F\u007F]/g;

/** Keys stripped recursively from `event` CTA `detail` payloads. */
const DANGEROUS_KEYS = new Set(["__proto__", "constructor", "prototype"]);

/** Maximum nesting depth allowed inside an `event` CTA `detail`. */
const MAX_DETAIL_DEPTH = 4;
/** Maximum JSON-serialized size (bytes) of an `event` CTA `detail`. */
const MAX_DETAIL_BYTES = 4096;

function warnDropped(reason: string): void {
  console.warn(`[Insytful] CTA dropped: ${reason}`);
}

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
export function normalizeHttpUrl(url: string): string | null {
  const base =
    typeof location !== "undefined"
      ? location.origin
      : "https://placeholder.invalid";
  let parsed: URL;
  try {
    parsed = new URL(url, base);
  } catch {
    return null;
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
  return parsed.href;
}

/** JSON-safe primitive check (functions/symbols/bigint/undefined are not). */
function isJsonPrimitive(value: unknown): value is string | number | boolean | null {
  return (
    value === null ||
    typeof value === "string" ||
    typeof value === "boolean" ||
    (typeof value === "number" && Number.isFinite(value))
  );
}

/**
 * Recursively copies a `detail` value, stripping prototype-pollution keys
 * (`__proto__`/`constructor`/`prototype`) and any non-JSON-safe values.
 * Values nested deeper than {@link MAX_DETAIL_DEPTH} are omitted.
 * Returns `undefined` for values that cannot be represented at all.
 */
function sanitizeDetailValue(value: unknown, depth: number): unknown {
  if (isJsonPrimitive(value)) return value;
  if (depth >= MAX_DETAIL_DEPTH) return undefined;
  if (Array.isArray(value)) {
    const out: unknown[] = [];
    for (const item of value) {
      const clean = sanitizeDetailValue(item, depth + 1);
      if (clean !== undefined) out.push(clean);
    }
    return out;
  }
  if (typeof value === "object" && value !== null) {
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(value)) {
      if (DANGEROUS_KEYS.has(key)) continue;
      const clean = sanitizeDetailValue(
        (value as Record<string, unknown>)[key],
        depth + 1,
      );
      // Assignment is safe: dangerous keys are skipped above, so no key here
      // can hit an Object.prototype setter.
      if (clean !== undefined) out[key] = clean;
    }
    return out;
  }
  return undefined; // function, symbol, bigint, non-finite number, …
}

/**
 * Sanitizes an `event` CTA's `detail`: strips dangerous keys and non-JSON
 * values, caps depth at {@link MAX_DETAIL_DEPTH} and serialized size at
 * {@link MAX_DETAIL_BYTES}. Returns `null` when the detail is unusable
 * (not a plain object, or over the size cap) — the whole CTA is dropped so a
 * host doing `lodash.merge(config, e.detail)` can never receive an oversized
 * or pollutable payload.
 */
function sanitizeDetail(raw: unknown): Record<string, unknown> | null {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }
  const clean = sanitizeDetailValue(raw, 0) as Record<string, unknown>;
  let serialized: string;
  try {
    serialized = JSON.stringify(clean);
  } catch {
    return null;
  }
  if (new TextEncoder().encode(serialized).length > MAX_DETAIL_BYTES) {
    return null;
  }
  return clean;
}

/** Normalizes `intent` to the union; anything but `"primary"` is secondary. */
function normalizeIntent(raw: unknown): CtaIntent {
  return raw === "primary" ? "primary" : "secondary";
}

/**
 * Builds one clean, frozen `Cta` from a raw item, or returns `null` (with a
 * `[Insytful]` warn) when any rule fails. Fields are copied individually —
 * raw input is never spread, so unknown fields (and prototype-pollution keys
 * used as field names) are inert by construction.
 */
function sanitizeCta(raw: unknown): Cta | null {
  if (typeof raw !== "object" || raw === null) {
    warnDropped("not an object");
    return null;
  }
  const item = raw as Record<string, unknown>;

  const label = item.label;
  if (typeof label !== "string" || label.length === 0) {
    warnDropped("missing or empty label");
    return null;
  }
  if (label.length > MAX_LABEL_LENGTH) {
    warnDropped(`label exceeds ${MAX_LABEL_LENGTH} characters`);
    return null;
  }

  const intent = normalizeIntent(item.intent);
  const icon = typeof item.icon === "string" ? item.icon : undefined;
  const common = icon === undefined ? { label, intent } : { label, intent, icon };

  switch (item.type) {
    case "link": {
      if (typeof item.url !== "string") {
        warnDropped("link CTA has no url");
        return null;
      }
      const href = normalizeHttpUrl(item.url);
      if (href === null) {
        warnDropped(`link url rejected: ${item.url}`);
        return null;
      }
      return Object.freeze({
        type: "link",
        ...common,
        url: href, // always the parsed/normalized href, never the raw string
        newTab: item.newTab === true, // default false
      });
    }
    case "call": {
      const phone = item.phone;
      if (
        typeof phone !== "string" ||
        !PHONE_PATTERN.test(phone) ||
        (phone.match(/\d/g)?.length ?? 0) < 3
      ) {
        warnDropped("call CTA has an invalid phone number");
        return null;
      }
      // Normalize to `+`-and-digits (RFC 3966): the pretty form belongs in
      // the label; spaces/parens are invalid in a tel: URI anyway.
      const normalized =
        (phone.trimStart().startsWith("+") ? "+" : "") +
        phone.replace(/\D/g, "");
      return Object.freeze({ type: "call", ...common, phone: normalized });
    }
    case "email": {
      const email = item.email;
      if (typeof email !== "string" || !EMAIL_PATTERN.test(email)) {
        warnDropped("email CTA has an invalid address");
        return null;
      }
      const subject =
        typeof item.subject === "string"
          ? item.subject.replace(C0_CONTROLS, "")
          : undefined;
      // Normalize body newlines to \r\n per RFC 6068; percent-encoding
      // happens in the mailto builder, not here.
      const body =
        typeof item.body === "string"
          ? item.body.replace(/\r\n|\r|\n/g, "\r\n")
          : undefined;
      return Object.freeze({
        type: "email",
        ...common,
        email,
        ...(subject !== undefined ? { subject } : {}),
        ...(body !== undefined ? { body } : {}),
      });
    }
    case "event": {
      const name = item.event;
      if (typeof name !== "string" || !EVENT_NAME_PATTERN.test(name)) {
        warnDropped("event CTA has an invalid event name");
        return null;
      }
      if (item.detail === undefined) {
        return Object.freeze({ type: "event", ...common, event: name });
      }
      const detail = sanitizeDetail(item.detail);
      if (detail === null) {
        warnDropped("event CTA detail is not a plain object within size caps");
        return null;
      }
      return Object.freeze({
        type: "event",
        ...common,
        event: name,
        detail: Object.freeze(detail),
      });
    }
    default:
      warnDropped(`unknown type: ${String(item.type)}`);
      return null;
  }
}

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
export function sanitizeCtas(input: unknown): Cta[] {
  if (!Array.isArray(input)) {
    warnDropped("payload is not an array");
    return Object.freeze([]) as unknown as Cta[];
  }
  const out: Cta[] = [];
  for (const raw of input) {
    if (out.length >= MAX_CTAS) {
      warnDropped(`more than ${MAX_CTAS} CTAs in one payload`);
      break;
    }
    let cta: Cta | null;
    try {
      cta = sanitizeCta(raw);
    } catch {
      // A hostile getter or exotic object threw mid-read — drop the item.
      warnDropped("item threw during sanitization");
      cta = null;
    }
    if (cta !== null) out.push(cta);
  }
  return Object.freeze(out) as Cta[];
}
