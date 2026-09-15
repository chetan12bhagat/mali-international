export interface Product {
  id: string;
  slug: string;
  name: string;
  variant?: string;
  altName?: string;
  category: string;
  categorySlug?: string;
  origin?: string;
  rate?: number;
  currency?: string;
  rateUnit?: string;
  rateBasis?: string;
  netWeight?: string;
  grossWeight?: string;
  packaging?: string;
  availablePackSizes?: string[];
  destination?: string;
  location?: string;
  size?: string;
  hands?: string[];
  availability?: string;
  image?: string;
  shortDescription?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProductCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  productCount?: number;
  products: Product[];
}

/* =======================================================
   ALL 14 AGRICULTURAL PRODUCTS
   ======================================================= */
export const agriculturalProducts: Product[] = [
  {
    id: "g4-chilli",
    slug: "g4-chilli",
    name: "G4 Chilli",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India (Maharashtra / Gujarat)",
    rate: 198,
    currency: "₹",
    rateUnit: "/ Box",
    rateBasis: "Ex Mumbai",
    netWeight: "3.8 kg",
    grossWeight: "4.4 kg",
    packaging: "Carton Box",
    availability: "Subject to confirmation",
    image: "/images/products/g4-chilli.jpg",
    shortDescription:
      "Fresh G4 green chillies sourced for international and domestic buyer requirements with calibrated sorting.",
    description:
      "Fresh G4 chilli sourced for domestic and international buyer requirements, with packaging options based on current specifications and destination requirements.",
    seoTitle: "G4 Chilli Supplier & Sourcing India | Mali International",
    seoDescription:
      "Source G4 chilli from India through Mali International. View current indicative rates, packaging details and request a quotation.",
  },
  {
    id: "lemon",
    slug: "lemon",
    name: "Lemon",
    category: "Fresh Produce",
    categorySlug: "agriculture",
    origin: "India",
    rate: 310,
    currency: "₹",
    rateUnit: "/ Box",
    netWeight: "6.5 kg",
    grossWeight: "7.2 kg",
    packaging: "Corrugated Box",
    availability: "Subject to confirmation",
    image: "/images/products/lemon.jpg",
    shortDescription:
      "Fresh Indian lemons with high juice content and firm yellow peel, packed in export-grade cartons.",
    description:
      "Selected Indian lemons suitable for international fresh produce sourcing, graded by size and packed for extended cold-chain transit.",
    seoTitle: "Indian Lemon Supplier & Export Sourcing | Mali International",
    seoDescription:
      "Explore Indian lemon sourcing through Mali International with current market rates, packing details and export enquiry support.",
  },
  {
    id: "pomegranate",
    slug: "pomegranate",
    name: "Pomegranate",
    category: "Fruits",
    categorySlug: "agriculture",
    origin: "India (Solapur / Nashik)",
    rate: 190,
    currency: "₹",
    rateUnit: "/ Box",
    netWeight: "1.6 kg",
    grossWeight: "2.1 kg",
    packaging: "Ventilated Box",
    availability: "Subject to confirmation",
    image: "/images/products/pomegranate.jpg",
    shortDescription:
      "Selected Indian pomegranates known for deep red arils and balanced brix sweetness for international markets.",
    description:
      "Selected Indian pomegranates suitable for international sourcing requirements, subject to seasonal availability and buyer specifications.",
    seoTitle: "Indian Pomegranate Supplier | Mali International",
    seoDescription:
      "Source Indian pomegranates for international markets through Mali International. View current indicative rate and packaging details.",
  },
  {
    id: "drumstick",
    slug: "drumstick",
    name: "Drumstick",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India",
    rate: 1080,
    currency: "₹",
    rateUnit: "/ Bag",
    netWeight: "4 kg",
    grossWeight: "4 kg",
    packaging: "Mesh Bag",
    availability: "Subject to confirmation",
    image: "/images/products/drumstick.jpg",
    shortDescription:
      "Fresh tender Indian drumsticks (Moringa oleifera pods) sourced directly from prime farming belts.",
    description:
      "Explore drumstick sourcing from India for international buyers through Mali International, ensuring consistent pod thickness and freshness.",
    seoTitle: "Drumstick Supplier India | Mali International",
    seoDescription:
      "Explore drumstick sourcing from India for international buyers through Mali International.",
  },
  {
    id: "ginger",
    slug: "ginger",
    name: "Ginger",
    category: "Spices & Fresh Produce",
    categorySlug: "agriculture",
    origin: "India",
    rate: 430,
    currency: "₹",
    rateUnit: "/ Bag",
    netWeight: "4 kg",
    packaging: "Ventilated Bag",
    availability: "Subject to confirmation",
    image: "/images/products/ginger.jpg",
    shortDescription:
      "Fresh washed Indian ginger roots with sharp pungency and high oleoresin content for culinary and industrial use.",
    description:
      "Source Indian ginger through Mali International with current indicative market rates and buyer-specific sourcing support.",
    seoTitle: "Indian Ginger Supplier & Sourcing | Mali International",
    seoDescription:
      "Source Indian ginger through Mali International with current indicative market rates and buyer-specific sourcing support.",
  },
  {
    id: "vellary",
    slug: "vellary",
    name: "Vellary",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India",
    rate: 370,
    currency: "₹",
    rateUnit: "/ Box",
    netWeight: "5 kg",
    grossWeight: "5.5 kg",
    packaging: "Export Box",
    availability: "Subject to confirmation",
    image: "/images/products/vellary.jpg",
    shortDescription:
      "Fresh Indian Vellary (golden cucumber / yellow melon) selected for international trade and specialty produce distributors.",
    description:
      "Explore Vellary sourcing from India through Mali International with current indicative rate and packing details.",
    seoTitle: "Vellary Supplier India | Mali International",
    seoDescription:
      "Explore Vellary sourcing from India through Mali International with current indicative rate and packing details.",
  },
  {
    id: "red-pumpkin",
    slug: "red-pumpkin",
    name: "Red Pumpkin",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India",
    rate: 230,
    currency: "₹",
    rateUnit: "/ Bag",
    netWeight: "7 kg",
    packaging: "Breathable Bag",
    availability: "Subject to confirmation",
    image: "/images/products/red-pumpkin.jpg",
    shortDescription:
      "Mature whole red pumpkins with thick dense pulp, ideal for long-distance transport and international wholesale.",
    description:
      "Source red pumpkin from India for international markets through Mali International.",
    seoTitle: "Red Pumpkin Supplier India | Mali International",
    seoDescription:
      "Source red pumpkin from India for international markets through Mali International.",
  },
  {
    id: "suran",
    slug: "suran",
    name: "Suran",
    altName: "Elephant Foot Yam",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India",
    rate: 34,
    currency: "₹",
    rateUnit: "/ kg",
    availablePackSizes: ["8 kg", "9 kg", "10 kg"],
    packaging: "PP / Gunny Bag (8kg / 9kg / 10kg)",
    availability: "Subject to confirmation",
    image: "/images/products/suran.jpg",
    shortDescription:
      "Fresh farm-harvested Suran (Elephant Foot Yam) sorted by tuber size with customizable bag packaging.",
    description:
      "Source Suran / Elephant Foot Yam from India through Mali International with multiple packing options and current indicative rates.",
    seoTitle: "Suran / Elephant Foot Yam Supplier India | Mali International",
    seoDescription:
      "Source Suran / Elephant Foot Yam from India through Mali International with multiple packing options and current indicative rates.",
  },
  {
    id: "small-onion",
    slug: "small-onion",
    name: "Small Onion",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India",
    rate: 415,
    currency: "₹",
    rateUnit: "/ Bag",
    netWeight: "4 kg",
    packaging: "Mesh Bag",
    availability: "Subject to confirmation",
    image: "/images/products/small-onion.jpg",
    shortDescription:
      "Piquant Indian shallots (small red onions) cured and packed in aerated mesh bags for optimal shelf life.",
    description:
      "Explore small onion sourcing from India through Mali International with current indicative market rates.",
    seoTitle: "Small Onion Supplier India | Mali International",
    seoDescription:
      "Explore small onion sourcing from India through Mali International with current indicative market rates.",
  },
  {
    id: "turmeric",
    slug: "turmeric",
    name: "Turmeric",
    category: "Spices",
    categorySlug: "agriculture",
    origin: "India (Maharashtra / Telangana)",
    rate: 270,
    currency: "₹",
    rateUnit: "/ Bag",
    netWeight: "4 kg",
    packaging: "Standard Bag",
    availability: "Subject to confirmation",
    image: "/images/products/turmeric.jpg",
    shortDescription:
      "Indian whole turmeric fingers with high natural curcumin levels, thoroughly cleaned and sorted.",
    description:
      "Indian turmeric available for sourcing based on required quantity, packing and buyer specifications.",
    seoTitle: "Indian Turmeric Supplier | Mali International",
    seoDescription:
      "Source Indian turmeric through Mali International for international buyers and B2B sourcing requirements.",
  },
  {
    id: "banana-dubai-export-pack",
    slug: "banana-dubai-export-pack",
    name: "Banana",
    variant: "Dubai Export Pack",
    category: "Fruits",
    categorySlug: "agriculture",
    origin: "India",
    rate: 455,
    currency: "₹",
    rateUnit: "/ Box",
    location: "Solapur",
    destination: "Dubai, UAE",
    netWeight: "13 kg",
    grossWeight: "14 kg",
    hands: ["4", "5", "6"],
    packaging: "Export Carton Box (13 kg Net / 14 kg Gross)",
    availability: "Subject to confirmation",
    image: "/images/products/banana.jpg",
    shortDescription:
      "Premium Cavendish bananas sourced from the Solapur belt, packed in 13kg cartons with 4/5/6 hands for UAE markets.",
    description:
      "Indian bananas sourced from Solapur with selected export packing options for international markets.",
    seoTitle: "Indian Banana Supplier for Dubai UAE | Mali International",
    seoDescription:
      "Source Indian bananas from Solapur for Dubai and UAE markets through Mali International.",
  },
  {
    id: "banana-7kg-pack",
    slug: "banana-7kg-pack",
    name: "Banana",
    variant: "7 kg Pack",
    category: "Fruits",
    categorySlug: "agriculture",
    origin: "India",
    rate: 295,
    currency: "₹",
    rateUnit: "/ Box",
    location: "Solapur",
    netWeight: "7 kg",
    grossWeight: "8 kg",
    hands: ["4", "5", "6"],
    packaging: "Export Carton Box (7 kg Net / 8 kg Gross)",
    availability: "Subject to confirmation",
    image: "/images/products/banana.jpg",
    shortDescription:
      "Solapur Cavendish bananas in compact 7kg cartons, calibrated hands for specialized retail distribution.",
    description:
      "Explore Indian banana sourcing from Solapur with current indicative rates and packaging options.",
    seoTitle: "Indian Banana Supplier from Solapur | Mali International",
    seoDescription:
      "Explore Indian banana sourcing from Solapur with current indicative rates and packaging options.",
  },
  {
    id: "semi-husk-coconut",
    slug: "semi-husk-coconut",
    name: "Semi-Husk Coconut",
    category: "Coconut",
    categorySlug: "agriculture",
    origin: "India (Tamil Nadu)",
    rate: 60,
    currency: "₹",
    rateUnit: "/ kg",
    rateBasis: "Ex Pollachi",
    packaging: "PP Bag",
    netWeight: "13 kg",
    grossWeight: "13 kg",
    availability: "Subject to confirmation",
    image: "/images/products/semi-husk-coconut.jpg",
    shortDescription:
      "Mature semi-husked coconuts from the Pollachi region, carefully graded and packed in PP bags for ocean transit.",
    description:
      "Source semi-husk coconut from Pollachi, India through Mali International with current indicative market rates.",
    seoTitle: "Semi Husk Coconut Supplier India | Mali International",
    seoDescription:
      "Source semi-husk coconut from Pollachi, India through Mali International with current indicative market rates.",
  },
  {
    id: "onion-dubai-uae",
    slug: "onion-dubai-uae",
    name: "Onion",
    variant: "Dubai / UAE",
    category: "Vegetables",
    categorySlug: "agriculture",
    origin: "India (Nashik / Pune)",
    destination: "Dubai, UAE",
    size: "55+ mm",
    rate: 26,
    currency: "₹",
    rateUnit: "/ kg",
    packaging: "Red Mesh Bag",
    availability: "Subject to confirmation",
    image: "/images/products/onion.jpg",
    shortDescription:
      "Export-grade Indian red onions sized 55mm and above, cured and container-stuffed for Dubai and UAE delivery.",
    description:
      "Source 55+ mm Indian onions for Dubai and UAE markets through Mali International with complete export coordination.",
    seoTitle: "Indian Onion Supplier for Dubai UAE | Mali International",
    seoDescription:
      "Source 55+ mm Indian onions for Dubai and UAE markets through Mali International.",
  },
];

