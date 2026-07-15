import { default as React } from 'react';
import { Cta } from '../api/rag.types';
export type SearchCtasProps = {
    /** Sanitized CTAs (post-`sanitizeCtas`) to render; nothing renders when absent/empty. */
    ctas?: Cta[];
    className?: string;
};
/**
 * Search.Ctas — renders the CTA quick-actions row above an assistant answer.
 *
 * Thin renderer over the shared `ctaViewModel` (markup parity with the Web
 * Component's `renderCtaBar` is structural). Rendered internally by
 * Search.Messages inside each assistant message; also exported for custom
 * layouts. Returns `null` when there are no CTAs.
 *
 * A11y: the wrapper is `aria-live="off"` so an ancestor live region never
 * announces interactive content as flat prose; availability is announced once
 * via a visually-hidden `role="status"` cue instead. The row is a
 * `role="group"` labelled by the visible "Quick actions" micro-label, and
 * every chip is a separate tab stop.
 */
declare function SearchCtasImpl({ ctas, className }: SearchCtasProps): React.JSX.Element | null;
/** Memoized: `ctas` arrays are frozen per message, so re-renders during
 *  streaming are free. */
export declare const SearchCtas: React.MemoExoticComponent<typeof SearchCtasImpl>;
export {};
