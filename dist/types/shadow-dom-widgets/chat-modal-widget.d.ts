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
    private root?;
    private isReact18;
    private createRootFn?;
    private instanceId;
    private handleOpenChange;
    private previousBodyOverflow;
    private previousBodyPaddingRight;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private cleanup;
    set props(next: WidgetProps);
    get props(): WidgetProps;
    static get observedAttributes(): never[];
    onToggle(open?: boolean): void;
    private render;
}
export declare function onToggleModal(): void;
export declare function setModalProps(props: WidgetProps): void;
export declare function onModalStateChange(callback: (isOpen: boolean) => void): () => void;
export declare function getModalInstance(): ChatModalWidget | null;
export { ChatModalWidget };
