import { hash } from "../utilities/hash.util";

export interface MessageProps {
  logo?: React.ReactNode;
  message: {
    role: "user" | "assistant";
    content: string;
  };
  renderContent?: (content: string) => React.ReactNode;
}

export function Message({ logo, message, renderContent }: MessageProps) {
  const isUser = message.role === "user";
  const paragraphs = message.content.split("\n\n");

  return (
    <li className={`flex items-start gap-5 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {logo && !isUser && (
        <div className="flex-shrink-0 hidden md:block">{logo}</div>
      )}

      <div
        className={`message max-w-[80%] text-base leading-[1.6] rounded-xl ${
          isUser ? "flex flex-col justify-center items-end p-3 gap-2.5 bg-ai-lib-btn-prompt-bg-default text-ai-lib-text-default" : "text-ai-lib-text-default"
        }`}
      >
        {isUser ? (
          message.content
        ) : (
          <>
            <div className="flex items-start gap-3 md:block md:gap-0">
              {logo && <div className="flex-shrink-0 md:hidden">{logo}</div>}
              <p>
                {renderContent ? renderContent(paragraphs[0]) : paragraphs[0]}
              </p>
            </div>

            {paragraphs.slice(1).map((p, i) => (
              <p key={`${i}-${hash(p)}`} className="mt-2">
                {renderContent ? renderContent(p) : p}
              </p>
            ))}
          </>
        )}
      </div>
    </li>
  );
}
