import { RAGMessage } from './rag.types';
export declare const useRAGConversation: (config: string, baseUrl: string, recaptchaSiteKey?: string) => {
    messages: RAGMessage[];
    loading: boolean;
    error: string | null;
    ask: (question: string, sections?: string[]) => Promise<void>;
};
