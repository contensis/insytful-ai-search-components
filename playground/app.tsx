import React from "react";
import { useState } from "react";
import { InsytfulSearch } from "../lib/main";
import { Header } from "./components/header";
import { Markdown } from "./components/markdown";
import theme from "./components/modal-theme.css?inline";

const config = {
  config: import.meta.env.VITE_AI_CONFIG_ID,
  baseUrl: import.meta.env.VITE_AI_BASE_URL,
};

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <InsytfulSearch.Root
      options={config}
      open={isOpen}
      onOpenChange={setOpen}
      theme={theme}
      // isDevMode={true}
      renderMarkdown={(text) => <Markdown content={text} />}
      logo={<SearchLogo />}
    >
      <InsytfulSearch.Modes defaultValue="ai">
        <div className="min-h-screen flex flex-col">
          <Header />
          {/* Hero Section */}
          <section
            className="relative flex flex-col justify-center px-4 pb-24 pt-24 md:pt-32 md:pb-32"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              minHeight: "620px",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col items-start">
              <div className="relative z-10 max-w-[800px]">
                <h1 className="text-white text-[40px] md:text-[64px] leading-[1.1] font-bold mb-6">
                  Connecting, Simplifying, Improving.
                </h1>
                <p className="text-white text-[18px] md:text-[20px] mb-4">
                  How can we help you?
                </p>
                <HeroSearchCard onOpenModal={() => setOpen(true)} />
              </div>
            </div>
          </section>

          {/* Page content */}
          <main className="flex-1 bg-white px-6 py-12 max-w-[1200px] mx-auto w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Popular services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Report a pothole",
                "Apply for a blue badge",
                "School term dates",
                "Council tax",
                "Planning applications",
                "Bin collection",
              ].map((item) => (
                <div
                  key={item}
                  className="p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors cursor-pointer"
                >
                  <span className="text-gray-900 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </main>

          <footer className="bg-[#2E3339] text-white py-6 px-6 text-center text-sm">
            &copy; {new Date().getFullYear()} Zengenti • Powered by Insytful AI
            Search Components
          </footer>
        </div>

        <InsytfulSearch.Portal>
          <ModalContent />
        </InsytfulSearch.Portal>
      </InsytfulSearch.Modes>
    </InsytfulSearch.Root>
  );
}

/**
 * Modal content — switches between empty state and conversation view.
 */
