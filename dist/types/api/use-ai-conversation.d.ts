import { AIMessage } from './types';
export declare const useAIConversation: (config: string, baseUrl: string, recaptchaSiteKey?: string) => {
    messages: AIMessage[];
    loading: boolean;
    error: string | null;
    elapsed: number;
    ask: (question: string, sections?: string[]) => Promise<void>;
};
