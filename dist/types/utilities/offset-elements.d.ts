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
export declare const OFFSET_ATTR = "data-insytful-offset";
/** @deprecated 4.x alias of `data-insytful-offset`; removed in 5.0. */
export declare const LEGACY_OFFSET_ATTR = "data-insytful-modal-offset";
export declare const OFFSET_SELECTOR = "[data-insytful-offset], [data-insytful-modal-offset]";
/** Every marked element in document order (either attribute name). */
export declare function getOffsetElements(root?: ParentNode): HTMLElement[];
/** Sum of the elements' rendered heights, in px. */
export declare function measureOffsetHeight(els: readonly HTMLElement[]): number;
/**
 * Measure now and again whenever a marked element resizes. Returns a
 * disconnect function. Safe without ResizeObserver (older jsdom): the
 * initial measurement still fires.
 */
export declare function observeOffsetHeight(onChange: (height: number) => void, root?: ParentNode): () => void;
