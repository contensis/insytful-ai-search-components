import { hash } from "../utilities/hash.util";
import "./message.scss";

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
    <li className={`message ${isUser ? "message--user" : "message--assistant"}`}>
      {logo && !isUser && (
        <div className="message__logo hidden-md">{logo}</div>
      )}

      <div
        className={`message__bubble ${
          isUser ? "message__bubble--user" : "message__bubble--assistant"
        }`}
      >
        {isUser ? (
          message.content
        ) : (
          <>
            <div className="message__bubble__first-paragraph">
              {logo && <div className="message__logo md:hidden">{logo}</div>}
              <p>
                {renderContent ? renderContent(paragraphs[0]) : paragraphs[0]}
              </p>
            </div>

            {paragraphs.slice(1).map((p, i) => (
              <p key={`${i}-${hash(p)}`} className="message__bubble__paragraph">
                {renderContent ? renderContent(p) : p}
              </p>
            ))}
          </>
        )}
      </div>
    </li>
  );
}
