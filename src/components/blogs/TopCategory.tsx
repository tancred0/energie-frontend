import type { BlogType } from "@/cms/types";

import BreadCrumbs from "../navigation/Breadcrumbs";
import Blog from "./Blog";
import getJsonLd from "@/lib/getJsonLd";

export default function TopCategory({ data }: { data: BlogType }) {
  const jsonLd = getJsonLd(data);
  console.log(jsonLd)
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadCrumbs pageTitle={data.breadcrumbTitle} />
      <Blog data={data} />
    </>
  );
}