export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "What is pre-listing home prep?",
    answer:
      "Pre-listing home prep is the work done before a home is photographed, shown, or listed. It can include cleanouts, junk removal, painting, flooring, cleaning, landscaping, and minor repairs.",
  },
  {
    id: "item-2",
    question: "What should I fix before selling my house?",
    answer:
      "The best items to prioritize are the ones buyers notice quickly: clutter, paint marks, worn flooring, odors, dirty kitchens or bathrooms, poor curb appeal, and small repairs that make the home feel neglected.",
  },
  {
    id: "item-3",
    question: "Can PhotoReady handle several services at once?",
    answer:
      "Yes. PhotoReady can coordinate cleanouts, repairs, painting, flooring, cleaning, and curb appeal work through one point of contact.",
  },
  {
    id: "item-4",
    question: "Do you work with real estate agents?",
    answer:
      "Yes. PhotoReady works with agents who need a reliable pre-listing vendor for sellers in Harrisburg and Central PA.",
  },
  {
    id: "item-5",
    question: "Do I need a full renovation before listing?",
    answer:
      "No. Most homes need practical prep, not a full renovation. We help prioritize the work that improves presentation and buyer confidence.",
  },
  {
    id: "item-6",
    question: "How far in advance should I contact PhotoReady?",
    answer:
      "As early as possible is best, but we can often work within tight timelines. Reaching out 3–4 weeks before your target listing date gives us the most flexibility to schedule and coordinate the work.",
  },
];
