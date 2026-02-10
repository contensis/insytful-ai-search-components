interface SuggestionsProps {
    suggestions?: string[];
    onSend: (message: string) => Promise<void>;
}
export declare function Suggestions({ suggestions, onSend }: SuggestionsProps): import("react/jsx-runtime").JSX.Element | null;
export {};
