import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works | PhotoReady Home Prep | Harrisburg, PA",
  description:
    "PhotoReady Home Prep is a Central PA pre-listing home preparation company helping sellers and real estate agents get homes ready for photos, showings, and sale.",
  alternates: { canonical: "/how-it-works" },
};

const whatWeHandle = [
  "Cleanouts",
  "Painting",
  "Flooring",
  "Cleaning",
  "Curb Appeal",
  "Repairs",
];

const values = [
  {
    title: "We prioritize what buyers notice.",
    body: "Not every upgrade improves sale price. We focus on what matters: cleanliness, presentation, and obvious repairs.",
  },
  {
    title: "We communicate clearly.",
    body: "You know what is on the list, what is done, and what is coming. No surprises.",
  },
  {
    title: "We respect the timeline.",
    body: "Listing dates are not flexible. We build the prep plan around your date, not around our schedule.",
  },
  {
    title: "We keep it practical.",
    body: "Homes need prep, not renovation. We help sellers avoid over-improving and focus on what actually makes a difference.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1F3A] py-16 md:py-20">
        <Container>
          <p className="pr-eyebrow pr-eyebrow-light">ABOUT US</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Practical prep. Local team. Ready for your timeline.
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            PhotoReady is a Harrisburg-based home prep company helping Central
            PA sellers and real estate agents prepare homes for photos, showings,
            and sale.
          </p>
        </Container>
      </section>

      {/* About Story */}
      <section className="bg-[#FFFDF8] py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-5">
                One coordinator for the whole prep list.
              </h2>
              <div className="flex flex-col gap-4 text-[#5A6472] leading-relaxed">
                <p>
                  Most sellers have a list of things to handle before their home
                  is ready for photos — clutter to clear, walls to touch up,
                  floors to refresh, and the yard to clean up. The problem is
                  managing five different people to get it done before the
                  listing date.
                </p>
                <p>
                  PhotoReady was built around a simple idea: one call, one plan,
                  one team. We walk the home with you, build the prep list, and
                  coordinate the work so you are not chasing down contractors
                  the week before photos.
                </p>
                <p>
                  We work with homeowners who are selling, downsizing, or
                  handling an estate. We work with real estate agents who need a
                  reliable pre-listing vendor. And we keep everything organized
                  around the listing timeline.
                </p>
              </div>
            </div>

            {/* Right: Info Card */}
            <div className="bg-[#F7F3EC] border border-[#D5CABE] rounded-xl p-7">
              <p className="pr-eyebrow mb-4">What we handle</p>
              <ul className="flex flex-col gap-3">
                {whatWeHandle.map((item) => (
                  <li key={item} className="flex gap-2.5 items-center">
                    <Check
                      className="h-4 w-4 text-[#159AD6] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#1F2A35] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-[#D5CABE]">
                <p className="text-sm text-[#5A6472]">
                  Serving Harrisburg and Central PA
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="bg-[#F7F3EC] py-14">
        <Container>
          <SectionHeader
            eyebrow="HOW WE WORK"
            title="What you can expect."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {values.map(({ title, body }) => (
              <article
                key={title}
                className="bg-white border border-[#D5CABE] rounded-xl p-6"
              >
                <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-2">
                  {title}
                </h3>
                <p className="text-[#5A6472] text-sm leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Area Note */}
      <section className="bg-[#FFFDF8] py-10 text-center">
        <Container>
          <p className="text-[#5A6472] max-w-xl mx-auto">
            PhotoReady serves Harrisburg, Mechanicsburg, Camp Hill, Carlisle,
            New Cumberland, and nearby Central PA communities.
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
