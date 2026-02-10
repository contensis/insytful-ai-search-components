import { default as React } from 'react';
import { ChatModalProps } from './chat-modal.types';
export type ChatModalDialogProps = {
    title: ChatModalProps["title"];
    text: ChatModalProps["text"];
    disclaimer?: ChatModalProps["disclaimer"];
    classic?: ChatModalProps["classic"];
    suggestions?: ChatModalProps["suggestions"];
    offsets?: ChatModalProps["offsets"];
    logo?: ChatModalProps["logo"];
    renderMarkdown?: ChatModalProps["renderMarkdown"];
    renderSwitch?: ChatModalProps["renderSwitch"];
    isClassic: boolean;
    onSwitchClassic: () => void;
    onSwitch: () => void;
    messages: {
        role: "user" | "assistant";
        content: string;
    }[];
    loading: boolean;
    error?: string | null;
    onSend: (msg: string) => Promise<void>;
    styles?: React.CSSProperties;
};
export declare const ChatModalDialog: React.ForwardRefExoticComponent<ChatModalDialogProps & React.RefAttributes<HTMLDivElement>>;
