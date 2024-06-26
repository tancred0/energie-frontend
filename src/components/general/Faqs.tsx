"use client";
import { Faq } from "@/cms/typesLowLevel";
import { PortableTextRenderer } from "@/cms/components";

import {
  Accordion,
  AccordionContent,
  AccordionItemFaq,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Faqs({
  heading,
  faqs,
  sectionNumber,
}: {
  heading: string | null;
  faqs: Faq[];
  sectionNumber?: number;
}) {
  return (
    <section id={`sec${sectionNumber}`}>
      <h2>
        {heading}
      </h2>
      {faqs.map((faq, index) => (
        <Accordion key={index} type="single" collapsible>
          <AccordionItemFaq value="item-1" className={`border-blue-40/50 ${index === faqs.length - 1 ? 'border-0' : ''}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>
              <PortableTextRenderer input={faq.answer} />
            </AccordionContent>
          </AccordionItemFaq>
        </Accordion>
      ))}
    </section >
  );
}
