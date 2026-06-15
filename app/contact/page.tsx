import type { Metadata } from "next";
import { MessageIcon, PhoneIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { ServiceAreaBadges } from "@/components/ServiceAreaBadges";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Get Your Free Concrete Pressure Washing Quote",
  description:
    "Request a free StarBro's Services concrete pressure washing quote in Peachtree City, Sharpsburg, Senoia, Fayetteville, Brooks, or Tyrone.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free, no-pressure quote"
        title="Get Your Free Quote Today"
        description="Tell us about your driveway, sidewalk, patio, walkway, or other concrete surface. We will follow up with clear, project-specific pricing."
      />

      <section className="bg-slate-50 px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <aside>
            <span className="eyebrow">Call, text, or send the form</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-black">
              A fast quote starts with a few project details.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Share the service address and concrete surfaces you want cleaned.
              Property measurements can help us prepare your quote quickly.
            </p>
            <div className="mt-7 space-y-4">
              <a
                href={siteConfig.callHref}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Call StarBro&apos;s Services
                  </span>
                  <span className="text-lg font-black text-black">
                    {siteConfig.phoneDisplay}
                  </span>
                </span>
              </a>
              <a
                href={siteConfig.textHref}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-500 text-white">
                  <MessageIcon />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Text StarBro&apos;s Services
                  </span>
                  <span className="text-lg font-black text-black">
                    Send Us a Message
                  </span>
                </span>
              </a>
            </div>
            <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-700">
                First-customer offer
              </p>
              <h3 className="mt-2 text-xl font-black text-black">
                Save $100 on your first StarBro&apos;s Services project.
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Mention the local college-student promotion when you request
                your quote.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-black text-black">Business hours</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {siteConfig.businessHours}
              </p>
            </div>
          </aside>
          <QuoteForm />
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="eyebrow">Local service area</span>
            <h2 className="section-title mt-4">Our Service Area</h2>
            <p className="section-copy mx-auto mt-5 max-w-3xl">
              StarBro&apos;s Services provides concrete pressure washing
              throughout Peachtree City and surrounding communities. Contact us
              to confirm service availability for your property.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              src={siteConfig.serviceAreaMapEmbedUrl}
              title="StarBro's Services service area map"
              className="h-[320px] w-full sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-8">
            <ServiceAreaBadges />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-600">
            Serving Peachtree City, Sharpsburg, Senoia, Fayetteville, Brooks,
            and Tyrone. Contact us to confirm availability for your address.
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-center text-xs leading-5 text-slate-500">
            The map provides a general view of the service region and does not
            represent an exact service boundary or storefront location.
          </p>
        </div>
      </section>
    </>
  );
}
