import type { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import smallLogo from "@/images/general/logo_small_dark_bg.svg";


export interface FooterLinks {
  name: string;
  slug: string;
}

const GeneralLinks: { heading: string, links: FooterLinks[] }[] = [
  {
    heading: "Produkte",
    links: [
      { name: "Heizungen", slug: "/heizung" },
      { name: "Wärmepumpen", slug: "/heizung/waermepumpe" },
      { name: "Solaranlagen", slug: "/solaranlage" },
      { name: "Photovoltaik", slug: "/solaranlage/photovoltaik" },
    ]
  },
  {
    heading: "Dienstleistungen",
    links: [
      { name: "Energieberatung", slug: "/energieberatung" },
    //   { name: "Förderservice", slug: "/foerderung" },
    ]
  },
];

export default function Footer({ classname }: { classname?: string }) {
  return (
    <footer className={`${classname ?? ""}`}>
      <div className="bg-blue-20 px-10 py-10">
        <div className="max-w-[1200px] mx-auto grid md:grid-flow-col gap-10">
          <div className="w-auto mr-auto">
            <Link href="/">
              <Image
                className="mr-10"
                src={smallLogo as StaticImageData}
                alt="Logo Deutsches Institut für Energieberatung"
              />
            </Link>
          </div>
          <div className="grid sm:grid-flow-col grid-cols-1 xs:grid-cols-2 gap-y-8 ">
            {GeneralLinks.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col gap-y-4">
                <h3 className="mt-0 text-base text-white mb-2">{group.heading}</h3>
                {group.links.map((district, index) => (
                  <Link
                    key={index}
                    href={district.slug}
                    className="text-base no-underline truncate block text-white"
                  >
                    {district.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-2 px-10 bg-blue-40">
        <div className="max-w-[1200px] mx-auto pt-4 pb-2">
          <div className="grid grid-flow-col text-white justify-between gap-x-10">
            <p className="text-base text-white mb-0">© {new Date().getFullYear()} - Deutsche Gesellschaft für Energieberatung</p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <Link className="text-base no-underline text-white truncate" href="/impressum">Impressum</Link>
              <Link className="text-base no-underline text-white truncate" href="/datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
