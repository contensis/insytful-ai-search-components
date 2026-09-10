import { default as React } from 'react';
import { Cta } from '../api';
import { SearchSkeletonProps } from './skeleton';
import { SearchErrorCalloutCta } from './search-messages';
export type SearchOverviewProp = {
    className?: string;
    icon?: React.ReactNode;
    heading?: string;
    hLevel?: number;
    options: {
        config: string;
        baseUrl: string;
        recaptchaSiteKey?: string;
    };
    term: string;
    action?: () => void;
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
};
/**
 * Search.Overview — standalone AI answer rendered in the light DOM.
 *
 * Wrap it in <Theme> (and import the stylesheet) for the default look, or
 * leave it bare and style the `insytful-search-overview-*` hooks yourself.
 * State attributes on the root: `data-overflowing`, `data-expanded`.
 */
export declare const SearchOverview: {
    ({ className, isDevMode, icon, heading, hLevel, term, action, options, searching, error, renderMarkdown, onCtaClick, style, }: SearchOverviewProp): React.JSX.Element;
    displayName: string;
};
