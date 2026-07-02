import { useRAGConfig } from "./rag-context";
import { useRAGConversation } from "./use-rag-conversation";
import { useRAGResponse } from "./use-rag-response";

export const useRAGResponseContext = () => {
  const { config, baseUrl, recaptchaSiteKey } = useRAGConfig();
  return useRAGResponse(config, baseUrl, recaptchaSiteKey);
};

export const useRAGConversationContext = () => {
  const { config, baseUrl, recaptchaSiteKey } = useRAGConfig();
  return useRAGConversation(config, baseUrl, recaptchaSiteKey);
};
