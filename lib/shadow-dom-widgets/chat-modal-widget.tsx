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
 * onToggleModal(true); // Open modal
 */

import ReactDOM from "react-dom";
import type { Root } from "react-dom/client";

import { ChatModal } from "../modal-components/chat-modal";
import type { ChatModalProps } from "../modal-components/chat-modal.types";
import { RAGProvider } from "contensis-rag-react";

import css from '../main.css?inline';

export type WidgetProps = Partial<ChatModalProps> & {
  options?: { config: string; baseUrl?: string };
  css?: string;
};

let elWidgetInstance: ChatModalWidget | null = null;

class ChatModalWidget extends HTMLElement {

  private elMount!: HTMLDivElement; 
  private elPortal!: HTMLDivElement;
  private elPortalShadowDOM!: ShadowRoot; 

  private _props: WidgetProps = {};
  private _isOpen = false;

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
    
    const elPortalMount = document.createElement("div");
    this.elPortalShadowDOM.append(elPortalBase, elPortalStyle, elPortalMount);
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
    const nextState = open !== undefined ? open : !this._isOpen;
    if (nextState === this._isOpen) return;
    
    this._isOpen = nextState;
    document.body.style.overflow = this._isOpen ? "hidden" : "";
    this.render();
  }

  private handleOpenChange = (isOpen: boolean) => {
    this.onToggle(isOpen);
  };

  private render() {
    const { options, ...p } = this._props;

    const modal = (
      <ChatModal
        {...(p as ChatModalProps)}
        title={p.title ?? ""}
        text={p.text ?? ""}
        options={options} 
        isOpen={this._isOpen}
        onOpenChange={this.handleOpenChange}
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

/**
 * Usage:
 * import { onToggleModal } from 'insytful-ai-search-components';
 * 
 * <button onClick={() => onToggleModal(true)}>Open Modal</button>
 */
export function onToggleModal(open?: boolean) {
  if (!elWidgetInstance) {
    console.warn('Modal widget not found. Ensure <insytful-ai-chat-modal> is in the DOM.');
    return;
  }
  
  elWidgetInstance.onToggle(open);
}

export function getModalInstance(): ChatModalWidget | null {
  return elWidgetInstance;
}

customElements.define("insytful-ai-chat-modal", ChatModalWidget);

export { ChatModalWidget as ChatModalWidget };
