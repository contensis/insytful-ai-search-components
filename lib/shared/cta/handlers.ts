/**
 * CTA execution — default actions plus a typed, window-keyed handler
 * registry so embedding apps can override how each CTA type is executed.
 *
 * The registry backing store lives on `window` (non-enumerable) for the same
 * reason the bus does: the React ESM bundle and the Web Component IIFE on one
 * page must share a single registry, or `window.InsytfulSearch
 * .registerCtaHandler` and the npm import silently write to different copies.
 * Two component *instances* on a page share it by design.
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access; logic-only (no Tailwind classes) — importable by both entry points.
 */
import type { Cta, CtaEmail } from "../../api/rag.types";
import { getInsytfulAISearchEvents } from "./bus";
import { normalizeHttpUrl } from "./validation";

/** Per-variant handler signatures, keyed on the closed `Cta["type"]` union. */
export type CtaHandlerMap = {
  [K in Cta["type"]]: (cta: Extract<Cta, { type: K }>) => void;
};

type HandlerStore = Partial<CtaHandlerMap>;

declare global {
  interface Window {
    /** Shared CTA handler registry backing store — see `registerCtaHandler`. */
    __insytfulCtaHandlers?: HandlerStore;
  }
}

/** SSR fallback store, used only when no `window` exists. */
let moduleLocalStore: HandlerStore | undefined;

/**
 * Returns the shared handler store, creating it idempotently on first use.
 * Null-prototype object so `__proto__`/`constructor` keys are inert; defined
 * non-enumerably on `window` (configurable, so tests can delete it).
 */
function getHandlerStore(): HandlerStore {
  if (typeof window === "undefined") {
    return (moduleLocalStore ??= Object.create(null) as HandlerStore);
  }
  let store = window.__insytfulCtaHandlers;
  if (store === undefined) {
    store = Object.create(null) as HandlerStore;
    Object.defineProperty(window, "__insytfulCtaHandlers", {
      value: store,
      enumerable: false,
      configurable: true,
      writable: false,
    });
  }
  return store;
}

/**
 * Registers an override handler for one CTA type, replacing the built-in
 * default action for that type. Displacing the built-in default logs a
 * `[Insytful]` warn once (re-registering over an existing override does not).
 *
 * @param type - One of the closed `Cta["type"]` union — the sanitizer drops
 *   unknown types, so an open string key could never fire (D5).
 * @param handler - Receives the narrowed CTA variant for `type`.
 * @returns An unregister function that restores the previous handler (or the
 *   built-in default when there was none) — use it for temporary overrides
 *   and test cleanup.
 */
export function registerCtaHandler<K extends Cta["type"]>(
  type: K,
  handler: CtaHandlerMap[K],
): () => void {
  const store = getHandlerStore();
  const previous = Object.hasOwn(store, type) ? store[type] : undefined;
  if (previous === undefined) {
    console.warn(`[Insytful] Overriding the built-in "${type}" CTA handler`);
  }
  store[type] = handler;
  let unregistered = false;
  return () => {
    if (unregistered) return;
    unregistered = true;
    if (previous === undefined) delete store[type];
    else store[type] = previous;
  };
}

/**
 * Navigation seam — the single place default handlers touch
 * `window.location`/`window.open`, so tests can `vi.spyOn` it (jsdom cannot
 * actually navigate).
 *
 * @internal Exported for tests only; not part of the public API.
 */
export const ctaNavigation = {
  /** Same-tab navigation (tel:, mailto:, and same-tab links). */
  assign(url: string): void {
    window.location.href = url;
  },
  /** New-tab navigation for `newTab` links. */
  openTab(url: string): void {
    window.open(url, "_blank", "noopener,noreferrer");
  },
};

/**
 * Builds an RFC 6068 `mailto:` URI from a sanitized email CTA.
 *
 * `encodeURIComponent` (percent-encoding) is used deliberately — never
 * `URLSearchParams`, whose form encoding turns spaces into `+`, which mail
 * clients render literally. The sanitizer already normalized body newlines
 * to `\r\n`, so they encode to `%0D%0A` here. Query keys are limited to
 * exactly `subject`/`body` (what modern clients honor, RFC 6068 §7).
 *
 * @internal Consumed by the default email handler and the view model.
 */
export function buildMailtoHref(
  cta: Pick<CtaEmail, "email" | "subject" | "body">,
): string {
  const params: string[] = [];
  if (cta.subject !== undefined) {
    params.push(`subject=${encodeURIComponent(cta.subject)}`);
  }
  if (cta.body !== undefined) {
    params.push(`body=${encodeURIComponent(cta.body)}`);
  }
  return `mailto:${cta.email}${params.length > 0 ? `?${params.join("&")}` : ""}`;
}

/**
 * Built-in default actions. Kept **synchronous**: an `await` between the user
 * gesture and `window.open`/navigation leaves the gesture context and wakes
 * popup blockers.
 */
const defaultHandlers: CtaHandlerMap = {
  call: (cta) => ctaNavigation.assign(`tel:${cta.phone}`),
  email: (cta) => ctaNavigation.assign(buildMailtoHref(cta)),
  link: (cta) =>
    cta.newTab ? ctaNavigation.openTab(cta.url) : ctaNavigation.assign(cta.url),
  event: (cta) =>
    getInsytfulAISearchEvents()?.dispatchEvent(
      new CustomEvent(cta.event, { detail: cta.detail ?? {} }),
    ),
};

/**
 * Executes a CTA: runs the registered override (or the built-in default),
 * then dispatches the generic `insytful-cta` observability event on the
 * shared bus — from inside here, so handler overrides cannot silently kill
 * it and programmatic execution is as observable as a click (D8).
 *
 * Defense-in-depth: because this is exported, hosts can pass hand-built
 * objects that never went through `sanitizeCtas`, so the link protocol
 * allowlist is re-asserted here; a non-http(s) URL blocks execution (and the
 * observability dispatch) with a `[Insytful]` warn.
 *
 * The `insytful-cta` detail is `{ name, cta }`, where `name` is the CMS
 * event name for `event` CTAs and the CTA type otherwise.
 */
export function executeCta(cta: Cta): void {
  let resolved = cta;
  if (cta.type === "link") {
    const href = normalizeHttpUrl(cta.url);
    if (href === null) {
      console.warn(`[Insytful] CTA blocked: link url rejected: ${cta.url}`);
      return;
    }
    if (href !== cta.url) resolved = { ...cta, url: href };
  }

  const store = getHandlerStore();
  const handler = Object.hasOwn(store, resolved.type)
    ? store[resolved.type]
    : defaultHandlers[resolved.type];
  // Correlated-union cast: `handler` is the entry keyed by `resolved.type`,
  // so it accepts exactly this variant — TypeScript just can't correlate the
  // two lookups across the union.
  (handler as (c: Cta) => void)(resolved);

  getInsytfulAISearchEvents()?.dispatchEvent(
    new CustomEvent("insytful-cta", {
      detail: {
        name: resolved.type === "event" ? resolved.event : resolved.type,
        cta: resolved,
      },
    }),
  );
}
