import { default as React } from 'react';
export type SearchErrorCalloutCta = {
    text: string;
    path: string;
};
export type SearchErrorCalloutProps = {
    title?: string;
    text?: string;
    cta?: SearchErrorCalloutCta;
    onSwitchClassic?: () => void;
};
/**
 * Search.ErrorCallout — the library's error state: a title, a message and an
 * optional action (a CTA link, or "Try classic?" when `onSwitchClassic` is
 * set). Used by Search.Overview and the modal; render it anywhere an error
 * needs showing. The Web Component renders the same markup
 * (web-component/dialog-renderer.ts).
 */
export declare function SearchErrorCallout({ title, text, cta, onSwitchClassic, }: SearchErrorCalloutProps): React.JSX.Element;
