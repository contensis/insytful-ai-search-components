import { Cta } from './types';
export declare const useAIResponse: (config: string, baseUrl: string, recaptchaSiteKey?: string) => {
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
