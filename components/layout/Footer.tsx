import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const footerLinks = {
  Services: [
    { label: "Home Cleanouts", href: "/services#cleanouts" },
    { label: "Painting & Touch-Ups", href: "/services#painting" },
    { label: "Flooring & Carpet", href: "/services#flooring" },
    { label: "Move-Out Cleaning", href: "/services#cleaning" },
    { label: "Curb Appeal", href: "/services#curb-appeal" },
    { label: "Minor Repairs", href: "/services#repairs" },
  ],
  Company: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "For Real Estate Agents", href: "/for-agents" },

    { label: "Get an Estimate", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white/75">
      <div className="mx-auto max-w-6xl px-6 md:px-8 xl:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <div className="font-display text-xl font-bold text-white tracking-tight">
                PhotoReady
              </div>
              <div className="text-[10px] font-medium text-[#159AD6] uppercase tracking-widest mt-0.5">
                Home Prep
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Pre-listing home prep for Harrisburg and Central PA — cleanouts, painting, flooring, cleaning, repairs, and curb appeal.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#159AD6]" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#159AD6]" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-3.5 w-3.5 text-[#159AD6] mt-0.5 shrink-0" />
                <span>Harrisburg, PA · Serving Central PA</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} PhotoReady Home Prep. Harrisburg, PA.
          </p>
          <p className="text-xs text-white/35">
            Serving Harrisburg · Mechanicsburg · Camp Hill · Carlisle · New Cumberland · Central PA
          </p>
        </div>
      </div>
    </footer>
  );
}
