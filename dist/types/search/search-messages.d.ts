import { default as React } from 'react';
export declare function SearchErrorCallout({ onSwitchClassic }: {
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
