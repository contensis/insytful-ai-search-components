import "./error-callout.scss";

interface ErrorCalloutProps {
  message: string;
  onClose: () => void;
}

export function ErrorCallout({ message, onClose }: ErrorCalloutProps) {
  return (
    <div className="error-callout">
      <div className="error-callout__icon">⚠️</div>
      <div className="error-callout__content">
        <p className="error-callout__content__title">Something went wrong</p>
        <p className="error-callout__content__message">{message}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="error-callout__dismiss"
      >
        Dismiss
      </button>
    </div>
  );
}
