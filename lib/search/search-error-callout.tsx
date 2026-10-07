import React from "react";

export type SearchErrorCalloutCta = { text: string; path: string };

export type SearchErrorCalloutProps = {
  title?: string;
  text?: string;
  cta?: SearchErrorCalloutCta;
  onSwitchClassic?: () => void;
};

/**
 * Search.ErrorCallout — the library's error state: a title, a message and an
 * optional action (a CTA link, or "Try classic?" when `onSwitchClassic` is
 * set). Used by Search.Overview and the modal; render it anywhere an error
 * needs showing. The Web Component renders the same markup
 * (web-component/dialog-renderer.ts).
 */
export function SearchErrorCallout({
  title = "Something went wrong",
  text = "Failed to fetch",
  cta,
  onSwitchClassic,
}: SearchErrorCalloutProps) {
  return (
    <div className="insytful-search-error-callout-inner" role="alert">
      <div className="insytful-search-error-callout-content">
        <p className="insytful-search-error-callout-title">{title}</p>
        <p className="insytful-search-error-callout-text">{text}</p>
      </div>
      {cta ? (
        (() => {
          const isExternal = cta.path.startsWith("https://www");
          return (
            <a
              href={cta.path}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="insytful-search-error-callout-cta"
            >
              {cta.text}
              {isExternal && (
                <span className="insytful-sr-only"> (opens in a new tab)</span>
              )}
            </a>
          );
        })()
      ) : onSwitchClassic ? (
        <button type="button" onClick={onSwitchClassic} className="insytful-search-error-callout-btn">
          Try classic?
        </button>
      ) : null}
    </div>
  );
}
