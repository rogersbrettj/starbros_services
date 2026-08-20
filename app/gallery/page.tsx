import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { galleryItems } from "@/config/site";

export const metadata: Metadata = {
  title: "Concrete Cleaning Before and After Gallery",
  description:
    "See real StarBro's Services driveway, sidewalk, patio, and walkway concrete pressure washing transformations.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Real local transformations"
        title="Concrete Cleaning Before and After Gallery"
        description="See the visible difference professional concrete pressure washing can make on driveways, sidewalks, patios, and walkways."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2">
            {Array.from(new Set(galleryItems.map((item) => item.category))).map(
              (category) => (
                <span
                  key={category}
                  className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-extrabold text-brand-800"
                >
                  {category}
                </span>
              ),
            )}
          </div>
          <div className="mt-10">
            <GalleryGrid />
          </div>
          <div className="mt-12 rounded-[2rem] border border-brand-100 bg-brand-50 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-black tracking-tight text-black">
              More local project photos are coming soon.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
              Check back as we add more completed concrete cleaning
              transformations from homes throughout the communities we serve.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              Get Your Free Quote Today
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
