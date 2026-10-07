export declare const useAIResponseContext: () => {
    response: string;
    ctas: import('./types').Cta[];
    loading: boolean;
    elapsed: number;
    error: string | null;
    ask: (question: string, sections?: string[]) => Promise<void>;
    answerIds: {
        sid: string;
        mid: string;
    } | null;
};
export declare const useAIConversationContext: () => {
    messages: import('./types').AIMessage[];
    loading: boolean;
    error: string | null;
    elapsed: number;
    ask: (question: string, sections?: string[]) => Promise<void>;
};
