import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InsytfulSearch } from "../lib/main";
import { Markdown } from "./components/markdown";
import theme from "./theme.css?inline";

const BASE_URL = "https://api.insytful.com/v1";

function SparkleIcon({
  size = 24,
  color = "#333",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.6 9.6L9 15L7.4 9.6L2 8L7.4 6.4L9 1L10.6 6.4L16 8L10.6 9.6ZM17 14.2L21 12L18.8 16L21 20L17 17.8L13 20L15.2 16L13 12L17 14.2ZM10 16L8.3 19L10 22L7 20.3L4 22L5.7 19L4 16L7 17.7L10 16Z"
        fill={color}
      />
    </svg>
  );
}

function HeroSearchCard({ onOpenModal }: { onOpenModal: () => void }) {
  const { onSend } = InsytfulSearch.useSearchContext("HeroSearchCard");

  const handleSubmit = (query: string) => {
    onOpenModal();
    onSend(query);
  };

  return (
    <div className="insytful-playground-hero-card bg-white rounded-[12px] lg:rounded-[16px] border-2 border-[#acbeef] shadow-[0px_24px_32px_0px_rgba(0,0,0,0.08)] overflow-hidden p-3 h-[88px] lg:h-[120px]">
      <InsytfulSearch.Input
        embedded
        placeholder="Ask a question"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

function ModalContent() {
  const { messages, error } = InsytfulSearch.useSearchContext("ModalContent");
  const modeCtx = InsytfulSearch.useModeContextSafe();
  const hasMessages = messages.length > 0;

  return (
    <>
      {!hasMessages && (
        <InsytfulSearch.Mode name="ai">
          <div className="flex flex-col items-center gap-2 lg:gap-4 lg:mt-auto px-4">
            <InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
            <InsytfulSearch.Description>
              AI search can help you find services, report issues, or guide you
              through applications.
            </InsytfulSearch.Description>
          </div>
        </InsytfulSearch.Mode>
      )}

      <InsytfulSearch.Messages
        className="px-4"
        searching={[
          { from: 0, to: 1000, text: "..." },
          { from: 1000, to: 3000, text: "Searching Zengenti's content..." },
          { from: 3000, to: 6000, text: "Finding the most relevant pages..." },
          { from: 6000, to: "Infinity", text: "Writing an answer..." },
        ]}
      />

      {hasMessages ? (
        <div className="mt-auto">
          <InsytfulSearch.Mode name="ai">
            {error && (
              <div className="pb-3 w-full max-w-[784px] mx-auto">
                <InsytfulSearch.ErrorCallout
                  title="Something went wrong"
                  text="We couldn't reach the search service. Try again or get help."
                  cta={{
                    text: "Visit help centre",
                    path: "https://www.example.com/help",
                  }}
                  onSwitchClassic={
                    modeCtx?.onSwitchMode
                      ? () => modeCtx.onSwitchMode("classic")
                      : undefined
                  }
                />
              </div>
            )}
            <div className="px-4">
              <InsytfulSearch.Input />
            </div>
            <InsytfulSearch.Disclaimer className="text-center p-4">
              AI-generated answers may be inaccurate. Please verify important
              information.
            </InsytfulSearch.Disclaimer>
          </InsytfulSearch.Mode>
        </div>
      ) : (
        <>
          <div className="px-4">
            <div className="w-full max-w-[784px] mx-auto rounded-[16px] border-2 border-[#acbeef] bg-white overflow-hidden px-3 pb-3 pt-3 shadow-[0px_24px_32px_0px_rgba(0,0,0,0.08)]">
              <InsytfulSearch.Mode name="ai">
                <InsytfulSearch.Input embedded />
              </InsytfulSearch.Mode>
            </div>
          </div>
          <div className="mt-auto pb-6 p-4">
            <InsytfulSearch.Disclaimer>
              AI-generated answers may be inaccurate. Please verify important
              information.
            </InsytfulSearch.Disclaimer>
          </div>
        </>
      )}
    </>
  );
}

function HeroAndModalDemo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <InsytfulSearch.Root
      options={{ config: "demo", baseUrl: BASE_URL }}
      open={isOpen}
      onOpenChange={setOpen}
      theme={theme}
      isDevMode
      renderMarkdown={(text) => <Markdown content={text} />}
      logo={<SparkleIcon size={24} color="#5128c3" />}
    >
      <InsytfulSearch.Modes defaultValue="ai">
        <div className="min-h-screen bg-white">
          <section className="flex items-center justify-center gap-4 lg:gap-10 px-4 py-4 lg:py-[200px] max-w-[1920px] mx-auto w-full">
            <div className="w-full lg:max-w-[1000px]">
              <h1 className="font-['Inter',sans-serif] font-extrabold text-[44px] lg:text-[88px] leading-[52px] lg:leading-[96px] tracking-[-1.32px] lg:tracking-[-2.64px] text-[#222] text-center">
                The future of AI search starts here
              </h1>
              <p className="font-['Inter',sans-serif] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] tracking-[-0.54px] lg:tracking-[-0.72px] text-black mt-2 lg:mt-6 text-center">
                Unlock faster, smarter answers across your entire website
                experience
              </p>

              <div className="lg:max-w-[610px] lg:mx-auto mt-6 lg:mt-16">
                <HeroSearchCard onOpenModal={() => setOpen(true)} />
                <p className="mt-6 font-['Source_Sans_3',sans-serif] text-[14px] leading-6 text-[#6b6b6b] text-center">
                  AI-generated answers may contain mistakes. Please verify
                  important information.
                </p>
              </div>
            </div>
          </section>
        </div>

        <InsytfulSearch.Portal>
          <InsytfulSearch.Close />
          <ModalContent />
        </InsytfulSearch.Portal>
      </InsytfulSearch.Modes>
    </InsytfulSearch.Root>
  );
}

