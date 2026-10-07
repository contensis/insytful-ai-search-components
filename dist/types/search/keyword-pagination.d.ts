import { default as React } from 'react';
type PaginationProps = {
    /** 0-based, as the API returns it. */
    pageIndex: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    /** Called with the 1-based page to show. */
    onPageChange: (page: number) => void;
};
export declare const Pagination: ({ pageIndex, totalPages, hasPreviousPage, hasNextPage, onPageChange, }: PaginationProps) => React.JSX.Element;
export {};
