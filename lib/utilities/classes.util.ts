/**
 * Class Name Utility - Simple conditional className joining
 * 
 * Filters out falsy values and joins remaining classes with spaces.
 * Useful for conditional Tailwind classes.
 * 
 * Example:
 * cx(['text-red-500', isActive && 'font-bold', 'p-4'])
 * // Returns: 'text-red-500 font-bold p-4' (if isActive is true)
 * // Returns: 'text-red-500 p-4' (if isActive is false)
 */
export const cx = (classes: string[]) => classes.filter(Boolean).join(" ");
