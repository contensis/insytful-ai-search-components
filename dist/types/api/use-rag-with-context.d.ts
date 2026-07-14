export declare const useRAGResponseContext: () => {
    response: string;
    loading: boolean;
    elapsed: number;
    error: string | null;
    ask: (question: string, sections?: string[]) => Promise<void>;
};
export declare const useRAGConversationContext: () => {
    messages: import('./rag.types').RAGMessage[];
    loading: boolean;
    error: string | null;
    elapsed: number;
    ask: (question: string, sections?: string[]) => Promise<void>;
};
