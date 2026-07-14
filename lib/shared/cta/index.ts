/**
 * Shared CTA machinery — validation, execution, event bus, icons, and the
 * renderer view model. Consumed by both the React entry (`lib/main.ts`) and
 * the Web Component entry (`lib/web-component.ts`).
 *
 * `lib/shared/` invariants: no React imports; no module-top-level window/DOM
 * access; logic-only (no Tailwind classes) — importable by both entry points.
 */
export { sanitizeCtas } from "./validation";
export { registerCtaHandler, executeCta } from "./handlers";
export type { CtaHandlerMap } from "./handlers";
export { getInsytfulAISearchEvents } from "./bus";
export { getCtaIcon } from "./icons";
export {
  ctaViewModel,
  CTA_BAR_CLASS,
  CTA_LABEL_CLASS,
  CTA_BTN_CLASS,
} from "./view-model";
export type { CtaViewModel } from "./view-model";
