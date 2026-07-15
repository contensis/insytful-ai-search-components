import { Cta, CtaEmail } from '../../api/rag.types';
/** Per-variant handler signatures, keyed on the closed `Cta["type"]` union. */
export type CtaHandlerMap = {
    [K in Cta["type"]]: (cta: Extract<Cta, {
        type: K;
    }>) => void;
};
type HandlerStore = Partial<CtaHandlerMap>;
declare global {
    interface Window {
        /** Shared CTA handler registry backing store — see `registerCtaHandler`. */
        __insytfulCtaHandlers?: HandlerStore;
    }
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
export declare function registerCtaHandler<K extends Cta["type"]>(type: K, handler: CtaHandlerMap[K]): () => void;
/**
 * True when a host registered an override for this CTA type via
 * `registerCtaHandler`. Renderers use this to pick the anchor click path:
 * native navigation when no override exists, `preventDefault` + `executeCta`
 * when one does. Read-only — never creates the backing store, and clicks only
 * happen in a browser, so SSR returns false.
 */
export declare function hasCtaHandlerOverride(type: Cta["type"]): boolean;
/**
 * Dispatches the generic `insytful-cta` observability event on the shared bus
 * without executing the CTA — for the anchor default path, where navigation
 * is native and `executeCta` must not run (it would navigate a second time).
 * `executeCta` dispatches this same event after executing (D8).
 */
export declare function dispatchCtaObservability(cta: Cta): void;
/**
 * Navigation seam — the single place default handlers touch
 * `window.location`/`window.open`, so tests can `vi.spyOn` it (jsdom cannot
 * actually navigate).
 *
 * @internal Exported for tests only; not part of the public API.
 */
export declare const ctaNavigation: {
    /** Same-tab navigation (tel:, mailto:, and same-tab links). */
    assign(url: string): void;
    /** New-tab navigation for `newTab` links. */
    openTab(url: string): void;
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
export declare function buildMailtoHref(cta: Pick<CtaEmail, "email" | "subject" | "body">): string;
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
export declare function executeCta(cta: Cta): void;
export {};
