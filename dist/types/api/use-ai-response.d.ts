import { Cta } from './types';
export declare const useAIResponse: (config: string, apiUrl: string, recaptchaSiteKey?: string, 
/** `config` is an aggregated search's slug rather than a site's alias. */
aggregated?: boolean) => {
    response: string;
    ctas: Cta[];
    loading: boolean;
    elapsed: number;
    error: string | null;
    ask: (question: string, sections?: string[]) => Promise<void>;
    answerIds: {
        sid: string;
        mid: string;
    } | null;
};
