import { default as React } from 'react';
export type SearchSuggestionsProps = {
    items?: string[];
    className?: string;
    /**
     * Where suggestions appear relative to the input.
     *
     * - `"above"` (default) — legacy behaviour; suggestions sit before the input.
     * - `"below"` — suggestions appear under the input (useful for "guided
     *   follow-up" UX). Requires the `Search.Portal` layout to be a flex column,
     *   which it is by default.
     */
    position?: "above" | "below";
};
export declare function SearchSuggestions({ items, className, position }: SearchSuggestionsProps): React.JSX.Element | null;
export declare namespace SearchSuggestions {
    var displayName: string;
}
