import { siteConfig } from "./site-config";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: "+17173172862",
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Harrisburg",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Harrisburg", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Mechanicsburg", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Camp Hill", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Carlisle", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "New Cumberland", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "AdministrativeArea", name: "Cumberland County, PA" },
    { "@type": "AdministrativeArea", name: "Dauphin County, PA" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pre-Listing Home Prep Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Cleanouts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting & Touch-Ups" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring & Carpet" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-Out Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Curb Appeal & Landscaping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Minor Repairs" } },
    ],
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/images/logo/photoready-horizontal-navy.png`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+17173172862",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});
