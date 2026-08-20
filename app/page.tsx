import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { GalleryGrid } from "@/components/GalleryGrid";
import { HeroSection } from "@/components/HeroSection";
import {
  ArrowIcon,
  CheckIcon,
  GaugeIcon,
  MessageIcon,
  QuoteIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/Icons";
import { ServiceAreaBadges } from "@/components/ServiceAreaBadges";
import { ServiceCard } from "@/components/ServiceCard";
import {
  differentiators,
  faqs,
  services,
  siteConfig,
  whyChooseUs,
} from "@/config/site";

export const metadata: Metadata = {
  title: "Concrete Pressure Washing in Athens, GA",
  description:
    "Support local college students with professional driveway, sidewalk, patio, and walkway pressure washing in Athens and nearby Georgia communities.",
  alternates: { canonical: "/" },
};

const differentiatorIcons = {
  local: UsersIcon,
  quote: QuoteIcon,
  equipment: GaugeIcon,
  message: ShieldIcon,
} as const;

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="bg-brand-500 px-5 py-6 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-100">
              Local college student special
            </p>
            <p className="mt-1 text-lg font-black sm:text-xl">
              Save $100 as one of our first customers.
            </p>
          </div>
          <Link href="/contact" className="btn-light shrink-0">
            Save $100 Today <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">A local business worth supporting</span>
            <h2 className="section-title mt-4">
              Professional Results. Local Students You Can Support.
            </h2>
            <p className="section-copy mt-5">
              StarBro&apos;s Services is operated by local college students serving
              the Athens area while pursuing their education and long-term
              careers. We combine professional equipment with personal service,
              clear communication, and honest pricing. Every job matters because
              our reputation is personal.
            </p>
          </div>
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => {
              const Icon =
                differentiatorIcons[
                  item.icon as keyof typeof differentiatorIcons
                ];
              return (
                <article
                  key={item.title}
                  className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-card"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 rounded-[1.75rem] bg-black px-6 py-7 text-center text-white sm:px-10">
            <p className="mx-auto max-w-4xl text-base font-semibold leading-7 text-slate-200 sm:text-lg">
              When you hire StarBro&apos;s Services, you are not paying for a
              large company&apos;s overhead. You are supporting local college
              students who care about doing excellent work, communicating
              clearly, and earning your recommendation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-100 bg-brand-50 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <span className="eyebrow">Proudly serving our local communities</span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-black sm:text-3xl">
            Concrete pressure washing near Athens
          </h2>
          <div className="mt-7">
            <ServiceAreaBadges />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="eyebrow">Concrete cleaning services</span>
              <h2 className="section-title mt-4">
                Focused on the concrete surfaces that shape your curb appeal.
              </h2>
              <p className="section-copy mt-5">
                We clean concrete only, bringing focused equipment and careful
                attention to every driveway, sidewalk, patio, and walkway.
              </p>
            </div>
            <Link href="/services" className="btn-secondary shrink-0">
              Explore Services <ArrowIcon />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 text-white lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <span className="eyebrow !text-brand-300">
              Why Choose StarBro&apos;s Services
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              Professional tools. Personal service. Better value.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              Our team brings more than 3 years of hands-on pressure washing
              experience and uses professional-grade equipment to deliver
              consistent concrete cleaning results.
            </p>
            <Link href="/about" className="btn-primary mt-8">
              Meet the StarBro&apos;s Team <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold leading-6 text-slate-100">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Before and after</span>
            <h2 className="section-title mt-4">
              See what a focused concrete clean can do.
            </h2>
            <p className="section-copy mt-5">
              Real local project transformations from concrete surfaces cleaned
              with professional pressure washing equipment.
            </p>
          </div>
          <div className="mt-10">
            <GalleryGrid limit={2} />
          </div>
          <div className="mt-9 text-center">
            <Link href="/gallery" className="btn-secondary">
              View the Full Gallery <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-50 px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <span className="eyebrow">A simple three-step process</span>
          <h2 className="section-title mt-4">
            Fresh concrete without the runaround.
          </h2>
          <div className="mt-11 grid gap-6 md:grid-cols-3">
            {[
              [
                "01",
                "Request a Free Quote",
                "Tell us what you would like cleaned and where the property is located.",
              ],
              [
                "02",
                "We Clean Your Concrete",
                "We arrive with professional equipment and focus on the agreed concrete surfaces.",
              ],
              [
                "03",
                "Enjoy a Fresh, Clean Exterior",
                "Step back and enjoy brighter concrete and a better-maintained first impression.",
              ],
            ].map(([number, title, description]) => (
              <article
                key={number}
                className="relative rounded-[1.75rem] border border-brand-100 bg-white p-7 text-left shadow-card"
              >
                <span className="text-5xl font-black text-brand-100">
                  {number}
                </span>
                <h3 className="mt-5 text-xl font-black text-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] bg-brand-500 text-white shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="p-8 sm:p-12">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-brand-100">
              Introductory local offer
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Save $100 as One of Our First Customers
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-brand-50">
              As a local college-owned business, we&apos;re offering $100 off
              to our first customers.
            </p>
          </div>
          <div className="flex flex-col gap-3 bg-black/10 p-8 sm:flex-row lg:flex-col lg:bg-black/15 lg:p-12">
            <Link href="/contact" className="btn-light whitespace-nowrap">
              Get Your Free Quote Today
            </Link>
            <a
              href={siteConfig.textHref}
              className="btn-outline-light whitespace-nowrap"
            >
              <MessageIcon /> Text Us Now
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <span className="eyebrow">Frequently asked questions</span>
            <h2 className="section-title mt-4">
              Straight answers before we get started.
            </h2>
            <p className="section-copy mt-5">
              Learn about our concrete-only focus, free quotes, service area,
              preparation, and first-customer promotion.
            </p>
            <Link href="/faq" className="btn-secondary mt-7">
              View All FAQs <ArrowIcon />
            </Link>
          </div>
          <FAQAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
