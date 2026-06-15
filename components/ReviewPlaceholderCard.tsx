export function ReviewPlaceholderCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[1.75rem] border border-dashed border-brand-300 bg-brand-50/60 p-7">
      <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-brand-700 shadow-sm">
        Review placeholder
      </span>
      <h2 className="mt-5 text-xl font-black tracking-tight text-black">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
