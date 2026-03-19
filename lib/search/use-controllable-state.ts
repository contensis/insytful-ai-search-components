import { useState, useCallback, useRef, useEffect } from "react";

/**
 * Hook that supports both controlled and uncontrolled state.
 * Follows the Radix UI useControllableState pattern.
 *
 * - Controlled: pass `prop` + `onChange` (component does not own state)
 * - Uncontrolled: pass `defaultProp` (component owns state, calls onChange on change)
 * - Mixed: pass `defaultProp` + `onChange` (component owns state, notifies parent)
 */
export function useControllableState<T>({
  prop,
  defaultProp,
  onChange,
}: {
  prop?: T;
  defaultProp?: T;
  onChange?: (value: T) => void;
}): [T, (next: T | ((prev: T) => T)) => void] {
  const isControlled = prop !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultProp as T);
  const value = isControlled ? prop : uncontrolledValue;

  // Keep onChange and value in refs so setValue can be stable
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const valueRef = useRef(value);
  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const nextValue =
        typeof next === "function"
          ? (next as (prev: T) => T)(valueRef.current)
          : next;

      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
      onChangeRef.current?.(nextValue);
    },
    [isControlled]
  );

  return [value, setValue];
}
