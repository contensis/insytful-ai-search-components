interface EmptyStateProps {
  title: string;
  text: string;
}

export function EmptyState({ title, text }: EmptyStateProps) {
  if (!title && !text) return null;
  return (
    <div className="mx-auto text-center flex flex-col gap-[8px] md:gap-[16px]">
    {title && <p className="text-ai-lib-text-default text-2xl leading-8 font-bold md:text-[56px] md:leading-[64px]">{title}</p>}
    {text && <p className="text-ai-lib-text-default text-sm leading-6 font-normal md:text-xl md:leading-8">{text}</p>}
  </div>
  );
}