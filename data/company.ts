export const company = {
  name: "Mali International",
  tagline: "Global Trade. Trusted Partnerships.",
  description:
    "Mali International helps international businesses source quality products from India through reliable supplier coordination, procurement support and export solutions.",
  email: "contact@maliinternational.com",
  phone: "+91 98220 00000",
  whatsapp: "+919822000000",
  address: "Navi Mumbai / Solapur",
  city: "Navi Mumbai",
  state: "Maharashtra",
  country: "India",
  website: "https://maliinternational.com",
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    twitter: "",
  },
} as const;

export const siteConfig = {
  url: "https://maliinternational.com",
  locale: "en_IN",
  siteName: "Mali International",
} as const;

/**
 * Creates dynamic WhatsApp enquiry URL with pre-filled message according to business specification
 */
export function createWhatsAppEnquiryUrl(
  productName: string,
  variant?: string,
  rate?: number,
  rateUnit?: string
): string {
  const phone = (company.whatsapp || company.phone || "").replace(/[^0-9]/g, "");
  const text = `Hello Mali International,\n\nI am interested in the following product:\n\nProduct: ${productName}${
    variant ? `\nVariant: ${variant}` : ""
  }${rate ? `\nCurrent Indicative Rate: ₹${rate} ${rateUnit || ""}` : ""}\nQuantity Required: \nDestination: \n\nPlease share the latest price, availability and export details.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
