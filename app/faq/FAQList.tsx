"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQListProps {
  faqs: FAQItem[];
}

export function FAQList({ faqs }: FAQListProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <Accordion defaultValue={[faqs[0]?.id]}>
        {faqs.map((faq) => (
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
  );
}
