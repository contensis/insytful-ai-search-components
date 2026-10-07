/**
 * The page numbers to show: the first, the last, and the current page with
 * one either side. A gap of one page shows that page; a longer gap is an
 * ellipsis. E.g. page 5 of 40: 1 … 4 5 6 … 40.
 */
export declare function pageItems(current: number, total: number): (number | "ellipsis")[];
