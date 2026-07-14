import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { MockInstance } from "vitest";
import type { Cta, CtaCall, CtaEmail, CtaEvent, CtaLink } from "../../api/rag.types";
import { registerCtaHandler } from "../../shared/cta/handlers";
import { getInsytfulAISearchEvents } from "../../shared/cta/bus";
import {
  CTA_BAR_CLASS,
  CTA_BTN_CLASS,
  CTA_LABEL_CLASS,
} from "../../shared/cta/view-model";
import { renderCtaBar } from "../dialog-renderer";

/* ------------------------------------------------------------------ */
/* Fixtures — post-`sanitizeCtas` shapes                                */
/* ------------------------------------------------------------------ */

const callCta: CtaCall = {
  type: "call",
  label: "Call us",
  phone: "+441234567890",
  intent: "primary",
};
const emailCta: CtaEmail = {
  type: "email",
  label: "Email us",
  email: "help@example.com",
  intent: "secondary",
};
const linkCta: CtaLink = {
  type: "link",
  label: "Visit our site",
  url: "https://example.com/contact",
  newTab: true,
  intent: "secondary",
};
const eventCta: CtaEvent = {
  type: "event",
  label: "Start web chat",
  event: "openWebChat",
  detail: { topic: "contact" },
  intent: "secondary",
};

const allCtas: Cta[] = [callCta, emailCta, linkCta, eventCta];

const tick = () => new Promise<void>((resolve) => setTimeout(resolve, 0));

function chipsOf(bar: HTMLElement): HTMLElement[] {
  return Array.from(bar.querySelectorAll<HTMLElement>(`.${CTA_BTN_CLASS}`));
}

/** Dispatches a cancelable left-click; prevents default at the wrapper AFTER
 *  the chip's own listener ran, so jsdom never attempts real navigation.
 *  Returns whether the chip's handler had already prevented default. */
function clickChip(
  wrapper: HTMLElement,
  chip: HTMLElement,
  init: MouseEventInit = {},
): boolean {
  let prevented = false;
  const capture = (e: Event) => {
    prevented = e.defaultPrevented;
    e.preventDefault();
  };
  wrapper.addEventListener("click", capture);
  chip.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true, button: 0, ...init }),
  );
  wrapper.removeEventListener("click", capture);
  return prevented;
}

/* ------------------------------------------------------------------ */

