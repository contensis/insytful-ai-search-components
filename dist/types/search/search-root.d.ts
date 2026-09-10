import { default as React } from 'react';
import { Cta } from '../api/rag.types';
export type SearchRootProps = {
    children: React.ReactNode;
    options: {
        config: string;
        baseUrl: string;
        /**
         * Optional reCAPTCHA site key for human verification.
         * If provided, the search modal will require a successful reCAPTCHA challenge
         * before sending any queries to the backend. This can help prevent abuse or
         * spam in public-facing applications.
         */
        recaptchaSiteKey?: string;
    };
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    renderMarkdown?: (markdown: string) => React.ReactNode;
    logo?: React.ReactNode;
    isDevMode?: boolean;
    /**
     * Observability callback fired with the full CTA whenever a quick-action
     * chip is clicked (anchor or button, default action or override). Pair it
     * with the `insytful-cta` bus event for non-React listeners.
     */
    onCtaClick?: (cta: Cta) => void;
    offsets?: {
        top?: number | string;
        left?: number | string;
        right?: number | string;
    };
};
/**
 * Search.Root — provides context to all descendants.
 *
 * Children render in the normal React tree, so Search.Trigger works
 * anywhere in the consumer's DOM. Use Search.Portal to render content
 * inside the Shadow DOM dialog.
 */
export declare function SearchRoot({ children, options, open: openProp, defaultOpen, onOpenChange, renderMarkdown, logo, isDevMode, offsets, onCtaClick, }: SearchRootProps): React.JSX.Element;
export declare namespace SearchRoot {
    var displayName: string;
}
export type SearchPortalProps = {
    children: React.ReactNode;
    /**
     * How the dialog is isolated from the host page.
     *
     * - `"shadow"` (default) — renders inside a Shadow DOM on document.body and
     *   carries the library stylesheet in with it. Host CSS cannot reach the
     *   dialog, which protects the styled modal on hostile client sites. In
     *   this mode the only way to restyle it is `<Theme css="…">`.
     * - `"none"` — renders into a plain light-DOM element on document.body.
     *   Your page stylesheet reaches the dialog, so this is the mode for
     *   unstyled (no `<Theme>`) or heavily customised use. Import
     *   `insytful-ai-search-components/style.css` yourself when themed.
     */
    isolation?: "shadow" | "none";
};
/**
 * Search.Portal — renders children into a dialog on document.body.
 *
 * Uses ReactDOM.createPortal to preserve React context across the boundary,
 * and re-applies the ambient <Theme> on the portal mount (the mount is not a
 * DOM descendant of the Theme element, so the class must be mirrored onto the
 * portal mount). Must be a descendant of Search.Root.
 */
export declare function SearchPortal({ children, isolation }: SearchPortalProps): React.ReactPortal | null;
export declare namespace SearchPortal {
    var displayName: string;
}
