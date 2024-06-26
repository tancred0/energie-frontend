import { PortableBlogRenderer, imageUrl } from "@/cms/components";
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
      <PortableBlogRenderer input={img.description} />
    </>
  )
};