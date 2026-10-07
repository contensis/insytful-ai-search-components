/**
 * The page numbers to show: the first, the last, and the current page with
 * one either side. A gap of one page shows that page; a longer gap is an
 * ellipsis. E.g. page 5 of 40: 1 … 4 5 6 … 40.
 */
export function pageItems(current: number, total: number): (number | "ellipsis")[] {
  const items: (number | "ellipsis")[] = [];
  let previous = 0;
  for (let page = 1; page <= total; page++) {
    if (page !== 1 && page !== total && Math.abs(page - current) > 1) continue;
    if (page - previous === 2) items.push(previous + 1);
    else if (page - previous > 2) items.push("ellipsis");
    items.push(page);
    previous = page;
  }
  return items;
}
