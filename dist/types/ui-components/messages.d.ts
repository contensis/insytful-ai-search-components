import { default as React } from 'react';
import { MessageProps } from './message';
import { ChatModalDialogProps } from '../modal-components/chat-modal-dialog';
interface MessagesProps {
    messages: MessageProps["message"][];
    loading: boolean;
    logo?: React.ReactNode;
    renderMarkdown?: (markdown: string) => React.ReactNode;
    onSwitchClassic: ChatModalDialogProps["onSwitch"];
}
export declare function Messages({ messages, loading, logo, renderMarkdown, onSwitchClassic, }: MessagesProps): React.JSX.Element | null;
export {};
