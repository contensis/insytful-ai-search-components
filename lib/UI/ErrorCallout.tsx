interface ErrorCalloutProps {
  message: string;
  onClose: () => void;
}

export function ErrorCallout({ message, onClose }: ErrorCalloutProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-red-600 bg-red-100 p-3 max-w-[46.25rem] w-full">
      <div className="pt-0.5 text-red-600 text-xl">⚠️</div>
      <div className="flex-1">
        <p className="font-semibold text-red-800">Something went wrong</p>
        <p className="text-sm text-red-700">{message}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="rounded-md px-2 py-1 text-sm text-red-700 hover:bg-red-200 transition-colors"
      >
        Dismiss
      </button>
    </div>
  );
}