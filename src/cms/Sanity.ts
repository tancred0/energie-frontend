import { createClient } from "next-sanity";
import type { SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { TopCategory, MainCategory, SubCategory, RatgeberBlog } from "@/cms/types";

export class Sanity {
  client: SanityClient;
  builder: ReturnType<typeof imageUrlBuilder>;

  constructor() {
    this.client = createClient({
      projectId: "kcz3n8m3",
      dataset: "production",
      apiVersion: "2023-10-21",
      useCdn: false,
    });

    this.builder = imageUrlBuilder(this.client);
  }

  imageFor(source: SanityImageSource) {
    return this.builder.image(source);
  }

  getTopCategory = async (topCategorySlug: string): Promise<TopCategory> => {
    const data: TopCategory = await this.client.fetch(
      `*[_type == 'topCategory' && content.slug.current == $topCategorySlug][0] {
        blog,
      }`,
      { topCategorySlug: topCategorySlug }
    );
    return data;
  }

  getMainCategory = async (topCategorySlug: string, mainCategorySlug: string): Promise<MainCategory> => {
    const data: MainCategory = await this.client.fetch(
      `*[_type == 'mainCategory' && blog.slug.current == $mainCategorySlug && topCategory->blog.slug.current == $topCategorySlug][0]{
        blog,
        topCategory->{
          blog {
            breadcrumbTitle,
            slug {
              current
            }
          }
        }
      }`,
      { mainCategorySlug: mainCategorySlug, topCategorySlug: topCategorySlug }
    );
    return data;
  }

  getSubCategory = async (topCategorySlug: string, mainCategorySlug: string, subCategorySlug: string): Promise<SubCategory> => {
    const data: SubCategory = await this.client.fetch(
      `*[_type == 'subCategory' && blog.slug.current == $subCategorySlug && mainCategory->blog.slug.current == $mainCategorySlug && topCategory->blog.slug.current == $topCategorySlug][0]{
        blog,
        topCategory->{
          blog {
            breadcrumbTitle,
            slug {
              current
            }
          }
        },
        mainCategory->{
          blog {
            breadcrumbTitle,
            slug {
              current
            }
          }
        }
      }`,
      { mainCategorySlug: mainCategorySlug, topCategorySlug: topCategorySlug, subCategorySlug: subCategorySlug}
    );
    return data;
  }

  getRatgeberBlog = async (slug: string): Promise<RatgeberBlog> => {
    const data: RatgeberBlog = await this.client.fetch(
      `*[_type == 'ratgeberBlog' && content.slug.current == $slug][0] {
        category,
        content,
      }`,
      { slug: slug }
    );
    return data;
  }

}