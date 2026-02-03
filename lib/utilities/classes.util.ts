// Tiny helper to conditionally join classes
export const cx = (classes: string[]) => classes.filter(Boolean).join(" ");
