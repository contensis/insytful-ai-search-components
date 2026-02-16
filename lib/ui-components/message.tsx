import React from "react";
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
    <li
      className={`insytful-search-message flex items-start gap-[24px] w-full max-w-full ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {logo && !isUser && (
        <div className="insytful-search-message-logo flex-shrink-0 hidden md:block">
          {logo}
        </div>
      )}

      <div
        style={{
          overflowWrap: "anywhere",
          wordBreak: "break-word",
        }}
        className={`insytful-search-message-content-outer text-[16px] md:text-[20px] leading-[32px] rounded-[16px] ${
          isUser
            ? "flex flex-col justify-center items-end px-[16px] py-[12px] gap-[10px] bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-text-default)]"
            : "text-[var(--insytful-text-default)]"
        }`}
      >
        {isUser ? (
          message.content
        ) : (
          <>
            <div className="insytful-search-message-content-inner flex items-start gap-[12px] md:block md:gap-0">
              {logo && (
                <div className="insytful-search-message-logo flex-shrink-0 md:hidden">
                  {logo}
                </div>
              )}
              <div className="insytful-search-message-content">
                {renderContent ? renderContent(paragraphs[0]) : paragraphs[0]}
              </div>
            </div>
            {paragraphs.slice(1).map((p, i) => (
              <div
                key={`${i}-${hash(p)}`}
                className="insytful-search-message-content mt-[8px]"
              >
                {renderContent ? renderContent(p) : p}
              </div>
            ))}
          </>
        )}
      </div>
    </li>
  );
}
