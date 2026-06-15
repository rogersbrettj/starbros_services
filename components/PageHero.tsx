export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-brand-100 bg-brand-50 px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute right-[-6rem] top-[-7rem] h-72 w-72 rounded-full border-[48px] border-brand-100/70" />
      <div className="absolute bottom-[-8rem] left-[-5rem] h-56 w-56 rounded-full bg-white/80" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] text-black sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
