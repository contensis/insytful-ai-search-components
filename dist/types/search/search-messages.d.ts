import { default as React } from 'react';
export type SearchErrorCalloutCta = {
    text: string;
    path: string;
};
export declare function SearchErrorCallout({ title, text, cta, onSwitchClassic, }: {
    title?: string;
    text?: string;
    cta?: SearchErrorCalloutCta;
    onSwitchClassic?: () => void;
}): React.JSX.Element;
export type SearchMessagesProps = {
    className?: string;
    searchingText?: string;
    children?: React.ReactNode;
};
export declare function SearchMessages({ className, searchingText, children, }: SearchMessagesProps): React.JSX.Element | null;
export declare namespace SearchMessages {
    var displayName: string;
}
