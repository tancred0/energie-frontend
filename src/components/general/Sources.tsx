import Image from "next/image";

import { BlockContent } from "@/cms/typesLowLevel";
import { PortableTextRenderer } from "@/cms/components";

import infoIcon from "@/images/general/info.svg";

export default function Sources({ sources }: { sources: BlockContent }) {
  return (
    <div
      className="p-6 mt-12 rounded-2xl border-2 border-neutral-200 "
    >
      <div className="inline-flex gap-2 px-4 py-2 mb-6 rounded-full bg-blue-10 border-2 border-blue-90">
        <Image
          src={infoIcon}
          height={24}
          width={24}
          alt="Infoicon"
          className="pt-[2px]"
        />
        <div className="text-xl font-semibold ">Quellen</div>
      </div>
      <PortableTextRenderer input={sources} />
    </div>
  );
}
