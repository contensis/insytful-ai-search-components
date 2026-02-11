import { default as React } from 'react';
export interface MessageProps {
    logo?: React.ReactNode;
    message: {
        role: "user" | "assistant";
        content: string;
    };
    renderContent?: (content: string) => React.ReactNode;
}
export declare function Message({ logo, message, renderContent }: MessageProps): React.JSX.Element;
