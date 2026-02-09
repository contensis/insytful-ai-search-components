/**
 * Custom Web Component for Insytful AI Chat Modal
 * 
 * This Web Component wraps the React ChatModal component with Shadow DOM for style isolation.
 * The modal renders into a portal on document.body for full-screen layout.
 * 
 * Usage:
 * <insytful-ai-chat-modal></insytful-ai-chat-modal>
 * 
 * Programmatic API:
 * import { onToggleModal, onOpenModal, onCloseModal } from 'insytful-ai-search-components';
 * 
 * Custom CSS:
 * The theme prop accepts either:
 * 1. Inline CSS string: import theme from './custom.css?inline'; props.theme = theme;
 * 2. CSS file URL: props.theme = '/path/to/custom.css';
 */

import ReactDOM from "react-dom";
import type { Root } from "react-dom/client";

import { ChatModal } from "../modal-components/chat-modal";
import type { ChatModalProps } from "../modal-components/chat-modal.types";
import { RAGProvider } from "contensis-rag-react";

import css from '../main.css?inline';

export type WidgetProps = Partial<ChatModalProps> & {
  options?: { config: string; baseUrl?: string };
  theme?: string; // Custom CSS as inline string or URL path
};

let elWidgetInstance: ChatModalWidget | null = null;

class ChatModalWidget extends HTMLElement {

  private elMount!: HTMLDivElement; 
  private elPortal!: HTMLDivElement;
  private elPortalShadowDOM!: ShadowRoot; 
  private elCustomStyle!: HTMLStyleElement; // For custom CSS

  private _props: WidgetProps = {};
  public _isOpen = false;

  private root?: Root; // React 18
  private isReact18 = false; 

  private createRootFn?: (container: Element | DocumentFragment) => Root;

  constructor() {
    super();
    
    // Detect React 18 by checking if react-dom/client exists
    try {
      // @ts-ignore - dynamic import for React version detection
      const ReactDOMClient = require("react-dom/client");
      this.createRootFn = ReactDOMClient.createRoot;
      this.isReact18 = true;
    } catch {
      // React 17 - createRoot not available
      this.isReact18 = false;
    }
    
    // Create portal container on document.body with Shadow DOM
    this.elPortal = document.createElement("div");
    this.elPortal.id = "insytful-ai-modal-portal";
    this.elPortalShadowDOM = this.elPortal.attachShadow({ mode: "open" });

    // Apply styles to portal's Shadow DOM
    const elPortalBase = document.createElement("style");
    const elPortalStyle = document.createElement("style");
    elPortalStyle.textContent = css;
    
    // Create placeholder for custom CSS
    this.elCustomStyle = document.createElement("style");
    
    const elPortalMount = document.createElement("div");
    this.elPortalShadowDOM.append(elPortalBase, elPortalStyle, this.elCustomStyle, elPortalMount);
    this.elMount = elPortalMount;
    
    elWidgetInstance = this;
  }

  connectedCallback() {
      const doesExist = document.getElementById('insytful-ai-modal-portal');
      if (!doesExist) {
        document.body.appendChild(this.elPortal);
      }
      this.render();
  }

  disconnectedCallback() {
    if (this.isReact18 && this.root) {
      this.root.unmount();
    } else if (!this.isReact18) {
      ReactDOM.unmountComponentAtNode(this.elMount);
    }
    if (this.elPortal.parentNode) {
      document.body.removeChild(this.elPortal);
    }
  }

  set props(next: WidgetProps) {
    this._props = { ...this._props, ...next };

    if (next.theme) this.elCustomStyle.textContent = next.theme;

    this.render();
  }

  
  get props(): WidgetProps {
    return this._props;
  }

  static get observedAttributes() {
    return ["title", "text"];
  }

  attributeChangedCallback(name: string, _oldVal: string | null, newVal: string | null) {
    if (newVal == null) return;
    this._props = { ...this._props, [name]: newVal } as any;
    this.render();
  }

  public onToggle(open?: boolean) {
    const nextOpen = open ?? !this._isOpen;

    if (nextOpen === this._isOpen) return;

    this._isOpen = nextOpen;
    document.body.style.overflow = nextOpen ? "hidden" : "";
    this.render();
  }

  private render() {
    const { options, ...p } = this._props;

    const modal = (
      <ChatModal
        {...(p as ChatModalProps)}
        title={p.title ?? ""}
        text={p.text ?? ""}
        options={options!} 
        isOpen={this._isOpen}
        onOpenChange={(open: boolean) => this.onToggle(open)}
      />
    );

    const content = !options?.config ? modal : (
      <RAGProvider config={options.config} baseUrl={options?.baseUrl}>
        {modal}
      </RAGProvider>
    );

    // React 18: Use createRoot API
    if (this.isReact18) {
      if (!this.root && this.createRootFn) {
        this.root = this.createRootFn(this.elMount);
      }
      this.root?.render(content);
    } else {
      // React 17: Use legacy ReactDOM.render
      ReactDOM.render(content, this.elMount);
    }
  }
}

export function onToggleModal() {
  const modal = getModalInstance();
  if (!modal) return;
  modal.onToggle(); 
}

export function onOpenModal() {
  const modal = getModalInstance();
  if (!modal) return;
  modal.onToggle(true);
}

export function onCloseModal() {
  const modal = getModalInstance();
  if (!modal) return;
  modal.onToggle(false);
}

export function isModalOpen(): boolean {
  const modal = getModalInstance();
  if (!modal) return false;
  return modal._isOpen;
}

export function getModalInstance(): ChatModalWidget | null {
  return elWidgetInstance;
}

customElements.define("insytful-ai-chat-modal", ChatModalWidget);

export { ChatModalWidget as ChatModalWidget };
