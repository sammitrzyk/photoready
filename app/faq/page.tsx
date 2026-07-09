import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { faqSchema } from "@/lib/schema";
import { FAQList, type FAQItem } from "./FAQList";

export const metadata: Metadata = {
  title: "Pre-Listing Home Prep FAQ | PhotoReady Harrisburg PA",
  description:
    "Answers to common questions about pre-listing home prep — what to fix before selling, how PhotoReady works, services, pricing, and timelines in Central PA.",
  alternates: { canonical: "/faq" },
};

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is pre-listing home prep?",
    answer:
      "Pre-listing home prep is the work done to a home before it is photographed, shown, or listed on the market. It typically includes cleanouts, junk removal, painting, flooring updates, move-out cleaning, landscaping, and minor repairs — whatever is needed to help the home make the best possible first impression on buyers.",
  },
  {
    id: "faq-2",
    question: "What should I fix before selling my house?",
    answer:
      "Focus on what buyers notice quickly: clutter and leftover items, paint scuffs and marks, worn or damaged flooring, odors, dirty kitchens and bathrooms, poor curb appeal, and small repairs that signal neglect. Most of these are practical prep items — not full renovations — and they have a real impact on how buyers feel about the home during photos and showings.",
  },
  {
    id: "faq-3",
    question: "Can PhotoReady handle several services at once?",
    answer:
      "Yes. PhotoReady is set up specifically to coordinate multiple services through one point of contact. We can schedule and manage cleanouts, repairs, painting, flooring, cleaning, and curb appeal work together — so you are not coordinating five different vendors in the weeks before your listing date.",
  },
  {
    id: "faq-4",
    question: "Do you work with real estate agents?",
    answer:
      "Yes. We work with agents throughout Harrisburg and Central PA who need a reliable pre-listing prep vendor. We understand listing timelines, communicate clearly about what is being done and when, and try to make the process easy for agents and their sellers.",
  },
  {
    id: "faq-5",
    question: "Do I need a full renovation before listing?",
    answer:
      "In most cases, no. Buyers are looking for a clean, well-maintained home they can picture themselves in — not a newly remodeled one. Practical prep like decluttering, fresh paint, clean floors, and a tidy yard typically has a better return than costly renovations that buyers may change anyway.",
  },
  {
    id: "faq-6",
    question: "How far in advance should I contact PhotoReady?",
    answer:
      "As early as you can is always better. Reaching out 3–4 weeks before your target listing date gives us the most flexibility to walk the home, build the prep plan, and schedule the work without rushing. That said, we can often work with tighter timelines — just reach out and let us know your situation.",
  },
  {
    id: "faq-7",
    question: "What areas do you serve?",
    answer:
      "PhotoReady primarily serves Harrisburg, Mechanicsburg, Camp Hill, Carlisle, New Cumberland, Lemoyne, and Enola — covering Cumberland County and Dauphin County in Central PA. If you are in a nearby community and are not sure whether we cover your area, just reach out and ask.",
  },
  {
    id: "faq-8",
    question: "How is PhotoReady different from a general contractor?",
    answer:
      "A general contractor typically focuses on a single trade or larger construction projects. PhotoReady is focused specifically on pre-listing home prep — we coordinate multiple services (cleanouts, paint, flooring, cleaning, curb appeal) as a package, built around your listing timeline. The goal is a ready-to-list home, not a construction project.",
  },
  {
    id: "faq-9",
    question: "How do you decide what needs to be done?",
    answer:
      "We start with a walkthrough of the home. Based on what we see — and what you tell us about the timeline and budget — we build a prioritized prep list. We focus on the items that actually matter to buyers and skip the things that will not move the needle. You approve the plan before any work begins.",
  },
  {
    id: "faq-10",
    question: "Can you work around my listing timeline?",
    answer:
      "That is exactly how we work. The listing date drives the schedule — we build the prep plan backward from your target date and sequence the work accordingly. If something changes, we adjust. We understand that listing timelines are not flexible, and we plan around that reality.",
  },
  {
    id: "faq-11",
    question: "What does a typical prep project cost?",
    answer:
      "Cost depends on what the home needs — the scope of work, the condition of the property, and how many services are involved. A small cleanout and cleaning will cost less than a full prep package that includes painting, flooring, and curb appeal. We provide a clear estimate before any work starts so you know what to expect.",
  },
  {
    id: "faq-12",
    question: "Do you handle the cleanout and the cleaning?",
    answer:
      "Yes, we can handle both. We coordinate junk removal, furniture disposal, and the clearing of leftover items — and we can follow that with a deep clean of the home before photos or showings. Having both handled together means less scheduling on your end.",
  },
  {
    id: "faq-13",
    question: "What if I just need one service?",
    answer:
      "That is fine. We can coordinate a single service — just a cleanout, just a cleaning, just curb appeal — without requiring a full package. Tell us what you need and we will let you know if we are the right fit or if we can point you in the right direction.",
  },
  {
    id: "faq-14",
    question: "How do I get started?",
    answer:
      "The easiest way is to fill out the contact form at photoreadyhomeprep.com/contact or give us a call. Tell us the address, your target listing date, and a general sense of what the home needs. We will follow up to schedule a walkthrough and put together a prep plan.",
  },
  {
    id: "faq-15",
    question: "Do you work with estates or inherited properties?",
    answer:
      "Yes. Estate cleanouts and inherited properties are a common situation we help with. These homes often need a full cleanout of furniture, belongings, and accumulated items before they can be prepped for sale. We work with families, estate attorneys, and agents to coordinate the process around the estate timeline.",
  },
];

export default function FAQPage() {
  const schema = faqSchema(faqData.map(({ question, answer }) => ({ question, answer })));

  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-[#0B1F3A] py-16 md:py-20">
        <Container>
          <p className="pr-eyebrow pr-eyebrow-light">FAQ</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Common questions about pre-listing home prep.
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Answers about what we do, how we work, and what to expect.
          </p>
        </Container>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-[#FFFDF8] py-16 md:py-20">
        <Container>
          <FAQList faqs={faqData} />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
