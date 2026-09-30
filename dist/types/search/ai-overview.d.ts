import { default as React } from 'react';
import { Cta } from '../api';
import { SearchSkeletonProps } from './skeleton';
import { SearchErrorCalloutCta } from './search-messages';
import { SearchOverviewFeedback } from './feedback-reporting';
/**
 * "keyword" (default) is a single answer with a Show more toggle.
 * "conversational" keeps a thread: expanding the answer reveals a follow-up
 * input and each follow-up renders beneath the first answer.
 */
export type SearchOverviewType = "keyword" | "conversational";
export type SearchOverviewProp = {
    className?: string;
    type?: SearchOverviewType;
    icon?: React.ReactNode;
    heading?: string;
    hLevel?: number;
    options: {
        config: string;
        baseUrl: string;
        recaptchaSiteKey?: string;
    };
    term: string;
    /** Controlled expansion. When set, the component no longer owns the
     *  expanded state and reports every change via `onExpandedChange`. */
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    /** Whether a collapsed overview clips to the teaser height with a Show more
     *  toggle. "auto" (default) does so only when the answer overflows that
     *  height; `true` always does (e.g. a results tab that wants a way into the
     *  AI view even for a short answer); `false` never does. */
    collapsible?: "auto" | boolean;
    /** Hold the collapsed teaser's footprint from the first frame, so the page
     *  below doesn't jump as the answer loads and streams: the body is never
     *  shorter than the teaser while collapsed. The Show more toggle still
     *  appears with the answer, below the box.
     *  `true` (default) uses a 220px teaser; a number (px) sets the teaser
     *  height too; `false` lets the overview size to its content (the old
     *  behaviour) and avoids white space under a short answer. The height is
     *  exposed on the root as `--insytful-overview-collapsed-height`. */
    reserve?: boolean | number;
    isDevMode?: boolean;
    searching?: SearchSkeletonProps["messages"];
    style?: React.CSSProperties;
    renderMarkdown?: (markdown: string) => React.ReactNode;
    onCtaClick?: (cta: Cta) => void;
    error?: {
        title?: string;
        text?: string;
        cta?: SearchErrorCalloutCta;
    };
    /** Placeholder for the follow-up input (conversational only). */
    placeholder?: string;
    /** Small print rendered under the answer (and thread). */
    disclaimer?: React.ReactNode;
    /** Helpful / unhelpful vote and report link under the answer. */
    feedback?: SearchOverviewFeedback;
};
/**
 * Search.Overview — standalone AI answer rendered in the light DOM.
 *
 * Wrap it in <Theme> (and import the stylesheet) for the default look, or
 * leave it bare and style the `insytful-search-overview-*` hooks yourself.
 * State attributes on the root: `data-loading`, `data-streaming`,
 * `data-overflowing`, `data-expanded`, `data-conversational`.
 *
 * Expansion is uncontrolled by default. Pass `expanded` (with
 * `onExpandedChange`) to control it from outside, e.g. a host that keeps one
 * conversational instance mounted across tabs and only expands it on the AI
 * tab: the thread and input render only while expanded.
 */
export declare const SearchOverview: {
    ({ className, type, isDevMode, icon, heading, hLevel, term, expanded, onExpandedChange, collapsible, reserve, options, searching, error, renderMarkdown, onCtaClick, style, placeholder, disclaimer, feedback, }: SearchOverviewProp): React.JSX.Element;
    displayName: string;
};
