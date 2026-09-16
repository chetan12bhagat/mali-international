import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Package,
  Calendar,
  AlertTriangle,
  Scale,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgriProductCard from "@/components/products/AgriProductCard";
import {
  agriculturalProducts,
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts,
} from "@/data/products";
import { getRateStatusInfo, marketRateConfig } from "@/data/market-rates";
import { company, siteConfig, createWhatsAppEnquiryUrl } from "@/data/company";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | Mali International" };
  }

  // Strictly avoiding dynamic daily price in SEO title and meta description as required
  const title =
    product.seoTitle || `${product.name} Supplier & Export Sourcing | Mali International`;
  const description =
    product.seoDescription ||
    `Source ${product.name} from India through Mali International. View export packaging, specifications and request a commercial quotation.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/products/agriculture/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/products/agriculture/${product.slug}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url: product.image || `${siteConfig.url}/logos/main-logo.jpeg`,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image || `${siteConfig.url}/logos/main-logo.jpeg`],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, 4);
  const whatsappUrl = createWhatsAppEnquiryUrl(
    product.name,
    product.variant
  );

  // Schema.org Structured Data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.variant ? `${product.name} (${product.variant})` : product.name,
    image: `${siteConfig.url}${product.image}`,
    description: product.description || product.shortDescription,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Mali International",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Mali International",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Agricultural Products",
        item: `${siteConfig.url}/products/agriculture`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: `${siteConfig.url}/products/agriculture/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO & BREADCRUMB */}
      <section className="pt-32 pb-8 bg-off-white border-b border-light-gray">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Agricultural Products", href: "/products/agriculture" },
              { label: product.name },
            ]}
          />
        </Container>
      </section>

      {/* MAIN PRODUCT DETAIL SECTION */}
      <section className="py-[clamp(40px,6vw,80px)] bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
            {/* LEFT COLUMN: 4:3 Image & Quality Box */}
            <div className="lg:col-span-5 xl:col-span-6 space-y-6">
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] w-full rounded-[4px] overflow-hidden bg-slate-100 border border-light-gray shadow-xs">
                <Image
                  src={product.image || "/images/products/onion.jpg"}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                {/* Category & Variant Badge */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/95 text-navy rounded-[2px] shadow-xs">
                    {product.category}
                  </span>
                  {product.variant && (
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-navy text-white rounded-[2px] shadow-2xs">
                      {product.variant}
                    </span>
                  )}
                </div>
              </div>

              {/* Sourcing Highlights Card */}
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-[4px] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  Mali Quality &amp; Sourcing Assurance
                </h4>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct farm &amp; mandi sourcing from prime agricultural belts in Maharashtra and South India.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Export sorting, grading, and post-harvest cold storage coordination.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Pre-shipment container stuffing inspection and full documentation support.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN: Details, Export Quotation Box, Specifications & Actions */}
            <div className="lg:col-span-7 xl:col-span-6">
              {/* Category & Title */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-dark-text tracking-tight mb-2">
                  {product.name}
                </h1>
                {product.variant && (
                  <p className="text-base font-semibold text-navy mb-3">
                    Variant / Grade: <span className="text-slate-700 font-normal">{product.variant}</span>
                  </p>
                )}
                {product.altName && (
                  <p className="text-xs text-slate-500 italic mb-3">
                    Also known as: {product.altName}
                  </p>
                )}
                <p className="text-sm md:text-base text-muted leading-relaxed mt-3">
                  {product.description || product.shortDescription}
                </p>
              </div>

              {/* EXPORT QUOTATION BOX */}
              <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200/90 rounded-[4px] p-6 mb-8 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
                    Commercial Sourcing
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-[2px]">
                    {product.availability || "AVAILABLE FOR EXPORT"}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-navy tracking-tight block mb-1">
                    Pricing on Request
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Custom FOB &amp; CIF export quotations tailored to your required volume, packaging specifications, and target destination port.
                  </p>
                </div>

                {/* Sourcing Details */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 py-3 border-y border-slate-200/80">
                  <div>
                    <span className="text-slate-400">Origin:</span>{" "}
                    <span className="font-semibold text-slate-700">{product.origin}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Packaging:</span>{" "}
                    <span className="font-semibold text-slate-700">{product.packaging || "Export Standard"}</span>
                  </div>
                </div>
              </div>

              {/* PRODUCT SPECIFICATIONS TABLE (Showing only non-empty fields) */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-3">
                  Product Specifications
                </h3>
                <div className="border border-slate-200 rounded-[3px] overflow-hidden text-sm">
                  {product.netWeight && (
                    <div className="flex justify-between py-2.5 px-4 bg-slate-50/70 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Net Weight</span>
                      <span className="text-dark-text font-semibold">{product.netWeight}</span>
                    </div>
                  )}

                  {product.grossWeight && (
                    <div className="flex justify-between py-2.5 px-4 bg-white border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Gross Weight</span>
                      <span className="text-dark-text font-semibold">{product.grossWeight}</span>
                    </div>
                  )}

                  {product.size && (
                    <div className="flex justify-between py-2.5 px-4 bg-slate-50/70 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Size / Calibration</span>
                      <span className="text-dark-text font-semibold">{product.size}</span>
                    </div>
                  )}

                  {product.availablePackSizes && (
                    <div className="flex justify-between py-2.5 px-4 bg-white border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Available Pack Sizes</span>
                      <span className="text-dark-text font-semibold">
                        {product.availablePackSizes.join(", ")}
                      </span>
                    </div>
                  )}

                  {product.hands && (
                    <div className="flex justify-between py-2.5 px-4 bg-slate-50/70 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Hands</span>
                      <span className="text-dark-text font-semibold">{product.hands.join(", ")}</span>
                    </div>
                  )}

                  {product.packaging && (
                    <div className="flex justify-between py-2.5 px-4 bg-white border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Standard Packaging</span>
                      <span className="text-dark-text font-semibold">{product.packaging}</span>
                    </div>
                  )}

                  {product.origin && (
                    <div className="flex justify-between py-2.5 px-4 bg-slate-50/70 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Origin</span>
                      <span className="text-dark-text font-semibold">{product.origin}</span>
                    </div>
                  )}

                  {product.location && (
                    <div className="flex justify-between py-2.5 px-4 bg-white border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Sourcing Belt</span>
                      <span className="text-dark-text font-semibold">{product.location}</span>
                    </div>
                  )}

                  {product.destination && (
                    <div className="flex justify-between py-2.5 px-4 bg-slate-50/70 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Frequent Export Destinations</span>
                      <span className="text-dark-text font-semibold">{product.destination}</span>
                    </div>
                  )}


                  <div className="flex justify-between py-2.5 px-4 bg-slate-50/70">
                    <span className="text-slate-500 font-medium">Availability</span>
                    <span className="text-emerald-800 font-semibold">{product.availability || "Available for Export"}</span>
                  </div>
                </div>
              </div>

              {/* ACTION CTAs: Request Quote & WhatsApp Enquiry */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-light-gray">
                <Link
                  href={`/request-quote?product=${encodeURIComponent(product.slug)}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy text-white text-sm font-semibold rounded-[3px] hover:bg-navy-dark shadow-xs transition-colors text-center"
                >
                  Request Export Quotation
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-[3px] shadow-xs transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* RELATED PRODUCTS SECTION */}
      {relatedProducts.length > 0 && (
        <section className="py-[clamp(50px,8vw,100px)] bg-slate-50 border-t border-light-gray">
          <Container>
            <AnimatedSection>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <SectionLabel className="mb-2">Related Commodities</SectionLabel>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-text">
                    You May Also Be Interested In
                  </h2>
                </div>
                <Link
                  href="/products/agriculture"
                  className="text-xs font-semibold text-navy hover:text-gold transition-colors flex items-center gap-1"
                >
                  View All Products
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <AgriProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Global Commercial Notice */}
      <section className="py-12 bg-white border-t border-light-gray">
        <Container>
          <div className="bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-[4px]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Important Commercial &amp; Sourcing Information
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {marketRateConfig.disclaimer}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Supplier / Market Reference: {marketRateConfig.supplierReference} · Official quotations are issued on Mali International commercial invoices.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
