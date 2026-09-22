import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { lastUserMessageEl, scrollMessageToTop } from "../scroll-message-to-top";

const rect = (top: number) => ({ top }) as DOMRect;

beforeEach(() => {
  // Run both rAF hops synchronously so assertions can follow the call.
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    cb(0);
    return 0;
  });
});
afterEach(() => vi.unstubAllGlobals());

describe("scrollMessageToTop", () => {
  it("inflates the spacer and scrolls an element scroller so the message sits at its top", () => {
    const scroller = document.createElement("div");
    const msg = document.createElement("li");
    const spacer = document.createElement("div");
    Object.defineProperty(scroller, "clientHeight", { value: 500 });
    scroller.scrollTop = 100;
    scroller.getBoundingClientRect = () => rect(50);
    msg.getBoundingClientRect = () => rect(350);
    scroller.scrollTo = vi.fn();

    scrollMessageToTop(scroller, msg, spacer);

    expect(spacer.style.transition).toBe("none");
    expect(spacer.style.height).toBe("500px");
    // 100 (current) + (350 - 50) (message offset within the scroller)
    expect(scroller.scrollTo).toHaveBeenCalledWith({ top: 400, behavior: "smooth" });
  });

  it("scrolls the window and honours the offset", () => {
    const msg = document.createElement("li");
    const spacer = document.createElement("div");
    msg.getBoundingClientRect = () => rect(600);
    vi.stubGlobal("scrollY", 200);
    vi.stubGlobal("innerHeight", 800);
    window.scrollTo = vi.fn();

    scrollMessageToTop(window, msg, spacer, 80);

    expect(spacer.style.height).toBe("800px");
    // 200 + 600 - 80
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 720, behavior: "smooth" });
  });
});

describe("lastUserMessageEl", () => {
  it("returns the final user message, or null when there are none", () => {
    const root = document.createElement("ul");
    root.innerHTML = `
      <li class="insytful-search-message" data-role="user">a</li>
      <li class="insytful-search-message" data-role="assistant">b</li>
      <li class="insytful-search-message" data-role="user">c</li>`;
    expect(lastUserMessageEl(root)?.textContent).toBe("c");
    expect(lastUserMessageEl(document.createElement("ul"))).toBeNull();
  });
});
