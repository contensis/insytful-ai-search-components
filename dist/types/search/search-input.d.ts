import { default as React } from 'react';
export type SearchInputProps = {
    className?: string;
    /** When true, removes border/focus ring from textarea (for use inside a card wrapper) */
    embedded?: boolean;
    /** Placeholder text override */
    placeholder?: string;
    /** Called with the query on submit — use to open the modal, navigate, etc.
     *  Required when rendered outside Search.Root (e.g. inside Search.Overview). */
    onSubmit?: (query: string) => void;
    /** Disable while a request is in flight. Only read outside Search.Root;
     *  inside Root the context's `loading` wins. */
    disabled?: boolean;
};
/**
 * Search.Input — the question box.
 *
 * State is exposed as data attributes on the <form> for styling:
 * `data-mode="ai|classic"`, `data-embedded`, `data-has-messages`.
 */
export declare function SearchInput({ className, embedded, placeholder, onSubmit, disabled, }: SearchInputProps): React.JSX.Element;
export declare namespace SearchInput {
    var displayName: string;
}
