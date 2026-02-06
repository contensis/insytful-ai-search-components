import { useEffect, useRef, useState } from "react";
import type { WidgetProps } from "../../lib/main";
import "../../lib/shadow-dom-widgets/chat-modal-widget";

import { Markdown } from "./markdown";

const config = {
  config: import.meta.env.VITE_AI_CONFIG_ID,
  baseUrl: import.meta.env.VITE_AI_BASE_URL,
};

function useDetectDesktop(breakpoint = 768) {
  const [isDesktop, setDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= breakpoint;
  });

  useEffect(() => {
    const onResize = () => setDesktop(window.innerWidth >= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isDesktop;
}

type ChatModalElement = HTMLElement & {
  props: Partial<WidgetProps>;
};

export const SearchModal = () => {
  const ref = useRef<ChatModalElement | null>(null);

  const isDesktop = useDetectDesktop();

  useEffect(() => {
    if (!ref.current) return;

    ref.current.props = {
      isDevMode: true,
      options: config,
      title: "What are you looking for?",
      text: "AI search can help. Tell us what you need in your own words.",
      renderMarkdown: (text) => <Markdown content={text} />,
      disclaimer: (
        <span className="text-s text-[#6B6B6B]">
          AI-generated answers may include mistakes. Please verify important
          information.{" "}
          <a
            className="underline text-[#1D70B8] hover:text-[#1D70B8]/80 hover:no-underline focus:outline-none"
            href="/"
          >
            Find out more
          </a>
          .
        </span>
      ),
      suggestions: [
        "How can I report a pothole?",
        "I need a blue badge",
        "When's the next school holiday?",
      ],
      renderSwitch: (onClick) => (
        <div className="text-sm md:text-lg w-full text-center">
          <span className="text-[#505A5F]">Prefer not to use AI? </span>
          <button
            className="underline text-[#1D70B8] hover:text-[#1D70B8]/80 hover:no-underline focus:outline-none"
            onClick={onClick}
          >
            Use classic search.
          </button>
        </div>
      ),
      offsets: {
        top: isDesktop ? "84px" : "56px",
        bottom: 0,
        left: 0,
        right: 0,
      },
      classic: {
        title: "You're using classic search",
        text: "Start typing to find pages on suffolk.gov.uk",
        suggestions: [
          "Report a pothole",
          "Apply for a blue badge",
          "School term dates",
        ],
        path: "/q=",
        renderSwitch: (fn) => (
          <div className="text-sm md:text-lg w-full text-center">
            <span className="text-[#505A5F]">Want detailed answers? </span>
            <button
              className="underline text-[#1D70B8] hover:text-[#1D70B8]/80 hover:no-underline focus:outline-none"
              onClick={fn}
            >
              Try AI search
            </button>
          </div>
        ),
      },
    };
  }, [isDesktop]);

  return (
    <>
      {/* @ts-ignore */}
      <insytful-ai-chat-modal
        ref={(element: ChatModalElement) =>
          (ref.current = element as ChatModalElement)
        }
        style={{ fontFamily: "inherit" }}
      />
    </>
  );
};
