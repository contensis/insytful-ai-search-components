/**
 * Hook that supports both controlled and uncontrolled state.
 * Follows the Radix UI useControllableState pattern.
 *
 * - Controlled: pass `prop` + `onChange` (component does not own state)
 * - Uncontrolled: pass `defaultProp` (component owns state, calls onChange on change)
 * - Mixed: pass `defaultProp` + `onChange` (component owns state, notifies parent)
 */
export declare function useControllableState<T>({ prop, defaultProp, onChange, }: {
    prop?: T;
    defaultProp?: T;
    onChange?: (value: T) => void;
}): [T, (next: T | ((prev: T) => T)) => void];
