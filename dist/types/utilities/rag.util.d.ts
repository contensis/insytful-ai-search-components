/**
 * RAG (Retrieval-Augmented Generation) Utility
 *
 * Re-exports RAG functionality from contensis-rag-react package.
 * This allows consumers to access RAG features without direct dependency.
 *
 * RAGProvider: Context provider for AI conversation state
 * useRAGConversationContext: Hook to access conversation state and actions
 *
 * Note: contensis-rag-react is bundled with this library,
 * so consumers don't need to install it separately.
 */
export declare const RAGProvider: ({ children, baseUrl, config, recaptchaSiteKey, }: {
    children: React.ReactNode;
    config: string;
    baseUrl?: string;
    recaptchaSiteKey?: string;
}) => React.JSX.Element;
export declare const useRAGConversationContext: () => {
    messages: {
        role: "user" | "assistant";
        content: string;
    }[];
    loading: boolean;
    error: string | null;
    ask: (question: string, sections?: string[]) => Promise<void>;
};
