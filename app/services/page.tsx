import type { Metadata } from "next";
import Link from "next/link";
import {
  Package,
  PaintbrushVertical,
  Layers,
  Sparkles,
  Flower2,
  Wrench,
  ChevronRight,
} from "lucide-react";

import { services } from "@/lib/services-data";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pre-Listing Home Prep Services | PhotoReady Harrisburg PA",
  description:
    "PhotoReady offers cleanouts, painting, flooring, cleaning, curb appeal, and minor repairs to prepare Central PA homes for listing.",
  alternates: { canonical: "/services" },
};

const iconMap: Record<string, React.ElementType> = {
  Package,
  PaintbrushVertical,
  Layers,
  Sparkles,
  Flower2,
  Wrench,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0B1F3A] py-16 md:py-24">
        <Container>
          <p className="pr-eyebrow pr-eyebrow-light">OUR SERVICES</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Everything a home needs before it lists.
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            From cleanouts and painting to flooring, cleaning, curb appeal, and
            repairs — PhotoReady coordinates the prep work that gets homes ready
            for photos, showings, and sale.
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="bg-[#FFFDF8] py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Package;
              return (
                <article
                  key={service.id}
                  className="bg-white border border-[#D5CABE] rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <div className="bg-[#F7F3EC] rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-[#0B1F3A]" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl font-bold text-[#0B1F3A]">
                    {service.title}
                  </h2>

                  {/* Short description */}
                  <p className="text-[#5A6472] text-sm leading-relaxed">
                    {service.short}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#F7F3EC] text-[#5A6472] text-xs px-2 py-0.5 rounded-full border border-[#D5CABE]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-[#159AD6] text-sm font-medium hover:underline"
                  >
                    Learn more
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <section className="bg-[#F7F3EC] py-12 md:py-16">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1F3A]">
              Not sure what your home needs?
            </h2>
            <p className="text-[#5A6472] mt-3 max-w-xl mx-auto">
              We walk the home, identify the prep priorities, and build a plan
              around your timeline and budget.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-[#159AD6] hover:bg-[#0E7AAF] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Get an Estimate
            </Link>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
