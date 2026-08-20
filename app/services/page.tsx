import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { CheckIcon, MessageIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Concrete Pressure Washing Services",
  description:
    "Driveway, sidewalk, patio, walkway, and other concrete pressure washing services in Athens and surrounding Georgia communities.",
  alternates: { canonical: "/services" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Concrete Pressure Washing",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
  },
  areaServed: siteConfig.serviceAreas.map((name) => ({
    "@type": "Place",
    name: `${name}, Georgia`,
  })),
  serviceType: services.map((service) => service.title),
  description:
    "Concrete pressure washing for driveways, sidewalks, patios, walkways, and other concrete surfaces.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Concrete cleaning specialists"
        title="Concrete Pressure Washing Services in Athens and Surrounding Areas"
        description="StarBro's Services focuses exclusively on concrete, helping local homeowners refresh driveways, sidewalks, patios, walkways, and other concrete surfaces."
      />

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-10 rounded-[1.75rem] border border-brand-100 bg-brand-50 p-7 sm:p-9">
            <h2 className="text-2xl font-black tracking-tight text-black">
              What professional concrete cleaning can improve
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              Pressure washing can significantly improve dirt, algae, mildew,
              tire marks, weathering, and general surface buildup. Some deeply
              embedded or permanent stains may improve without being fully
              removed.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Ground-in dirt",
                "Algae and mildew",
                "Organic buildup",
                "Tire marks",
                "Weather discoloration",
                "General surface grime",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm font-bold text-slate-800 shadow-sm"
                >
                  <CheckIcon className="h-4 w-4 text-brand-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 text-white lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="eyebrow !text-brand-300">
              A focused local service
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Concrete only. Clear communication from quote to clean.
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              We do not offer roof washing, house washing, gutter cleaning,
              deck cleaning, fence cleaning, or soft washing. Our focus stays
              on concrete so you know exactly what to expect.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Request Your Quote
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

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 p-7 sm:p-9">
            <span className="eyebrow">Fast, practical quoting</span>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-black">
              Send the address and project details.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Property measurements can help us prepare a fast quote. Share
              your service address, the concrete surfaces you want cleaned,
              and any visible buildup or stains.
            </p>
          </div>
          <div className="rounded-[2rem] bg-brand-50 p-7 sm:p-9">
            <span className="eyebrow">Professional-grade equipment</span>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-black">
              Built for consistent concrete cleaning.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Kaden brings more than 3 years of hands-on experience and uses a
              Westinghouse 3800 PSI pressure washer as part of the
              professional-grade setup used on StarBro&apos;s Services
              projects.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
