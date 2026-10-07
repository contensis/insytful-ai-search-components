import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InsytfulSearch, Theme } from "../../lib/main";
import { options, useMockKeywordFetch, usePendingFetch, type KeywordMockMode } from "../helpers";

// Story-only CSS: the demo search form. The results use the library's
// default card, pagination and error callout.
const css = `
  .insytful-theme {
    --insytful-font-family: 'Nunito Sans';
    font-family: 'Nunito Sans';
  }

  .sb-insytful-search-input {
    font-family: inherit;
    border: 1px solid #b1b4b6;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    min-height: 42px;
    display: block;
    max-width: 700px;
    width: 100%;
    margin: 8px 0 24px;
  }
`;

function KeywordPage({
  openWith = "",
  isDevMode = false,
}: {
  /** Pre-fill the form and search for this term on load. */
  openWith?: string;
  /** Use the library's dev-mode mock (25 results over 3 pages for any term). */
  isDevMode?: boolean;
}) {
  const [draft, setDraft] = useState(openWith);
  const [term, setTerm] = useState(openWith);

  const results = (
    <InsytfulSearch.Keyword
      term={term}
      isDevMode={isDevMode}
      options={options}
      renderEmpty={() => <p>No results for “{term}”.</p>}
    />
  );

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
            <span>Search</span>
            <input
              className="sb-insytful-search-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a search term and press Enter"
            />
          </label>
        </form>
        {results}
      </div>
    </Theme>
  );
}

// Module-level so the mock's effect doesn't re-run on every render. Dev mode
// covers the results states; these cover what it can't.
const EMPTY: KeywordMockMode = { kind: "results", count: 0 };
const UNAVAILABLE: KeywordMockMode = {
  kind: "error",
  code: "index_unavailable",
  message: "The search index is temporarily unavailable.",
};

function Demo({ mode, ...props }: { mode: KeywordMockMode } & React.ComponentProps<typeof KeywordPage>) {
  useMockKeywordFetch(mode);
  return <KeywordPage {...props} />;
}

function LoadingDemo() {
  usePendingFetch();
  return <KeywordPage openWith="apply" />;
}

const meta: Meta = { title: "React/Keyword Search" };
export default meta;
type Story = StoryObj;

/** Dev mode: search for anything and get 25 hits over 3 pages, with the term marked in each snippet. */
export const DefaultState: Story = {
  render: () => <KeywordPage isDevMode openWith="apply" />,
};

/** The search succeeds with no hits, so `renderEmpty` shows. */
export const EmptyState: Story = {
  render: () => <Demo mode={EMPTY} openWith="xyzzy" />,
};

/** The request never completes, so the default card skeletons stay up. */
export const LoadingState: Story = { render: () => <LoadingDemo /> };

/** A failed search: the default error callout. */
export const ErrorState: Story = {
  render: () => <Demo mode={UNAVAILABLE} openWith="apply" />,
};