describe("renderCtaBar", () => {
  let warnSpy: MockInstance;

  beforeEach(() => {
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    warnSpy.mockRestore();
    document.body.innerHTML = "";
  });

  it("renders anchors for call/email/link and a typed button for event", () => {
    const bar = renderCtaBar(allCtas, { onCtaClick: () => {} });
    const chips = chipsOf(bar);
    expect(chips).toHaveLength(4);

    const [call, email, link, event] = chips;
    expect(call.tagName).toBe("A");
    expect(call.getAttribute("href")).toBe("tel:+441234567890");
    expect(email.tagName).toBe("A");
    expect(email.getAttribute("href")).toBe("mailto:help@example.com");
    expect(link.tagName).toBe("A");
    expect(link.getAttribute("href")).toBe("https://example.com/contact");
    expect(event.tagName).toBe("BUTTON");
    expect(event.getAttribute("type")).toBe("button");
  });

  it("wires group semantics: aria-live off wrapper, role=group labelled by the visible label", () => {
    const bar = renderCtaBar(allCtas, { onCtaClick: () => {} });
    expect(bar.getAttribute("aria-live")).toBe("off");

    const group = bar.querySelector('[role="group"]')!;
    expect(group).not.toBeNull();
    const labelId = group.getAttribute("aria-labelledby")!;
    const label = bar.querySelector<HTMLElement>(`#${labelId}`)!;
    expect(label.textContent).toBe("Quick actions");
    expect(label.className).toContain(CTA_LABEL_CLASS);

    // Unique label ids across bars (module counter)
    const second = renderCtaBar(allCtas, { onCtaClick: () => {} });
    const secondId = second
      .querySelector('[role="group"]')!
      .getAttribute("aria-labelledby");
    expect(secondId).not.toBe(labelId);
  });

  it("announces availability once via a visually-hidden role=status node", async () => {
    const bar = renderCtaBar(allCtas, { onCtaClick: () => {} });
    const status = bar.querySelector<HTMLElement>('[role="status"]')!;
    expect(status).not.toBeNull();
    expect(status.className).toContain("insytful-sr-only");
    // Mounts empty; the text lands on a macrotask so SRs see a change.
    expect(status.textContent).toBe("");
    await tick();
    expect(status.textContent).toBe("4 quick actions available");
  });

  it("marks newTab links with target/rel and an sr-only new-tab suffix", () => {
    const bar = renderCtaBar([linkCta], { onCtaClick: () => {} });
    const link = chipsOf(bar)[0];
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    expect(link.querySelector(".insytful-sr-only")!.textContent).toBe(
      " (opens in a new tab)",
    );
  });

  it("renders labels via textContent only — markup in a label renders literally", () => {
    const hostile: CtaEvent = {
      type: "event",
      label: '<img src=x onerror="alert(1)">',
      event: "x",
      intent: "secondary",
    };
    const bar = renderCtaBar([hostile], { onCtaClick: () => {} });
    const chip = chipsOf(bar)[0];
    expect(chip.querySelector("img")).toBeNull();
    expect(chip.textContent).toContain('<img src=x onerror="alert(1)">');
  });

  it("carries the shared hook classes and intent variants", () => {
    const bar = renderCtaBar([callCta, emailCta], { onCtaClick: () => {} });
    expect(bar.querySelector(`.${CTA_BAR_CLASS}`)).not.toBeNull();
    const [primary, secondary] = chipsOf(bar);
    expect(primary.className).toContain(`${CTA_BTN_CLASS}-primary`);
    expect(secondary.className).toContain(`${CTA_BTN_CLASS}-secondary`);
    // Icons are decorative
    const icon = primary.querySelector('[aria-hidden="true"] svg');
    expect(icon).not.toBeNull();
  });

  it("event button click runs executeCta (CMS bus event + generic insytful-cta) and onCtaClick", () => {
    const onCtaClick = vi.fn();
    const bar = renderCtaBar([eventCta], { onCtaClick });
    document.body.appendChild(bar);

    const bus = getInsytfulAISearchEvents()!;
    const cmsListener = vi.fn();
    const genericListener = vi.fn();
    bus.addEventListener("openWebChat", cmsListener);
    bus.addEventListener("insytful-cta", genericListener);

    chipsOf(bar)[0].click();

    expect(onCtaClick).toHaveBeenCalledWith(eventCta);
    expect(cmsListener).toHaveBeenCalledTimes(1);
    expect((cmsListener.mock.calls[0][0] as CustomEvent).detail).toEqual({
      topic: "contact",
    });
    expect(genericListener).toHaveBeenCalledTimes(1);
    expect((genericListener.mock.calls[0][0] as CustomEvent).detail).toEqual({
      name: "openWebChat",
      cta: eventCta,
    });

    bus.removeEventListener("openWebChat", cmsListener);
    bus.removeEventListener("insytful-cta", genericListener);
  });

  it("anchor left-click fires onCtaClick + generic observability and lets native navigation proceed", () => {
    const onCtaClick = vi.fn();
    const bar = renderCtaBar([callCta], { onCtaClick });
    document.body.appendChild(bar);

    const bus = getInsytfulAISearchEvents()!;
    const genericListener = vi.fn();
    bus.addEventListener("insytful-cta", genericListener);

    const prevented = clickChip(bar, chipsOf(bar)[0]);

    expect(prevented).toBe(false); // native navigation was not intercepted
    expect(onCtaClick).toHaveBeenCalledWith(callCta);
    expect(genericListener).toHaveBeenCalledTimes(1);
    expect((genericListener.mock.calls[0][0] as CustomEvent).detail).toEqual({
      name: "call",
      cta: callCta,
    });

    bus.removeEventListener("insytful-cta", genericListener);
  });

  it("a registered override intercepts unmodified anchor left-clicks only (D7)", () => {
    const onCtaClick = vi.fn();
    const override = vi.fn();
    const unregister = registerCtaHandler("link", override);
    try {
      const bar = renderCtaBar([linkCta], { onCtaClick });
      document.body.appendChild(bar);
      const chip = chipsOf(bar)[0];

      // Unmodified left-click: default prevented, override runs
      expect(clickChip(bar, chip)).toBe(true);
      expect(override).toHaveBeenCalledTimes(1);
      expect(onCtaClick).toHaveBeenCalledTimes(1);

      // Modified click keeps native behavior — override does not run
      expect(clickChip(bar, chip, { ctrlKey: true })).toBe(false);
      expect(override).toHaveBeenCalledTimes(1);
    } finally {
      unregister();
    }
  });
});
