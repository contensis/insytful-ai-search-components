import React, { useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

// Registers <insytful-search> as a custom element. Built via
// `npm run build:wc:storybook` (a `prestorybook`/`prebuild-storybook` hook)
// so Storybook loads the same IIFE bundle a real consumer would via a
// <script> tag, with its Tailwind-generated CSS already baked in.
import "./dist/insytful-search.js";
import "./hero.css";

const HERO_HTML = `
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-heading">The future of AI search starts here</h1>
      <p class="hero-subtitle">Unlock faster, smarter answers across your entire website experience</p>

      <div class="hero-search-block">
        <div class="hero-search-card-wrapper">
          <div class="hero-search-halo" aria-hidden="true"></div>
          <div class="hero-search-card">
            <form class="hero-search-form" id="hero-search-form">
              <svg class="hero-search-icon" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill="#333" d="M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z"/>
              </svg>
              <textarea class="hero-search-textarea" id="hero-search-input" rows="1" placeholder="Ask a question" aria-label="Ask a question"></textarea>
              <button class="hero-search-send" id="hero-search-send" type="submit" aria-label="Send">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill="#fff" d="M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
              </button>
            </form>
          </div>
        </div>

        <insytful-search
          dev-mode
          api-uri="https://api.insytful.com/v1"
          project-id="demo"
          theme="
            .insytful-root {
              --insytful-font-family: 'Poppins', sans-serif;
              --insytful-semantic-search-field-stroke: #acbeef;
              --insytful-input-card-border: #acbeef;
              --insytful-input-card-border-width: 2px;
              --insytful-input-card-radius: 16px;
              --insytful-btn-icon-search-bg-default: #0b0c0c;
              --insytful-btn-icon-search-bg-hover: #333;
              --insytful-brand-primary: #5128c3;
              --insytful-semantic-focus-ring: #916ee5;
              --insytful-semantic-search-field-ai-gradient-start: #916ee5;
              --insytful-semantic-search-field-ai-gradient-end: #acbeef;
              --insytful-text-link-default: #2165be;
              --insytful-text-link-hover: #194d8f;
            }
          "
        >
          <button slot="trigger" style="display:none;"></button>

          <span slot="title">How can we help?</span>
          <span slot="description">AI search can help you find services, report issues, or guide you through applications.</span>
          <span slot="disclaimer">AI-generated answers may be inaccurate. Please verify important information.</span>

          <svg slot="avatar" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.6 9.6L9 15L7.4 9.6L2 8L7.4 6.4L9 1L10.6 6.4L16 8L10.6 9.6ZM17 14.2L21 12L18.8 16L21 20L17 17.8L13 20L15.2 16L13 12L17 14.2ZM10 16L8.3 19L10 22L7 20.3L4 22L5.7 19L4 16L7 17.7L10 16Z" fill="#5128c3"/>
          </svg>

          <insytful-close></insytful-close>

          <insytful-suggestion>Where can I find school term dates?</insytful-suggestion>
          <insytful-suggestion>What courses do you offer?</insytful-suggestion>
          <insytful-suggestion>How do I apply?</insytful-suggestion>
        </insytful-search>

        <p class="hero-source-text">
          AI-generated answers may contain mistakes. Please verify important information.
        </p>
      </div>
    </div>
  </section>
`;

/**
 * Mounts the vanilla-JS hero + <insytful-search> markup imperatively
 * (matching playground-wc/index.html) rather than as JSX, since custom
 * elements and their slotted children aren't part of React's JSX typings.
 */
function WebComponentHeroDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = HERO_HTML;

    const heroForm = container.querySelector<HTMLFormElement>("#hero-search-form")!;
    const heroInput = container.querySelector<HTMLTextAreaElement>("#hero-search-input")!;
    const heroSend = container.querySelector<HTMLButtonElement>("#hero-search-send")!;
    const searchEl = container.querySelector("insytful-search") as (HTMLElement & { open: (query: string) => void }) | null;

    const onInput = () => {
      heroSend.classList.toggle("active", heroInput.value.trim().length > 0);
    };
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        heroForm.requestSubmit();
      }
    };
    const onSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      const query = heroInput.value.trim();
      if (!query || !searchEl) return;
      heroInput.value = "";
      heroSend.classList.remove("active");
      searchEl.open(query);
    };

    heroInput.addEventListener("input", onInput);
    heroInput.addEventListener("keydown", onKeydown);
    heroForm.addEventListener("submit", onSubmit);

    return () => {
      heroInput.removeEventListener("input", onInput);
      heroInput.removeEventListener("keydown", onKeydown);
      heroForm.removeEventListener("submit", onSubmit);
      container.innerHTML = "";
    };
  }, []);

  return <div className="wc-hero-demo" ref={containerRef} />;
}

const meta = {
  title: "AI Search - Web Components/Modal",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroAndModal: Story = {
  render: () => <WebComponentHeroDemo />,
};