/**
 * Intercepts fetch for a dedicated base URL and always returns a failed
 * response, so the error-callout story doesn't depend on real network
 * conditions (unlike lib/utilities/mock-fetch.ts, which always succeeds).
 */
function useFailingFetch(baseUrl: string) {
  useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      const url = typeof input === "string" ? input : input.toString();
      if (url.startsWith(baseUrl)) {
        return new Response(
          JSON.stringify({ message: "Search service is unavailable." }),
          { status: 503 },
        );
      }
      return originalFetch(input, init);
    };
    return () => {
      window.fetch = originalFetch;
    };
  }, [baseUrl]);
}

function ErrorTrigger() {
  const { onSend } = InsytfulSearch.useSearchContext("ErrorTrigger");

  useFailingFetch(BASE_URL);

  useEffect(() => {
    onSend("What are your opening hours?");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <ModalContent />;
}

function ErrorStateDemo() {
  return (
    <InsytfulSearch.Root
      options={{ config: "demo", baseUrl: BASE_URL }}
      defaultOpen
      theme={theme}
      renderMarkdown={(text) => <Markdown content={text} />}
      logo={<SparkleIcon size={24} color="#5128c3" />}
    >
      <InsytfulSearch.Modes defaultValue="ai">
        <InsytfulSearch.Portal>
          <InsytfulSearch.Close />
          <ErrorTrigger />
        </InsytfulSearch.Portal>
      </InsytfulSearch.Modes>
    </InsytfulSearch.Root>
  );
}

/** One of each CTA type, mixed intents — the same set the dev-mode mocks emit. */
const STORY_CTAS = [
  { type: "link", label: "Contact Us", url: "https://example.com/contact", intent: "primary", newTab: false },
  { type: "call", label: "Call us on 01234 567890", phone: "01234 567890", intent: "secondary" },
  { type: "email", label: "Email the team", email: "help@example.com", subject: "Website enquiry", intent: "secondary" },
  { type: "event", label: "Start web chat", event: "openWebChat", detail: { topic: "general" }, intent: "primary" },
];

const CTA_STORY_TOKENS = [
  "You can",
  " reach the team",
  " through any of the",
  " quick actions above,",
  " or read on for the",
  " full contact details.",
];

/**
 * Intercepts fetch for the demo base URL (modeled on useFailingFetch above)
 * and streams a response that leads with an `event: cta` frame — all four CTA
 * types, mixed intents — before the answer tokens. When `errorAfterTokens` is
 * set, the stream errors after that many token frames, demonstrating that
 * CTAs stay visible alongside the error callout.
 */
function useCtaFetch(baseUrl: string, errorAfterTokens?: number) {
  useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      const url = typeof input === "string" ? input : input.toString();
      if (!url.startsWith(baseUrl)) return originalFetch(input, init);

      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          const send = (frame: string) => controller.enqueue(encoder.encode(frame));

          await new Promise((res) => setTimeout(res, 800));
          // The API sends the cta frame before any token frames.
          send(`event: cta\ndata: ${JSON.stringify({ ctas: STORY_CTAS })}\n\n`);

          let sent = 0;
          for (const token of CTA_STORY_TOKENS) {
            if (errorAfterTokens !== undefined && sent >= errorAfterTokens) {
              controller.error(new Error("Mock stream failure"));
              return;
            }
            await new Promise((res) => setTimeout(res, 150));
            send(`data: ${JSON.stringify({ content: token })}\n\n`);
            sent += 1;
          }

          send("event: done\ndata: {}\n\n");
          controller.close();
        },
      });

      return new Response(stream, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
      });
    };
    return () => {
      window.fetch = originalFetch;
    };
  }, [baseUrl, errorAfterTokens]);
}

function CtaTrigger({ errorAfterTokens }: { errorAfterTokens?: number }) {
  const { onSend } = InsytfulSearch.useSearchContext("CtaTrigger");

  useCtaFetch(BASE_URL, errorAfterTokens);

  useEffect(() => {
    onSend("How do I contact the council?");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <ModalContent />;
}

function CtaDemo({ errorAfterTokens }: { errorAfterTokens?: number }) {
  return (
    <InsytfulSearch.Root
      options={{ config: "demo", baseUrl: BASE_URL }}
      defaultOpen
      theme={theme}
      renderMarkdown={(text) => <Markdown content={text} />}
      logo={<SparkleIcon size={24} color="#5128c3" />}
      onCtaClick={(cta) => console.log("[story] onCtaClick", cta)}
    >
      <InsytfulSearch.Modes defaultValue="ai">
        <InsytfulSearch.Portal>
          <InsytfulSearch.Close />
          <CtaTrigger errorAfterTokens={errorAfterTokens} />
        </InsytfulSearch.Portal>
      </InsytfulSearch.Modes>
    </InsytfulSearch.Root>
  );
}

const meta = {
  title: "AI Search - ReactJS/Modal",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroAndModal: Story = {
  render: () => <HeroAndModalDemo />,
};

export const ErrorState: Story = {
  render: () => <ErrorStateDemo />,
};

/** Quick-action CTAs rendered above the streaming answer (clicks log to the console). */
export const QuickActionCtas: Story = {
  render: () => <CtaDemo />,
};

/** Stream errors after the cta frame + two tokens — CTAs stay visible with the error callout. */
export const ErrorAfterCtas: Story = {
  render: () => <CtaDemo errorAfterTokens={2} />,
};
