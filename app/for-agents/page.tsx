import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Calendar,
  Users,
  ClipboardList,
  Check,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AgentReferralForm } from "./AgentReferralForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "For Real Estate Agents | PhotoReady Home Prep",
  description:
    "PhotoReady is a pre-listing home prep partner for real estate agents in Harrisburg and Central PA — cleanouts, repairs, paint, flooring, cleaning, and curb appeal coordinated around your listing timeline.",
  alternates: { canonical: "/for-agents" },
};

const benefits = [
  {
    icon: Phone,
    title: "One point of contact",
    body: "One call, one coordinator. No need to manage multiple vendors for cleaning, junk removal, painting, and flooring separately.",
  },
  {
    icon: Calendar,
    title: "Timeline-aware scheduling",
    body: "We schedule prep work around photo dates, showing schedules, and listing deadlines — not the other way around.",
  },
  {
    icon: Users,
    title: "Seller-friendly communication",
    body: "We communicate directly with sellers when needed, keeping them clear on what's happening and when — reducing calls back to you.",
  },
  {
    icon: ClipboardList,
    title: "Full prep coordination",
    body: "From initial walkthrough to final walkthrough, we handle the prep list so the home is clean, repaired, and ready for photos.",
  },
];

const steps = [
  {
    number: "01",
    title: "Refer the client",
    body: "Share the property address and timeline. We schedule a walkthrough at the client's convenience.",
  },
  {
    number: "02",
    title: "We build the prep plan",
    body: "After the walkthrough, we send a clear prep scope to you and the seller for review.",
  },
  {
    number: "03",
    title: "We get it done",
    body: "PhotoReady coordinates the work, keeps everyone updated, and completes prep before the listing date.",
  },
];

const whatWeHandle = [
  "Home cleanouts and junk removal",
  "Painting, drywall repair, and touch-ups",
  "Flooring and carpet replacement",
  "Deep move-out cleaning",
  "Curb appeal and landscaping",
  "Minor repairs and punch-list items",
];

export default function ForAgentsPage() {
  return (
    <>
      {/* Hidden static form so Netlify's build bot can detect and
          register the "agent-referral" form; real submissions are sent via
          fetch() from AgentReferralForm.tsx with matching field names. */}
      <form name="agent-referral" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="brokerage" />
        <select name="clientVolume">
          <option value="1 client" />
          <option value="2-3 clients" />
          <option value="4-6 clients" />
          <option value="7+ clients / ongoing" />
        </select>
        <textarea name="message" />
        <input name="bot-field" />
      </form>

      {/* Hero */}
      <section className="bg-[#0B1F3A] py-16 md:py-24">
        <Container>
          <p className="pr-eyebrow pr-eyebrow-light">FOR REAL ESTATE AGENTS</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            One referral. Every prep service your client needs.
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            PhotoReady works with agents who want one reliable vendor to handle
            the pre-listing prep — from cleanouts and repairs to painting,
            flooring, cleaning, and curb appeal.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-[#159AD6] hover:bg-[#0E7AAF] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Partner with PhotoReady
          </Link>
        </Container>
      </section>

      {/* Agent Benefits */}
      <section className="bg-[#FFFDF8] py-16 md:py-20">
        <Container>
          <SectionHeader
            title="Built around your workflow."
            lead="Whether you need a quick cleanout or a full prep coordination, PhotoReady gives you one point of contact from walkthrough to completion."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {benefits.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="bg-[#F7F3EC] border border-[#D5CABE] rounded-xl p-6"
              >
                <div className="bg-white border border-[#D5CABE] rounded-lg h-10 w-10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-[#0B1F3A]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
                  {title}
                </h3>
                <p className="text-[#5A6472] text-sm leading-relaxed mt-2">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* How Agent Referral Works */}
      <section className="bg-[#F7F3EC] py-16">
        <Container>
          <SectionHeader
            eyebrow="THE PROCESS"
            title="Simple referral, coordinated results."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {steps.map(({ number, title, body }) => (
              <div key={number} className="flex flex-col gap-3">
                <span className="font-display text-4xl font-bold text-[#D5CABE]">
                  {number}
                </span>
                <h3 className="font-display text-xl font-bold text-[#0B1F3A]">
                  {title}
                </h3>
                <p className="text-[#5A6472] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Handle */}
      <section className="bg-[#FFFDF8] py-12">
        <Container>
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1F3A]">
              What we handle
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {whatWeHandle.map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <Check
                  className="h-4 w-4 text-[#159AD6] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-[#1F2A35]">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Agent Referral Form */}
      <section className="bg-[#0B1F3A] py-16 md:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="pr-eyebrow pr-eyebrow-light">READY TO REFER A CLIENT?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3">
              Partner with PhotoReady
            </h2>
            <p className="text-white/70 mt-4 text-lg">
              Tell us a bit about your business and we&rsquo;ll follow up to
              set up a smooth referral process for your listings.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <AgentReferralForm />

            <p className="mt-6 text-center text-white/60 text-sm">
              Prefer to call?{" "}
              <a
                href={siteConfig.phoneHref}
                className="text-[#159AD6] font-semibold hover:underline"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
