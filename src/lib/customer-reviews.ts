import "server-only";
import { getManagementLinks } from "./management-links";

export interface PublicReview {
  id: string;
  rating: number;
  comment: string;
  displayName: string;
  locality: string | null;
}

export async function getPublishedReviews(): Promise<{ reviews: PublicReview[]; unavailable: boolean }> {
  try {
    const url = new URL("/api/v1/client-portal/reviews", getManagementLinks().orderUrl);
    const response = await fetch(url, { cache: "no-store", redirect: "error", signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error("Reviews unavailable");
    const data: unknown = await response.json();
    if (!Array.isArray(data) || data.length > 20) throw new Error("Invalid reviews");
    const reviews = data.map((item: unknown): PublicReview => {
      if (!item || typeof item !== "object") throw new Error("Invalid review");
      const review = item as Record<string, unknown>;
      if (typeof review.id !== "string" || typeof review.rating !== "number" || !Number.isInteger(review.rating) || review.rating < 1 || review.rating > 5 ||
          typeof review.comment !== "string" || typeof review.displayName !== "string" ||
          (review.locality !== null && typeof review.locality !== "string")) throw new Error("Invalid review");
      return { id: review.id, rating: review.rating, comment: review.comment, displayName: review.displayName, locality: review.locality };
    });
    return { reviews, unavailable: false };
  } catch {
    return { reviews: [], unavailable: true };
  }
}
