import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ReviewPlaceholderCard } from "@/components/ReviewPlaceholderCard";
import { getGoogleReviews, type GoogleReview } from "@/lib/googleReviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read verified StarBro's Services concrete pressure washing reviews or learn how Google reviews will be connected once approved credentials are available.",
  alternates: { canonical: "/reviews" },
};

export const revalidate = 43200;

function ReviewStars({ rating }: { rating: number }) {
  const roundedRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <span
      className="inline-flex items-center gap-1 text-brand-500"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          {index < roundedRating ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

function GoogleReviewCard({ review }: { review: GoogleReview }) {
  const reviewDate = review.time
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
      }).format(new Date(review.time * 1000))
    : review.relativeTimeDescription;

  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-black tracking-tight text-black">
            {review.authorName}
          </h2>
          {reviewDate && (
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              {reviewDate}
            </p>
          )}
        </div>
        <ReviewStars rating={review.rating} />
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-700">{review.text}</p>
      {review.authorUrl && (
        <a
          href={review.authorUrl}
          className="mt-5 inline-flex text-sm font-black text-brand-700 underline"
          target="_blank"
          rel="noreferrer"
        >
          View on Google
        </a>
      )}
    </article>
  );
}

export default async function ReviewsPage() {
  const googleReviews = await getGoogleReviews();
  const hasGoogleReviews =
    googleReviews.status === "ready" && googleReviews.reviews.length > 0;
  const googleReviewUrl = googleReviews.reviewUrl || googleReviews.placeUrl;

  return (
    <>
      <PageHero
        eyebrow="Building through local word of mouth"
        title={hasGoogleReviews ? "Reviews from Google" : "Local Reviews Coming Soon"}
        description={
          hasGoogleReviews
            ? "See what customers are saying about StarBro's Services on Google."
            : "StarBro's Services is growing through local service and word-of-mouth recommendations. As we complete more projects, we will add verified feedback from homeowners in the communities we serve."
        }
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          {hasGoogleReviews ? (
            <>
              <div className="rounded-[2.25rem] bg-black px-7 py-14 text-center text-white sm:px-12">
                <span className="eyebrow !text-brand-300">
                  Verified Google feedback
                </span>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Real reviews from customers.
                </h2>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm font-bold text-slate-300">
                  {googleReviews.rating && (
                    <span className="inline-flex items-center gap-2">
                      <ReviewStars rating={googleReviews.rating} />
                      {googleReviews.rating.toFixed(1)} average
                    </span>
                  )}
                  {googleReviews.totalReviewCount && (
                    <span>{googleReviews.totalReviewCount} Google reviews</span>
                  )}
                </div>
                {googleReviewUrl && (
                  <a
                    href={googleReviewUrl}
                    className="btn-primary mt-7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Review us on Google
                  </a>
                )}
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {googleReviews.reviews.map((review) => (
                  <GoogleReviewCard
                    key={`${review.authorName}-${review.time || review.text}`}
                    review={review}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="rounded-[2.25rem] bg-black px-7 py-14 text-center text-white sm:px-12">
                <span className="eyebrow !text-brand-300">
                  No invented reviews
                </span>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  More local reviews coming soon.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                  This page is reserved for real, verified feedback. We will not
                  use fake customer names, quotations, star ratings, or review
                  counts.
                </p>
                {googleReviewUrl && (
                  <a
                    href={googleReviewUrl}
                    className="btn-primary mt-7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Review us on Google
                  </a>
                )}
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
              <div className="mt-8 rounded-[1.75rem] border border-brand-200 bg-brand-50 p-7">
                <span className="eyebrow">Google reviews TODO</span>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-black">
                  Ready for approved Google review data.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The page has a server-side Google Places integration prepared,
                  but it needs real Google credentials before live reviews can
                  load. Add <code>GOOGLE_PLACES_API_KEY</code> and{" "}
                  <code>GOOGLE_PLACE_ID</code> in the hosting environment. Add{" "}
                  <code>GOOGLE_REVIEW_URL</code> if you want the Google review
                  button to appear.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  For full owner-managed Google Business Profile review access,
                  use the official Google Business Profile Reviews API with
                  verified business access and OAuth credentials. This site does
                  not scrape Google and does not create fake reviews.
                </p>
                {googleReviews.status === "error" && googleReviews.message && (
                  <p className="mt-3 text-sm font-bold text-slate-800">
                    Current Google status: {googleReviews.message}
                  </p>
                )}
              </div>
            </>
          )}
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
