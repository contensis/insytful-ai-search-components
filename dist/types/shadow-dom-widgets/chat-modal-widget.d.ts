import { ChatModalProps } from '../modal-components/chat-modal.types';
export type WidgetProps = Partial<ChatModalProps> & {
    options?: {
        config: string;
        baseUrl?: string;
    };
    theme?: string;
};
declare class ChatModalWidget extends HTMLElement {
    private elMount;
    private elPortal;
    private elPortalShadowDOM;
    private elCustomStyle;
    private _props;
    _isOpen: boolean;
    private root?;
    private isReact18;
    private createRootFn?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    set props(next: WidgetProps);
    get props(): WidgetProps;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, _oldVal: string | null, newVal: string | null): void;
    onToggle(open?: boolean): void;
    private render;
}
export declare function onToggleModal(): void;
export declare function onOpenModal(): void;
export declare function onCloseModal(): void;
export declare function isModalOpen(): boolean;
export declare function getModalInstance(): ChatModalWidget | null;
export { ChatModalWidget as ChatModalWidget };
