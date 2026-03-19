import React, { useCallback, useMemo } from "react";
import {
  ModeProvider,
  useModeContext,
  useSearchContext,
} from "./context";
import { useControllableState } from "./use-controllable-state";

/* ------------------------------------------------------------------ */
/* Search.Modes — container for mode switching                         */
/* ------------------------------------------------------------------ */

export type SearchModesProps = {
  children: React.ReactNode;
  /** Controlled active mode */
  value?: string;
  /** Default mode (uncontrolled) */
  defaultValue?: string;
  /** Callback when mode changes */
  onValueChange?: (mode: string) => void;
};

export function SearchModes({
  children,
  value: valueProp,
  defaultValue = "ai",
  onValueChange,
}: SearchModesProps) {
  const [mode, setActiveMode] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const modeValue = useMemo(
    () => ({ mode, onSwitchMode: setActiveMode }),
    [mode, setActiveMode]
  );

  return (
    <ModeProvider value={modeValue}>
      {children}
    </ModeProvider>
  );
}

SearchModes.displayName = "Search.Modes";

/* ------------------------------------------------------------------ */
/* Search.Mode — renders children only when the mode is active         */
/* ------------------------------------------------------------------ */

export type SearchModeProps = {
  children: React.ReactNode;
  /** Mode identifier (e.g. "ai", "classic") */
  name: string;
  /** Classic search: URL path for navigation (e.g. "/search?q=") */
  path?: string;
  /** Classic search: custom navigation handler for SPA routing */
  onNavigate?: (url: string) => void;
};

export function SearchMode({
  children,
  name,
  path,
  onNavigate,
}: SearchModeProps) {
  const { mode } = useModeContext("Search.Mode");
  const { onOpenChange } = useSearchContext("Search.Mode");

  const isActive = mode === name;
  const isClassicMode = !!path;

  // Override onSend for classic modes
  const classicOnSend = useCallback(
    async (msg: string) => {
      if (!path) return;

      const query = encodeURIComponent(msg);

      // Validate path is same-origin
      try {
        const url = new URL(`${path}${query}`, window.location.origin);
        if (url.origin !== window.location.origin) {
          console.error(
            "[Insytful] Navigation blocked: path must be same-origin"
          );
          return;
        }
      } catch {
        console.error("[Insytful] Navigation blocked: invalid path");
        return;
      }

      // Close modal before navigation
      onOpenChange(false);

      if (onNavigate) {
        onNavigate(`${path}${query}`);
      } else {
        window.location.href = `${path}${query}`;
      }
    },
    [path, onNavigate, onOpenChange]
  );

  if (!isActive) return null;

  // For classic modes, override the SearchContext's onSend
  if (isClassicMode) {
    return (
      <ClassicModeOverride onSend={classicOnSend}>
        {children}
      </ClassicModeOverride>
    );
  }

  return <>{children}</>;
}

SearchMode.displayName = "Search.Mode";

/**
 * Overrides the onSend in SearchContext for classic mode children.
 * Uses a nested provider to shadow the parent's onSend.
 */
function ClassicModeOverride({
  children,
  onSend,
}: {
  children: React.ReactNode;
  onSend: (msg: string) => Promise<void>;
}) {
  const parentCtx = useSearchContext("Search.Mode");

  const overriddenCtx = useMemo(
    () => ({ ...parentCtx, onSend }),
    [parentCtx, onSend]
  );

  return (
    <SearchOverrideProvider value={overriddenCtx}>
      {children}
    </SearchOverrideProvider>
  );
}

// We need the raw Provider to create a nested override
// Import the createCompoundContext result's Provider
import { SearchProvider as SearchOverrideProvider } from "./context";

/* ------------------------------------------------------------------ */
/* Search.ModeSwitch — renders mode switch UI                          */
/* ------------------------------------------------------------------ */

export type SearchModeSwitchProps = {
  children:
    | React.ReactNode
    | ((state: {
        mode: string;
        onSwitch: (mode: string) => void;
      }) => React.ReactNode);
};

export function SearchModeSwitch({ children }: SearchModeSwitchProps) {
  const { mode, onSwitchMode } = useModeContext("Search.ModeSwitch");

  if (typeof children === "function") {
    return (
      <>{children({ mode, onSwitch: onSwitchMode })}</>
    );
  }

  return <>{children}</>;
}

SearchModeSwitch.displayName = "Search.ModeSwitch";
