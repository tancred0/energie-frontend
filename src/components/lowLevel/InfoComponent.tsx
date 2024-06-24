import Image from "next/image";
import { StaticImageData } from "next/image";

import lastTuesday from "@/lib/lastTuesday";
import { Rating } from "@/cms/typesLowLevel";

import clockIcon from "@/images/textinfo/clock.svg";
import calendarIcon from "@/images/textinfo/calendar.svg";
import starIcon from "@/images/textinfo/star.svg";

export default function InfoComponent({
  readingTime, 
  rating,
}: {
  readingTime: number;
  rating: Rating;
}) {

  const lastTuesdayFormatted = lastTuesday();

  return (
    <div className="flex border-y-2 sm:mx-2 py-4 my-4 text-blue-90 text-xs sm:text-base">
      <div className="info-component border-r-2">
        <Image
          src={clockIcon as StaticImageData}
          height={24}
          width={24}
          alt="Clock"
        />
        <div>
          <span className="hidden md:block">Lesezeit: </span><strong>{readingTime} min.</strong>
        </div>
      </div>
      <div className="info-component border-r-2">
        <Image
          src={calendarIcon as StaticImageData}
          height={24}
          width={24}
          alt="Calendar"
        />
        <div>
          <span className="hidden md:block">Letzte Änderung: </span><strong>{lastTuesdayFormatted}</strong></div>
      </div>
      <div className="info-component">
        <Image
          src={starIcon as StaticImageData}
          height={24}
          width={24}
          alt="Star"
        />
        <div className="hidden md:block">
          <strong>{rating == null ? 4.8 : rating.avgRating}</strong>
          {" "}bei{" "}
          <strong>{rating == null ? 47 : rating.count}</strong>
          {" "}Bewertungen
        </div>
        <div className="md:hidden">
          <strong>{rating == null ? 4.8 : rating.avgRating}</strong>{" "}
          ({rating == null ? 47 : rating.count})
        </div>
      </div>
    </div>
  );
}