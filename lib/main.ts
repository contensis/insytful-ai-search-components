/**
 * Insytful AI Search Components Library
 *
 * Radix-style compound components for AI-powered search modals.
 *
 * Usage:
 *   import { Search } from 'insytful-ai-search-components';
 *
 *   <Search.Root options={{ config: 'my-config', baseUrl: 'https://your-api.com' }}>
 *     <Search.Title>Search</Search.Title>
 *     <Search.Input />
 *     <Search.Messages />
 *   </Search.Root>
 */

// Compound component namespace
export * as InsytfulSearch from "./search";

// Re-export key types
export type { SearchRootProps } from "./search/search-root";
export type { SearchTriggerProps } from "./search/search-trigger";
export type { SearchModesProps, SearchModeProps, SearchModeSwitchProps } from "./search/search-modes";
export type { SearchSuggestionsProps } from "./search/search-suggestions";
export type { SearchCtasProps } from "./search/search-ctas";

// RAG hooks — used internally by Search.Root, also available standalone
export {
  RAGProvider,
  useRAGResponse,
  useRAGResponseContext,
  useRAGConversation,
  useRAGConversationContext,
} from "./api";
export type {
  RAGMessage,
  Cta,
  CtaIntent,
  CtaCall,
  CtaEmail,
  CtaLink,
  CtaEvent,
} from "./api";

// CTA machinery — sanitize CMS payloads, override execution, observe the bus.
// The Web Component entry re-exports the handler pieces separately (Phase 4).
export {
  sanitizeCtas,
  registerCtaHandler,
  executeCta,
  getInsytfulAISearchEvents,
} from "./shared/cta";
export type { CtaHandlerMap } from "./shared/cta";
