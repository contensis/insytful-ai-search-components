import type React from "react";

export function Spinner({ size }: { size?: string }) {
  return (
    <svg
      role="graphics-symbol"
      className="h-5 w-5 animate-spin"
      style={
        {
          "--spacing": size,
        } as React.CSSProperties
      }
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M0 12a12 12 0 0 1 12 -12 v4a8 8 0 0 0 -8 8 H4z"
      />
    </svg>
  );
}
