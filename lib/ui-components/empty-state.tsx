interface EmptyStateProps {
  title: string;
  text: string;
}

export function EmptyState({ title, text }: EmptyStateProps) {
  if (!title && !text) return null;
  return (
    <div className="empty-state">
    {title && <p className="empty-state__title">{title}</p>}
    {text && <p className="empty-state__text">{text}</p>}
  </div>
  );
}