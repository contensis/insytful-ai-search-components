/** Either an overflow container (the modal) or the window (in-page overview). */
export type Scroller = HTMLElement | Window;

const isWindow = (s: Scroller): s is Window => s === window;

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
export function scrollMessageToTop(
  scroller: Scroller,
  messageEl: HTMLElement,
  spacer: HTMLElement,
  offset = 0,
) {
  const viewport = isWindow(scroller) ? scroller.innerHeight : scroller.clientHeight;
  // Expand instantly (no transition) — direct DOM manipulation, immediate.
  spacer.style.transition = "none";
  spacer.style.height = `${viewport}px`;

  // Double rAF: the first frame lets pending attribute changes (e.g. `inert`
  // removal) and layout shifts land; the second guarantees layout is settled
  // before measuring positions.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const msgTop = messageEl.getBoundingClientRect().top;
      const top = isWindow(scroller)
        ? scroller.scrollY + msgTop - offset
        : scroller.scrollTop + (msgTop - scroller.getBoundingClientRect().top) - offset;
      scroller.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/** The most recent user message inside `root`, if any. */
export function lastUserMessageEl(root: ParentNode): HTMLElement | null {
  const els = root.querySelectorAll<HTMLElement>(".insytful-search-message[data-role='user']");
  return els[els.length - 1] ?? null;
}
