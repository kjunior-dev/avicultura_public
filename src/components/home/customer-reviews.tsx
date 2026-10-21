"use client";

import { useState } from "react";
import { Pause, Play, Quote, Star } from "lucide-react";
import type { PublicReview } from "@/lib/customer-reviews";

function ReviewRow({ reviews, reverse = false, copies = true }: { reviews: PublicReview[]; reverse?: boolean; copies?: boolean }) {
  const items = reverse ? [...reviews].reverse() : reviews;
  return (
    <div className={`reviews-row${reverse ? " reviews-row--reverse mt-4" : ""}`} aria-hidden={reverse || undefined}>
      <div className="reviews-track">
        {(copies ? [false, true] : [false]).map((copy) => (
          <div key={String(copy)} className={`reviews-group${copy ? " reviews-copy" : ""}`} aria-hidden={copy || undefined}>
            {items.map((review) => (
              <figure key={review.id} className={`reviews-card flex flex-col rounded-3xl border border-border p-6 sm:p-7 ${reverse ? "bg-secondary/50" : "bg-background"}`}>
                <div className="flex items-center justify-between gap-4">
                  <Quote size={22} className={reverse ? "text-secondary-foreground" : "text-primary"} aria-hidden="true" />
                  <span className="flex gap-0.5 text-primary" role="img" aria-label={`${review.rating} de 5 estrelas`}>
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} aria-hidden="true" className={star <= review.rating ? "fill-current" : ""} />)}
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 whitespace-pre-wrap break-words text-base leading-relaxed text-foreground">“{review.comment}”</blockquote>
                <figcaption className="mt-6 break-words text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{review.displayName}</span>{review.locality && ` · ${review.locality}`}
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CustomerReviews({ reviews, unavailable = false }: { reviews: PublicReview[]; unavailable?: boolean }) {
  const [paused, setPaused] = useState(false);
  const animated = reviews.length >= 4;
  return (
    <section id="avaliacoes" aria-labelledby="reviews-heading" className={`customer-reviews overflow-hidden py-20 lg:py-24${animated ? "" : " reviews-static"}`} data-paused={paused}>
      <div className="mx-auto mb-10 flex max-w-7xl flex-wrap items-end justify-between gap-6 px-6 lg:px-10">
        <div>
          <p className="eyebrow">Vozes à mesa</p>
          <h2 id="reviews-heading" className="font-display mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">Quem leva à mesa conta.</h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">Depois da entrega, pode partilhar a sua experiência pelo link privado do seu pedido.</p>
        </div>
        {animated && (
          <button type="button" className="reviews-toggle inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" onClick={() => setPaused((current) => !current)} aria-controls="reviews-quotes">
            {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            {paused ? "Retomar animação" : "Pausar animação"}
          </button>
        )}
      </div>
      {reviews.length > 0 ? (
        <div id="reviews-quotes" className="reviews-quotes">
          <ReviewRow reviews={reviews} copies={animated} />
          {animated && <ReviewRow reviews={reviews} reverse />}
        </div>
      ) : (
        <p className="mx-auto max-w-7xl px-6 text-sm text-muted-foreground lg:px-10">
          {unavailable ? "Não foi possível carregar as avaliações neste momento. Tente novamente mais tarde." : "As primeiras avaliações dos nossos clientes estarão disponíveis em breve."}
        </p>
      )}
    </section>
  );
}
