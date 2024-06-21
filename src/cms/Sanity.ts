import { createClient } from "next-sanity";
import type { SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { BlogPost } from "@/cms/types";

export class Sanity {
  client: SanityClient;
  builder: ReturnType<typeof imageUrlBuilder>;

  constructor() {
    this.client = createClient({
      projectId: "ykthmjxc",
      dataset: "production",
      apiVersion: "2023-10-21",
      useCdn: true,
    });

    this.builder = imageUrlBuilder(this.client);
  }

  imageFor(source: SanityImageSource) {
    return this.builder.image(source);
  }

  getBlogPost = async (slug: string): Promise<BlogPost> => {
    const data: BlogPost = await this.client.fetch(
      `*[_type == 'blog' && slug.current == $slug][0] {
        public,
        publishedAt,
        rating,
        title,
        introText,
        summary,
        slug,
        category,
        breadcrumbTitle,
        seo,
        mainImage,
        readingTime,
        sections,
        sources,
        faqTitle,
        faqsList,
      }`,
      { slug: slug }
    );
    return data;
  };
}