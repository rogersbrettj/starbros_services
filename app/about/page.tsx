import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { CheckIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { teamMembers } from "@/config/site";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet Brett and Kaden, the local Peachtree City college students behind StarBro's Services concrete pressure washing.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Local students building a local business"
        title="Meet the Team"
        description="StarBro's Services was started by two local students who grew up in the Peachtree City area and attended Starr's Mill High School. Today, Brett and Kaden are pursuing their college education while building a business focused on hard work, honest pricing, clear communication, and professional results for local homeowners."
      />

      <section className="px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 text-white lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow !text-brand-300">
              Why we started StarBro&apos;s Services
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              A straightforward service built around hard work.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-300">
              We wanted to build a business that rewards hard work and provides
              a straightforward service for homeowners in the communities
              where we grew up. Our goal is simple: communicate clearly, price
              honestly, show up ready to work, and leave each customer with
              cleaner concrete and a better-looking property.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Peachtree City roots",
                "Starr's Mill High School alumni",
                "Clear, friendly communication",
                "Concrete-focused service",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-bold"
                >
                  <CheckIcon className="h-4 w-4 text-brand-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            [
              "Honest Pricing",
              "Clear quotes based on the actual size, condition, and scope of your concrete project.",
            ],
            [
              "Reliable Communication",
              "Friendly responses and straightforward scheduling from the people running the business.",
            ],
            [
              "Pride in the Result",
              "Personalized service from students who care about earning your recommendation.",
            ],
          ].map(([title, description]) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-card"
            >
              <h2 className="text-xl font-black text-black">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-primary">
            Work With Our Team
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
