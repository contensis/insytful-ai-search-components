import { AIMessage } from './types';
export declare const useAIConversation: (config: string, baseUrl: string, recaptchaSiteKey?: string, 
/** An aggregated search's slug; `config` then only names the home site. */
searchConfig?: string) => {
    messages: AIMessage[];
    loading: boolean;
    error: string | null;
    elapsed: number;
    ask: (question: string, sections?: string[]) => Promise<void>;
};
