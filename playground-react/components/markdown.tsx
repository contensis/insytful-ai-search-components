import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";

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
      rehypePlugins={
        openLinksInNewTab
          ? [
              [
                rehypeExternalLinks,
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
              ],
            ]
          : []
      }
      components={{
        p: ({ children }) => (
          <p className="mb-3 leading-6 text-gray-900">
            {children}
          </p>
        ),

        a: ({ children, href }) => (
          <a
            href={href}
            className="text-blue-700 underline underline-offset-2 transition-colors duration-200 hover:text-blue-900 hover:no-underline"
          >
            {children}
          </a>
        ),

        ul: ({ children }) => (
          <ul className="mb-3 list-disc pl-6 space-y-1">
            {children}
          </ul>
        ),

        ol: ({ children }) => (
          <ol className="mb-3 list-decimal pl-6 space-y-1">
            {children}
          </ol>
        ),

        li: ({ children }) => (
          <li className="leading-6">{children}</li>
        ),

        strong: ({ children }) => (
          <strong className="font-semibold">{children}</strong>
        ),

        em: ({ children }) => (
          <em className="italic">{children}</em>
        ),

        code: ({ children }) => (
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-900">
            {children}
          </code>
        ),

        pre: ({ children }) => (
          <pre className="mb-3 overflow-x-auto rounded bg-gray-100 p-3 text-sm">
            {children}
          </pre>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
