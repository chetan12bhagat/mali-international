export const company = {
  name: "Mali International",
  tagline: "Global Trade. Trusted Partnerships.",
  description:
    "Mali International helps international businesses source quality products from India through reliable supplier coordination, procurement support and export solutions.",
  email: "contact@maliinternational.com",
  phone: "+91 80109 32020",
  whatsapp: "+91 80109 32020",
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
  _rate?: number,
  _rateUnit?: string
): string {
  const phone = (company.whatsapp || company.phone || "").replace(/[^0-9]/g, "");
  const text = `Hello Mali International,\n\nI am interested in the following product:\n\nProduct: ${productName}${
    variant ? `\nVariant: ${variant}` : ""
  }\nQuantity Required: \nDestination Port: \n\nPlease share the export quotation, availability and shipping details.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

