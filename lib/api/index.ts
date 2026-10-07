// Provider
export { SearchConfigProvider, useSearchConfigSafe, useResolvedSearchConfig } from "./search-config";
export type { SearchConfig } from "./search-config";

// withContext
export { useAIResponseContext, useAIConversationContext } from "./use-ai-with-context";

// withoutContext
export { useAIResponse } from "./use-ai-response";
export { useAIConversation } from "./use-ai-conversation";

// Keyword search
export { useKeywordSearch } from "./use-keyword-search";
export type {
  KeywordSearchHit,
  KeywordResultCard,
  KeywordHighlights,
  KeywordPagination,
  KeywordSearchResponse,
  KeywordSearchError,
} from "./use-keyword-search";

// Types
export type {
  AIMessage,
  Cta,
  CtaIntent,
  CtaCall,
  CtaEmail,
  CtaLink,
  CtaEvent,
} from "./types";
