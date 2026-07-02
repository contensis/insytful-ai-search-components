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

// RAG hooks — used internally by Search.Root, also available standalone
export {
  RAGProvider,
  useRAGResponse,
  useRAGResponseContext,
  useRAGConversation,
  useRAGConversationContext,
} from "./api";
export type { RAGMessage } from "./api";
