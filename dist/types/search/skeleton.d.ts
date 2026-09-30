import { default as React } from 'react';
/**
 * Props for the SearchSkeletonBody component.
 *
 * @property messages - An array of message objects, each containing a `from` milliseconds timestamp, an optional `to` milliseconds timestamp, and the message `text`.
 * @property elapsed - Optional elapsed time in milliseconds since the search started.
 * @property items - Optional list item count. When set, the skeleton is
 *   shaped like an answer (an intro, a divider, then bulleted items), grows
 *   to fill its container and clips what doesn't fit, so a generous count
 *   fills a reserved box of any height. The visible loading message is
 *   dropped; the host announces loading itself.
 */
export type SearchSkeletonProps = {
    messages: {
        from: number;
        to?: number | "Infinity";
        text: string;
    }[];
    elapsed?: number;
    items?: number;
};
export declare const SearchSkeletonBody: ({ messages, elapsed, items, }: SearchSkeletonProps) => React.JSX.Element;
