import type { TopCategory, Blog } from "@/cms/types";

import BreadCrumbs from "../navigation/Breadcrumbs";
import AsideComponent from "../navigation/ContentSectionDesktop";
import Hero from "../general/Hero";
import InfoComponent from "../lowLevel/InfoComponent";
import Summary from "../general/Summary";
import BlogContent from "./BlogContent";
import Sources from "../general/Sources";
import Faqs from "../general/Faqs";

import { imageUrl } from "@/cms/components";


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

  console.log(data.mainImage)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadCrumbs pageTitle={data.breadcrumbTitle} />
      <main className="content-blog mt-10" id={"sec0"}>
        <div className="grid grid-cols-4 gap-x-10	gap-y-14">
          <AsideComponent headings={sectionOfContent} />
          <div id="main-content" className="col-span-4 md:col-span-3 ">
            <Hero
              h1={data.title}
              introText={data.introText}
            />
            <InfoComponent readingTime={data.readingTime} rating={data.rating} />
            <Summary summary={data.summary} />
            {data.mainImage && (
              <>
                <img
                  className="mt-6 mx-auto m-1 px-2 rounded-2xl w-full max-h-[60vh]  object-cover"
                  src={imageUrl(data.mainImage.image.asset._ref)}
                  loading="lazy"
                  alt={data.mainImage.altText}
                />
                <div className="text-lg mb-4 truncate">
                  Quelle:{" "}
                  <a className="text-lg truncate" target={"_blank"} href={data.mainImage.link}>
                    {data.mainImage.link}
                  </a>
                </div>
              </>
            )}
            <BlogContent sections={data.content} />
            {data.sources && <Sources sources={data.sources} />}
            {data.faqsList && (
              <Faqs
                heading={faqTitle}
                faqs={data.faqsList}
                sectionNumber={sectionOfContent.length}
              />
            )}

          </div>
        </div>
      </main>
    </>
  );
}