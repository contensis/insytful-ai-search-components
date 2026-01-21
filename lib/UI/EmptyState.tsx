interface EmptyStateProps {
  title: string;
  text: string;
}

export function EmptyState({ title, text }: EmptyStateProps) {
  if (!title && !text) return null;
  return (
    <div className="mx-auto text-center">
      {title && (
        <p className="text-[24px] leading-[32px] font-bold text-[var(--ai-lib-text-default)] md:text-5xl md:leading-[64px]">
          {title}
        </p>
      )}
      {text && (
        <p className="mt-2 md:mt-4 text-sm leading-6 font-normal md:text-lg md:leading-8 text-[var(--ai-lib-text-default)]">
          {text}
        </p>
      )}
    </div>
  );
}
