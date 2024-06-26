import { imageUrl } from "@/cms/components";
import type { ImageWithDetails } from "@/cms/typesLowLevel";

export default function MainImage({ img }: { img: ImageWithDetails }) {
  return (
    <>
      <img
        className="mt-6 mx-auto m-1 rounded-2xl w-full max-h-[60vh] object-cover"
        src={imageUrl(img.image.asset._ref)}
        width="auto"
        loading="lazy"
        alt={img.altText}
      />
      <div className="px-1 text-lg mb-4 truncate">
        Quelle:{" "}
        <a className="text-lg truncate" target={"_blank"} href={img.link}>
          {img.link}
        </a>
      </div>
    </>
  )
};