import "./dist/insytful-search.js";
import React, { useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
// Registers <insytful-search>. Built by `npm run build:wc:storybook`, which
// the `prestorybook` hook runs for you. The bundle bakes in its own CSS.
import { options, useFailingFetch } from "../helpers";

type InsytfulSearchElement = HTMLElement & {
  open: (query?: string) => void;
  close: () => void;
  isOpen: boolean;
};

// Custom elements aren't in React's JSX typings; declare the ones we use.
declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace -- augmenting React's JSX namespace requires a namespace declaration
  namespace JSX {
    interface IntrinsicElements {
      "insytful-search": React.HTMLAttributes<HTMLElement> & {
        "api-uri": string;
        "project-id": string;
        "dev-mode"?: string;
        theme?: string;
        "suggestions-position"?: "above" | "below";
        ref?: React.Ref<InsytfulSearchElement>;
      };
      "insytful-suggestion": React.HTMLAttributes<HTMLElement>;
      "insytful-close": React.HTMLAttributes<HTMLElement>;
      "insytful-callout": React.HTMLAttributes<HTMLElement> & { type: "error" };
      "insytful-callout-title": React.HTMLAttributes<HTMLElement>;
      "insytful-callout-text": React.HTMLAttributes<HTMLElement>;
      "insytful-callout-cta": React.HTMLAttributes<HTMLElement> & { href: string };
    }
  }
}

// Same brand tweak as the React stories, injected into the shadow root via `theme`.
const theme = `
  .insytful-theme {
    --insytful-font-family: 'Nunito Sans';
  }
`;

/** Light-DOM children shared by every story. */
const Children = () => (
  <>
    <button slot="trigger" className="sb-insytful-search-trigger">Search</button>
    <span slot="title">How can we help?</span>
    <span slot="description">Ask a question in your own words, or choose from the options below.</span>
    <span slot="disclaimer">AI generated answers may not always be accurate. Please verify information.</span>
    <insytful-close></insytful-close>
    <insytful-suggestion>Where can I find term dates</insytful-suggestion>
    <insytful-suggestion>How do I apply?</insytful-suggestion>
    <insytful-suggestion>Report a problem</insytful-suggestion>
    <insytful-callout type="error">
      <insytful-callout-title>Something went wrong</insytful-callout-title>
      <insytful-callout-text>We couldn't reach the search service. Please try again.</insytful-callout-text>
      <insytful-callout-cta href="https://www.example.com/help">Visit the help centre</insytful-callout-cta>
    </insytful-callout>
  </>
);

function WebComponentStory({
  devMode = false,
  open = false,
  openWith,
}: {
  devMode?: boolean;
  /** Open the modal as soon as the element is defined. */
  open?: boolean;
  /** Open the modal and send this query as soon as the element is defined. */
  openWith?: string;
}) {
  const ref = useRef<InsytfulSearchElement>(null);

  useEffect(() => {
    if (!open && !openWith) return;
    let cancelled = false;
    customElements.whenDefined("insytful-search").then(() => {
      if (!cancelled) ref.current?.open(openWith);
    });
    return () => {
      cancelled = true;
    };
  }, [open, openWith]);

  return (
    <div style={{ padding: 24 }}>
      <insytful-search
        ref={ref}
        api-uri={options.baseUrl}
        project-id={options.config}
        theme={theme}
        suggestions-position="below"
        {...(devMode ? { "dev-mode": "" } : {})}
      >
        <Children />
      </insytful-search>
    </div>
  );
}

/**
 * The element binds `window.fetch` when it connects, so the failing stub must
 * be installed BEFORE it mounts: run the hook first, then render the element
 * on the next tick. No dev-mode here — that would swap in the mock client and
 * bypass fetch entirely.
 */
function ErrorStateDemo() {
  useFailingFetch();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setReady(true), 0);
    return () => clearTimeout(id);
  }, []);
  return ready ? <WebComponentStory openWith="How do I apply?" /> : null;
}

const meta: Meta = { title: "Web Component/Modal" };
export default meta;
type Story = StoryObj;

export const DefaultState: Story = { render: () => <WebComponentStory devMode open /> };
export const ErrorState: Story = { render: () => <ErrorStateDemo /> };
