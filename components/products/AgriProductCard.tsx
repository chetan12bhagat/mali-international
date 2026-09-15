"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { getRateStatusInfo } from "@/data/market-rates";
import { createWhatsAppEnquiryUrl } from "@/data/company";

interface AgriProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function AgriProductCard({ product, priority = false }: AgriProductCardProps) {
  const rateInfo = getRateStatusInfo();
  const whatsappUrl = createWhatsAppEnquiryUrl(
    product.name,
    product.variant,
    product.rate,
    product.rateUnit
  );

  return (
    <div className="group flex flex-col bg-white border border-light-gray rounded-[4px] overflow-hidden shadow-[0_1px_3px_rgba(10,25,47,0.04)] hover:shadow-[0_8px_24px_rgba(10,25,47,0.08)] hover:border-gold/40 transition-all duration-300">
      {/* 4:3 Product Image Frame */}
      <Link
        href={`/products/agriculture/${product.slug}`}
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 block"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={product.image || "/images/products/onion.jpg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
        {/* Subtle Category Pill on Image */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
          <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-navy rounded-[2px] border border-slate-200/60 shadow-2xs">
            {product.category}
          </span>
          {product.variant && (
            <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-navy/90 backdrop-blur-xs text-white rounded-[2px] shadow-2xs">
              {product.variant}
            </span>
          )}
        </div>

        {/* Rate Basis Pill */}
        {product.rateBasis && (
          <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
            <span className="px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider bg-navy/80 text-gold rounded-[2px]">
              {product.rateBasis}
            </span>
          </div>
        )}
      </Link>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header info */}
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <Link
              href={`/products/agriculture/${product.slug}`}
              className="group-hover:text-navy transition-colors duration-200"
            >
              <h3 className="text-[1.125rem] font-bold text-dark-text tracking-[0.01em] leading-snug">
                {product.name}
              </h3>
            </Link>
          </div>

          {/* Short specification summary */}
          <div className="text-xs text-muted mb-4 space-y-1">
            {product.netWeight && (
              <p>
                <span className="text-slate-400">Net Weight:</span>{" "}
                <span className="font-medium text-slate-700">{product.netWeight}</span>
                {product.grossWeight && (
                  <>
                    {" "}
                    · <span className="text-slate-400">Gross:</span>{" "}
                    <span className="font-medium text-slate-700">{product.grossWeight}</span>
                  </>
                )}
              </p>
            )}
            {product.size && (
              <p>
                <span className="text-slate-400">Calibration:</span>{" "}
                <span className="font-medium text-slate-700">{product.size}</span>
              </p>
            )}
            {product.availablePackSizes && (
              <p>
                <span className="text-slate-400">Available Packs:</span>{" "}
                <span className="font-medium text-slate-700">
                  {product.availablePackSizes.join(", ")}
                </span>
              </p>
            )}
            {product.location && (
              <p>
                <span className="text-slate-400">Sourcing Belt:</span>{" "}
                <span className="font-medium text-slate-700">{product.location}</span>
                {product.destination && ` → ${product.destination}`}
              </p>
            )}
          </div>
        </div>

        {/* Rate Box & Status */}
        <div className="pt-3 border-t border-light-gray mt-auto">
          <div className="flex items-end justify-between gap-2 mb-3">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                {rateInfo.rateLabel}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-navy">
                  {product.currency || "₹"}
                  {product.rate?.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-slate-500 font-medium">{product.rateUnit}</span>
              </div>
            </div>

            <div className="text-right">
              <span className="inline-block px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/80 rounded-[2px]">
                {product.availability || "Subject to confirmation"}
              </span>
            </div>
          </div>

          {/* Action Buttons: View Details, Request Quote, WhatsApp */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
            <Link
              href={`/products/agriculture/${product.slug}`}
              className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-navy rounded-[3px] border border-slate-200/60 transition-colors"
            >
              Details
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href={`/request-quote?product=${encodeURIComponent(product.slug)}`}
              className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-white bg-navy hover:bg-navy-dark rounded-[3px] shadow-2xs transition-colors text-center"
            >
              {rateInfo.isExpired ? "Request Quote" : "Request Quote"}
            </Link>
          </div>

          {/* Optional Quick WhatsApp Enquiry */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-medium text-emerald-700 hover:text-emerald-800 bg-emerald-50/70 hover:bg-emerald-50 rounded-[3px] border border-emerald-200/50 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
