import { ChatModalProps } from '../modal-components/chat-modal.types';
export type WidgetProps = Partial<ChatModalProps> & {
    options?: {
        config: string;
        baseUrl?: string;
    };
    theme?: string;
};
declare const BaseElement: typeof HTMLElement;
declare class ChatModalWidget extends BaseElement {
    private elMount;
    private elPortal;
    private elPortalShadowDOM;
    private elCustomStyle;
    private _props;
    _isOpen: boolean;
    private _hasRendered;
    private root?;
    private isReact18;
    private createRootFn?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    set props(next: WidgetProps);
    get props(): WidgetProps;
    /**
     * A static getter method that returns an array of attribute names (strings)
     * that a custom element wishes to observe for changes
     */
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, _oldVal: string | null, newVal: string | null): void;
    onToggle(open?: boolean): void;
    private render;
}
export declare function onToggleModal(): void;
/**
 * Don't need separate open/close functions since onToggle can handle both states
 * but will keep these here if we want to add more specific logic in the future
 */
export declare function isModalOpen(): boolean;
export declare function getModalInstance(): ChatModalWidget | null;
export { ChatModalWidget };
