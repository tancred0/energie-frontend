import { createClient } from "next-sanity";
import type { SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type {
  TopCategory,
  MainCategory,
  SubCategory,
  RatgeberBlog,
  MainPageProps,
} from "@/cms/types";

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

  getMainPage = async (): Promise<MainPageProps[]> => {
    const topics: string[] = [
      "Solaranlage",
      "Energieberatung",
      "Heizung",
      "Wärmepumpe",
    ];
    const data: MainPageProps[] = await this.client.fetch(
      `*[_type in ["topCategory", "mainCategory"] && blog.breadcrumbTitle in $topics] {
        "breadcrumbTitle": blog.breadcrumbTitle,
        "mainImage": blog.mainImage.image,
        "slug": blog.slug.current,
        "higherSlug": topCategory->blog.slug.current
      }`,
      { topics },
    );

    // Order the results to match the order in topics
    return topics
    .map(
      (topic) => data.find((item) => item.breadcrumbTitle === topic) ?? null,
    )
    .filter((item): item is MainPageProps => item !== null);
};


  getTopCategory = async (topCategorySlug: string): Promise<TopCategory> => {
    const data: TopCategory = await this.client.fetch(
      `*[_type == 'topCategory' && blog.slug.current == $topCategorySlug][0] {
        blog,
      }`,
      { topCategorySlug: topCategorySlug },
    );
    return data;
  };

  getMainCategory = async (
    topCategorySlug: string,
    mainCategorySlug: string,
  ): Promise<MainCategory> => {
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
      { mainCategorySlug: mainCategorySlug, topCategorySlug: topCategorySlug },
    );
    return data;
  };

  getSubCategory = async (
    topCategorySlug: string,
    mainCategorySlug: string,
    subCategorySlug: string,
  ): Promise<SubCategory> => {
    const data: SubCategory = await this.client.fetch(
      `*[_type == 'subCategory' && blog.slug.current == $subCategorySlug && mainCategory->blog.slug.current == $mainCategorySlug && mainCategory->topCategory->blog.slug.current == $topCategorySlug][0]{
        blog,
        mainCategory->{
          topCategory->{
            blog {
              breadcrumbTitle,
              slug {
                current
              }
            }
          },
          blog {
            breadcrumbTitle,
            slug {
              current
            }
          }
        }
      }`,
      {
        mainCategorySlug: mainCategorySlug,
        topCategorySlug: topCategorySlug,
        subCategorySlug: subCategorySlug,
      },
    );
    return data;
  };

  getRatgeberBlog = async (slug: string): Promise<RatgeberBlog> => {
    const data: RatgeberBlog = await this.client.fetch(
      `*[_type == 'ratgeberBlog' && content.slug.current == $slug][0] {
        category,
        content,
      }`,
      { slug: slug },
    );
    return data;
  };

  getLegalNotice = async (slug: string): Promise<RatgeberBlog> => {
    const data: RatgeberBlog = await this.client.fetch(
      `*[_type == 'legal' && blog.slug.current == $slug][0]{
        blog,
        category,
      }`,
      { slug: slug },
    );
    return data;
  };

  getSitemapTopCategory = async (): Promise<TopCategory[]> => {
    const data: TopCategory[] = await this.client.fetch(
      `*[_type == "topCategory" && blog.public == true] {
        _updatedAt,
        blog {
          seo,
          slug
        }
      }
      `,
    );
    return data;
  };

  getSitemapMainCategory = async (): Promise<MainCategory[]> => {
    const data: MainCategory[] = await this.client.fetch(
      `*[_type == "mainCategory" && blog.public == true] {
        _updatedAt,
        blog {
          seo,
          slug
        },
        topCategory->{
          blog {
            slug
          }
        }
      }
      `,
    );
    return data;
  };

  getSitemapSubCategory = async (): Promise<SubCategory[]> => {
    const data: SubCategory[] = await this.client.fetch(
      `*[_type == "subCategory" && blog.public == true] {
        _updatedAt,
        blog {
          seo,
          slug
        },
        mainCategory->{
          blog {
            slug
          },
          topCategory->{
            blog {
              slug
            }
          }
        }
      }
      `,
    );
    return data;
  };
}
