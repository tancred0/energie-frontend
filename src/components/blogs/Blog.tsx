import type { BlogType } from "@/cms/types";

import AsideComponent from "../navigation/ContentSectionDesktop";
import Hero from "../general/Hero";
import InfoComponent from "../lowLevel/InfoComponent";
import Summary from "../general/Summary";
import BlogContent from "./BlogContent";
import Sources from "../general/Sources";
import Faqs from "../general/Faqs";
import MainImage from "../general/MainImage";



export default function Blog({ data }: { data: BlogType }) {

  const faqTitle = data.faqTitle ?? "Fragen und Antworten";
  const sectionOfContent = data.content.map((item) => item.heading);

  if (data.faqsList) {
    sectionOfContent.push(faqTitle);
  }
  return (
    <main className="content-blog mt-10" id={"sec0"}>
      <div className="grid grid-cols-4 gap-x-10	gap-y-14">
        <AsideComponent headings={sectionOfContent} />
        <div id="main-content" className="col-span-4 md:col-span-3 ">
          <Hero
            h1={data.title}
            introText={data.introText}
          />
          <InfoComponent readingTime={data.readingTime} />
          {data.mainImage && <MainImage img={data.mainImage} />}
          <Summary summary={data.summary} />
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
  )
}