import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { productCategories, getFeaturedAgriProducts } from "@/data/products";

export const metadata: Metadata = generatePageMetadata("products");

export default function ProductsPage() {
  const featured = getFeaturedAgriProducts(4);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-[clamp(50px,8vw,100px)] bg-off-white border-b border-light-gray">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">MALI INTERNATIONAL</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">Products We Source</h1>
            <p className="text-xl text-muted max-w-[640px] leading-relaxed mb-8">
              Explore selected agricultural products and commodities sourced from India for
              international buyers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/products/agriculture" size="lg">
                View Agricultural Products
              </Button>
              <Button href="/request-quote" variant="outline" size="lg">
                Request Export Quote
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>


      {/* Sourcing Spotlight Strip */}
      <section className="py-6 bg-navy text-white border-y border-white/10">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide flex items-center gap-2">
                  <span>Direct Export Procurement &amp; Commercial Sourcing</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-[2px] bg-gold text-navy">
                    Export Ready
                  </span>
                </p>
                <p className="text-xs text-white/60">
                  Custom CIF / FOB quotes tailored to grade, volume, packaging and destination port
                </p>
              </div>
            </div>

            <Link
              href="/request-quote"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-white transition-colors shrink-0"
            >
              Request a Custom Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Category Cards Section */}
      <section className="py-[clamp(60px,10vw,140px)] bg-white">
        <Container>
          <AnimatedSection>
            <div className="mb-12 max-w-2xl">
              <SectionLabel className="mb-4">CATEGORIES</SectionLabel>
              <h2 className="text-dark-text">Our Product Verticals</h2>
              <p className="text-muted mt-4 text-base md:text-lg">
                Structured sourcing across agriculture, food commodities, minerals, and specialized contract manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products/${category.slug}`}
                  className="group relative block overflow-hidden rounded-[4px] border border-light-gray bg-white shadow-xs hover:border-gold/50 transition-all duration-300"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-gold block mb-1">
                        Vertical
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-2">{category.description}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs font-semibold text-navy group-hover:text-gold transition-colors">
                      <span>Explore {category.title} Catalog</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Featured Agriculture Commodities Preview */}
      <section className="py-[clamp(60px,10vw,120px)] bg-slate-50 border-t border-light-gray">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <SectionLabel className="mb-2">COMMERCIAL CATALOGUE</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-text">
                Agricultural Commodities
              </h2>
            </div>
            <Link
              href="/products/agriculture"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold transition-colors"
            >
              View all commodities
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-light-gray rounded-[4px] p-4 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative aspect-4/3 rounded-[3px] overflow-hidden mb-3 bg-slate-100">
                    <Image
                      src={p.image || "/images/products/onion.jpg"}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h4 className="text-base font-bold text-navy mt-0.5 mb-1">{p.name}</h4>
                  {p.variant && (
                    <span className="inline-block text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-[2px] mb-2 font-medium">
                      {p.variant}
                    </span>
                  )}
                  <p className="text-xs text-muted mb-4 line-clamp-2">{p.shortDescription}</p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      Pricing
                    </span>
                    <span className="text-xs font-semibold text-navy">
                      Quote on Request
                    </span>
                  </div>
                  <Link
                    href={`/products/agriculture/${p.slug}`}
                    className="block w-full py-2 text-center text-xs font-semibold text-navy bg-slate-50 hover:bg-navy hover:text-white rounded-[3px] border border-slate-200 transition-colors"
                  >
                    View Specifications
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sourcing Guarantee & CTA */}
      <section className="py-[clamp(60px,10vw,120px)] bg-[#0A192F] text-white">
        <Container>
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-gold text-xs font-medium uppercase tracking-wider mb-6">
                <ShieldCheck className="w-3.5 h-3.5" /> Direct India Sourcing
              </span>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                Need a Custom Sourcing Solution?
              </h2>
              <p className="text-white/60 mb-8 text-base md:text-lg leading-relaxed">
                Tell us your target commodities, packaging specifications, and destination port.
                Our team provides end-to-end supplier coordination and logistics support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/request-quote" variant="secondary" size="lg">
                  Request a Quote
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Contact Our Trade Desk
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
