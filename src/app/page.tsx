import type { Metadata } from "next";

import Hero from "@/components/main/0_Hero";
import ProductRange from "@/components/main/1_ProductRange";
import Partners from "@/components/main/2_Partners";
import RatgeberInfo from "@/components/main/3_RatgeberInfo";
import Newsletter from "@/components/main/4_Newsletter";

const title = "Energieberatungsportal - Deutschlands Energie-Ratgeber";
const description = "Das Energieberatungsportal ➤ Strom & Energie sparen ✓ Sanieren & Bauen ✓ Individuelle Beratung ✓ Unabhängig ✓ Jetzt informieren!";
const rating: { value: number, count: number } = {
  value: 4.8,
  count: 52,
};

export function generateMetadata(): Metadata {
  return {
    title: title,
    description: description,
  };
}

export default async function Home() {
const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Deutsche Gesellschaft für Energieberatung",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": rating.value,
            "reviewCount": rating.count
        }
    }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ProductRange />
      <Partners />
      <Newsletter />
      {/* <RatgeberInfo /> */}
    </>
  );
}
