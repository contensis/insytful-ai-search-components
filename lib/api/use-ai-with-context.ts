import { useSearchConfig } from "./search-config";
import { useAIConversation } from "./use-ai-conversation";
import { useAIResponse } from "./use-ai-response";

export const useAIResponseContext = () => {
  const { config, aggregated, apiUrl, recaptchaSiteKey } = useSearchConfig();
  return useAIResponse(config, apiUrl, recaptchaSiteKey, aggregated);
};

export const useAIConversationContext = () => {
  const { config, aggregated, apiUrl, recaptchaSiteKey } = useSearchConfig();
  return useAIConversation(config, apiUrl, recaptchaSiteKey, aggregated);
};
