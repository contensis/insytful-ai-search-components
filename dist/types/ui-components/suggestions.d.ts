import { default as React } from 'react';
interface SuggestionsProps {
    suggestions?: string[];
    onSend: (message: string) => Promise<void>;
}
export declare function Suggestions({ suggestions, onSend }: SuggestionsProps): React.JSX.Element | null;
export {};
