import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InsytfulSearch, Theme } from "../../lib/main";
import type {
  SearchOverviewProp,
  SearchOverviewType,
} from "../../lib/main";
import {
  feedbackPillsCss,
  renderFeedbackPills,
  renderMarkdown,
  useFailingFetch,
  usePendingFetch,
  options,
} from "../helpers";

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
    border: 1px solid #b1b4b6;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    min-height: 42px;
    display: block;
    max-width: 700px;
    width: 100%;
    margin-top: 8px;
  }

  .sb-insytful-results {
    font-family: 'Nunito Sans';
    margin-top: 24px;
  }
${feedbackPillsCss}`;

function OverviewPage({
  isDevMode = false,
  openWith = "",
  type = "keyword",
  disclaimer,
  collapsible,
  reserve,
  renderReveal,
  renderReporting,
}: {
  isDevMode?: boolean;
  /** Pre-fill the form and fetch an overview for this term on load. */
  openWith?: string;
  /** "conversational" reveals a follow-up input when the answer is expanded. */
  type?: SearchOverviewType;
  disclaimer?: React.ReactNode;
  collapsible?: "auto" | boolean;
  /** Left unset, the component's default (on) applies. */
  reserve?: boolean | number;
  renderReveal?: SearchOverviewProp["renderReveal"];
  renderReporting?: SearchOverviewProp["renderReporting"];
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
            reserve={reserve}
            renderReveal={renderReveal}
            renderReporting={renderReporting}
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

function LoadingStateDemo({ type }: { type?: SearchOverviewType }) {
  usePendingFetch();
  return <OverviewPage type={type} openWith="How do I apply?" />;
}

const meta: Meta = { title: "React/Overview" };
export default meta;
type Story = StoryObj;

const disclaimer =
  "AI generated answers may not always be accurate. Please verify information.";

/** The disclaimer sits under each finished answer, below the feedback row. */
export const DefaultState: Story = {
  render: () => (
    <OverviewPage
      openWith="How do I apply?"
      disclaimer={disclaimer}
      isDevMode
    />
  ),
};

export const CustomReveal: Story = {
  render: () => (
    <OverviewPage
      openWith="How do I apply?"
      disclaimer={disclaimer}
      isDevMode
      renderReveal={({ isExpanded, toggle, aria }) => (
        <button type="button" onClick={toggle} {...aria}>
          {isExpanded ? "Hide the full answer" : "Read the full answer"}
        </button>
      )}
    />
  ),
};

export const ErrorState: Story = { render: () => <ErrorStateDemo /> };

/**
 * The answer never arrives, so the overview stays on its loading skeleton:
 * for checking the skeleton fills the reserved teaser box and the results
 * below sit where they will once the answer loads.
 */
export const LoadingState: Story = { render: () => <LoadingStateDemo /> };

/**
 * Expand the answer ("Show more" / "Continue the conversation") to reveal the
 * follow-up input. Each follow-up renders beneath the first answer.
 *
 * The feedback row is on by default: a "Was this helpful?" label and Helpful /
 * Unhelpful buttons under each finished answer, each voting on its own `mid`.
 * Clicking the other button changes the vote, clicking the pressed one
 * retracts it, and a status message is announced. Dev mode answers the vote
 * API with a mock. The row is hidden on the collapsed teaser.
 */
export const ConversationalState: Story = {
  render: () => (
    <OverviewPage
      isDevMode
      type="conversational"
      openWith="How do I apply?"
      disclaimer={disclaimer}
    />
  ),
};

/**
 * `renderReporting` swaps the default feedback row for the host's own
 * controls, here "Was this helpful? Yes / No" pills. The library still sends
 * the vote via `setVote`, rolls it back on failure and announces the result.
 * Clicking the pressed pill retracts the vote. Expand the answer to see it.
 */
export const CustomFeedbackReporting: Story = {
  render: () => (
    <OverviewPage
      isDevMode
      type="conversational"
      openWith="How do I apply?"
      disclaimer={disclaimer}
      renderReporting={renderFeedbackPills}
    />
  ),
};
