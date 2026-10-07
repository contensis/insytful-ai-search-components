import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { InsytfulSearch, Theme } from "../../lib/main";
import type { SearchOverviewFeedback } from "../../lib/main";
import { renderMarkdown, useFailingFetch, options } from "../helpers";

// Story-only CSS, passed through <Theme css> so it also reaches the Shadow DOM
// portal. Everything else (title/description scale, input, callout width,
// dialog padding, prose headings) is now the library default.
const css = `
  .insytful-theme {
    --insytful-font-family: 'Nunito Sans';
  }

  /* The trigger is the host page's button; the library ships no styles for it. */
  .sb-insytful-search-trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #333;
    border-radius: 99px;
    padding: 10px 24px;
    color: #333;
    font-family: inherit;
    font-weight: 800;
    font-size: 16px;
  }
`;

/**
 * Sends `openWith` once, on mount — the story equivalent of the Web
 * Component's `open(query)`. Lives inside the Portal so it can reach the
 * search context; renders nothing.
 */
const OpenWith = ({ query }: { query: string }) => {
  const { onSend } = InsytfulSearch.useSearchContext("OpenWith");
  const sentRef = React.useRef(false);

  React.useEffect(() => {
    if (sentRef.current) return;
    sentRef.current = true;
    void onSend(query);
  }, [onSend, query]);

  return null;
};

const disclaimer =
  "AI generated answers may not always be accurate. Please verify information.";

const DialogContent = ({
  openWith,
  feedback,
}: {
  openWith?: string;
  feedback?: SearchOverviewFeedback;
}) => {
  const { messages, error } = InsytfulSearch.useSearchContext("DialogContent");

  return (
    <>
      <InsytfulSearch.Close />
      {openWith && <OpenWith query={openWith} />}
      {(!messages || messages.length === 0) && (
        <>
        <div>
          <InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
          <InsytfulSearch.Description>
            Ask a question in your own words, or choose from the options
            below.
          </InsytfulSearch.Description>
          </div>
          <InsytfulSearch.Input placeholder="Type your question here..." />
          <InsytfulSearch.Suggestions
            items={[
              "Where can I find term dates",
              "How do I apply?",
              "Report a problem",
            ]}
          />
        </>
      )}
      {/* The disclaimer goes under each finished answer (not failed ones), as
          in the feedback story, rather than fixed under the input. */}
      <InsytfulSearch.Messages feedback={feedback} disclaimer={disclaimer} />
      {error && (
        <InsytfulSearch.ErrorCallout
          title="Something went wrong"
          text="We couldn't reach the search service. Please try again."
        />
      )}
      {messages && messages.length > 0 && (
        <>
          <InsytfulSearch.Input placeholder="Type your question here..." />
        </>
      )}
    </>
  );
};

const ModalStory = ({
  isDevMode = false,
  openWith,
  feedback,
}: {
  isDevMode?: boolean;
  feedback?: SearchOverviewFeedback;
  /** Open the modal and send this query straight away. */
  openWith?: string;
}) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Theme css={css}>
      <InsytfulSearch.Root
        options={options}
        open={open}
        onOpenChange={setOpen}
        isDevMode={isDevMode}
        renderMarkdown={renderMarkdown}
      >
        <div style={{ padding: 24 }}>
          <InsytfulSearch.Trigger className="sb-insytful-search-trigger">
            <span>Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 640 640"
              focusable="false"
              aria-hidden="true"
              style={{
                display: "block",
                fill: "currentColor",
                flexShrink: 0,
              }}
            >
              <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
            </svg>
          </InsytfulSearch.Trigger>
        </div>
        <InsytfulSearch.Portal>
          <DialogContent openWith={openWith} feedback={feedback} />
        </InsytfulSearch.Portal>
      </InsytfulSearch.Root>
    </Theme>
  );
};

function ErrorStateDemo() {
  useFailingFetch();
  return <ModalStory openWith="How do I apply?" />;
}

const meta: Meta = { title: "React/Modal" };
export default meta;
type Story = StoryObj<typeof ModalStory>;

export const DefaultState: Story = { render: () => <ModalStory isDevMode /> };
export const ErrorState: Story = { render: () => <ErrorStateDemo /> };

/**
 * Report link and Helpful / Unhelpful vote under each finished answer. Each
 * answer votes on its own `mid`, so follow-ups get their own row and earlier
 * votes are kept. Dev mode answers the vote API with a mock; accepted votes are
 * logged in the Actions panel.
 */
export const FeedbackState: Story = {
  render: () => (
    <ModalStory
      isDevMode
      openWith="How do I apply?"
      feedback={{
        report: { text: "Report an error", href: "https://www.example.com/report", newTab: true },
        onVote: fn().mockName("onVote"),
      }}
    />
  ),
};
