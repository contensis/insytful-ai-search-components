import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";

import "./markdown.scss"; // import the new SCSS

interface MarkdownProps {
  content: string;
  openLinksInNewTab?: boolean;
}

export const Markdown: React.FC<MarkdownProps> = ({
  content,
  openLinksInNewTab = true,
}) => {
  return (
    <ReactMarkdown
      rehypePlugins={openLinksInNewTab ? [[rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }]] : []}
      components={{
        p: ({ children }) => <p className="markdown__paragraph">{children}</p>,
        a: ({ children, href }) => (<a href={href} className="markdown__link">{children}</a>),
        ul: ({ children }) => <ul className="markdown__list markdown__list--unordered">{children}</ul>,
        ol: ({ children }) => <ol className="markdown__list markdown__list--ordered">{children}</ol>,
        li: ({ children }) => <li className="markdown__list-item">{children}</li>,
        strong: ({ children }) => <strong className="markdown__strong">{children}</strong>,
        em: ({ children }) => <em className="markdown__em">{children}</em>,
        code: ({ children }) => <code className="markdown__code">{children}</code>,
        pre: ({ children }) => <pre className="markdown__pre">{children}</pre>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
