/**
 * Insytful AI Search Components Library - Main Entry Point
 * 
 * This library provides AI-powered search modal components with Shadow DOM support.
 * 
 * Usage:
 * 1. Web Component (Recommended): <insytful-ai-chat-modal></insytful-ai-chat-modal>
 * 2. React Components: Import individual components for custom layouts
 * 
 * The Web Component automatically handles:
 * - Shadow DOM creation and style isolation
 * - React rendering using ReactDOM.render() (React 17+ compatible)
 * - Tailwind CSS injection into Shadow DOM
 */

// Import and inject Tailwind CSS (compiled at build time)
import './main.css';

// Web Component registration (auto-registers <insytful-ai-chat-modal> custom element)
import "./shadow-dom-widgets/chat-modal-widget";

// Export modal control functions
export { onToggleModal, getModalInstance } from "./shadow-dom-widgets/chat-modal-widget";

// Re-export RAG (Retrieval-Augmented Generation) utilities from contensis-rag-react
// This provides AI conversation functionality
export { RAGProvider, useRAGConversationContext } from "./utilities/rag.util";

// Export individual UI components for advanced custom layouts
export { Messages, MessageInput, Suggestions, ModalButton } from "./ui-components";

// Export TypeScript types for Web Component props
export type { WidgetProps } from './shadow-dom-widgets/chat-modal-widget';