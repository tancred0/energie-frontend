// import { Sanity } from "@/cms/Sanity";
import type { MetadataRoute } from "next";
import { Sanity } from "@/cms/Sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const URL = process.env.URL;
    const sanity = new Sanity();
    const date = new Date().toISOString();
    
    const topCategories = await sanity.getSitemapTopCategory()
    const topCategoriesSitemap = topCategories.map((page) => {
      return {
          url: `${URL}/${page.blog.slug.current}`,
          lastModified: page._updatedAt,
          priority: page.blog.seo?.priority ?? 1,
      };
    });

    const mainCategories = await sanity.getSitemapMainCategory()
    const mainCategoriesSitemap = mainCategories.map((page) => {
      return {
          url: `${URL}/${page.topCategory.blog.slug.current}/${page.blog.slug.current}`,
          lastModified: page._updatedAt,
          priority: page.blog.seo?.priority ?? 1,
      };
    });

    const subCategories = await sanity.getSitemapSubCategory()
    const subCategoriesSitemap = subCategories.map((page) => {
      return {
          url: `${URL}/${page.mainCategory.topCategory.blog.slug.current}/${page.mainCategory.blog.slug.current}/${page.blog.slug.current}`,
          lastModified: page._updatedAt,
          priority: page.blog.seo?.priority ?? 1,
      };
    });

    const mainPageSitemap: MetadataRoute.Sitemap = [
        {
            url: `${URL}`,
            lastModified: date,
            priority: 1,            
        },
    ];

    return [
        ...mainPageSitemap,
        ...topCategoriesSitemap,
        ...mainCategoriesSitemap,
        ...subCategoriesSitemap
    ];
}
