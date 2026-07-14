import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { MockInstance } from "vitest";
import type { Cta, CtaCall, CtaEmail, CtaEvent, CtaLink } from "../../../api/rag.types";
import {
  buildMailtoHref,
  ctaNavigation,
  executeCta,
  registerCtaHandler,
  type CtaHandlerMap,
} from "../handlers";
import { getInsytfulAISearchEvents } from "../bus";

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
  subject: "a b",
  body: "l1\r\nl2",
  intent: "secondary",
};
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
  detail: { topic: "bins" },
  intent: "secondary",
};

let warnSpy: MockInstance;
let assignSpy: MockInstance;
let openTabSpy: MockInstance;
const unregisters: Array<() => void> = [];

/** Registers an override and queues its unregister fn for afterEach. */
function register<K extends Cta["type"]>(
  type: K,
  handler: CtaHandlerMap[K],
): () => void {
  const unregister = registerCtaHandler(type, handler);
  unregisters.push(unregister);
  return unregister;
}

beforeEach(() => {
  warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
  assignSpy = vi.spyOn(ctaNavigation, "assign").mockImplementation(() => {});
  openTabSpy = vi.spyOn(ctaNavigation, "openTab").mockImplementation(() => {});
});

afterEach(() => {
  // No order-dependent state: restore defaults and drop the shared stores.
  // Unstub first — `window` may still be stubbed to undefined by an SSR test.
  vi.unstubAllGlobals();
  for (const unregister of unregisters.splice(0)) unregister();
  delete window.__insytfulCtaHandlers;
  delete window.insytfulAISearchEvents;
  vi.restoreAllMocks();
});

describe("buildMailtoHref", () => {
  it("percent-encodes subject/body (spaces are %20, never +; \\r\\n is %0D%0A)", () => {
    expect(buildMailtoHref(emailCta)).toBe(
      "mailto:help@example.com?subject=a%20b&body=l1%0D%0Al2",
    );
  });

  it("omits the query entirely when there is no subject or body", () => {
    expect(buildMailtoHref({ email: "x@y.com" })).toBe("mailto:x@y.com");
  });

  it("includes only the subject or only the body when one is present", () => {
    expect(buildMailtoHref({ email: "x@y.com", subject: "hi" })).toBe(
      "mailto:x@y.com?subject=hi",
    );
    expect(buildMailtoHref({ email: "x@y.com", body: "b" })).toBe(
      "mailto:x@y.com?body=b",
    );
  });
});

describe("executeCta — default handlers", () => {
  it("call navigates same-tab to the tel: URI", () => {
    executeCta(callCta);
    expect(assignSpy).toHaveBeenCalledExactlyOnceWith("tel:+441234567890");
  });

  it("email navigates same-tab to the mailto: URI", () => {
    executeCta(emailCta);
    expect(assignSpy).toHaveBeenCalledExactlyOnceWith(
      "mailto:help@example.com?subject=a%20b&body=l1%0D%0Al2",
    );
  });

  it("link without newTab navigates same-tab", () => {
    executeCta(linkCta);
    expect(assignSpy).toHaveBeenCalledExactlyOnceWith(
      "https://example.com/contact",
    );
    expect(openTabSpy).not.toHaveBeenCalled();
  });

  it("link with newTab opens a new tab (noopener,noreferrer)", () => {
    executeCta({ ...linkCta, newTab: true });
    expect(openTabSpy).toHaveBeenCalledExactlyOnceWith(
      "https://example.com/contact",
    );
    expect(assignSpy).not.toHaveBeenCalled();
  });

  it("event dispatches the CMS-named event on the bus with its detail", () => {
    const listener = vi.fn();
    getInsytfulAISearchEvents()!.addEventListener("openWebChat", listener);
    executeCta(eventCta);
    expect(listener).toHaveBeenCalledOnce();
    expect((listener.mock.calls[0][0] as CustomEvent).detail).toEqual({
      topic: "bins",
    });
  });

  it("event without detail dispatches {} (never undefined)", () => {
    const listener = vi.fn();
    getInsytfulAISearchEvents()!.addEventListener("noDetail", listener);
    executeCta({ ...eventCta, event: "noDetail", detail: undefined });
    expect((listener.mock.calls[0][0] as CustomEvent).detail).toEqual({});
  });
});

