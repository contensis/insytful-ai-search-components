import { useSearchConfig } from "./search-config";
import { useAIConversation } from "./use-ai-conversation";
import { useAIResponse } from "./use-ai-response";

export const useAIResponseContext = () => {
  const { config, baseUrl, recaptchaSiteKey } = useSearchConfig();
  return useAIResponse(config, baseUrl, recaptchaSiteKey);
};

export const useAIConversationContext = () => {
  const { config, baseUrl, recaptchaSiteKey } = useSearchConfig();
  return useAIConversation(config, baseUrl, recaptchaSiteKey);
};
