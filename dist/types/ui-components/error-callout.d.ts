import { ChatModalDialogProps } from '../modal-components/chat-modal-dialog';
interface ErrorCalloutProps {
    message: string;
    onSwitchClassic: ChatModalDialogProps["onSwitch"];
}
export declare function ErrorCallout({ message, onSwitchClassic }: ErrorCalloutProps): import("react/jsx-runtime").JSX.Element;
export {};
