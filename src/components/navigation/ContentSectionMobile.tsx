import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function MobileContentSection({
  headings
}: {
  headings: (string | null)[];
}) {

  const renderedSections = headings.map((heading, index) => {
    if (heading !== null) {
      const sectionId = `sec${index + 1}`;
      return (
        <a
          key={sectionId}
          href={`#${sectionId}`}
          className="w-full text-sm text-gray-80"
        >
          {heading}
        </a>
      );
    } else {
      return <></>
    }
  });


  return (
    <nav className="md:hidden mx-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Inhaltsverzeichnis</AccordionTrigger>
          {/* {renderedSections.map((section, index) => (
            <AccordionContent key={index}>
              {section}
            </AccordionContent>
          ))} */}
        </AccordionItem>
      </Accordion>

    </nav>
  );
}
