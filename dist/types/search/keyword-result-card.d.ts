import { default as React } from 'react';
type ResultCardProps = {
    title: string;
    url: string;
    /** HTML: only `<mark>`, already escaped by the API. */
    snippet: string;
    /** Shown as given; omitted when empty. */
    date: string;
    image?: string;
    /** Heading level of the title. Defaults to 3. */
    hLevel?: number;
};
export declare const ResultsCard: ({ title, url, date, snippet, image, hLevel }: ResultCardProps) => React.JSX.Element;
export {};