function ModalContent() {
  const { messages, error } = InsytfulSearch.useSearchContext("ModalContent");
  const modeCtx = InsytfulSearch.useModeContextSafe();
  const hasMessages = messages.length > 0;

  return (
    <>
      {/* Breadcrumb bar */}
      <div className="bg-[#f3f3f3] border-b border-gray-200 ">
        <div className="max-w-[1200px] mx-auto px-6 py-2 flex items-center gap-2 text-[14px]">
          <a href="/" className="text-[#1d70b8] hover:underline">
            Home
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              fill="#666"
              d="M4.5 2.5 8 6l-3.5 3.5"
              stroke="#666"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[#333]">Search</span>
        </div>
      </div>

      {!hasMessages && (
        <>
          <InsytfulSearch.Mode name="ai">
            <div className="flex flex-col items-center gap-[8px] md:gap-[16px] md:mt-auto px-4">
              <InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
              <InsytfulSearch.Description>
                AI search can help you find services, report issues, or guide
                you through applications.
              </InsytfulSearch.Description>
            </div>
          </InsytfulSearch.Mode>

          <InsytfulSearch.Mode name="classic" path="/search?term=">
            <div className="flex flex-col items-center gap-[8px] md:gap-[16px] md:mt-auto px-4">
              <InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
              <InsytfulSearch.Description>
                Search for services, information, and more.
              </InsytfulSearch.Description>
            </div>
          </InsytfulSearch.Mode>
        </>
      )}

      <InsytfulSearch.Messages className="px-4" />

      {hasMessages ? (
        <div className="mt-auto">
          <InsytfulSearch.Mode name="ai">
            {error && (
              <div className="pb-3 w-full max-w-[784px] mx-auto">
                <InsytfulSearch.ErrorCallout
                  onSwitchClassic={modeCtx?.onSwitchMode ? () => modeCtx.onSwitchMode("classic") : undefined}
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
          <InsytfulSearch.Mode name="classic" path="/search?term=">
            <InsytfulSearch.Input />
          </InsytfulSearch.Mode>
        </div>
      ) : (
        <>
          <ModalInputCard />
          <DisclaimerFooter />
        </>
      )}
    </>
  );
}

/**
 * Modal input card — wraps InsytfulSearch.Input inside each InsytfulSearch.Mode so
 * classic mode's onSend override (navigate to /search) applies.
 */
function ModalInputCard() {
  return (
    <div className="px-4">
      <div className="insytful-search-input-card w-full max-w-[784px] mx-auto rounded-[16px] border border-[var(--insytful-semantic-search-field-stroke)] bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[var(--insytful-semantic-search-field-focus)] focus-within:ring-offset-2 focus-within:ring-offset-white px-[12px] pb-[12px] pt-[12px]">
        <InsytfulSearch.Mode name="ai">
          <InsytfulSearch.Input embedded />
        </InsytfulSearch.Mode>
        <InsytfulSearch.Mode name="classic" path="/search?term=">
          <InsytfulSearch.Input embedded />
        </InsytfulSearch.Mode>
          <SwitchModeTabs />
      </div>
    </div>
  );
}

/**
 * Disclaimer pinned to bottom — always takes up space to prevent layout jump.
 * Text is invisible in classic mode but the container keeps its height.
 */
function DisclaimerFooter() {
  const modeCtx = InsytfulSearch.useModeContextSafe();
  const isAI = !modeCtx || modeCtx.mode === "ai";

  return (
    <div className="mt-auto pb-[24px] p-4">
      <InsytfulSearch.Disclaimer>
        <span style={{ visibility: isAI ? "visible" : "hidden" }}>
          AI-generated answers may be inaccurate. Please verify important
          information.
        </span>
      </InsytfulSearch.Disclaimer>
    </div>
  );
}

/**
 * Hero search card — uses InsytfulSearch.Input with mode-aware behaviour.
 * AI mode: opens the modal and sends the query to the RAG API.
 * Classic mode: navigates directly to the search page.
 */
function HeroSearchCard({ onOpenModal }: { onOpenModal: () => void }) {
  const { onSend } = InsytfulSearch.useSearchContext("HeroSearchCard");
  const modeCtx = InsytfulSearch.useModeContextSafe();
  const isClassic = modeCtx?.mode !== "ai";

  const handleSubmit = (query: string) => {
    if (isClassic) {
      window.location.href = `/search?term=${encodeURIComponent(query)}`;
    } else {
      onOpenModal();
      onSend(query);
    }
  };

  return (
    <div className="max-w-[600px] bg-white rounded-[16px] shadow-lg overflow-hidden px-4 pb-3 pt-[12px]">
      <InsytfulSearch.Input
        embedded
        placeholder={isClassic ? "Search" : "Ask a question"}
        onSubmit={handleSubmit}
      />
      <SwitchModeTabs />
    </div>
  );
}

/**
 * Reusable mode tabs — used in both the hero and the modal input card.
 */
function SwitchModeTabs() {
  return (
    <InsytfulSearch.ModeSwitch>
      {({ mode, onSwitch }) => (
        <div className="inline-flex gap-[2px] p-[4px] rounded-[8px] bg-[#F2EFF8]">
          <button
            onClick={() => onSwitch("ai")}
            className={`py-[4px] px-[12px] rounded-[4px] text-[13px] md:text-[14px] transition-colors border ${
              mode === "ai"
                ? "border-none bg-white text-[#333] font-medium"
                : "border-transparent text-gray-500 hover:text-[#333]"
            }`}
          >
            AI search
          </button>
          <button
            onClick={() => onSwitch("classic")}
            className={`py-[4px] px-[12px] rounded-[4px] text-[13px] md:text-[14px] transition-colors border ${
              mode === "classic"
                ? "border-none bg-white text-[#333] font-medium"
                : "border-transparent text-gray-500 hover:text-[#333]"
            }`}
          >
            Classic search
          </button>
        </div>
      )}
    </InsytfulSearch.ModeSwitch>
  );
}

function SearchLogo() {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill="var(--insytful-text-default)"
        d="M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z"
      />
    </svg>
  );
}

export default App;
