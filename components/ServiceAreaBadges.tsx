import { siteConfig } from "@/config/site";
import { MapPinIcon } from "./Icons";

export function ServiceAreaBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {siteConfig.serviceAreas.map((area) => (
        <span
          key={area}
          className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-800 shadow-sm"
        >
          <MapPinIcon className="h-4 w-4 text-brand-600" />
          {area}, GA
        </span>
      ))}
    </div>
  );
}
