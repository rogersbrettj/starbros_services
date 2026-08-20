import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MessageIcon, PhoneIcon } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  const socialLinks = Object.entries(siteConfig.socialLinks).filter(
    ([, url]) => Boolean(url),
  );

  return (
    <footer className="bg-black pb-20 text-white md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo footer />
          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">
            Professional concrete pressure washing from local college students
            serving the Athens community.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={siteConfig.callHref}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-300"
            >
              <PhoneIcon className="h-4 w-4" /> {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.textHref}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-300"
            >
              <MessageIcon className="h-4 w-4" /> Text us
            </a>
          </div>
          {socialLinks.length > 0 && (
            <div className="mt-5 flex gap-4 text-sm font-bold">
              {socialLinks.map(([label, url]) => (
                <a key={label} href={url} rel="noreferrer" target="_blank">
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-widest">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-widest">
            Concrete We Clean
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            <li>Driveways</li>
            <li>Sidewalks</li>
            <li>Patios</li>
            <li>Walkways</li>
            <li>Other concrete surfaces</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-widest">
            Service Area
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {siteConfig.serviceAreas.join(" · ")}
          </p>
          <p className="mt-5 text-xs leading-5 text-slate-400">
            Serving Athens, Oconee County, Watkinsville, and surrounding Georgia
            communities.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
