import Link from "next/link";
import {
  ArrowIcon,
  GaugeIcon,
  MapPinIcon,
  ShieldIcon,
  SparkleIcon,
} from "./Icons";

const iconMap = {
  driveway: GaugeIcon,
  sidewalk: MapPinIcon,
  patio: SparkleIcon,
  walkway: ShieldIcon,
  surface: SparkleIcon,
} as const;

export function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}) {
  const Icon = iconMap[icon];

  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
        <Icon />
      </div>
      <h3 className="mt-6 text-xl font-black tracking-tight text-black">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <Link
        href="/contact"
        className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-700"
      >
        Get a quote <ArrowIcon />
      </Link>
    </article>
  );
}
