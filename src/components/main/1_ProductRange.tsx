import Image from "next/image";
import Link from "next/link";

import electricityImg from "@/images/main/productRange/electricity.png";
import houseImg from "@/images/main/productRange/house.png";
import roofImg from "@/images/main/productRange/roof.png";
import solarImg from "@/images/main/productRange/solar.png";
import { Sanity } from "@/cms/Sanity";
import { imageUrl } from "@/cms/components";

const productRange = [
  {
    title: "Energieberatung",
    image: electricityImg,
    href: "/energieberatung",
  },
  {
    title: "Heizung",
    image: houseImg,
    href: "/heizung",
  },
  {
    title: "Wärmepumpe",
    image: roofImg,
    href: "/heizung/waermepumpe",
  },
  {
    title: "Solaranlage",
    image: solarImg,
    href: "/solaranlage",
  },
];

export default async function ProductRange() {
  const sanity = new Sanity();
  const data = await sanity.getMainPage();

  return (
    <section className="mx-auto mt-16 max-w-[1200px] px-10">
      <h2 className="mb-10 text-center ">Unser Angebot für Sie</h2>
      <div className="grid grid-cols-1 gap-10 xs:grid-cols-2 md:grid-cols-4">
        {data.map((product) => (
          <Link
            key={product.breadcrumbTitle}
            href={
              product.higherSlug
                ? `/${product.higherSlug}/${product.slug}`
                : `/${product.slug}`
            }
            className="flex flex-col items-center gap-5"
          >
            <Image
              src={imageUrl(product.mainImage.asset._ref)}
              alt={product.breadcrumbTitle}
              width={200}
              height={300}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <div className="button w-full">{product.breadcrumbTitle}</div>
          </Link>
        ))}
        {/* {productRange.map((product) => (
          <Link key={product.title} href={product.href} className="flex flex-col items-center gap-5">
            <Image
              src={product.image.src}
              alt={product.title}
              width={200}
              height={200}
              className="w-full"
            />
            <div className="button w-full">{product.title}</div>
          </Link>
        ))} */}
      </div>
    </section>
  );
}
