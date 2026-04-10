import { FocusTrap } from 'focus-trap';
export type { FocusTrap };
/**
 * Create a focus trap around the dialog container with the same configuration
 * used by the React modal hook.
 *
 * @param dialogContainer  The dialog element inside the shadow root.
 * @param options.onDeactivate  Called when the trap deactivates (e.g. Escape
 *   press or outside click) — the caller should set `isOpen = false`.
 */
export declare function setupFocusTrap(dialogContainer: HTMLElement, options: {
    onDeactivate: () => void;
}): FocusTrap;
