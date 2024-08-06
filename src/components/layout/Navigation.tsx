import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import phoneLogo from "@/images/general/phone.svg";
import smallLogo from "@/images/general/logo_small.svg";

const phoneNumber = undefined // "0800 123 456 789";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-5 border-b-2 bg-white">
      <div className="px-10 py-2">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex w-full">
            <div className="w-auto my-auto ">
              <Link href="/">
                <Image
                  className="mr-10 "
                  src={smallLogo as StaticImageData}
                  alt="Logo Energieberatungsportal"
                />
              </Link>
            </div>
            <div className="hidden md:display md:flex gap-x-4 flex-row ml-auto my-auto">
              <p className="my-auto text-base font-light py-2.5 px-5 rounded-full bg-gray-200">Kostenlos und unverbindlich</p>
              {phoneNumber && (
                <Link href={`tel:${phoneNumber}`} className="flex flex-row my-auto gap-x-1 py-2.5 px-5 rounded-full bg-gray-200 no-underline hover:font-medium  ">
                  <Image
                    src={phoneLogo as StaticImageData}
                    alt="Telefon Icon"
                    width={20}
                    height={20}
                  />
                  <span className="ml-2 text-base text-gray-700">{phoneNumber}</span>
                </Link>
              )}
            </div>
          </nav >
        </div>
      </div >
    </header >
  );
}
