import { AIMessage } from './types';
export declare const useAIConversation: (config: string, apiUrl: string, recaptchaSiteKey?: string, 
/** `config` is an aggregated search's slug rather than a site's alias. */
aggregated?: boolean) => {
    messages: AIMessage[];
    loading: boolean;
    error: string | null;
    elapsed: number;
    ask: (question: string, sections?: string[]) => Promise<void>;
};
