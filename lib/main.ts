/**
 * Insytful AI Search Components Library
 *
 * Compound components for AI-powered search modals.
 *
 * Usage (styled):
 *   import 'insytful-ai-search-components/style.css';
 *   import { Theme, InsytfulSearch } from 'insytful-ai-search-components';
 *
 *   <Theme>
 *     <InsytfulSearch.Root options={{ config: 'my-config', baseUrl: 'https://your-api.com' }}>
 *       <InsytfulSearch.Portal>
 *         <InsytfulSearch.Title>Search</InsytfulSearch.Title>
 *         <InsytfulSearch.Input />
 *         <InsytfulSearch.Messages />
 *       </InsytfulSearch.Portal>
 *     </InsytfulSearch.Root>
 *   </Theme>
 *
 * Usage (unstyled): omit <Theme> and the stylesheet. Components still emit
 * their `insytful-search-*` hook classes and `data-*` state attributes for
 * you to style. See README → Styling.
 *
 * Every shipped rule is scoped under `.insytful-theme` and weighs a single
 * hook class, so an override written against that class (`.insytful-search-x`)
 * wins on source order — no `!important`.
 */

// Shipped stylesheet. Emitted as `style.css` by the build; `Search.Portal`
// also inlines it into its Shadow DOM.
import "./styles/index.css";

// Styling boundary
export { Theme } from "./theme/theme";
export type { ThemeProps } from "./theme/theme";
export { useThemeContext } from "./theme/context";
export type { ThemeContextValue } from "./theme/context";

// Compound component namespace
export * as InsytfulSearch from "./search";

// Re-export key types
export type { SearchRootProps, SearchPortalProps } from "./search/search-root";
export type { SearchTriggerProps } from "./search/search-trigger";
export type { SearchModesProps, SearchModeProps, SearchModeSwitchProps } from "./search/search-modes";
export type { SearchSuggestionsProps } from "./search/search-suggestions";
export type { SearchCtasProps } from "./search/search-ctas";
export type { SearchErrorCalloutProps, SearchErrorCalloutCta } from "./search/search-error-callout";
export type { SearchOverviewProp, SearchOverviewType } from "./search/ai-overview";
export type { SearchOverviewFeedback, SearchOverviewVote } from "./search/feedback-reporting";
export type { KeywordSearchProps } from "./search/keyword-search";

// AI hooks — used internally by Search.Root, also available standalone.
// Wrap them in <InsytfulSearch.Provider> for the context-reading variants.
export {
  useAIResponse,
  useAIResponseContext,
  useAIConversation,
  useAIConversationContext,
} from "./api";

// Keyword search hook — used by InsytfulSearch.Keyword, also available standalone.
export { useKeywordSearch } from "./api";
export type {
  KeywordSearchHit,
  KeywordResultCard,
  KeywordHighlights,
  KeywordPagination,
  KeywordSearchResponse,
  KeywordSearchError,
} from "./api";
export type {
  SearchConfig,
  AIMessage,
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
