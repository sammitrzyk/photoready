import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ValueStrip } from "@/components/sections/ValueStrip";
import { HomePrepChecklist } from "@/components/sections/HomePrepChecklist";
import { InteractiveServices } from "@/components/sections/InteractiveServices";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AudiencePaths } from "@/components/sections/AudiencePaths";
import { RecentWork } from "@/components/sections/RecentWork";
import { WhyPhotoReady } from "@/components/sections/WhyPhotoReady";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { faqSchema } from "@/lib/schema";
import { faqData } from "@/lib/faq-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqData)) }}
      />
      <Hero />
      <ValueStrip />
      <HomePrepChecklist />
      <InteractiveServices />
      <ProcessSection />
      <AudiencePaths />
      <RecentWork />
      <WhyPhotoReady />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
