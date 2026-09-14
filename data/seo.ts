import { Metadata } from "next";
import { company, siteConfig } from "@/data/company";

interface PageSEO {
  title: string;
  description: string;
  path: string;
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: "Mali International | India Export & Global Sourcing Company",
    description:
      "Mali International connects global businesses with quality Indian products. Expert sourcing, procurement and export solutions for agriculture, commodities and minerals.",
    path: "/",
  },
  about: {
    title: "About Mali International | India Export & Sourcing Partner",
    description:
      "Learn about Mali International, an India-based sourcing company helping international businesses access quality products through reliable supplier coordination.",
    path: "/about",
  },
  products: {
    title: "Indian Products for Global Buyers | Mali International",
    description:
      "Explore sourcing opportunities across agriculture, food commodities, minerals and custom requirements from India with Mali International.",
    path: "/products",
  },
  agriculture: {
    title: "Agricultural Products Exporter India | Mali International",
    description:
      "Sourcing selected Indian agricultural products for international buyers. Fresh produce, grains, pulses, spices and more from India.",
    path: "/products/agriculture",
  },
  foodCommodities: {
    title: "Food & Commodities Sourcing India | Mali International",
    description:
      "Sourcing food-grade commodities and processed food products from Indian suppliers for international buyers.",
    path: "/products/food-commodities",
  },
  minerals: {
    title: "Minerals & Raw Material Sourcing India | Mali International",
    description:
      "Industrial minerals, natural stone and raw material sourcing from India through supplier coordination and buyer requirement matching.",
    path: "/products/minerals",
  },
  customSourcing: {
    title: "Custom Product Sourcing India | Mali International",
    description:
      "Tailored sourcing solutions for specific product requirements, OEM and private label needs from Indian suppliers.",
    path: "/products/custom-sourcing",
  },
  services: {
    title: "India Sourcing & Export Services | Mali International",
    description:
      "Comprehensive sourcing and export services from India including product sourcing, procurement, quality coordination, packaging and logistics.",
    path: "/services",
  },
  industries: {
    title: "Industries We Serve | Mali International",
    description:
      "Mali International serves importers, distributors, wholesalers, retailers, food businesses and industrial buyers with India sourcing solutions.",
    path: "/industries",
  },
  globalReach: {
    title: "Global Sourcing From India | Mali International",
    description:
      "Connecting Indian supply with international markets across the Middle East, Africa, Europe, Asia and the Americas.",
    path: "/global-reach",
  },
  quality: {
    title: "Quality & Process | Mali International",
    description:
      "Our quality coordination process ensures product specifications, supplier standards and packaging requirements are met for international trade.",
    path: "/quality",
  },
  sustainability: {
    title: "Responsible Trade | Mali International",
    description:
      "Mali International is committed to responsible sourcing practices, farmer relationships and sustainable trade partnerships.",
    path: "/sustainability",
  },
  insights: {
    title: "Insights & Resources | Mali International",
    description:
      "Expert insights on India sourcing, international procurement, agricultural exports and global trade trends.",
    path: "/insights",
  },
  contact: {
    title: "Contact Mali International | India Export & Sourcing",
    description:
      "Get in touch with Mali International for India sourcing inquiries, product requirements and export solutions.",
    path: "/contact",
  },
  requestQuote: {
    title: "Request a Quote | Mali International",
    description:
      "Submit your sourcing requirement to Mali International. Tell us what you need and we will help you explore the right sourcing path from India.",
    path: "/request-quote",
  },
  privacyPolicy: {
    title: "Privacy Policy | Mali International",
    description: "Privacy policy for Mali International website and services.",
    path: "/privacy-policy",
  },
  terms: {
    title: "Terms & Conditions | Mali International",
    description: "Terms and conditions for Mali International website and services.",
    path: "/terms",
  },
};

export function generatePageMetadata(pageKey: string): Metadata {
  const seo = pageSEO[pageKey];
  if (!seo) return {};

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${siteConfig.url}${seo.path}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteConfig.url}${seo.path}`,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/logos/mali-logo.jpeg`,
          width: 1200,
          height: 630,
          alt: company.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteConfig.url}/logos/mali-logo.jpeg`],
    },
  };
}
