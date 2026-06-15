import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowIcon, CheckIcon, MessageIcon, PhoneIcon } from "./Icons";
import { BeforeAfterCard } from "./BeforeAfterCard";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-12 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="absolute right-[-10rem] top-[-9rem] h-[32rem] w-[32rem] rounded-full bg-brand-50" />
      <div className="absolute left-[-8rem] top-36 h-56 w-56 rounded-full border-[40px] border-brand-50" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_.96fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand-800">
            Local · College-Owned · Ready To Work
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-black sm:text-6xl lg:text-[4.55rem]">
            Support Local College Students.{" "}
            <span className="text-brand-600">
              Get Your Concrete Looking Fresh Again.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            StarBro&apos;s Services provides professional concrete pressure
            washing for driveways, sidewalks, patios, and walkways across
            Peachtree City and surrounding communities. Get honest pricing,
            friendly local service, and professional results without the
            overhead of a large commercial company.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get Your Free Quote Today <ArrowIcon />
            </Link>
            <a href={siteConfig.textHref} className="btn-secondary">
              <MessageIcon /> Call or Text Now
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-700">
            {["Free quotes", "Honest pricing", "Concrete only"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-brand-600" />
                {item}
              </span>
            ))}
          </div>
          <a
            href={siteConfig.callHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-black hover:text-brand-700"
          >
            <PhoneIcon className="h-4 w-4 text-brand-600" />
            Prefer to call? {siteConfig.phoneDisplay}
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rotate-2 rounded-[2.2rem] bg-brand-100" />
          <BeforeAfterCard
            src="/images/gallery/driveway-before-after.jpg"
            alt="Driveway before and after StarBro's Services concrete pressure washing"
            className="relative"
            priority
          />
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft sm:left-auto sm:right-6 sm:w-72">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-700">
              Local work. Visible results.
            </p>
            <p className="mt-1 text-sm font-bold text-slate-700">
              Professional concrete cleaning by students who care about earning
              your recommendation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
