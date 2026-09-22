/**
 * Sticky host chrome (site header, notification banner, cookie bar) that the
 * library's UI must clear. Hosts mark each such element with
 * `data-insytful-offset`; the library sums their rendered heights and keeps
 * the sum live with a ResizeObserver, so breakpoint changes and banners that
 * appear or dismiss are picked up without any host code.
 *
 * Used by Search.Root / <insytful-search> to push the full-bleed modal down,
 * and by Search.Overview to keep a follow-up question clear of the header
 * when it scrolls it to the top of the page.
 */

export const OFFSET_ATTR = "data-insytful-offset";

/** @deprecated 4.x alias of `data-insytful-offset`; removed in 5.0. */
export const LEGACY_OFFSET_ATTR = "data-insytful-modal-offset";

export const OFFSET_SELECTOR = `[${OFFSET_ATTR}], [${LEGACY_OFFSET_ATTR}]`;

/** Every marked element in document order (either attribute name). */
export function getOffsetElements(root: ParentNode = document): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(OFFSET_SELECTOR));
}

/** Sum of the elements' rendered heights, in px. */
export function measureOffsetHeight(els: readonly HTMLElement[]): number {
  return els.reduce((h, el) => h + el.offsetHeight, 0);
}

/**
 * Measure now and again whenever a marked element resizes. Returns a
 * disconnect function. Safe without ResizeObserver (older jsdom): the
 * initial measurement still fires.
 */
export function observeOffsetHeight(
  onChange: (height: number) => void,
  root: ParentNode = document,
): () => void {
  const els = getOffsetElements(root);
  const measure = () => onChange(measureOffsetHeight(els));
  measure();
  if (els.length === 0 || typeof ResizeObserver === "undefined") return () => {};
  const ro = new ResizeObserver(measure);
  els.forEach((el) => ro.observe(el));
  return () => ro.disconnect();
}
