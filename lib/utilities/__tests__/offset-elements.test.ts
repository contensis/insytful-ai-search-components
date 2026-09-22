import { afterEach, describe, expect, it, vi } from "vitest";
import { getOffsetElements, measureOffsetHeight, observeOffsetHeight } from "../offset-elements";

const mark = (attr: string, height: number) => {
  const el = document.createElement("div");
  el.setAttribute(attr, "");
  Object.defineProperty(el, "offsetHeight", { configurable: true, get: () => height });
  document.body.appendChild(el);
  return el;
};

afterEach(() => {
  document.body.innerHTML = "";
  vi.unstubAllGlobals();
});

describe("offset elements", () => {
  it("finds both the current and the deprecated attribute, in document order", () => {
    const a = mark("data-insytful-offset", 88);
    const b = mark("data-insytful-modal-offset", 40);
    expect(getOffsetElements()).toEqual([a, b]);
    expect(measureOffsetHeight([a, b])).toBe(128);
  });

  it("measures immediately and again when an element resizes", () => {
    let trigger: (() => void) | undefined;
    const observed: Element[] = [];
    const disconnect = vi.fn();
    vi.stubGlobal(
      "ResizeObserver",
      class {
        constructor(cb: () => void) {
          trigger = cb;
        }
        observe(el: Element) {
          observed.push(el);
        }
        disconnect = disconnect;
      },
    );
    const header = mark("data-insytful-offset", 56);
    const onChange = vi.fn();

    const stop = observeOffsetHeight(onChange);
    expect(onChange).toHaveBeenLastCalledWith(56);
    expect(observed).toEqual([header]);

    Object.defineProperty(header, "offsetHeight", { configurable: true, get: () => 88 });
    trigger!();
    expect(onChange).toHaveBeenLastCalledWith(88);

    stop();
    expect(disconnect).toHaveBeenCalledTimes(1);
  });

  it("reports 0 and needs no ResizeObserver when nothing is marked", () => {
    const onChange = vi.fn();
    expect(() => observeOffsetHeight(onChange)).not.toThrow();
    expect(onChange).toHaveBeenCalledWith(0);
  });
});
