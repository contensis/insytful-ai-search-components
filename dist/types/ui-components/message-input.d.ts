import { default as React } from 'react';
interface MessageInputProps {
    hasMessages: boolean;
    isClassic?: boolean;
    onSend: (message: string) => Promise<void>;
    disabled?: boolean;
}
export declare function MessageInput({ hasMessages, isClassic, onSend, disabled, }: MessageInputProps): React.JSX.Element;
export {};
