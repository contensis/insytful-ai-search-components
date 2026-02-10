import { ChatModalProps } from '../modal-components/chat-modal.types';
type UseChatSendArgs = {
    isClassic: boolean;
    ask: (msg: string) => Promise<void>;
    classic?: ChatModalProps["classic"];
};
/**
 * Hook that returns a message send function based on mode
 *
 * AI Mode: Sends message to RAG conversation API
 * Classic Mode: Redirects to search results page
 *
 * @param isClassic - Whether to use classic search mode
 * @param ask - RAG conversation function for AI mode
 * @param classic - Configuration for classic search mode
 * @returns Async function to send a message
 */
export declare function useChatSend({ isClassic, ask, classic, }: UseChatSendArgs): (msg: string) => Promise<void>;
export declare function useModalFocusTrap(setOpen: (open: boolean) => void, isOpen: boolean): {
    elModalRef: import('react').MutableRefObject<HTMLDivElement | null>;
};
export {};
