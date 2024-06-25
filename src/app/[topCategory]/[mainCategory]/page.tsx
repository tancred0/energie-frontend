import { Sanity } from "@/cms/Sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { cache } from "react";
import MainCategory from "@/components/blogs/2_MainCategory";
import { redirect } from "next/navigation";
import slugify from "@/lib/slugify";


interface MainCategoryProps {
  params: { topCategory: string, mainCategory: string };
  searchParams: URLSearchParams;
}


const fetchData = cache((topCategory: string, mainCategory: string) => {
  const [topNeedsRedirect, topFixed] = slugify(topCategory);
  const [mainNeedsRedirect, mainFixed] = slugify(mainCategory);
  if (topNeedsRedirect || mainNeedsRedirect) {
    redirect(`/${topFixed}/${mainFixed}`);
  }


  const sanity = new Sanity();
  const data = sanity.getMainCategory(topCategory, mainCategory);
  if (data === null) {
    redirect(`/${topFixed}`);
  }
  return data;
});


export async function generateMetadata(
  { params, searchParams }: MainCategoryProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await fetchData(params.topCategory, params.mainCategory);

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

export default async function Page({ params }: MainCategoryProps) {
  const data = await fetchData(params.topCategory, params.mainCategory);
  const topCategoryInfo = data.topCategory.blog
  const breadCrumbParents = [
    {
      title: topCategoryInfo.breadcrumbTitle,
      url: `${process.env.URL}/${topCategoryInfo.slug.current}`
    }
  ]
  return <MainCategory data={data.blog} breadCrumbParents={breadCrumbParents}/>;
}


