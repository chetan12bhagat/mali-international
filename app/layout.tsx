import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/layout/SplashScreen";
import { company, siteConfig } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Mali International | India Export & Global Sourcing Company",
    template: "%s",
  },
  description: company.description,
  keywords: [
    "India sourcing company",
    "India export company",
    "Indian exporters",
    "India product sourcing",
    "global sourcing from India",
    "agricultural products exporter India",
    "commodity exporter India",
    "mineral sourcing India",
    "B2B sourcing India",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: "Mali International | India Export & Global Sourcing Company",
    description: company.description,
    images: [
      {
        url: "/logos/main-logo.jpeg",
        width: 1080,
        height: 1065,
        alt: company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mali International | India Export & Global Sourcing Company",
    description: company.description,
    images: ["/logos/main-logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logos/main-logo.jpeg`,
    description: company.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: company.country,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.url,
  };

  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <SplashScreen>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SplashScreen>
      </body>
    </html>
  );
}
