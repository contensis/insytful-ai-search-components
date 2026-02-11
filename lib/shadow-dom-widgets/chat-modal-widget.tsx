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
 * import { onToggleModal } from 'insytful-ai-search-components';
 * 
 * Custom CSS:
 * The theme prop accepts either:
 * 1. Inline CSS string: import theme from './custom.css?inline'; props.theme = theme;
 * 2. CSS file URL: props.theme = '/path/to/custom.css';
 */

import React from "react";
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

// Use a conditional base class to avoid HTMLElement reference in Node.js/SSR
const BaseElement = (typeof HTMLElement !== 'undefined' ? HTMLElement : class {}) as typeof HTMLElement;

class ChatModalWidget extends BaseElement {

  private elMount!: HTMLDivElement; 
  private elPortal!: HTMLDivElement;
  private elPortalShadowDOM!: ShadowRoot; 
  private elCustomStyle!: HTMLStyleElement; // For custom CSS

  private _props: WidgetProps = {};
  public _isOpen = false;
  private _hasRendered = false; // Track if we've rendered at least once

  private root?: Root; // React 18
  private isReact18 = false; 

  private createRootFn?: (container: Element | DocumentFragment) => Root;

  constructor() {
    super();
    
    // Skip initialization in non-browser environments (SSR/Node.js)
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    
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
    // Add class to mount point for CSS variable scoping
    elPortalMount.className = "insytful-root";
    this.elPortalShadowDOM.append(elPortalBase, elPortalStyle, this.elCustomStyle, elPortalMount);
    this.elMount = elPortalMount;
    
    elWidgetInstance = this;
  }

  connectedCallback() {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;
      const doesExist = document.getElementById('insytful-ai-modal-portal');
      if (!doesExist) {
        document.body.appendChild(this.elPortal);
      }
      // Only render on connectedCallback if props have already been set
      // Otherwise wait for props setter to trigger first render
      if (this._hasRendered) {
        this.render();
      }
  }

  disconnectedCallback() {
    if (typeof window === 'undefined') return;
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
    this._hasRendered = true; // Toggle that we're going to render
    this._props = { ...this._props, ...next };

    if (next.theme) this.elCustomStyle.textContent = next.theme;

    this.render();
  }

  
  get props(): WidgetProps {
    return this._props;
  }

  /**
   * A static getter method that returns an array of attribute names (strings) 
   * that a custom element wishes to observe for changes
   */
  // TODO: might need other props here in the future
  static get observedAttributes() {
    return ["title", "text"];
  }

  attributeChangedCallback(name: string, _oldVal: string | null, newVal: string | null) {
    if (newVal == null) return;
    this._props = { ...this._props, [name]: newVal } as any;
    this.render();
  }

  public onToggle(open?: boolean) {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const nextOpen = open ?? !this._isOpen;

    if (nextOpen === this._isOpen) return;

    this._isOpen = nextOpen;
    document.body.style.overflow = nextOpen ? "hidden" : "";
    this.render();
  }

  private render() {
    if (typeof window === 'undefined') return;
    const { options, ...p } = this._props;

    const modal = (
      <ChatModal
        {...(p as ChatModalProps)}
        title={p.title ?? ""}
        text={p.text ?? ""}
        {...(options && { options })} 
        isOpen={this._isOpen}
        onOpenChange={(open: boolean) => this.onToggle(open)}
      />
    );

    // always wrap in RAGProvider to prevent context errors
    // use key to force remount when config changes
    const content = (
      <RAGProvider 
        key={options?.config || 'default'} 
        config={options?.config || ''} 
        baseUrl={options?.baseUrl}
      >
        {modal}
      </RAGProvider>
    );

    // React18: Use createRoot API
    if (this.isReact18) {
      if (!this.root && this.createRootFn) {
        this.root = this.createRootFn(this.elMount);
      }
      this.root?.render(content);
    } else {
      // React17: Use legacy ReactDOM.render
      ReactDOM.render(content, this.elMount);
    }
  }
}

export function onToggleModal() {
  const modal = getModalInstance();
  if (!modal) return;
  modal.onToggle(); 
}

/**
 * Don't need separate open/close functions since onToggle can handle both states
 * but will keep these here if we want to add more specific logic in the future
 */

// export function onOpenModal() {
//   const modal = getModalInstance();
//   if (!modal) return;
//   modal.onToggle(true);
// }

// export function onCloseModal() {
//   const modal = getModalInstance();
//   if (!modal) return;
//   modal.onToggle(false);
// }

export function isModalOpen(): boolean {
  const modal = getModalInstance();
  if (!modal) return false;
  return modal._isOpen;
}

export function getModalInstance(): ChatModalWidget | null {
  return elWidgetInstance;
}

// Only define the custom element in browser environments (not in SSR/Node.js)
if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
  customElements.define("insytful-ai-chat-modal", ChatModalWidget as unknown as CustomElementConstructor);
}

export { ChatModalWidget };
