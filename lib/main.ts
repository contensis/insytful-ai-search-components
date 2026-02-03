// Styles
import './main.scss';

// Widget
import "./shadow-dom-widgets/chat-modal-widget";

// Provider
export { RAGProvider, useRAGConversationContext } from "./utilities/rag.util";

// Components
export { Messages, MessageInput, Suggestions, ModalButton } from "./ui-components";

// Types
export type { WidgetProps } from './shadow-dom-widgets/chat-modal-widget';