/**
 * Opt-in debug logging. Off unless the page sets one of:
 *   localStorage.setItem("insytful:debug", "1")   // survives reloads
 *   window.INSYTFUL_DEBUG = true                   // this page only
 *
 * `lib/shared/` invariants: no React imports; window is only read inside the
 * call, never at module top level — importable by both entry points.
 */
declare global {
    interface Window {
        INSYTFUL_DEBUG?: boolean;
    }
}
/** Never log tokens or request bodies: the flag is public and works on client sites. */
export declare function debug(scope: string, ...args: unknown[]): void;
