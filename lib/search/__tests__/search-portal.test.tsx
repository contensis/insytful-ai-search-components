import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { SearchRoot, SearchPortal } from "../search-root";

// jsdom doesn't implement ResizeObserver (used for modal offset measurement)
vi.stubGlobal("ResizeObserver", class {
  observe() {}
  unobserve() {}
  disconnect() {}
});

const options = { config: "my-config", baseUrl: "https://api.example.com" };

function getDialog(): HTMLElement {
  const portal = document.querySelector('[id^="insytful-ai-modal-portal"]');
  expect(portal).not.toBeNull();
  const dialog = portal!.shadowRoot?.querySelector<HTMLElement>("#insytful-search-dialog");
  expect(dialog).not.toBeNull();
  return dialog!;
}

afterEach(cleanup);

describe("SearchPortal closed/open visibility", () => {
  it("hides the closed dialog with visibility, inert and opacity", () => {
    render(
      <SearchRoot options={options}>
        <SearchPortal>
          <div>content</div>
        </SearchPortal>
      </SearchRoot>
    );

    const dialog = getDialog();
    expect(dialog.style.visibility).toBe("hidden");
    expect(dialog.style.opacity).toBe("0");
    expect(dialog.style.pointerEvents).toBe("none");
    expect(dialog.hasAttribute("inert")).toBe(true);
    // visibility flips only after the opacity fade-out completes
    expect(dialog.style.transition).toContain(
      "visibility 0s linear var(--insytful-search-transition-duration, 200ms)"
    );
  });

  it("shows the open dialog with visibility applied immediately", () => {
    render(
      <SearchRoot options={options} open>
        <SearchPortal>
          <div>content</div>
        </SearchPortal>
      </SearchRoot>
    );

    const dialog = getDialog();
    expect(dialog.style.visibility).toBe("visible");
    expect(dialog.style.opacity).toBe("1");
    expect(dialog.style.pointerEvents).toBe("auto");
    expect(dialog.hasAttribute("inert")).toBe(false);
    expect(dialog.style.transition).toContain("visibility 0s linear 0s");
  });

  it("re-hides the dialog when open toggles back to false", () => {
    const { rerender } = render(
      <SearchRoot options={options} open>
        <SearchPortal>
          <div>content</div>
        </SearchPortal>
      </SearchRoot>
    );

    expect(getDialog().style.visibility).toBe("visible");

    rerender(
      <SearchRoot options={options} open={false}>
        <SearchPortal>
          <div>content</div>
        </SearchPortal>
      </SearchRoot>
    );

    const dialog = getDialog();
    expect(dialog.style.visibility).toBe("hidden");
    expect(dialog.hasAttribute("inert")).toBe(true);
  });
});
