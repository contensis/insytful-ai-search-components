import { RAGProvider as InternalRAGProvider, useRAGConversationContext as useInternalRAG } from "contensis-rag-react";

export const RAGProvider = InternalRAGProvider;
export const useRAGConversationContext = useInternalRAG;
