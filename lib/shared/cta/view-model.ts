/**
 * CTA view model — the single derivation of markup decisions (element kind,
 * href, classes, icon) consumed by BOTH renderers (`search-ctas.tsx` and the
 * Web Component's `renderCtaBar`), so React/WC class-name and markup parity
 * is structural instead of prose-enforced. Pure: no DOM access, no state.
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access; logic-only (hook classes below are public CSS hooks styled in
 * `main.css`/`web-component.css`, not Tailwind utilities) — importable by
 * both entry points.
 */
import type { Cta, CtaIntent } from "../../api/rag.types";
import { buildMailtoHref } from "./handlers";
import { getCtaIcon } from "./icons";

/** Hook class for the CTA row container (`role="group"`). */
export const CTA_BAR_CLASS = "insytful-search-cta-bar";
/** Hook class for the visible "Quick actions" micro-label above the row. */
export const CTA_LABEL_CLASS = "insytful-search-cta-label";
/** Base hook class carried by every CTA chip. */
export const CTA_BTN_CLASS = "insytful-search-cta-btn";

/** Default icon per CTA type, used when the CMS supplies no `icon`. */
const DEFAULT_ICON_BY_TYPE: Record<Cta["type"], string> = {
  call: "phone",
  email: "email",
  link: "external",
  event: "chat",
};

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
export function ctaViewModel(cta: Cta): CtaViewModel {
  const iconKey = cta.icon ?? DEFAULT_ICON_BY_TYPE[cta.type];
  const iconSvg = getCtaIcon(iconKey);

  const base: CtaViewModel = {
    element: cta.type === "event" ? "button" : "a",
    newTab: cta.type === "link" && cta.newTab,
    classes: {
      bar: CTA_BAR_CLASS,
      label: CTA_LABEL_CLASS,
      btn: `${CTA_BTN_CLASS} ${CTA_BTN_CLASS}-${cta.intent}`,
    },
    label: cta.label,
    intent: cta.intent,
  };
  if (iconSvg !== null) {
    base.iconKey = iconKey;
    base.iconSvg = iconSvg;
  }

  switch (cta.type) {
    case "call":
      base.href = `tel:${cta.phone}`;
      break;
    case "email":
      base.href = buildMailtoHref(cta);
      break;
    case "link":
      base.href = cta.url;
      if (cta.newTab) base.srNewTabSuffix = true;
      break;
    case "event":
      break;
  }
  return base;
}
