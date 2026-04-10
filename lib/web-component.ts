/**
 * Web Component entry point for Insytful AI Search
 *
 * This file registers the <insytful-search> custom element.
 * It is built as a standalone IIFE bundle with zero external dependencies.
 */

import { InsytfulSearchElement } from './web-component/insytful-search-element';

customElements.define('insytful-search', InsytfulSearchElement);

export { InsytfulSearchElement };
