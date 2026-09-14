export interface Service {
  number: string;
  title: string;
  description: string;
  details: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Product Sourcing",
    description: "Identifying and connecting with the right Indian suppliers for your product requirements.",
    details:
      "We work with your specifications to locate suitable products and suppliers across India's diverse manufacturing and agricultural landscape.",
  },
  {
    number: "02",
    title: "Supplier Discovery",
    description: "Finding reliable suppliers matched to your quality and volume requirements.",
    details:
      "Our supplier discovery process involves identifying, evaluating and shortlisting suppliers based on your specific product, quality and capacity needs.",
  },
  {
    number: "03",
    title: "Procurement Coordination",
    description: "Managing the procurement process from order to delivery.",
    details:
      "We coordinate between buyers and suppliers to ensure smooth procurement workflows including pricing, order placement and production tracking.",
  },
  {
    number: "04",
    title: "Sample Coordination",
    description: "Arranging product samples for evaluation before bulk orders.",
    details:
      "We facilitate the sample evaluation process, coordinating between suppliers and international buyers to ensure product alignment before commitment.",
  },
  {
    number: "05",
    title: "Quality Coordination",
    description: "Supporting product quality requirements throughout the sourcing process.",
    details:
      "We work with suppliers on product specifications, packaging requirements and pre-shipment coordination to support your quality expectations.",
  },
  {
    number: "06",
    title: "Packaging & Documentation",
    description: "Coordinating packaging standards and export documentation requirements.",
    details:
      "We help ensure packaging meets international standards and assist with the documentation required for smooth export and import processes.",
  },
  {
    number: "07",
    title: "Logistics Support",
    description: "Supporting the shipping and logistics coordination for international delivery.",
    details:
      "We assist with logistics planning, shipping coordination and delivery tracking to ensure products reach their destination efficiently.",
  },
  {
    number: "08",
    title: "OEM & Private Label",
    description: "Supporting custom manufacturing and private label sourcing from India.",
    details:
      "We help international businesses find Indian manufacturers for OEM production and private label products across various categories.",
  },
  {
    number: "09",
    title: "Documentation Support",
    description: "Assisting with trade documentation and compliance requirements.",
    details:
      "We support the preparation and coordination of export documentation, certificates and compliance paperwork required for international trade.",
  },
  {
    number: "10",
    title: "Custom Requirements",
    description: "Flexible sourcing support tailored to your specific business needs.",
    details:
      "Every business has unique requirements. We adapt our sourcing approach to match your specific product, volume and timeline needs.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Requirement",
    description: "Share your product specifications and sourcing needs.",
  },
  {
    number: "02",
    title: "Sourcing",
    description: "We identify suitable suppliers and products across India.",
  },
  {
    number: "03",
    title: "Evaluation",
    description: "Review samples, pricing and supplier capabilities.",
  },
  {
    number: "04",
    title: "Order",
    description: "Coordinate procurement and production requirements.",
  },
  {
    number: "05",
    title: "Shipment",
    description: "Manage logistics and documentation for delivery.",
  },
];
