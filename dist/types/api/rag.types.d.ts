/** Visual weight of a CTA button; `primary` gets the solid fill. */
export type CtaIntent = "primary" | "secondary";
/**
 * A call-to-action offered alongside an assistant answer.
 *
 * Post-sanitization invariants: label non-empty; url http(s) + normalized;
 * phone/email normalized; intent defaulted; newTab defaulted false.
 */
export type Cta = {
    type: "call";
    label: string;
    phone: string;
    intent: CtaIntent;
    icon?: string;
} | {
    type: "email";
    label: string;
    email: string;
    subject?: string;
    body?: string;
    intent: CtaIntent;
    icon?: string;
} | {
    type: "link";
    label: string;
    url: string;
    newTab: boolean;
    intent: CtaIntent;
    icon?: string;
} | {
    type: "event";
    label: string;
    event: string;
    detail?: Record<string, unknown>;
    intent: CtaIntent;
    icon?: string;
};
/** A `call`-type CTA — dials a normalized phone number. */
export type CtaCall = Extract<Cta, {
    type: "call";
}>;
/** An `email`-type CTA — opens a mail client via a normalized `mailto:` URI. */
export type CtaEmail = Extract<Cta, {
    type: "email";
}>;
/** A `link`-type CTA — navigates to a normalized http(s) URL. */
export type CtaLink = Extract<Cta, {
    type: "link";
}>;
/** An `event`-type CTA — dispatches a CMS-named event on the shared bus. */
export type CtaEvent = Extract<Cta, {
    type: "event";
}>;
export type RAGMessage = {
    role: "user" | "assistant";
    content: string;
    /** CTAs attached to the assistant message they arrived with (D1: per-message, persistent). */
    ctas?: Cta[];
};
