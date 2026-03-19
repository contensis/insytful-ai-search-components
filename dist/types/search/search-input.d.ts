import { default as React } from 'react';
export type SearchInputProps = {
    className?: string;
    /** When true, removes border/focus ring from textarea (for use inside a card wrapper) */
    embedded?: boolean;
    /** Placeholder text override */
    placeholder?: string;
    /** Called with the query on submit — use to open the modal, navigate, etc. */
    onSubmit?: (query: string) => void;
};
export declare function SearchInput({ className, embedded, placeholder, onSubmit }: SearchInputProps): React.JSX.Element;
export declare namespace SearchInput {
    var displayName: string;
}
