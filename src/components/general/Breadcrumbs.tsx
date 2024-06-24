import Link from "next/link";
import Image from "next/image";
import homeLogo from "@/images/breadcrumbs/home.svg";
import arrowRight from "@/images/breadcrumbs/arrow-right.svg";


type BreadCrumbParentsType = {
  title: string;
  url: string;
}

export default function BreadCrumbs({
  pageTitle,
  prevItems = [],
}: {
  pageTitle: string;
  prevItems?: BreadCrumbParentsType[];
}) {
  return (
    <nav className="py-2 border-b-2">
      <div className="content-blog flex gap-x-1 items-center">
        <Link className="flex gap-x-1 text-sm items-center" href={"/"}>
          <Image src={homeLogo} alt="Home" width={24} height={24} />
        </Link>
        <Image src={arrowRight} alt="Arrow Right" width={24} height={24} />
        {prevItems.map((item, index) => (
          <>
            <Link
              key={index}
              className="breadcrumb"
              href={item.url}
            >{item.title}</Link>
            <Image src={arrowRight} alt="Arrow Right" width={24} height={24} />
          </>
        ))}
        <div className="breadcrumb">{pageTitle}</div>
      </div>
    </nav>
  );
}
