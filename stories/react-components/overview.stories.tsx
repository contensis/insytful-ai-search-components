import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { InsytfulSearch, Theme } from "../../lib/main";
import type { SearchOverviewFeedback, SearchOverviewType } from "../../lib/main";
import { renderMarkdown, useFailingFetch, options } from "../helpers";

const feedback: SearchOverviewFeedback = {
  report: { text: "Report an error", href: "https://www.example.com/report", newTab: true },
  onVote: fn().mockName("onVote"),
};

// Story-only CSS: the brand font, plus the demo search form that sits outside
// the component. Overview spacing and prose headings are library defaults now.
const css = `
  .insytful-theme {
    --insytful-font-family: 'Nunito Sans';
  }

  .sb-insytful-search-label {
    font-family: 'Nunito Sans';
  }

  .sb-insytful-search-input {
    font-family: 'Nunito Sans';
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 14px;
    min-height: 42px;
    display: block;
    max-width: 700px;
    width: 100%;
    margin-top: 8px;
  }
`;

function OverviewPage({
  isDevMode = false,
  openWith = "",
  type = "keyword",
  disclaimer,
  collapsible,
  feedback,
}: {
  isDevMode?: boolean;
  /** Pre-fill the form and fetch an overview for this term on load. */
  openWith?: string;
  /** "conversational" reveals a follow-up input when the answer is expanded. */
  type?: SearchOverviewType;
  disclaimer?: React.ReactNode;
  collapsible?: "auto" | boolean;
  feedback?: SearchOverviewFeedback;
}) {
  const [draft, setDraft] = useState(openWith);
  const [term, setTerm] = useState(openWith);

  return (
    <Theme css={css}>
    <div style={{ padding: 24, maxWidth: 760 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTerm(draft.trim());
        }}
      >
        <label>
          <span className="sb-insytful-search-label">Search</span>
          <input
            className="sb-insytful-search-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a question and press Enter"
          />
        </label>
      </form>

      {term && (
          <InsytfulSearch.Overview
            type={type}
            term={term}
            options={options}
            isDevMode={isDevMode}
            renderMarkdown={renderMarkdown}
            disclaimer={disclaimer}
            collapsible={collapsible}
            feedback={feedback}
            error={{
              title: "We couldn't generate an overview",
              text: "The rest of your search results are unaffected.",
              cta: { text: "Visit the help centre", path: "https://www.example.com/help" },
            }}
          />

      )}
    </div>
    </Theme>
  );
}

function ErrorStateDemo() {
  useFailingFetch();
  return <OverviewPage openWith="How do I apply?" />;
}

const meta: Meta = { title: "React/Overview" };
export default meta;
type Story = StoryObj;

export const DefaultState: Story = { render: () => <OverviewPage isDevMode /> };

export const ErrorState: Story = { render: () => <ErrorStateDemo /> };

/**
 * Expand the answer ("Show more" / "Continue the conversation") to reveal the
 * follow-up input. Each follow-up renders beneath the first answer.
 */
export const ConversationalState: Story = {
  render: () => <OverviewPage isDevMode type="conversational" openWith="How do I apply?" />,
};

/**
 * Once the answer has arrived, a feedback row appears under it: a "Report an
 * error" link and Helpful / Unhelpful buttons. Clicking the other button
 * changes the vote, clicking the pressed one retracts it, and a status message
 * is announced. Dev mode answers the vote API with a mock; accepted votes are
 * logged in the Actions panel. The row is hidden on the collapsed teaser and appears once
 * the answer is expanded via Show more.
 */
export const FeedbackState: Story = {
  render: () => (
    <OverviewPage
      isDevMode
      type="conversational"
      openWith="How do I apply?"
      feedback={feedback}
      disclaimer="AI generated answers may not always be accurate. Please verify information."
    />
  ),
};
