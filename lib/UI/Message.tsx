import { cx } from "../classes.util";

export interface MessageProps {
  logo?: React.ReactNode; // optional
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
      className={`flex items-start gap-[1.25rem] ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {logo && !isUser && <div className="shrink-0 hidden md:block">{logo}</div>}
      <div
        className={`max-w-[80%] text-base md:text-lg rounded-xl leading-[2rem] [&_hr]:my-[1.5rem] ${
          isUser
            ? "flex flex-col justify-center items-end p-3 gap-2.5 rounded-[12px] bg-[var(--ai-lib-btn-prompt-bg-default)] text-[var(--ai-lib-text-default)]"
            : "text-[var(--ai-lib-text-default)]"
        }`}
      >
        {isUser ? (
          message.content
        ) : (
          <>
            {/* First paragraph: mobile-only inline logo */}
            <div className="flex items-start gap-3 md:gap-0 md:block">
              {logo && <div className="shrink-0 md:hidden">{logo}</div>}
              <p className="m-0">{renderContent ? renderContent(paragraphs[0]) : paragraphs[0]}</p>
            </div>

            {/* Remaining paragraphs full width */}
            {paragraphs.slice(1).map((p, i) => (
              <p key={i + 1} className="mt-2">
                {renderContent ? renderContent(p) : p}
              </p>
            ))}
          </>
        )}
      </div>
    </li>
  );
}
