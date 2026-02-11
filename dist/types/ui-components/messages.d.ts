import { default as React } from 'react';
import { MessageProps } from './message';
interface MessagesProps {
    messages: MessageProps["message"][];
    loading: boolean;
    logo?: React.ReactNode;
    renderMarkdown?: (markdown: string) => React.ReactNode;
}
export declare function Messages({ messages, loading, logo, renderMarkdown, }: MessagesProps): React.JSX.Element | null;
export {};
