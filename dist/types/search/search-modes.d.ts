import { default as React } from 'react';
export type SearchModesProps = {
    children: React.ReactNode;
    /** Controlled active mode */
    value?: string;
    /** Default mode (uncontrolled) */
    defaultValue?: string;
    /** Callback when mode changes */
    onValueChange?: (mode: string) => void;
};
export declare function SearchModes({ children, value: valueProp, defaultValue, onValueChange, }: SearchModesProps): React.JSX.Element;
export declare namespace SearchModes {
    var displayName: string;
}
export type SearchModeProps = {
    children: React.ReactNode;
    /** Mode identifier (e.g. "ai", "classic") */
    name: string;
    /** Classic search: URL path for navigation (e.g. "/search?q=") */
    path?: string;
    /** Classic search: custom navigation handler for SPA routing */
    onNavigate?: (url: string) => void;
};
export declare function SearchMode({ children, name, path, onNavigate, }: SearchModeProps): React.JSX.Element | null;
export declare namespace SearchMode {
    var displayName: string;
}
export type SearchModeSwitchProps = {
    children: React.ReactNode | ((state: {
        mode: string;
        onSwitch: (mode: string) => void;
    }) => React.ReactNode);
};
export declare function SearchModeSwitch({ children }: SearchModeSwitchProps): React.JSX.Element;
export declare namespace SearchModeSwitch {
    var displayName: string;
}
