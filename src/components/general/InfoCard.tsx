import Link from "next/link";
import type { StaticImageData } from "next/image";

export default function InfoCard({
  title,
  image,
  description,
  href
}: {
  title: string,
  description?: string,
  image: StaticImageData,
  href: string
}) {
  return (
    <Link href={href} className="bg-white shadow-md rounded-md">
      <img src={image.src} alt={title} className="w-full rounded-t-md rounded-b-none h-40 md:h-50 object-cover object-center" />
      <div className="p-4 h-36 flex flex-col gap-2 justify-between">
        <div>
          <div className="text-lg font-semibold">{title}</div>
          {description && <div className="text-sm mt-2 line-clamp-1 md:line-clamp-2">{description}</div>}
        </div>
        <div className="button-text">Jetzt lesen</div>
      </div>
    </Link>
  );
}