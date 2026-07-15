import { default as React } from 'react';
/**
 * Props for the SearchSkeletonBody component.
 *
 * @property messages - An array of message objects, each containing a `from` milliseconds timestamp, an optional `to` milliseconds timestamp, and the message `text`.
 * @property elapsed - Optional elapsed time in milliseconds since the search started.
 */
export type SearchSkeletonProps = {
    messages: {
        from: number;
        to?: number | "Infinity";
        text: string;
    }[];
    elapsed?: number;
};
export declare const SearchSkeletonBody: ({ messages, elapsed, }: SearchSkeletonProps) => React.JSX.Element;
