import type { BlogType } from "@/cms/types";

import BreadCrumbs from "../navigation/Breadcrumbs";
import Blog from "./Blog";
import getJsonLd from "@/lib/getJsonLd";

import type { BreadCrumbParentsType } from "../navigation/Breadcrumbs";

export default function MainCategory({ 
  data, 
  breadCrumbParents = []
}: { 
  data: BlogType, 
  breadCrumbParents?: BreadCrumbParentsType[] 
}) {
  const jsonLd = getJsonLd(data);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadCrumbs pageTitle={data.breadcrumbTitle} breadCrumbParents={breadCrumbParents}/>
      <Blog data={data} />
    </>
  );
}