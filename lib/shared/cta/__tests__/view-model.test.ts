import { describe, expect, it } from "vitest";
import type { CtaEvent, CtaLink } from "../../../api/rag.types";
import {
  CTA_BAR_CLASS,
  CTA_BTN_CLASS,
  CTA_LABEL_CLASS,
  ctaViewModel,
} from "../view-model";

const linkCta: CtaLink = {
  type: "link",
  label: "Visit",
  url: "https://example.com/contact",
  newTab: false,
  intent: "secondary",
};
const eventCta: CtaEvent = {
  type: "event",
  label: "Chat",
  event: "openWebChat",
  intent: "secondary",
};

describe("ctaViewModel", () => {
  it("renders call as an anchor with a tel: href and the default phone icon", () => {
    const vm = ctaViewModel({
      type: "call",
      label: "Call us",
      phone: "+441234567890",
      intent: "primary",
    });
    expect(vm.element).toBe("a");
    expect(vm.href).toBe("tel:+441234567890");
    expect(vm.iconKey).toBe("phone");
    expect(vm.iconSvg).toContain("<svg");
    expect(vm.iconSvg).toContain('aria-hidden="true"');
    expect(vm.classes.btn).toBe(`${CTA_BTN_CLASS} ${CTA_BTN_CLASS}-primary`);
    expect(vm.intent).toBe("primary");
  });

  it("renders email as an anchor with an encoded mailto: href", () => {
    const vm = ctaViewModel({
      type: "email",
      label: "Email us",
      email: "x@y.com",
      subject: "a b",
      intent: "secondary",
    });
    expect(vm.element).toBe("a");
    expect(vm.href).toBe("mailto:x@y.com?subject=a%20b");
    expect(vm.iconKey).toBe("email");
  });

  it("renders link with the normalized url; newTab drives target + sr suffix", () => {
    const sameTab = ctaViewModel(linkCta);
    expect(sameTab).toMatchObject({
      element: "a",
      href: linkCta.url,
      newTab: false,
      iconKey: "external",
    });
    expect(sameTab.srNewTabSuffix).toBeUndefined();

    const newTab = ctaViewModel({ ...linkCta, newTab: true });
    expect(newTab.newTab).toBe(true);
    expect(newTab.srNewTabSuffix).toBe(true);
  });

  it("renders event as a button with no href and the default chat icon", () => {
    const vm = ctaViewModel(eventCta);
    expect(vm.element).toBe("button");
    expect(vm.href).toBeUndefined();
    expect(vm.newTab).toBe(false);
    expect(vm.iconKey).toBe("chat");
    expect(vm.classes.btn).toBe(`${CTA_BTN_CLASS} ${CTA_BTN_CLASS}-secondary`);
  });

  it("honors an explicit known icon and falls back to label-only for unknown icons", () => {
    const custom = ctaViewModel({ ...linkCta, icon: "chat" });
    expect(custom.iconKey).toBe("chat");

    const unknown = ctaViewModel({ ...linkCta, icon: "sparkles" });
    expect(unknown.iconKey).toBeUndefined();
    expect(unknown.iconSvg).toBeUndefined();
    expect(unknown.label).toBe("Visit");
  });

  it("exposes the shared bar/label hook classes", () => {
    const vm = ctaViewModel(linkCta);
    expect(vm.classes.bar).toBe(CTA_BAR_CLASS);
    expect(vm.classes.label).toBe(CTA_LABEL_CLASS);
    expect(CTA_BAR_CLASS).toBe("insytful-search-cta-bar");
    expect(CTA_LABEL_CLASS).toBe("insytful-search-cta-label");
  });
});
