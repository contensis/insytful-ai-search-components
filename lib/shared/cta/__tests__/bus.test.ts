import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { MockInstance } from "vitest";
import { getInsytfulAISearchEvents } from "../bus";

let warnSpy: MockInstance;

beforeEach(() => {
  warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  // Unstub first — `window` may still be stubbed to undefined by an SSR test.
  vi.unstubAllGlobals();
  delete window.insytfulAISearchEvents;
  vi.restoreAllMocks();
});

describe("getInsytfulAISearchEvents", () => {
  it("returns null without throwing when there is no window (SSR)", () => {
    vi.stubGlobal("window", undefined);
    expect(getInsytfulAISearchEvents()).toBeNull();
    expect(warnSpy).not.toHaveBeenCalled();
  });

  it("creates the bus lazily and stores it on window.insytfulAISearchEvents", () => {
    expect(window.insytfulAISearchEvents).toBeUndefined();
    const bus = getInsytfulAISearchEvents();
    expect(bus).toBeInstanceOf(EventTarget);
    expect(window.insytfulAISearchEvents).toBe(bus);
  });

  it("is idempotent — repeated calls return the same instance", () => {
    expect(getInsytfulAISearchEvents()).toBe(getInsytfulAISearchEvents());
  });

  it("reuses a valid pre-set EventTarget (host-registered listeners keep working)", () => {
    const preSet = new EventTarget();
    const listener = vi.fn();
    preSet.addEventListener("openWebChat", listener);
    window.insytfulAISearchEvents = preSet;

    const bus = getInsytfulAISearchEvents();
    expect(bus).toBe(preSet);
    bus!.dispatchEvent(new CustomEvent("openWebChat", { detail: { a: 1 } }));
    expect(listener).toHaveBeenCalledOnce();
    expect(warnSpy).not.toHaveBeenCalled();
  });

  it("replaces a DOM-clobbered value (an element IS an EventTarget) and warns", () => {
    // <a id="insytfulAISearchEvents"> DOM-clobbers the global with a Node.
    window.insytfulAISearchEvents = document.createElement("a");

    const bus = getInsytfulAISearchEvents();
    expect(bus).toBeInstanceOf(EventTarget);
    expect(bus).not.toBeInstanceOf(Node);
    expect(window.insytfulAISearchEvents).toBe(bus);
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("[Insytful]"),
    );
  });

  it("replaces a non-EventTarget value and warns", () => {
    window.insytfulAISearchEvents = {} as EventTarget;

    const bus = getInsytfulAISearchEvents();
    expect(bus).toBeInstanceOf(EventTarget);
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("[Insytful]"),
    );
  });
});
