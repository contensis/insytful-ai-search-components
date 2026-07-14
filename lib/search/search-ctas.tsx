import React, { useEffect, useRef, useState } from "react";
import type { Cta } from "../api/rag.types";
import { useSearchContext } from "./context";
import {
  ctaViewModel,
  CTA_BAR_CLASS,
  CTA_LABEL_CLASS,
} from "../shared/cta/view-model";
import {
  executeCta,
  hasCtaHandlerOverride,
  dispatchCtaObservability,
} from "../shared/cta/handlers";

export type SearchCtasProps = {
  /** Sanitized CTAs (post-`sanitizeCtas`) to render; nothing renders when absent/empty. */
  ctas?: Cta[];
  className?: string;
};

// useId ships in React 18; fall back to a counter-based stable id for the
// React 17 peer range (same pattern as search-root.tsx).
let idCounter = 0;
const useStableId =
  typeof React.useId === "function"
    ? (prefix: string) => `${prefix}-${React.useId()}`
    : (prefix: string) => {
        const [id] = useState(() => `${prefix}-${++idCounter}`);
        return id;
      };

/* ------------------------------------------------------------------ */
/* Chip                                                                 */
/* ------------------------------------------------------------------ */

const CHIP_BASE_CLASSES =
  "inline-flex items-center gap-[6px] min-h-[44px] max-w-full whitespace-normal " +
  "py-[10px] px-[18px] text-[14px] leading-[24px] font-medium no-underline " +
  "cursor-pointer transition-colors rounded-[var(--insytful-cta-radius)] " +
  "border border-solid";

const CHIP_INTENT_CLASSES: Record<Cta["intent"], string> = {
  primary:
    "bg-[var(--insytful-cta-primary-bg-default)] hover:bg-[var(--insytful-cta-primary-bg-hover)] " +
    "text-[var(--insytful-cta-primary-text)] border-[var(--insytful-cta-primary-border)]",
  secondary:
    "bg-[var(--insytful-cta-secondary-bg-default)] hover:bg-[var(--insytful-cta-secondary-bg-hover)] " +
    "text-[var(--insytful-cta-secondary-text)] border-[var(--insytful-cta-secondary-border)]",
};

function CtaChip({
  cta,
  onCtaClick,
}: {
  cta: Cta;
  onCtaClick?: (cta: Cta) => void;
}) {
  const vm = ctaViewModel(cta);
  const chipClass = `${vm.classes.btn} ${CHIP_BASE_CLASSES} ${CHIP_INTENT_CLASSES[vm.intent]}`;

  // Icon SVG strings are our own constants (lib/shared/cta/icons.ts) — never
  // CMS data — so dangerouslySetInnerHTML is safe here. External-link glyph
  // trails ("leaves this page" grammar); all others lead.
  const iconTrails = vm.iconKey === "external";
  const icon = vm.iconSvg ? (
    <span
      aria-hidden="true"
      className={`insytful-search-cta-icon inline-flex flex-shrink-0 ${
        iconTrails ? "mr-[-4px]" : "ml-[-4px]"
      }`}
      dangerouslySetInnerHTML={{ __html: vm.iconSvg }}
    />
  ) : null;

  const content = (
    <>
      {!iconTrails && icon}
      {vm.label}
      {vm.srNewTabSuffix && (
        <span className="insytful-sr-only"> (opens in a new tab)</span>
      )}
      {iconTrails && icon}
    </>
  );

  if (vm.element === "button") {
    // `event` CTAs have no native action — executeCta dispatches the
    // CMS-named bus event (or a registered override) plus `insytful-cta`.
    const handleClick = () => {
      onCtaClick?.(cta);
      executeCta(cta);
    };
    return (
      <button type="button" className={chipClass} onClick={handleClick}>
        {content}
      </button>
    );
  }

  // Anchors (call/email/link): native navigation is the default path — it
  // preserves middle-click, copy-link, long-press, and OS handler choice.
  // A registered override intercepts unmodified left-clicks only (D7).
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onCtaClick?.(cta);
    const unmodified =
      e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
    if (unmodified && hasCtaHandlerOverride(cta.type)) {
      e.preventDefault();
      executeCta(cta); // runs the override + dispatches `insytful-cta`
    } else {
      // Native navigation proceeds — fire observability only. Calling
      // executeCta here would trigger a second, JS-driven navigation.
      dispatchCtaObservability(cta);
    }
  };

  return (
    <a
      href={vm.href}
      className={chipClass}
      onClick={handleClick}
      {...(vm.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Search.Ctas                                                          */
/* ------------------------------------------------------------------ */

/**
 * Search.Ctas — renders the CTA quick-actions row above an assistant answer.
 *
 * Thin renderer over the shared `ctaViewModel` (markup parity with the Web
 * Component's `renderCtaBar` is structural). Rendered internally by
 * Search.Messages inside each assistant message; also exported for custom
 * layouts. Returns `null` when there are no CTAs.
 *
 * A11y: the wrapper is `aria-live="off"` so an ancestor live region never
 * announces interactive content as flat prose; availability is announced once
 * via a visually-hidden `role="status"` cue instead. The row is a
 * `role="group"` labelled by the visible "Quick actions" micro-label, and
 * every chip is a separate tab stop.
 */
function SearchCtasImpl({ ctas, className }: SearchCtasProps) {
  const { onCtaClick } = useSearchContext("Search.Ctas");
  const labelId = useStableId("insytful-search-cta-label");

  // One-shot "N quick actions available" announcement. The role="status"
  // region mounts empty and the text is written into it afterwards — the live
  // region is an external system here, and inserting the text as a post-mount
  // DOM *change* is what makes screen readers reliably announce it.
  const count = ctas?.length ?? 0;
  const statusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (count > 0 && statusRef.current) {
      statusRef.current.textContent = `${count} quick action${
        count === 1 ? "" : "s"
      } available`;
    }
  }, [count]);

  if (!ctas || ctas.length === 0) return null;

  return (
    <div
      aria-live="off"
      className={`insytful-search-cta-outer mb-[16px] ${className ?? ""}`}
    >
      <div ref={statusRef} role="status" className="insytful-sr-only" />
      <div
        id={labelId}
        className={`${CTA_LABEL_CLASS} text-[13px] leading-[20px] mb-[6px] text-[var(--insytful-cta-label-text)]`}
      >
        Quick actions
      </div>
      <div
        role="group"
        aria-labelledby={labelId}
        className={`${CTA_BAR_CLASS} flex flex-wrap gap-[var(--insytful-cta-bar-gap)] max-w-full`}
      >
        {ctas.map((cta, i) => (
          <CtaChip key={i} cta={cta} onCtaClick={onCtaClick} />
        ))}
      </div>
    </div>
  );
}

/** Memoized: `ctas` arrays are frozen per message, so re-renders during
 *  streaming are free. */
export const SearchCtas = React.memo(SearchCtasImpl);

SearchCtas.displayName = "Search.Ctas";
