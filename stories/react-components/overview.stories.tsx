import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InsytfulSearch, Theme } from "../../lib/main";
import { renderMarkdown, useFailingFetch, options } from "../helpers";

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
}: {
  isDevMode?: boolean;
  /** Pre-fill the form and fetch an overview for this term on load. */
  openWith?: string;
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
            term={term}
            options={options}
            isDevMode={isDevMode}
            renderMarkdown={renderMarkdown}
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