/* =======================================================
   ADDITIONAL COMMODITY PORTFOLIOS FOR OTHER PAGES
   ======================================================= */
export const foodCommodities: Product[] = [
  {
    id: "rice",
    slug: "rice",
    name: "Rice Varieties (Basmati & Non-Basmati)",
    category: "Food & Commodities",
    origin: "India (Punjab / Haryana)",
    packaging: "PP bags, BoPP, Non-Woven bags (10kg, 25kg, 50kg)",
    availability: "Year-round, subject to export quotas",
    description: "Traditional and hybrid Basmati along with PR11, Sona Masoori, and IR64 parboiled rice.",
  },
  {
    id: "sugar",
    slug: "sugar",
    name: "Cane Sugar (ICUMSA 45 & S30)",
    category: "Food & Commodities",
    origin: "India (Maharashtra / Uttar Pradesh)",
    packaging: "50kg PP bags with inner liner",
    availability: "Subject to government policy & quotas",
    description: "Refined white cane sugar and raw sugar sourced from certified Indian mills.",
  },
  {
    id: "pulses",
    slug: "pulses",
    name: "Pulses & Legumes (Chickpeas, Lentils)",
    category: "Food & Commodities",
    origin: "India (Madhya Pradesh / Maharashtra)",
    packaging: "25kg / 50kg export bags",
    availability: "Seasonal availability",
    description: "Sortex-cleaned chickpeas (Kabuli & Desi), red lentils, and pigeon peas for global food service.",
  },
];

