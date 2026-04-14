/**
 * Focus Trap Setup — configures focus-trap for the web component dialog.
 *
 * Mirrors the React `useModalFocusTrap` hook from `lib/search/hooks.util.ts`
 * with identical options so keyboard/accessibility behaviour is consistent
 * across the React and web-component surfaces.
 */

import { createFocusTrap } from 'focus-trap';
import type { FocusTrap } from 'focus-trap';

export type { FocusTrap };

/**
 * Create a focus trap around the dialog container with the same configuration
 * used by the React modal hook.
 *
 * @param dialogContainer  The dialog element inside the shadow root.
 * @param options.onDeactivate  Called when the trap deactivates (e.g. Escape
 *   press or outside click) — the caller should set `isOpen = false`.
 */
export function setupFocusTrap(
  dialogContainer: HTMLElement,
  options: { onDeactivate: () => void },
): FocusTrap {
  return createFocusTrap(dialogContainer, {
    fallbackFocus: dialogContainer,
    initialFocus: () =>
      dialogContainer.querySelector<HTMLTextAreaElement>('textarea') ?? dialogContainer,
    escapeDeactivates: true,
    allowOutsideClick: true,
    clickOutsideDeactivates: (e: MouseEvent | TouchEvent) => {
      // Don't deactivate when the click lands on the toggle trigger — that
      // element lives in the light DOM and handles its own open/close toggle.
      // Deactivating here would cause a double-toggle (trap closes then
      // trigger re-opens).
      const isToggleButton = !!(e.target as Element)?.closest('[data-insytful-toggle]');
      return !isToggleButton;
    },
    returnFocusOnDeactivate: false,
    onDeactivate: options.onDeactivate,
  });
}
