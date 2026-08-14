import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Get an Estimate | PhotoReady Home Prep",
  description:
    "Schedule a walkthrough or get an estimate for pre-listing home prep services in Harrisburg and Central PA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hidden static form so Netlify's build bot can detect and
          register the "contact" form; real submissions are sent via
          fetch() from ContactForm.tsx with matching field names. */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input name="bot-field" />
      </form>

      {/* Page Hero */}
      <section className="bg-[#0B1F3A] py-16">
        <Container>
          <p className="pr-eyebrow pr-eyebrow-light">GET AN ESTIMATE</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Let&rsquo;s build your prep plan.
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Tell us about the property, your timeline, and what needs done.
            We&rsquo;ll help you figure out the right prep approach.
          </p>
        </Container>
      </section>

      {/* Two-column content */}
      <section className="bg-[#FFFDF8] py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Left: Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Sidebar */}
            <aside>
              <div className="bg-white border border-[#D5CABE] rounded-xl p-6 flex flex-col gap-6 sticky top-8">
                <div>
                  <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                    Prefer to call?
                  </h2>
                  <p className="text-[#5A6472] text-sm mt-1">
                    We&rsquo;re happy to talk through the project and answer any
                    questions before you submit.
                  </p>
                </div>

                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2.5 text-[#159AD6] font-semibold text-lg hover:underline"
                >
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {siteConfig.phone}
                </a>

                <div className="border-t border-[#E8E1D6] pt-5 flex flex-col gap-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin
                      className="h-4 w-4 text-[#5A6472] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[#5A6472]">
                      Harrisburg, PA &middot; Serving Central PA
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock
                      className="h-4 w-4 text-[#5A6472] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[#5A6472]">
                      We typically respond within one business day.
                    </span>
                  </div>
                </div>

                <div className="border-t border-[#E8E1D6] pt-5">
                  <p className="text-xs text-[#5A6472] leading-relaxed">
                    Serving Harrisburg, Mechanicsburg, Camp Hill, Carlisle, New
                    Cumberland, and surrounding Central PA communities.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
