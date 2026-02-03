import { useEffect, useRef, useState } from "react";
import type { WidgetProps } from '../../lib/main';
import '../../lib/shadow-dom-widgets/chat-modal-widget';
import { RenderSwitch } from "./render-switch";

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


export const AISearchModal = () => {
  const ref = useRef<ChatModalElement | null>(null);

  const isDesktop = useDetectDesktop();

  useEffect(() => {
    if (!ref.current) return;

    ref.current.props = {
      options: config,
      title: "What are you looking for?",
      text: "AI search can help. Tell us what you need in your own words.",
      disclaimer:
        '<span>AI-generated answers may include mistakes. Please verify important information. <a href="/">Find out more</a>.</span>',
      suggestions: [
        "How can I report a pothole?",
        "I need a blue badge",
        "When's the next school holiday?",
      ],
      // renderSwitch: (fn) => (
      //   <RenderSwitch text="Prefer not to use AI?" btn={{ text: "Use classic search."}} onClick={fn} />
      // ),
      offsets: {
        top: isDesktop ? '88px' : '71px',
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
        // renderSwitch: (fn) => (
        //   // <RenderSwitch text="Want detailed answers?" btn={{ text: "Try AI search."}} onClick={fn} />
        // ),
      },
    };
  }, [isDesktop]);

  return (
    // @ts-ignore
    <insytful-ai-chat-modal
      ref={(element: ChatModalElement) => (ref.current = element as ChatModalElement)}
      style={{ fontFamily: "inherit" }}
    />
  );
};