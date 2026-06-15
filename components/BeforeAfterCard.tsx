import Image from "next/image";

export function BeforeAfterCard({
  src,
  alt,
  title,
  category,
  description,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  description?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <article className={className}>
      <figure className="group relative aspect-[1.45/1] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-card">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition duration-500 group-hover:scale-[1.015]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <figcaption className="absolute inset-x-0 top-0 flex justify-between p-3 sm:p-4">
          <span className="rounded-full bg-black/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white">
            Before
          </span>
          <span className="rounded-full bg-brand-500 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white">
            After
          </span>
        </figcaption>
      </figure>
      {title && (
        <div className="pt-5">
          {category && <span className="eyebrow">{category}</span>}
          <h3 className="mt-2 text-xl font-black tracking-tight text-black">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {description}
            </p>
          )}
        </div>
      )}
    </article>
  );
}
