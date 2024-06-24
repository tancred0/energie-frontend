import type { TopCategory, Blog } from "@/cms/types";
import BreadCrumbs from "../general/Breadcrumbs";

export default function TopCategory({ data }: { data: Blog }) {
  console.log(data);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: data.seo.title,
      description: data.seo.metaDescription,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: data.rating?.avgRating ?? 4.8,
        reviewCount: data.rating?.count ?? 52,
      },
    },
  ]

  const faqTitle = data.faqTitle ?? "Fragen und Antworten";
  const sectionOfContent = data.content.map((item) => item.heading);
  
  if (data.faqsList) {
    sectionOfContent.push(faqTitle);
  }

  console.log(sectionOfContent)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadCrumbs pageTitle={data.breadcrumbTitle} />
      <main className="content-blog" id={"sec0"}>
        <div className="grid grid-cols-4 gap-x-10	gap-y-14">
          <div>Inhaltsverzeichnis</div>
          <div className="col-span-3">
            <h1>{data.title}</h1>
          </div>
        </div>
      </main>
    </>
  );
}