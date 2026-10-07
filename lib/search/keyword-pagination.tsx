import React from "react";
import { pageItems } from "../utilities/page-items";

type PaginationProps = {
  /** 0-based, as the API returns it. */
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  /** Called with the 1-based page to show. */
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  pageIndex,
  totalPages,
  hasPreviousPage,
  hasNextPage,
  onPageChange,
}: PaginationProps) => {
  const currentPage = pageIndex + 1;

  return (
    <nav className="insytful-search-pagination" aria-label="Pagination">
      <ul className="insytful-search-pagination-list">
        {hasPreviousPage && (
          <li className="insytful-search-pagination-item" data-direction="previous">
            <button
              type="button"
              className="insytful-search-pagination-link"
              onClick={() => onPageChange(currentPage - 1)}
            >
              Previous{" "}<span className="insytful-sr-only">page</span>
            </button>
          </li>
        )}
        {pageItems(currentPage, totalPages).map((item, i) =>
          item === "ellipsis" ? (
            <li key={`ellipsis-${i}`} className="insytful-search-pagination-item" data-ellipsis="">
              ...
            </li>
          ) : (
            <li
              key={item}
              className="insytful-search-pagination-item"
              data-active={currentPage === item || undefined}
            >
              <button
                type="button"
                className="insytful-search-pagination-link"
                aria-label={`Page ${item}`}
                aria-current={currentPage === item ? "page" : undefined}
                onClick={() => onPageChange(item)}
              >
                {item}
              </button>
            </li>
          ),
        )}
        {hasNextPage && (
          <li className="insytful-search-pagination-item" data-direction="next">
            <button
              type="button"
              className="insytful-search-pagination-link"
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next{" "}<span className="insytful-sr-only">page</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
