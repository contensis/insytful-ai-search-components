import { Cta } from '../api/rag.types';
export declare const useRAGResponse: (config: string, baseUrl: string, recaptchaSiteKey?: string) => {
    response: string;
    ctas: Cta[];
    loading: boolean;
    elapsed: number;
    error: string | null;
    ask: (question: string, sections?: string[]) => Promise<void>;
};
