/**
 * The shared CTA event bus — a single `EventTarget` on
 * `window.insytfulAISearchEvents`, shared by the React ESM bundle, the Web
 * Component IIFE, and host page scripts on the same page.
 *
 * Host scripts that may run before this package loads must use the guarded
 * form so first-writer wins either way:
 *
 * ```html
 * <script>
 *   (window.insytfulAISearchEvents ??= new EventTarget())
 *     .addEventListener("openWebChat", (e) => { ... });
 * </script>
 * ```
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access; logic-only (no Tailwind classes) — importable by both entry points.
 */
declare global {
    interface Window {
        /** Shared CTA event bus — see {@link getInsytfulAISearchEvents}. */
        insytfulAISearchEvents?: EventTarget;
    }
}
/**
 * Returns the shared CTA event bus, creating it on first use.
 *
 * - SSR-safe: returns `null` when no `window` exists (never throws at import
 *   or call time in node/SSR).
 * - Clobber-validated: an existing value is reused only if it is a real
 *   `EventTarget` that is **not** a DOM `Node` — markup like
 *   `<a id="insytfulAISearchEvents">` DOM-clobbers the global with an element
 *   (which IS an `EventTarget`), so plain `instanceof EventTarget` is not
 *   enough. Invalid values are replaced with a `[Insytful]` warn.
 * - Idempotent: repeated calls return the same instance.
 */
export declare function getInsytfulAISearchEvents(): EventTarget | null;
