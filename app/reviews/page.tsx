import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ReviewPlaceholderCard } from "@/components/ReviewPlaceholderCard";

export const metadata: Metadata = {
  title: "Local Reviews Coming Soon",
  description:
    "Verified local StarBro's Services concrete pressure washing reviews will be added as the business completes more projects.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Building through local word of mouth"
        title="Local Reviews Coming Soon"
        description="StarBro's Services is growing through local service and word-of-mouth recommendations. As we complete more projects, we will add verified feedback from homeowners in the communities we serve."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2.25rem] bg-black px-7 py-14 text-center text-white sm:px-12">
            <span className="eyebrow !text-brand-300">No invented reviews</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              More local reviews coming soon.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              This page is reserved for real, verified feedback. We will not
              use fake customer names, quotations, star ratings, or review
              counts.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ReviewPlaceholderCard
              title="Verified homeowner feedback"
              description="Replace this card with a real customer review only after receiving permission to publish it."
            />
            <ReviewPlaceholderCard
              title="More local reviews coming soon"
              description="As StarBro's Services completes more concrete cleaning projects, verified feedback can be added here."
            />
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Get Your Free Quote Today
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
