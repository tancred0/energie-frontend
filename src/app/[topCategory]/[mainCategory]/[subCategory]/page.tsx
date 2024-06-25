import { Sanity } from "@/cms/Sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { cache } from "react";
import MainCategory from "@/components/blogs/2_MainCategory";

interface SubCategoryProps {
  params: { topCategory: string, mainCategory: string, subCategory: string};
  searchParams: URLSearchParams;
}


const fetchData = cache((topCategory: string, mainCategory: string, subCategory: string) => {
  const sanity = new Sanity();
  const data = sanity.getSubCategory(topCategory, mainCategory, subCategory);
  return data;
});


export async function generateMetadata(
  { params, searchParams }: SubCategoryProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await fetchData(params.topCategory, params.mainCategory, params.subCategory);

  const title =
    data?.blog.seo?.title ??
    `Bodenrichtwerte <Bundesland> ${new Date().getFullYear()}`;
  const description =
    data?.blog.seo?.metaDescription ??
    `Der Ratgeber für Bodenrichtwerte in <Bundesland>. Finden Sie alle Informationen zu den neuesten Entwicklungen der Bodenrichtwerten.`;
  return {
    title: title,
    description: description,
  };
}

export default async function Page({ params }: SubCategoryProps) {
  const data = await fetchData(params.topCategory, params.mainCategory, params.subCategory);
  const topCategoryInfo = data.topCategory.blog
  const mainCategoryInfo = data.mainCategory.blog
  const breadCrumbParents = [
    {
      title: topCategoryInfo.breadcrumbTitle,
      url: `${process.env.URL}/${topCategoryInfo.slug.current}`
    },
    {
      title: mainCategoryInfo.breadcrumbTitle,
      url: `${process.env.URL}/${topCategoryInfo.slug.current}/${mainCategoryInfo.slug.current}`
    }
  ]
  return <MainCategory data={data.blog} breadCrumbParents={breadCrumbParents}/>;
}


