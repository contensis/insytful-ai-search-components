import { createRoot } from "react-dom/client";
import type { Root } from "react-dom/client";

import { ChatModal } from "../modal-components/chat-modal";
import type { ChatModalProps } from "../modal-components/chat-modal.types";
import { RAGProvider } from "contensis-rag-react";

import css from '../main.scss?inline';

export type WidgetProps = Partial<ChatModalProps> & {
  options?: { config: string; baseUrl?: string };
};

class InsytfulAiChatModalWidget extends HTMLElement {
  private root?: Root;
  private mountEl!: HTMLDivElement;
  private _props: WidgetProps = {};

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Base reset to reduce leakage/inheritance from host page.
    const base = document.createElement("style");
    base.textContent = `
      :host {
        display: block;
        font-family: inherit;
      }

      *, *::before, *::after {
        box-sizing: border-box;
        font-family: inherit;
      }
    `;

    const style = document.createElement("style");
    style.textContent = css;

    const mountEl = document.createElement("div");
    this.mountEl = mountEl;

    shadow.append(base, style, this.mountEl);
  }

  connectedCallback() {
    this.root = createRoot(this.mountEl);
    this.render();
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = undefined;
  }

  // Public API for passing props (objects/functions supported)
  set props(next: WidgetProps) {
    this._props = { ...this._props, ...next };
    this.render();
  }
  get props(): WidgetProps {
    return this._props;
  }

  // Optional: allow simple attributes too (strings only)
  static get observedAttributes() {
    return ["title", "text"];
  }
  attributeChangedCallback(
    name: string,
    _oldVal: string | null,
    newVal: string | null,
  ) {
    if (newVal == null) return;
    this._props = { ...this._props, [name]: newVal } as any;
    this.render();
  }

  private render() {
    if (!this.root) return;

    const { options, ...p } = this._props;

    if (!options?.config) {
      this.root.render(
        <ChatModal
          {...(p as ChatModalProps)}
          title={p.title ?? ""}
          text={p.text ?? ""}
        />,
      );
      return;
    }

    this.root.render(
      <RAGProvider config={options.config} baseUrl={options?.baseUrl}>
        <ChatModal
          {...(p as ChatModalProps)}
          title={p.title ?? ""}
          text={p.text ?? ""}
        />
      </RAGProvider>,
    );
  }
}

customElements.define("insytful-ai-chat-modal", InsytfulAiChatModalWidget);
export { InsytfulAiChatModalWidget as ChatModalWidget };
