import type { Seo, Rating } from "@/cms/typesLowLevel"

export default function getJsonLd({ seo, rating }: { seo: Seo, rating: Rating }) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: seo.title ?? "Heizung",
      description: seo.metaDescription ?? "Besten Heizungen im Vergleich",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating?.avgRating ?? 4.8,
        reviewCount: rating?.count ?? 52,
      },
    }
  ];
}