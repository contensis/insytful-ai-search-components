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

// Import CSS as inline string (Vite ?inline query parameter)
import css from '../main.css?inline';

/**
 * Props that can be passed to the Web Component
 */
export type WidgetProps = Partial<ChatModalProps> & {
  options?: { config: string; baseUrl?: string };
};

// Store reference to widget instance for programmatic control
let widgetInstance: ChatModalWidget | null = null;

/**
 * Custom Element class for <insytful-ai-chat-modal>
 */
class ChatModalWidget extends HTMLElement {
  private mountEl!: HTMLDivElement; // React mount point
  private portalEl!: HTMLDivElement; // Portal target on body
  private portalShadow!: ShadowRoot; // Shadow root for portal
  private _props: WidgetProps = {};
  private _isOpen = false;
  private root?: Root; // React 18
  private isReact18 = false; // Track React version
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
    this.portalEl = document.createElement("div");
    this.portalEl.id = "insytful-ai-modal-portal";
    this.portalShadow = this.portalEl.attachShadow({ mode: "open" });
    
    // Apply styles to portal's Shadow DOM
    const portalBase = document.createElement("style");
    const portalStyle = document.createElement("style");
    portalStyle.textContent = css;

    // Mount point inside portal's Shadow DOM
    const portalMount = document.createElement("div");
    this.portalShadow.append(portalBase, portalStyle, portalMount);
    this.mountEl = portalMount;
    
    // Store instance reference
    widgetInstance = this;
  }

  connectedCallback() {
    // Check if the portal already exists to prevent dups
      const doesExist = document.getElementById('insytful-ai-modal-portal');
      if (!doesExist) {
        document.body.appendChild(this.portalEl);
      }
      this.render();
  }

  disconnectedCallback() {
    if (this.isReact18 && this.root) {
      this.root.unmount();
    } else if (!this.isReact18) {
      ReactDOM.unmountComponentAtNode(this.mountEl);
    }
    if (this.portalEl.parentNode) {
      document.body.removeChild(this.portalEl);
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

  /**
   * Public method to toggle modal state
   */
  public toggle(open?: boolean) {
    const nextState = open !== undefined ? open : !this._isOpen;
    if (nextState === this._isOpen) return; // Prevent unnecessary re-renders
    
    this._isOpen = nextState;
    document.body.style.overflow = this._isOpen ? "hidden" : "";
    this.render();
  }

  private handleOpenChange = (isOpen: boolean) => {
    this.toggle(isOpen);
  };

  private render() {
    const { options, ...p } = this._props;

    const modal = (
      <ChatModal
        {...(p as ChatModalProps)}
        title={p.title ?? ""}
        text={p.text ?? ""}
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
        this.root = this.createRootFn(this.mountEl);
      }
      this.root?.render(content);
    } else {
      // React 17: Use legacy ReactDOM.render
      ReactDOM.render(content, this.mountEl);
    }
  }
}

/**
 * Programmatic API for controlling the modal
 * 
 * Usage:
 * import { onToggleModal } from 'insytful-ai-search-components';
 * 
 * <button onClick={() => onToggleModal(true)}>Open Modal</button>
 */
export function onToggleModal(open?: boolean) {
  if (!widgetInstance) {
    console.warn('Modal widget not found. Ensure <insytful-ai-chat-modal> is in the DOM.');
    return;
  }
  
  widgetInstance.toggle(open);
}

/**
 * Get the current widget instance
 */
export function getModalInstance(): ChatModalWidget | null {
  return widgetInstance;
}

// Register the custom element
customElements.define("insytful-ai-chat-modal", ChatModalWidget);

// Export for TypeScript users
export { ChatModalWidget as ChatModalWidget };
