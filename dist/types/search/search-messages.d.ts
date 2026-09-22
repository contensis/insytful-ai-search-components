import { default as React } from 'react';
import { RAGMessage } from '../api/rag.types';
import { SearchSkeletonProps } from './skeleton';
export type MessageProps = {
    message: RAGMessage;
    logo?: React.ReactNode;
    renderContent?: (content: string) => React.ReactNode;
    showSkeleton?: boolean;
    elapsed?: SearchSkeletonProps["elapsed"];
    searching?: SearchSkeletonProps['messages'];
};
export declare function Message({ message, logo, renderContent, showSkeleton, elapsed, searching, }: MessageProps): React.JSX.Element;
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
    searching?: SearchSkeletonProps['messages'];
    children?: React.ReactNode;
};
export declare function SearchMessages({ className, searching, children, }: SearchMessagesProps): React.JSX.Element | null;
export declare namespace SearchMessages {
    var displayName: string;
}
