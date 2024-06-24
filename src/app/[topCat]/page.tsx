import { Sanity } from "@/cms/Sanity";
import { Metadata, ResolvingMetadata } from "next";
import { cache } from "react";
import TopCategory from "@/components/blogs/TopCategory";

interface TopCategoryProps {
  params: { topCat: string };
  searchParams: URLSearchParams;
}


const fetchData = cache((categoryName: string) => {
  const sanity = new Sanity();
  const data = sanity.getTopCategory(categoryName);
  return data;
});


export async function generateMetadata(
  { params, searchParams }: TopCategoryProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await fetchData(params.topCat);

  const title =
    data?.content.seo?.title ??
    `Bodenrichtwerte <Bundesland> ${new Date().getFullYear()}`;
  const description =
    data?.content.seo?.metaDescription ??
    `Der Ratgeber für Bodenrichtwerte in <Bundesland>. Finden Sie alle Informationen zu den neuesten Entwicklungen der Bodenrichtwerten.`;
  return {
    title: title,
    description: description,
  };
}

export default async function Page({ params }: TopCategoryProps) {
  const data = await fetchData(params.topCat);
  return <TopCategory data={data.content} />;
}


