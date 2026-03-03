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
 */

import React from "react";
import ReactDOM from "react-dom";
import type { Root } from "react-dom/client";

import { ChatModal } from "../modal-components/chat-modal";
import type { ChatModalProps } from "../modal-components/chat-modal.types";
import { RAGProvider } from "contensis-rag-react";

import css from "../main.css?inline";

export type WidgetProps = Partial<ChatModalProps> & {
  options?: { config: string; baseUrl?: string };
  theme?: string;
};

// Global state to try and fix loosing props after disconnecting/reconnecting the widget. 
let globalWidgetState: { props: WidgetProps; isOpen: boolean } = { props: {}, isOpen: false };
let globalWidgetStateListeners: Set<(isOpen: boolean) => void> = new Set();
let elWidgetInstance: ChatModalWidget | null = null;
let instanceCounter = 0; // Track how many instances have been created

const BaseElement = (
  typeof HTMLElement !== "undefined" ? HTMLElement : class {}
) as typeof HTMLElement;

class ChatModalWidget extends BaseElement {
  private elMount!: HTMLDivElement;
  private elPortal!: HTMLDivElement;
  private elPortalShadowDOM!: ShadowRoot;
  private elCustomStyle!: HTMLStyleElement;
  private root?: Root;
  private isReact18 = false;
  private createRootFn?: (container: Element | DocumentFragment) => Root;
  private instanceId: number;
  private handleOpenChange = (open: boolean) => this.onToggle(open);
  private previousBodyOverflow = "";
  private previousBodyPaddingRight = "";

  constructor() {
    super();
    this.instanceId = ++instanceCounter;
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Clean up previous instance if it exists
    if (elWidgetInstance && elWidgetInstance !== this) elWidgetInstance.cleanup();

    // Detect React 18
    try {
      // @ts-ignore
      const ReactDOMClient = require("react-dom/client");
      this.createRootFn = ReactDOMClient.createRoot;
      this.isReact18 = true;
    } catch {
      this.isReact18 = false;
    }

    // Create portal with Shadow DOM
    this.elPortal = document.createElement("div");
    this.elPortal.id = "insytful-ai-modal-portal";
    this.elPortalShadowDOM = this.elPortal.attachShadow({ mode: "open" });

    // Apply styles
    const elPortalStyle = document.createElement("style");
    elPortalStyle.textContent = css;
    this.elCustomStyle = document.createElement("style");

    const elPortalMount = document.createElement("div");
    elPortalMount.className = "insytful-root";
    
    this.elPortalShadowDOM.append(
      elPortalStyle,
      this.elCustomStyle,
      elPortalMount,
    );

    this.elMount = elPortalMount;

    // Automatically apply theme from global state
    if (globalWidgetState.props.theme) {
      this.elCustomStyle.textContent = globalWidgetState.props.theme;
    }

    elWidgetInstance = this;
  }

  connectedCallback() {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const doesExist = document.getElementById("insytful-ai-modal-portal");
    
    if (!doesExist) document.body.appendChild(this.elPortal);
    
    // Automatically render if we have props from global state
    const hasProps = Object.keys(globalWidgetState.props).length > 0;
    
    if (hasProps) this.render();
  }

  disconnectedCallback() { this.cleanup() }

  // Centralized cleanup method
  private cleanup() {
    if (typeof window === "undefined") return;
    
    // Clean up React
    if (this.isReact18 && this.root) {
      this.root.unmount();
      this.root = undefined;
    } else if (!this.isReact18 && this.elMount) {
      ReactDOM.unmountComponentAtNode(this.elMount);
    }
    
    // Remove portal (only if it's OUR portal)
    if (this.elPortal && this.elPortal.parentNode) {
      document.body.removeChild(this.elPortal);
    }
    
    // Close modal and restore overflow
    globalWidgetState.isOpen = false;
    document.body.style.overflow = this.previousBodyOverflow;
    document.body.style.paddingRight = this.previousBodyPaddingRight;
  }

  // Simplified props setter - just updates global state
  set props(next: WidgetProps) {
    // Merge new props into global state
    globalWidgetState.props = {
      ...globalWidgetState.props,
      ...next,
    };

    // Apply theme if provided
    if (next.theme) this.elCustomStyle.textContent = next.theme;

    this.render();
  }

  get props(): WidgetProps {
    return globalWidgetState.props;
  }

  // Only observe attributes if you're using them via HTML
  static get observedAttributes() {
    return [];
  }

  public onToggle(open?: boolean) {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    
    const nextOpen = open ?? !globalWidgetState.isOpen;
    
    if (nextOpen === globalWidgetState.isOpen) return;

    globalWidgetState.isOpen = nextOpen;

    if (nextOpen) {
      this.previousBodyOverflow = document.body.style.overflow;
      this.previousBodyPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = this.previousBodyOverflow;
      document.body.style.paddingRight = this.previousBodyPaddingRight;
    }

    globalWidgetStateListeners.forEach(listener => listener(nextOpen));
    
    this.render();
  }

  private render() {
    if (typeof window === "undefined") return;
    
    // Ensure portal is in DOM before rendering
    const portalInDom = document.getElementById("insytful-ai-modal-portal");
    if (!portalInDom && this.elPortal) {
      console.warn(`[Insytful #${this.instanceId}] ⚠️ Portal not in DOM, adding it now`);
      document.body.appendChild(this.elPortal);
    }
    
    const { options, ...p } = globalWidgetState.props;

    // Skip render if critical props missing
    if (!options?.config && !p.isDevMode) {
      console.warn(`[Insytful #${this.instanceId}] ⚠️ Render skipped - options.config missing and not in dev mode`);
      console.warn(`[Insytful #${this.instanceId}] Current global state:`, globalWidgetState);
      return;
    }

    const modal = (
      <ChatModal
        options={options || { config: "" }}
        title={p.title ?? ""}
        text={p.text ?? ""}
        isOpen={globalWidgetState.isOpen}
        onOpenChange={this.handleOpenChange}
        suggestions={p.suggestions}
        isDevMode={p.isDevMode}
        renderMarkdown={p.renderMarkdown}
        disclaimer={p.disclaimer}
        renderSwitch={p.renderSwitch}
        classic={p.classic}
        offsets={p.offsets}
        logo={p.logo}
      />
    );

    const content = (
      <RAGProvider
        key={options?.config || "default"}
        config={options?.config || ""}
        baseUrl={options?.baseUrl}
      >
        {modal}
      </RAGProvider>
    );

    // Render with appropriate React version
    if (this.isReact18) {
      if (!this.root && this.createRootFn) {
        this.root = this.createRootFn(this.elMount);
      }
      this.root?.render(content);
    } else {
      ReactDOM.render(content, this.elMount);
    }
  }
}

export function onToggleModal() {
  const modal = getModalInstance();
  if (!modal) {
    console.warn('[Insytful] No modal instance found');
    return;
  }
  modal.onToggle();
}

export function setModalProps(props: WidgetProps) {
  const modal = getModalInstance();
  if (!modal) {
    console.warn('[Insytful] No modal instance found');
    return;
  }
  modal.props = props;
}

export function onModalStateChange(callback: (isOpen: boolean) => void): () => void {
  globalWidgetStateListeners.add(callback);
  return () => {
    globalWidgetStateListeners.delete(callback);
  };
}

export function getModalInstance(): ChatModalWidget | null {
  return elWidgetInstance;
}

if (typeof window !== "undefined" && typeof customElements !== "undefined") {
  customElements.define(
    "insytful-ai-chat-modal",
    ChatModalWidget as unknown as CustomElementConstructor,
  );
}

export { ChatModalWidget };