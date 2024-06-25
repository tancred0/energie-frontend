import { Sanity } from "@/cms/Sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { cache } from "react";
import { redirect } from "next/navigation";
import TopCategory from "@/components/blogs/1_TopCategory";

import slugify from "@/lib/slugify";

interface TopCategoryProps {
  params: { topCategory: string };
  searchParams: URLSearchParams;
}


const fetchData = cache((topCategory: string) => {
  const [needsRedirect, uri_fixed] = slugify(topCategory);
  if (needsRedirect) {
    redirect(`/${uri_fixed}`);
  }
  
  const sanity = new Sanity();
  const data = sanity.getTopCategory(topCategory);
  if (data === null) {
    redirect(`/`);
  }
  return data;
});


export async function generateMetadata(
  { params, searchParams }: TopCategoryProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await fetchData(params.topCategory);

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

export default async function Page({ params }: TopCategoryProps) {
  const data = await fetchData(params.topCategory);
  return <TopCategory data={data.blog} />;
}


