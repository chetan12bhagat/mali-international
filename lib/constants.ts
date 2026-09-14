export const SITE_URL = "https://maliinternational.com";

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
} as const;

export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.7,
  },
  ease: [0.25, 0.1, 0.25, 1] as const,
} as const;

export const globalMarkets = [
  { name: "Middle East", description: "Gulf region and broader Middle Eastern markets" },
  { name: "Africa", description: "North, East and West African markets" },
  { name: "Europe", description: "European Union and broader European markets" },
  { name: "Asia", description: "East and South Asian markets" },
  { name: "South-East Asia", description: "ASEAN and South-East Asian markets" },
  { name: "Americas", description: "North and South American markets" },
];

export const values = [
  {
    title: "Integrity",
    description: "Honest and transparent business practices in every interaction.",
  },
  {
    title: "Reliability",
    description: "Consistent, dependable service that international businesses can count on.",
  },
  {
    title: "Quality",
    description: "Commitment to sourcing and delivering products that meet international standards.",
  },
  {
    title: "Transparency",
    description: "Clear communication and visibility throughout the sourcing process.",
  },
  {
    title: "Partnership",
    description: "Building long-term relationships based on mutual trust and shared success.",
  },
];