describe("executeCta — registry", () => {
  it("runs a registered override instead of the default (and warns once about overriding a built-in)", () => {
    const handler = vi.fn();
    register("link", handler);
    executeCta(linkCta);
    expect(handler).toHaveBeenCalledExactlyOnceWith(linkCta);
    expect(assignSpy).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('[Insytful] Overriding the built-in "link"'),
    );
  });

  it("unregister restores the built-in default", () => {
    const handler = vi.fn();
    const unregister = register("call", handler);
    executeCta(callCta);
    expect(handler).toHaveBeenCalledOnce();

    unregister();
    executeCta(callCta);
    expect(handler).toHaveBeenCalledOnce(); // not called again
    expect(assignSpy).toHaveBeenCalledExactlyOnceWith("tel:+441234567890");
  });

  it("unregister restores the previous override, not just the default", () => {
    const first = vi.fn();
    const second = vi.fn();
    register("email", first);
    const unregisterSecond = register("email", second);

    executeCta(emailCta);
    expect(second).toHaveBeenCalledOnce();

    unregisterSecond();
    executeCta(emailCta);
    expect(first).toHaveBeenCalledOnce();
    expect(assignSpy).not.toHaveBeenCalled();
  });

  it("unregister is idempotent (double call does not clobber a newer handler)", () => {
    const first = vi.fn();
    const second = vi.fn();
    const unregisterFirst = register("event", first);
    unregisterFirst();
    register("event", second);
    unregisterFirst(); // no-op — must not remove `second`
    executeCta(eventCta);
    expect(second).toHaveBeenCalledOnce();
  });

  it("shares one window-keyed store (a second lookup path sees the same registry)", () => {
    const handler = vi.fn();
    register("link", handler);
    expect(window.__insytfulCtaHandlers?.link).toBe(handler);
    // Non-enumerable: host `for (const k in window)` sweeps never see it.
    expect(
      Object.getOwnPropertyDescriptor(window, "__insytfulCtaHandlers")
        ?.enumerable,
    ).toBe(false);
  });

  it("falls back to a module-local store when no window exists (SSR-safe)", () => {
    vi.stubGlobal("window", undefined);
    const handler = vi.fn();
    const unregister = registerCtaHandler("event", handler);
    executeCta(eventCta); // bus is null without window — must not throw
    expect(handler).toHaveBeenCalledExactlyOnceWith(eventCta);
    unregister();
  });
});

describe("executeCta — defense-in-depth", () => {
  it("blocks a hand-built link CTA with a javascript: url (bypassing sanitizeCtas)", () => {
    const listener = vi.fn();
    getInsytfulAISearchEvents()!.addEventListener("insytful-cta", listener);
    const handler = vi.fn();
    register("link", handler);

    executeCta({ ...linkCta, url: "javascript:alert(1)" });

    expect(handler).not.toHaveBeenCalled();
    expect(assignSpy).not.toHaveBeenCalled();
    expect(openTabSpy).not.toHaveBeenCalled();
    expect(listener).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("[Insytful] CTA blocked:"),
    );
  });

  it("normalizes a hand-built relative link url before executing", () => {
    executeCta({ ...linkCta, url: "/contact" });
    expect(assignSpy).toHaveBeenCalledExactlyOnceWith(
      `${location.origin}/contact`,
    );
  });
});

describe("executeCta — generic insytful-cta observability event", () => {
  it("fires on the bus with { name: type, cta } for non-event CTAs (default handler path)", () => {
    const listener = vi.fn();
    getInsytfulAISearchEvents()!.addEventListener("insytful-cta", listener);
    executeCta(callCta);
    expect(listener).toHaveBeenCalledOnce();
    expect((listener.mock.calls[0][0] as CustomEvent).detail).toEqual({
      name: "call",
      cta: callCta,
    });
  });

  it("uses the CMS event name for event CTAs", () => {
    const listener = vi.fn();
    getInsytfulAISearchEvents()!.addEventListener("insytful-cta", listener);
    executeCta(eventCta);
    expect((listener.mock.calls[0][0] as CustomEvent).detail).toEqual({
      name: "openWebChat",
      cta: eventCta,
    });
  });

  it("still fires when an override handler is registered (overrides cannot kill observability)", () => {
    const listener = vi.fn();
    getInsytfulAISearchEvents()!.addEventListener("insytful-cta", listener);
    register("call", vi.fn());
    executeCta(callCta);
    expect(listener).toHaveBeenCalledOnce();
    expect((listener.mock.calls[0][0] as CustomEvent).detail).toEqual({
      name: "call",
      cta: callCta,
    });
  });
});
