import { describe, expect, it } from "vitest";
import { splitCompounds, transformSelector } from "../postcss-low-specificity";

describe("postcss-low-specificity: transformSelector", () => {
  it("leaves single-compound selectors alone", () => {
    expect(transformSelector(".insytful-theme")).toBe(".insytful-theme");
    expect(transformSelector(".insytful-sr-only")).toBe(".insytful-sr-only");
  });

  it("wraps the scope so a rule weighs only its hook class", () => {
    expect(transformSelector(".insytful-theme .insytful-search-close")).toBe(
      ":where(.insytful-theme) .insytful-search-close",
    );
  });

  it("wraps every ancestor, keeping state attributes on the final compound", () => {
    expect(
      transformSelector(
        ".insytful-theme .insytful-search-message-input[data-embedded] .insytful-search-message-input-textarea",
      ),
    ).toBe(
      ":where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-textarea",
    );
    expect(transformSelector(".insytful-theme .insytful-search-cta-btn[data-intent=primary]")).toBe(
      ":where(.insytful-theme) .insytful-search-cta-btn[data-intent=primary]",
    );
  });

  it("keeps child combinators, inside and outside the :where()", () => {
    expect(transformSelector(".insytful-theme .insytful-search-cta-bar > :nth-child(2)")).toBe(
      ":where(.insytful-theme .insytful-search-cta-bar) > :nth-child(2)",
    );
    expect(transformSelector(".insytful-theme .a > .b .c")).toBe(":where(.insytful-theme .a > .b) .c");
  });

  it("does not split inside :has() or attribute selectors", () => {
    expect(
      transformSelector(
        ".insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below]) > .insytful-search-message-input",
      ),
    ).toBe(
      ":where(.insytful-theme .insytful-search-dialog-inner:has(.insytful-search-suggestions-outer[data-position=below])) > .insytful-search-message-input",
    );
    expect(splitCompounds('.a[class*="x y"] .b').compounds).toEqual(['.a[class*="x y"]', ".b"]);
  });

  it("leaves hand-scoped selectors (already using :where) untouched", () => {
    const reset = ':where(.insytful-theme button[class*="insytful-search-"])';
    expect(transformSelector(reset)).toBe(reset);
    expect(transformSelector(`${reset}::before`)).toBe(`${reset}::before`);
  });
});
