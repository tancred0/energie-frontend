"use client"
import useObserver from "@/hooks/useObserver";
import Link from "next/link";

export default function AsideComponent({
  headings
}: {
  headings: (string | null)[];
}) {
  const { highlightedSection } = useObserver();

  const renderedSections = headings.map((heading, index) => {
    if (heading !== null) {
      const sectionId = `sec${index + 1}`;
      return (
        <Link
          key={sectionId}
          href={`#${sectionId}`}
          className={`content-section ${highlightedSection === sectionId
              ? "font-medium border-l-2 text-blue-90 border-blue-90 -ml-[2px] pl-[calc(1rem+2px)]"
              : "text-gray-80 border-l border-transparent"
            }`}
        >
          {heading}
        </Link>
      );
    } else {
      return <></>;
    }
  });


  return (
    <aside id="aside-section" className="sticky top-20 mb-auto hidden md:block">
      <h3>Inhaltsverzeichnis</h3>
      <div className="flex flex-col gap-y-5 border-l-2 border-neutral-200">
        {renderedSections}
      </div>
    </aside>
  );
}