export const mineralProducts: Product[] = [
  {
    id: "silica-sand",
    slug: "silica-sand",
    name: "Industrial Silica Sand",
    category: "Minerals & Raw Materials",
    origin: "India (Rajasthan / Gujarat)",
    packaging: "1 MT Jumbo Bags / Bulk container liner",
    availability: "Consistent commercial supply",
    description: "High-purity silica sand for glass manufacturing, foundries, and construction chemicals.",
  },
  {
    id: "feldspar",
    slug: "feldspar",
    name: "Potassium & Sodium Feldspar",
    category: "Minerals & Raw Materials",
    origin: "India (Rajasthan / Andhra Pradesh)",
    packaging: "Jumbo bags (1000kg) / 50kg bags",
    availability: "Available on request",
    description: "Processed feldspar lumps and powder for ceramics, sanitaryware, and tile manufacturing.",
  },
  {
    id: "granite",
    slug: "granite",
    name: "Architectural Granite Slabs & Tiles",
    category: "Minerals & Raw Materials",
    origin: "India (South India / Rajasthan)",
    packaging: "Fumigated wooden bundles / crates",
    availability: "Subject to quarry schedules",
    description: "Processed granite slabs in polished, flamed, and honed finishes for architectural projects.",
  },
];

/* =======================================================
   PRODUCT CATEGORIES FOR MAIN PRODUCTS PAGE & SITE NAV
   ======================================================= */
