/** Either an overflow container (the modal) or the window (in-page overview). */
export type Scroller = HTMLElement | Window;
/**
 * Scroll a message element to the top of its scroller.
 *
 * Inflates `spacer` to one viewport of height first so the browser has room
 * to scroll before the reply has streamed in. Uses scrollTo on the scroller
 * rather than scrollIntoView, which would also scroll ancestors of a Shadow
 * DOM portal. Callers collapse the spacer when the reply finishes.
 *
 * @param offset - px to leave above the message (e.g. a fixed site header).
 */
export declare function scrollMessageToTop(scroller: Scroller, messageEl: HTMLElement, spacer: HTMLElement, offset?: number): void;
/** The most recent user message inside `root`, if any. */
export declare function lastUserMessageEl(root: ParentNode): HTMLElement | null;
