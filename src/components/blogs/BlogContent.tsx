import { PortableTextRenderer } from "@/cms/components";
import { AddSection } from "@/cms/typesLowLevel";

export default function BlogContent({
  sections,
}: {
  sections: AddSection[];
}) {
  const renderedSections = sections.map((section, index) => {
    const sectionId = `sec${index + 1}`;
    return (
      <section id={sectionId} key={sectionId}>
        <h2>{section.heading}</h2>
        <PortableTextRenderer input={section.text} />
      </section>
    );
  });

  return <>{renderedSections}</>;
}
