import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/config/site";

export const metadata: Metadata = {
  title: "Concrete Pressure Washing FAQs",
  description:
    "Answers about StarBro's Services free quotes, pricing, service areas, preparation, timing, concrete-only services, and the $100 first-customer offer.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Straight Answers About Concrete Pressure Washing"
        description="Learn about our free quotes, service area, concrete-only focus, project preparation, timing, pricing, and local college-student promotion."
      />
      <section className="bg-slate-50 px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
