import { agriculturalProducts, Product } from "./products";

export interface MarketRateConfig {
  marketRateDate: string; // ISO format or YYYY-MM-DD
  rateValidityHours: number;
  supplierReference: string;
  paymentTerms: {
    advance: string;
    balance: string;
    note: string;
  };
  rateInclusionsNote: string;
  disclaimer: string;
}

export const marketRateConfig: MarketRateConfig = {
  marketRateDate: "2026-08-27",
  rateValidityHours: 24,
  supplierReference: "SRUSHTI AGRICON™",
  paymentTerms: {
    advance: "50% Advance",
    balance: "50% on Loading",
    note: "Final payment terms are confirmed with the official quotation.",
  },
  rateInclusionsNote:
    "Depending on the applicable quotation, pricing may include material, packing, pre-cooling and container stuffing.",
  disclaimer:
    "All prices shown are indicative current market rates and are valid for 24 hours only. Rates may change according to market conditions, product quality, availability, packaging, quantity, origin, destination and logistics. Please request the latest quotation before placing an order.",
};

export interface RateStatusInfo {
  isExpired: boolean;
  badgeLabel: string;
  rateLabel: string;
  ctaText: string;
  validityText: string;
  publishedDateFormatted: string;
}

/**
 * Returns dynamic rate validity information based on marketRateDate and rateValidityHours.
 * Follows the business rule: If current date is beyond validity, shows "Last Published Rate"
 * and invites "Request Today's Price".
 */
export function getRateStatusInfo(
  dateStr: string = marketRateConfig.marketRateDate,
  validityHours: number = marketRateConfig.rateValidityHours
): RateStatusInfo {
  const publishDate = new Date(`${dateStr}T12:00:00Z`);
  const now = new Date();

  // Expiry timestamp = publishDate + validityHours (in ms)
  const expiryTimestamp = publishDate.getTime() + validityHours * 60 * 60 * 1000;
  const isExpired = now.getTime() > expiryTimestamp;

  const publishedDateFormatted = publishDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (isExpired) {
    return {
      isExpired: true,
      badgeLabel: "LAST PUBLISHED RATE",
      rateLabel: "Last Published Rate",
      ctaText: "Request Today's Price",
      validityText: "Published on " + publishedDateFormatted + " (Expired)",
      publishedDateFormatted,
    };
  }

  return {
    isExpired: false,
    badgeLabel: "CURRENT MARKET RATE",
    rateLabel: "Indicative Market Rate",
    ctaText: "Request Current Quote",
    validityText: "Valid for 24 Hours",
    publishedDateFormatted,
  };
}

export function getAllMarketRates(): Product[] {
  return agriculturalProducts.filter((p) => p.rate !== undefined);
}
