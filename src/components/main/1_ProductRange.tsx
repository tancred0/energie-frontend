import Image from "next/image";
import Link from "next/link";

import electricityImg from "@/images/main/productRange/electricity.png"
import houseImg from "@/images/main/productRange/house.png";
import roofImg from "@/images/main/productRange/roof.png";
import solarImg from "@/images/main/productRange/solar.png";

const productRange = [
  {
    title: "Energieberatung",
    image: electricityImg,
    href: "/energieberatung",
  },
  {
    title: "Förderservice",
    image: houseImg,
    href: "/foerderung",
  },
  {
    title: "Heizung",
    image: roofImg,
    href: "/heizung",
  },
  {
    title: "Wärmepumpe",
    image: solarImg,
    href: "/heizung/waermepumpe",
  },
];

export default function ProductRange() {
  return (
    <section className="max-w-[1200px] mx-auto mt-16 px-10">
      <h2 className="text-center mb-10 ">Unser Angebot für Sie</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-10">
        {productRange.map((product) => (
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
        ))}
      </div>
    </section>
  );
}