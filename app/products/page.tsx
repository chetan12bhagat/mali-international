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
import { getRateStatusInfo } from "@/data/market-rates";

export const metadata: Metadata = generatePageMetadata("products");

export default function ProductsPage() {
  const rateInfo = getRateStatusInfo();
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
              <Button href="/market-rates" variant="outline" size="lg">
                Current Market Rates
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Market Rates Spotlight Strip */}
      <section className="py-6 bg-navy text-white border-y border-white/10">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide flex items-center gap-2">
                  <span>Indicative Daily Market Rates Available</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-[2px] bg-gold text-navy">
                    {rateInfo.badgeLabel}
                  </span>
                </p>
                <p className="text-xs text-white/60">
                  {rateInfo.validityText} · Subject to confirmation based on grade, quantity and port
                </p>
              </div>
            </div>

            <Link
              href="/market-rates"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-white transition-colors shrink-0"
            >
              View Full Rate Table
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
              <SectionLabel className="mb-3">Categories</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-text mb-4">
                Sourcing Portfolios
              </h2>
              <p className="text-muted leading-relaxed">
                Direct farm coordination, cold-chain monitoring, and calibrated export packing across
                key commodity categories.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={i * 0.08}>
                <Link
                  href={`/products/${cat.slug}`}
                  className="group flex flex-col bg-white border border-light-gray rounded-[4px] overflow-hidden hover:border-gold/40 hover:shadow-[0_8px_24px_rgba(10,25,47,0.06)] transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold text-gold bg-navy/90 rounded-[2px] tracking-wider">
                      {cat.number}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-dark-text group-hover:text-navy transition-colors duration-200 mb-2">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-6">
                        {cat.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <span className="text-xs font-semibold uppercase tracking-wider text-navy group-hover:text-gold transition-colors flex items-center gap-1">
                        Explore Category
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                      {cat.productCount && (
                        <span className="text-xs text-slate-400 font-medium">
                          {cat.productCount} Commodities
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Rate Preview */}
      <section className="py-[clamp(50px,8vw,100px)] bg-slate-50 border-t border-light-gray">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <SectionLabel className="mb-2">Market Watch</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-text">
                  Selected Commodities
                </h2>
              </div>
              <Link
                href="/products/agriculture"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors"
              >
                View all 14 agricultural products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <div
                key={p.id}
                className="bg-white p-5 rounded-[4px] border border-slate-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
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
                      {rateInfo.rateLabel}
                    </span>
                    <span className="text-sm font-bold text-navy">
                      ₹{p.rate} {p.rateUnit}
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
