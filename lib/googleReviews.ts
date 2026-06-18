export type GoogleReview = {
  authorName: string;
  authorUrl?: string;
  rating: number;
  relativeTimeDescription?: string;
  text: string;
  time?: number;
};

export type GoogleReviewsResult = {
  status: "ready" | "unconfigured" | "error";
  reviews: GoogleReview[];
  rating?: number;
  totalReviewCount?: number;
  placeUrl?: string;
  reviewUrl?: string;
  message?: string;
};

const GOOGLE_PLACE_DETAILS_ENDPOINT =
  "https://maps.googleapis.com/maps/api/place/details/json";

function getConfiguredReviewUrl() {
  return process.env.GOOGLE_REVIEW_URL || process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL;
}

export async function getGoogleReviews(): Promise<GoogleReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const reviewUrl = getConfiguredReviewUrl();

  if (!apiKey || !placeId) {
    return {
      status: "unconfigured",
      reviews: [],
      reviewUrl,
      message:
        "Google reviews are ready to connect once GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are configured.",
    };
  }

  const url = new URL(GOOGLE_PLACE_DETAILS_ENDPOINT);
  url.searchParams.set("place_id", placeId);
  url.searchParams.set(
    "fields",
    "name,rating,user_ratings_total,reviews,url",
  );
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", apiKey);

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 * 60 * 12 },
    });

    if (!response.ok) {
      return {
        status: "error",
        reviews: [],
        reviewUrl,
        message: "Google reviews could not be loaded from the Places API.",
      };
    }

    const data = (await response.json()) as {
      status?: string;
      error_message?: string;
      result?: {
        rating?: number;
        user_ratings_total?: number;
        url?: string;
        reviews?: Array<{
          author_name?: string;
          author_url?: string;
          rating?: number;
          relative_time_description?: string;
          text?: string;
          time?: number;
        }>;
      };
    };

    if (data.status !== "OK" || !data.result) {
      return {
        status: "error",
        reviews: [],
        reviewUrl,
        message:
          data.error_message ||
          "Google Places did not return reviews for this business.",
      };
    }

    const reviews =
      data.result.reviews
        ?.filter((review) => review.author_name && review.text)
        .map((review) => ({
          authorName: review.author_name || "Google reviewer",
          authorUrl: review.author_url,
          rating: review.rating || 0,
          relativeTimeDescription: review.relative_time_description,
          text: review.text || "",
          time: review.time,
        })) || [];

    return {
      status: "ready",
      reviews,
      rating: data.result.rating,
      totalReviewCount: data.result.user_ratings_total,
      placeUrl: data.result.url,
      reviewUrl,
    };
  } catch {
    return {
      status: "error",
      reviews: [],
      reviewUrl,
      message: "Google reviews are temporarily unavailable.",
    };
  }
}
