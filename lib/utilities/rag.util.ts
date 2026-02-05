/**
 * RAG (Retrieval-Augmented Generation) Utility
 * 
 * Re-exports RAG functionality from contensis-rag-react package.
 * This allows consumers to access RAG features without direct dependency.
 * 
 * RAGProvider: Context provider for AI conversation state
 * useRAGConversationContext: Hook to access conversation state and actions
 * 
 * Note: contensis-rag-react is bundled with this library,
 * so consumers don't need to install it separately.
 */

import { RAGProvider as InternalRAGProvider, useRAGConversationContext as useInternalRAG } from "contensis-rag-react";

// Re-export with same names for consistency
export const RAGProvider = InternalRAGProvider;
export const useRAGConversationContext = useInternalRAG;
