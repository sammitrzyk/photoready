"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/faq-data";

export { faqData } from "@/lib/faq-data";

export function FAQSection() {
  return (
    <Section cream curveTo="#0B1F3A">
      <Container>
        <SectionHeader
          eyebrow="COMMON QUESTIONS"
          title="Pre-listing home prep questions."
          align="center"
        />

        <div className="max-w-2xl mx-auto mt-10">
          <Accordion defaultValue={["item-1"]}>
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-xl border border-[#D5CABE] mb-2 overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 text-left font-medium text-[#0B1F3A] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-[#5A6472] text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
