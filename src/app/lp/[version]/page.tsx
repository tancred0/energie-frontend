import Image from "next/image";
import type { StaticImageData } from "next/image";
import LeadFunnel from "@/components/funnel/Funnel";
import Script from "next/script";
import checkBoxIcon from "@/images/general/checkbox.svg";


const headings: { heading: string; subheading: string } = {
  heading: "Wir finden den richtigen Energieberater für Sie!",
  subheading: "Erhalten Sie jetzt kostenfrei und unverbindlich Angebote von Experten in Ihrer Nähe.",
};

const valueProps: string[] = [
  "Kostenfreie Beratung",
  "Kompetente Gutachter",
  "Direkt und unverbindlich",
];

interface lpProps {
  params: { version: string };
  searchParams: URLSearchParams;
}

export default async function Page({ params }: lpProps) {

  const funnelName = params.version === "v1" ? "ener_beratung" : "ener-sanier";
  return (
    <>
      <Script src="https://static.heyflow.com/widget/latest/webview.js" />
      <main className="mx-auto max-w-[1200px] px-10 my-20 ">
        <div id="main-content" className="text-center">
          <h1 className="mt-10 mb-6">{headings.heading}</h1>
          <p className="pb-6">{headings.subheading}</p>
          <LeadFunnel funnelName={funnelName} />
        </div>
      </main>
      <div className="bg-[#CDE3D6] border-t border-gray-300 py-4 mt-20 md:mt-40">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-auto flex flex-col md:flex-row flex-wrap justify-evenly items-center gap-x-2">
            {valueProps.map((value, index) => (
              <div key={index} className="flex justify-center gap-x-2 py-4">
                <Image src={checkBoxIcon as StaticImageData} alt="Checkbox icon" />
                <div className="my-auto text-blue-90">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


