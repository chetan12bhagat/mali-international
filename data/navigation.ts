export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Agricultural Products", href: "/products/agriculture" },
      { label: "Current Market Rates", href: "/market-rates" },
      { label: "Food & Commodities", href: "/products/food-commodities" },
      { label: "Minerals & Raw Materials", href: "/products/minerals" },
      { label: "Custom Sourcing", href: "/products/custom-sourcing" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Global Reach", href: "/global-reach" },
  { label: "Insights", href: "/insights" },
];

export const mobileNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  ...mainNavigation,
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "Global Reach", href: "/global-reach" },
    { label: "Quality & Process", href: "/quality" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Insights", href: "/insights" },
  ],
  products: [
    { label: "Agricultural Products", href: "/products/agriculture" },
    { label: "Current Market Rates", href: "/market-rates" },
    { label: "Food & Commodities", href: "/products/food-commodities" },
    { label: "Minerals & Raw Materials", href: "/products/minerals" },
    { label: "Custom Sourcing", href: "/products/custom-sourcing" },
  ],
  services: [
    { label: "Product Sourcing", href: "/services" },
    { label: "Procurement", href: "/services" },
    { label: "Quality Coordination", href: "/services" },
    { label: "Logistics Support", href: "/services" },
  ],
  resources: [
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/request-quote" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
