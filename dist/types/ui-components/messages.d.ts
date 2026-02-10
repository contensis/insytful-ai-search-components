import { MessageProps } from './message';
interface MessagesProps {
    messages: MessageProps["message"][];
    loading: boolean;
    logo?: React.ReactNode;
    renderMarkdown?: (markdown: string) => React.ReactNode;
}
export declare function Messages({ messages, loading, logo, renderMarkdown, }: MessagesProps): import("react/jsx-runtime").JSX.Element | null;
export {};
