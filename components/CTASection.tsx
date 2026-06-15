import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MessageIcon, PhoneIcon } from "./Icons";

export function CTASection({
  eyebrow = "Support local. Refresh your concrete.",
  title = "Ready to Refresh Your Concrete?",
  description = "Request your free quote today and support local college students while giving your property a cleaner, brighter appearance.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-black px-6 py-14 text-center text-white shadow-soft sm:px-12 lg:py-20">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="absolute -bottom-28 -right-12 h-72 w-72 rounded-full border-[52px] border-brand-500/20" />
        <div className="relative mx-auto max-w-3xl">
          <span className="eyebrow !text-brand-300">{eyebrow}</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get Your Free Quote Today
            </Link>
            <a href={siteConfig.callHref} className="btn-light">
              <PhoneIcon /> Call {siteConfig.phoneDisplay}
            </a>
            <a href={siteConfig.textHref} className="btn-outline-light sm:hidden">
              <MessageIcon /> Text Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
