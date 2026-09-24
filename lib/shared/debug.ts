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

function isDebugEnabled(): boolean {
  if (typeof window === "undefined") return false;
  if (window.INSYTFUL_DEBUG) return true;
  try {
    return window.localStorage.getItem("insytful:debug") === "1";
  } catch {
    return false; // storage blocked (privacy mode, sandboxed iframe)
  }
}

/** Never log tokens or request bodies: the flag is public and works on client sites. */
export function debug(scope: string, ...args: unknown[]): void {
  if (isDebugEnabled()) console.debug(`[Insytful:${scope}]`, ...args);
}
