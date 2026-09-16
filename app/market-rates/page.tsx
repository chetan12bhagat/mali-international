import { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  AlertCircle,
  Clock,
  ArrowRight,
  MessageCircle,
  FileText,
  ShieldAlert,
  Info,
} from "lucide-react";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { agriculturalProducts } from "@/data/products";
import { getRateStatusInfo, marketRateConfig } from "@/data/market-rates";
import { createWhatsAppEnquiryUrl } from "@/data/company";

export const metadata: Metadata = {
  title: "Agricultural Commodity Export Specifications | Mali International",
  description:
    "View export packaging calibrations, grading specifications, and custom sourcing quotations for Indian agricultural products including chillies, lemons, onions, bananas, and coconuts.",
  alternates: {
    canonical: "https://maliinternational.com/market-rates",
  },
};

export default function MarketRatesPage() {


  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-[clamp(40px,6vw,80px)] bg-off-white border-b border-light-gray">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Current Market Rates" },
            ]}
          />

          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <SectionLabel className="mb-3">Commercial Export</SectionLabel>
                <h1 className="text-3xl md:text-5xl font-bold text-dark-text tracking-tight mb-4">
                  Commodity Export Specifications
                </h1>
                <p className="text-lg md:text-xl text-muted leading-relaxed">
                  Standard packaging calibrations, specifications, and bespoke export quotations for international buyers.
                </p>
              </div>

              {/* Sourcing Desk Tag */}
              <div className="bg-white border border-slate-200/90 rounded-[4px] p-5 shadow-xs shrink-0 max-w-sm">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Procurement Desk
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-[2px] bg-gold/20 text-navy">
                    Export Ready
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs text-slate-500">Commercial Terms:</span>
                  <span className="text-sm font-bold text-navy">CIF / FOB Custom Quotes</span>
                </div>

                <p className="text-[11px] text-slate-500 leading-tight">
                  Status: <strong className="text-emerald-700">Available for Export</strong>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Prominent Top Disclaimer */}
      <section className="bg-slate-50 border-b border-slate-200 py-3.5">
        <Container>
          <div className="flex items-start gap-3 text-xs text-slate-700">
            <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Export Sourcing Notice:</strong> All agricultural commodities are quoted on a custom basis depending on target volume, caliber sorting, cold-chain packaging, and destination port. Submit an inquiry or contact our trade desk for official quotations.
            </p>
          </div>
        </Container>
      </section>


      {/* Main Rates Section */}
      <section className="py-[clamp(40px,6vw,80px)] bg-slate-50/50">
        <Container>
          {/* DESKTOP TABLE (hidden on mobile, visible md+) */}
          <div className="hidden md:block bg-white border border-slate-200 rounded-[4px] shadow-xs overflow-hidden mb-12">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-navy tracking-wide">
                  Commodities Export Specifications &amp; Quotations
                </h2>
                <p className="text-xs text-slate-500">
                  Custom FOB &amp; CIF export quotations tailored to required volume, grading and destination
                </p>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                {agriculturalProducts.length} Items Listed
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50/80 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-3 px-5">Product</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Net Wt</th>
                    <th className="py-3 px-4">Gross Wt</th>
                    <th className="py-3 px-4">Packaging / Size</th>
                    <th className="py-3 px-4">Sourcing Belt</th>
                    <th className="py-3 px-4">Availability</th>
                    <th className="py-3 px-5 text-right">Inquiry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {agriculturalProducts.map((p) => {
                    const whatsappUrl = createWhatsAppEnquiryUrl(p.name, p.variant);
                    return (
                      <tr key={p.id} className="hover:bg-slate-50/60 transition-colors">
                        {/* Product */}
                        <td className="py-4 px-5">
                          <Link
                            href={`/products/agriculture/${p.slug}`}
                            className="font-bold text-navy hover:text-gold text-sm transition-colors block"
                          >
                            {p.name}
                          </Link>
                          {p.variant && (
                            <span className="text-[11px] text-slate-500 block">{p.variant}</span>
                          )}
                          {p.altName && (
                            <span className="text-[10px] text-slate-400 italic block">({p.altName})</span>
                          )}
                        </td>

                        {/* Category */}
                        <td className="py-4 px-4 font-medium text-slate-600">{p.category}</td>

                        {/* Status */}
                        <td className="py-4 px-4">
                          <span className="inline-block px-2.5 py-1 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-[2px]">
                            Export Ready
                          </span>
                        </td>

                        {/* Net Weight */}
                        <td className="py-4 px-4 font-medium">{p.netWeight || "—"}</td>

                        {/* Gross Weight */}
                        <td className="py-4 px-4 font-medium">{p.grossWeight || "—"}</td>

                        {/* Packaging / Size */}
                        <td className="py-4 px-4">
                          <span>{p.packaging || (p.availablePackSizes ? p.availablePackSizes.join(", ") : "Standard")}</span>
                          {p.size && <span className="text-[11px] text-slate-500 block">Size: {p.size}</span>}
                          {p.hands && <span className="text-[11px] text-slate-500 block">Hands: {p.hands.join("/")}</span>}
                        </td>

                        {/* Sourcing Belt */}
                        <td className="py-4 px-4 font-medium">
                          <span className="px-2 py-0.5 rounded-[2px] bg-slate-100 text-slate-700 text-[11px]">
                            {p.location || p.origin || "India"}
                          </span>
                        </td>

                        {/* Availability */}
                        <td className="py-4 px-4">
                          <span className="text-[10px] uppercase font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-[2px] border border-emerald-200/70">
                            {p.availability || "Available for Export"}
                          </span>
                        </td>

                        {/* Action */}
                        <td className="py-4 px-5 text-right">
                          <div className="inline-flex items-center gap-1.5 justify-end">
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-[3px] transition-colors whitespace-nowrap shadow-2xs"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              WhatsApp
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                </tbody>
              </table>
            </div>
          </div>

          {/* MOBILE CARDS (visible on mobile, hidden md+) */}
          <div className="md:hidden space-y-4 mb-12">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Commodity Specifications
              </span>
              <span className="text-xs text-slate-400">{agriculturalProducts.length} Items</span>
            </div>

            {agriculturalProducts.map((p) => {
              const whatsappUrl = createWhatsAppEnquiryUrl(p.name, p.variant);
              return (
                <div
                  key={p.id}
                  className="bg-white border border-slate-200 rounded-[4px] p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-gold uppercase tracking-wider">
                        {p.category}
                      </span>
                      <Link
                        href={`/products/agriculture/${p.slug}`}
                        className="text-base font-bold text-navy hover:underline block"
                      >
                        {p.name}
                      </Link>
                      {p.variant && (
                        <span className="text-xs text-slate-500 block">{p.variant}</span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Export Ready
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs py-2.5 border-y border-slate-100 text-slate-600">
                    {p.netWeight && (
                      <div>
                        <span className="text-slate-400">Net:</span> {p.netWeight}
                      </div>
                    )}
                    {p.grossWeight && (
                      <div>
                        <span className="text-slate-400">Gross:</span> {p.grossWeight}
                      </div>
                    )}
                    {p.location && (
                      <div>
                        <span className="text-slate-400">Origin:</span>{" "}
                        {p.location}
                      </div>
                    )}
                    {p.packaging && (
                      <div>
                        <span className="text-slate-400">Pack:</span> {p.packaging}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      href={`/products/agriculture/${p.slug}`}
                      className="py-2 text-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-[3px] border border-slate-200 transition-colors"
                    >
                      Details
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-[3px] flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rate Inclusions & Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Rate Inclusions */}
            <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[4px] shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-gold" />
                Rate Inclusions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {marketRateConfig.rateInclusionsNote}
              </p>
              <p className="text-xs text-slate-400 italic">
                Note: Inclusions depend on product type and quotation terms (Ex-cold storage, FOB, or CIF).
                Each official proforma invoice will explicitly itemize all included services.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[4px] shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gold" />
                Indicative Payment Terms
              </h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3.5 py-1.5 bg-slate-100 text-navy font-bold text-xs rounded-[3px] border border-slate-200">
                  {marketRateConfig.paymentTerms.advance}
                </span>
                <span className="px-3.5 py-1.5 bg-slate-100 text-navy font-bold text-xs rounded-[3px] border border-slate-200">
                  {marketRateConfig.paymentTerms.balance}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {marketRateConfig.paymentTerms.note}
              </p>
            </div>
          </div>

          {/* Prominent Bottom Disclaimer */}
          <div className="p-6 md:p-8 bg-amber-50/80 border border-amber-200 rounded-[4px]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              General Rate Disclaimer &amp; Supplier Reference
            </h4>
            <p className="text-xs md:text-sm text-amber-950 leading-relaxed mb-3">
              {marketRateConfig.disclaimer}
            </p>
            <p className="text-xs text-amber-900/70">
              Supplier / Market Reference: {marketRateConfig.supplierReference}. Commercial trade facilitation and export contracts are managed directly by Mali International.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
