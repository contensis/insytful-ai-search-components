import { describe, expect, it } from "vitest";
import { pageItems } from "../page-items";

describe("pageItems", () => {
  it("lists every page when there are few", () => {
    expect(pageItems(1, 3)).toEqual([1, 2, 3]);
    expect(pageItems(2, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("shows the first, last and current page with one either side", () => {
    expect(pageItems(5, 40)).toEqual([1, "ellipsis", 4, 5, 6, "ellipsis", 40]);
  });

  it("shows a single skipped page instead of an ellipsis", () => {
    expect(pageItems(4, 10)).toEqual([1, 2, 3, 4, 5, "ellipsis", 10]);
  });

  it("handles the ends", () => {
    expect(pageItems(1, 40)).toEqual([1, 2, "ellipsis", 40]);
    expect(pageItems(40, 40)).toEqual([1, "ellipsis", 39, 40]);
  });

  it("returns nothing for no pages and one page for one", () => {
    expect(pageItems(1, 0)).toEqual([]);
    expect(pageItems(1, 1)).toEqual([1]);
  });
});
