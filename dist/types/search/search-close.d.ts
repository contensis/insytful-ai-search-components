import { default as React } from 'react';
export type SearchCloseProps = {
    children?: React.ReactNode;
    asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * Search.Close — Radix-style close button. Place inside `Search.Portal`.
 *
 * Renders a `<button>` by default (styled via `.insytful-search-close` and
 * `--insytful-btn-close-*` tokens). Use `asChild` to merge the click handler
 * onto your own element instead.
 */
export declare const SearchClose: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
