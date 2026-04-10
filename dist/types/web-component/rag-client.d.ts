export interface RAGClientConfig {
    baseUrl: string;
    projectId: string;
    sections?: string;
    /** Optional custom fetch function (e.g. mock for dev-mode). Defaults to window.fetch. */
    fetchFn?: typeof fetch;
}
export declare class RAGClient {
    private baseUrl;
    private projectId;
    private sections?;
    private fetchFn;
    constructor(config: RAGClientConfig);
    /**
     * Send a question to the RAG API and yield content chunks as they arrive
     * via Server-Sent Events.
     */
    ask(question: string, signal?: AbortSignal): AsyncGenerator<string>;
    /** Remove the stored session ID from localStorage. */
    static clearSession(): void;
}
