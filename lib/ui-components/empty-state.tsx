interface EmptyStateProps {
  title: string;
  text: string;
}

export function EmptyState({ title, text }: EmptyStateProps) {
  if (!title && !text) return null;
  return (
    <div className="mx-auto text-center flex flex-col gap-[8px] md:gap-[16px]">
    {title && <p className="text-[var(--insytful-text-default)] text-[24px] leading-[32px] font-bold md:text-[56px] md:leading-[64px]">{title}</p>}
    {text && <p className="text-[var(--insytful-text-default)] text-[14px] leading-[24px] font-normal md:text-[20px] md:leading-[32px]">{text}</p>}
  </div>
  );
}