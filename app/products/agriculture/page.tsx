import { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, AlertCircle, ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductSearchFilter from "@/components/products/ProductSearchFilter";
import { agriculturalProducts } from "@/data/products";
import { getRateStatusInfo, marketRateConfig } from "@/data/market-rates";

export const metadata: Metadata = generatePageMetadata("agriculture");

interface AgriculturePageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function AgriculturePage({ searchParams }: AgriculturePageProps) {
  const resolvedParams = await searchParams;
  const initialCategory = resolvedParams.category || "All";
  const rateInfo = getRateStatusInfo();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-[clamp(40px,6vw,80px)] bg-off-white border-b border-light-gray">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Agricultural Products" },
            ]}
          />
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <SectionLabel className="mb-3">Agri Export Desk</SectionLabel>
                <h1 className="text-3xl md:text-5xl font-bold text-dark-text tracking-tight mb-4">
                  Agricultural Products
                </h1>
                <p className="text-lg md:text-xl text-muted leading-relaxed">
                  Selected Indian agricultural products for international sourcing.
                </p>
              </div>

              {/* Live Rate Status Banner */}
              <div className="bg-white border border-slate-200/80 rounded-[4px] p-4 shadow-xs md:max-w-xs shrink-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <TrendingUp className="w-4 h-4 text-gold" />
                  <span className="text-xs font-bold text-navy uppercase tracking-wider">
                    {rateInfo.badgeLabel}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-2">
                  Published: <span className="font-semibold text-slate-700">{rateInfo.publishedDateFormatted}</span>
                </p>
                <Link
                  href="/market-rates"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline"
                >
                  View full daily market rate sheet →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Mandatory Market Rate Disclaimer Banner */}
      <section className="bg-amber-50/60 border-b border-amber-200/60 py-3 text-xs text-amber-900">
        <Container>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <p className="leading-normal">
              <span className="font-semibold">Important Pricing Notice:</span> All prices shown are indicative
              market rates and valid for 24 hours. Rates may fluctuate based on grade, quantity, packaging,
              origin, and ocean logistics.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Search, Filter & Product Grid Section */}
      <section className="py-[clamp(40px,6vw,100px)] bg-slate-50/40">
        <Container>
          <ProductSearchFilter
            products={agriculturalProducts}
            initialCategory={initialCategory}
          />
        </Container>
      </section>

      {/* Sourcing Process & Rate Inclusions Note */}
      <section className="py-16 bg-white border-t border-light-gray">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-[4px]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-2">
                Rate Inclusions
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {marketRateConfig.rateInclusionsNote}
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-[4px]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-2">
                Indicative Payment Terms
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-2">
                <strong className="text-slate-800">{marketRateConfig.paymentTerms.advance}</strong> &middot;{" "}
                <strong className="text-slate-800">{marketRateConfig.paymentTerms.balance}</strong>
              </p>
              <p className="text-[11px] text-slate-400">
                {marketRateConfig.paymentTerms.note}
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-[4px]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-2">
                Dedicated Trade Desk
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-3">
                Need bulk container stuffing, customized private labeling, or CIF/FOB pricing?
              </p>
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold transition-colors"
              >
                Request Commercial Quotation
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
