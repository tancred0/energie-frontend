import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import homeLogo from "@/images/breadcrumbs/home.svg";
import arrowRight from "@/images/breadcrumbs/arrow-right.svg";


export type BreadCrumbParentsType = {
  title: string;
  url: string;
}

export default function BreadCrumbs({
  pageTitle,
  breadCrumbParents = [],
}: {
  pageTitle: string;
  breadCrumbParents?: BreadCrumbParentsType[];
}) {
  return (
    <nav className="sticky top-12 md:top-[61px] py-2 border-b-2 bg-white ">
      <div className="content-blog flex gap-x-1 items-center">
        <Link className="flex gap-x-1 text-sm items-center" href={"/"}>
          <Image src={homeLogo as StaticImageData} alt="Home" width={24} height={24} />
        </Link>
        <Image src={arrowRight as StaticImageData} alt="Arrow Right" width={24} height={24} />
        {breadCrumbParents.map((item, index) => (
          <div className="flex gap-x-1 items-center" key={index}>
            <Link
              key={index}
              className="breadcrumb"
              href={item.url}
            >{item.title}</Link>
            <Image src={arrowRight as StaticImageData} alt="Arrow Right" width={24} height={24} />
          </div>
        ))}
        <div className="breadcrumb">{pageTitle}</div>
      </div>
    </nav>
  );
}
