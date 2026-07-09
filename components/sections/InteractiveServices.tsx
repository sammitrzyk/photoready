"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/services-data";

export function InteractiveServices() {
  const [activeId, setActiveId] = useState<string>(services[0].id);

  const activeService = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <Section className="bg-white" curveTo="#F7F3EC">
      <Container>
        <SectionHeader
          eyebrow="WHAT WE HANDLE"
          title="Everything a home needs before it lists."
          lead="Whether the home needs one service or the full prep list, PhotoReady coordinates the work around your listing timeline, budget, and photo date."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Service list */}
          <div className="flex flex-col">
            {services.map((service) => {
              const isActive = service.id === activeId;

              return (
                <div key={service.id} className="border-b border-[#EAEFF5]">
                  <button
                    type="button"
                    onClick={() => setActiveId(isActive ? activeId : service.id)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isActive}
                  >
                    <span
                      className={[
                        "font-display text-lg md:text-xl font-bold transition-colors",
                        isActive ? "text-[#0B1F3A]" : "text-[#8A93A0]",
                      ].join(" ")}
                    >
                      {service.title}
                    </span>
                    <Plus
                      className={[
                        "w-4 h-4 flex-shrink-0 transition-transform",
                        isActive ? "text-[#159AD6] rotate-45" : "text-[#B8C0CC]",
                      ].join(" ")}
                      strokeWidth={2}
                    />
                  </button>

                  {isActive && (
                    <p className="text-sm md:text-base text-[#5A6472] leading-relaxed pb-5 max-w-md">
                      {service.short}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div className="relative w-full h-[280px] md:h-[380px] lg:h-full lg:min-h-[420px] rounded-[18px] overflow-hidden bg-[#EEF4FA]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={activeService.image}
              src={activeService.image}
              alt={activeService.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <Button
            asChild
            className="bg-[#0B1F3A] hover:bg-[#159AD6] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <Link href="/contact">Get an Estimate</Link>
          </Button>
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-[#5A6472] hover:text-[#159AD6] transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </Container>
    </Section>
  );
}
