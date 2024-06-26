import { SummaryTextRender } from "@/cms/components";
import { BlockContent } from "@/cms/typesLowLevel";
import Image, { StaticImageData } from "next/image";
import SandwichIcon from "@/images/general/sandwich-menu.svg";

export default function Summary({
  summary
}: {
  summary: BlockContent;
}) {
  return (
    <div id="summary" className="m-1 rounded-2xl bg-blue-10 py-6 px-8">
      <div className="flex gap-x-2 md:pl-4 mt-2 ">
        <Image src={SandwichIcon as StaticImageData} alt="summary" width={24} height={24} />
        <h3 className="text-blue-90 ">Zusammenfassung</h3>
      </div>
      <SummaryTextRender input={summary} />
    </div>
  );
}