export const productCategories: ProductCategory[] = [
  {
    id: "agriculture",
    number: "01",
    title: "Agricultural Products",
    slug: "agriculture",
    description:
      "Fresh vegetables, fruits, whole spices, shallots, and coconuts with daily indicative market rates.",
    image: "/images/products/g4-chilli.jpg",
    productCount: 14,
    products: agriculturalProducts,
  },
  {
    id: "food-commodities",
    number: "02",
    title: "Food & Commodities",
    slug: "food-commodities",
    description:
      "Bulk staple grains, Basmati and non-Basmati rice, refined cane sugar, pulses, and agro-commodities.",
    image: "/images/products/lemon.jpg",
    productCount: 3,
    products: foodCommodities,
  },
  {
    id: "minerals",
    number: "03",
    title: "Minerals & Raw Materials",
    slug: "minerals",
    description:
      "Industrial silica sand, processed feldspar, bentonite, natural stone, and ceramic mineral supplies.",
    image: "/images/products/suran.jpg",
    productCount: 3,
    products: mineralProducts,
  },
  {
    id: "custom-sourcing",
    number: "04",
    title: "Custom Sourcing",
    slug: "custom-sourcing",
    description:
      "Tailored agricultural procurement, contract farming coordination, private labeling, and port delivery.",
    image: "/images/products/onion.jpg",
    products: [],
  },
];

/* =======================================================
   HOMEPAGE FEATURED COMMODITIES LIST
   ======================================================= */
export const featuredProducts: string[] = [
  "G4 Chilli",
  "Bhagwa Pomegranate",
  "Cavendish Banana",
  "Red Onion 55+ mm",
  "Turmeric Finger",
  "Semi-Husk Coconut",
  "Fresh Ginger",
  "Drumstick",
];

/* =======================================================
   HELPER UTILITIES
   ======================================================= */
export function getProductBySlug(slug: string): Product | undefined {
  return agriculturalProducts.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return agriculturalProducts.map((p) => p.slug);
}

export function getRelatedProducts(currentSlug: string, limit: number = 4): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return agriculturalProducts.slice(0, limit);

  // Same category, excluding current
  const sameCategory = agriculturalProducts.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // Other agricultural items
  const others = agriculturalProducts.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function getFeaturedAgriProducts(limit: number = 6): Product[] {
  const featuredSlugs = [
    "g4-chilli",
    "pomegranate",
    "banana-dubai-export-pack",
    "onion-dubai-uae",
    "turmeric",
    "semi-husk-coconut",
  ];
  return agriculturalProducts.filter((p) => featuredSlugs.includes(p.slug)).slice(0, limit);
}
