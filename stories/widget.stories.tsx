import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InsytfulSearch } from "../lib/main";
import { Markdown } from "./components/markdown";
import theme from "./theme.css?inline";

function SparkleIcon({ size = 24, color = "#333" }: { size?: number; color?: string }) {
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

/** Widget body — same welcome-message / suggestions / input / disclaimer pattern as the modal demo. */
function WidgetContent() {
  const { messages } = InsytfulSearch.useSearchContext("WidgetContent");
  const hasMessages = messages.length > 0;

  return (
    <>
      {!hasMessages && (
        <div className="flex flex-col items-center gap-2">
          <InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
          <InsytfulSearch.Description>Ask a question in your own words.</InsytfulSearch.Description>
        </div>
      )}

      <InsytfulSearch.Messages />

      {!hasMessages && (
        <InsytfulSearch.Suggestions items={["How do I report a problem?", "What are your opening hours?"]} />
      )}

      <div className="mt-auto">
        <InsytfulSearch.Input />
        <InsytfulSearch.Disclaimer className="text-center py-4">
          AI-generated answers may be inaccurate.
        </InsytfulSearch.Disclaimer>
      </div>
    </>
  );
}

/** Demo of variant="widget" — a corner-anchored chat panel instead of the full-bleed modal. */
function ChatWidgetDemo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <InsytfulSearch.Root
      options={{
        config: "demo",
        baseUrl: "https://api.insytful.com/v1",
      }}
      open={isOpen}
      onOpenChange={setOpen}
      isDevMode
      variant="widget"
      theme={theme}
      renderMarkdown={(text) => <Markdown content={text} />}
      logo={<SparkleIcon size={24} color="#5128c3" />}
    >
      <InsytfulSearch.Trigger
        className={`fixed bottom-6 right-6 z-[1000] w-14 h-14 rounded-full bg-[#5128c3] text-white shadow-[0px_12px_24px_rgba(0,0,0,0.2)] flex items-center justify-center ${isOpen ? "hidden" : ""}`}
      >
        <SparkleIcon size={24} color="#ffffff" />
      </InsytfulSearch.Trigger>

      <InsytfulSearch.Portal>
        <InsytfulSearch.Close />
        <WidgetContent />
      </InsytfulSearch.Portal>
    </InsytfulSearch.Root>
  );
}

const meta = {
  title: "AI Search - ReactJS/Widget",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const CornerWidget: Story = {
  render: () => <ChatWidgetDemo />,
};
