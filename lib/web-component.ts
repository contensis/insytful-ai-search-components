/**
 * Web Component entry point for Insytful AI Search
 *
 * This file registers the <insytful-search> custom element.
 * It is built as a standalone IIFE bundle with zero external dependencies.
 */

import { InsytfulSearchElement } from './web-component/insytful-search-element';

customElements.define('insytful-search', InsytfulSearchElement);

export { InsytfulSearchElement };

// CTA machinery — re-exported here (only) so it lands on the IIFE global,
// `window.InsytfulSearch.registerCtaHandler` / `.executeCta`, and shares the
// window-keyed registry/bus with the React ESM bundle on mixed-load pages.
export { registerCtaHandler, executeCta } from './shared/cta/handlers';
export type { CtaHandlerMap } from './shared/cta/handlers';
export type {
  Cta,
  CtaCall,
  CtaEmail,
  CtaLink,
  CtaEvent,
  CtaIntent,
} from './api/rag.types';
export type { RAGStreamEvent } from './web-component/rag-client';
