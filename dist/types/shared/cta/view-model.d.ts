import { Cta, CtaIntent } from '../../api/rag.types';
/** Hook class for the CTA row container (`role="group"`). */
export declare const CTA_BAR_CLASS = "insytful-search-cta-bar";
/** Hook class for the visible "Quick actions" micro-label above the row. */
export declare const CTA_LABEL_CLASS = "insytful-search-cta-label";
/** Base hook class carried by every CTA chip. */
export declare const CTA_BTN_CLASS = "insytful-search-cta-btn";
/** Everything a renderer needs to emit one CTA chip. */
export interface CtaViewModel {
    /** `call`/`email`/`link` are real anchors (D7); only `event` is a button. */
    element: "a" | "button";
    /** Normalized `tel:`/`mailto:`/http(s) href; absent for `event` buttons. */
    href?: string;
    /** Whether an anchor should carry `target="_blank" rel="noopener noreferrer"`. */
    newTab: boolean;
    /** Hook classes; `btn` already includes the intent variant class. */
    classes: {
        bar: string;
        label: string;
        btn: string;
    };
    /** Resolved icon name; absent when the icon is unknown (label-only chip). */
    iconKey?: string;
    /** Inline `<svg>` markup for `iconKey`; absent when unknown. */
    iconSvg?: string;
    /** Append the sr-only "(opens in a new tab)" suffix to the label. */
    srNewTabSuffix?: boolean;
    /** Visible (and accessible — WCAG 2.5.3) label text. */
    label: string;
    intent: CtaIntent;
}
/**
 * Derives the render decisions for one sanitized CTA.
 *
 * Input MUST be post-`sanitizeCtas` (invariants: normalized url/phone/email,
 * defaulted `intent`/`newTab`) — no re-validation or re-defaulting happens
 * here.
 */
export declare function ctaViewModel(cta: Cta): CtaViewModel;
