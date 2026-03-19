import { default as React } from 'react';
export type SearchTriggerProps = {
    children: React.ReactNode;
    asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const SearchTrigger: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
