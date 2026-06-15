import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MessageIcon, PhoneIcon } from "./Icons";

export function MobileMenu({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <nav
      className="border-t border-slate-200 bg-white px-5 pb-6 pt-2 shadow-xl lg:hidden"
      aria-label="Mobile navigation"
    >
      <div className="mx-auto max-w-7xl">
        {siteConfig.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`flex min-h-12 items-center border-b border-slate-100 text-base font-bold ${
              pathname === item.href ? "text-brand-600" : "text-slate-800"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <a href={siteConfig.callHref} className="btn-secondary px-3">
            <PhoneIcon /> Call
          </a>
          <a href={siteConfig.textHref} className="btn-primary px-3">
            <MessageIcon /> Text
          </a>
        </div>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="btn-dark mt-3 w-full"
        >
          Get Your Free Quote Today
        </Link>
      </div>
    </nav>
  );
}
