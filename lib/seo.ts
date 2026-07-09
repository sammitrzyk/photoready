import type { Metadata } from "next";
import { siteConfig } from "./site-config";

interface PageSEO {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildMeta(page: PageSEO): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: page.canonical },
    robots: page.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteConfig.url}${page.canonical ?? ""}`,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
