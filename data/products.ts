export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  origin: string;
  packaging: string;
  availability: string;
  image: string;
}

export interface ProductCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "agriculture",
    number: "01",
    title: "Agricultural Products",
    slug: "agriculture",
    description:
      "Sourcing selected Indian agricultural products for international buyers. Subject to current availability and buyer requirements.",
    image: "/images/agriculture.jpg",
    products: [
      {
        id: "onion",
        name: "Onion",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Fresh Indian onions sourced from major growing regions across India.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to seasonal availability",
        image: "/images/products/onion.jpg",
      },
      {
        id: "potato",
        name: "Potato",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Quality Indian potatoes from select farming regions.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to seasonal availability",
        image: "/images/products/potato.jpg",
      },
      {
        id: "pomegranate",
        name: "Pomegranate",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Premium Indian pomegranates known for quality and taste.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to seasonal availability",
        image: "/images/products/pomegranate.jpg",
      },
      {
        id: "mango",
        name: "Mango",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Indian mangoes from renowned growing regions.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to seasonal availability",
        image: "/images/products/mango.jpg",
      },
      {
        id: "grapes",
        name: "Grapes",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Fresh Indian grapes sourced for international markets.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to seasonal availability",
        image: "/images/products/grapes.jpg",
      },
      {
        id: "rice",
        name: "Rice",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Indian rice varieties including Basmati and non-Basmati options.",
        origin: "India",
        packaging: "Available on request",
        availability: "Year-round, subject to requirements",
        image: "/images/products/rice.jpg",
      },
      {
        id: "wheat",
        name: "Wheat",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Indian wheat sourced from major producing states.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability",
        image: "/images/products/wheat.jpg",
      },
      {
        id: "maize",
        name: "Maize",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Indian maize for feed and food processing requirements.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability",
        image: "/images/products/maize.jpg",
      },
      {
        id: "pulses",
        name: "Pulses",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Various Indian pulses and lentil varieties.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability",
        image: "/images/products/pulses.jpg",
      },
      {
        id: "turmeric",
        name: "Turmeric",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Indian turmeric sourced from select growing regions.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability",
        image: "/images/products/turmeric.jpg",
      },
      {
        id: "chilli",
        name: "Chilli",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Indian chilli varieties for international markets.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability",
        image: "/images/products/chilli.jpg",
      },
      {
        id: "coriander",
        name: "Coriander",
        category: "Agricultural Products",
        categorySlug: "agriculture",
        description: "Indian coriander seeds and powder for export.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability",
        image: "/images/products/coriander.jpg",
      },
    ],
  },
  {
    id: "food-commodities",
    number: "02",
    title: "Food & Commodities",
    slug: "food-commodities",
    description:
      "Sourcing food-grade commodities and processed food products from Indian suppliers for international buyers.",
    image: "/images/commodities.jpg",
    products: [
      {
        id: "sugar",
        name: "Sugar",
        category: "Food & Commodities",
        categorySlug: "food-commodities",
        description: "Indian sugar for industrial and retail requirements.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability",
        image: "/images/products/sugar.jpg",
      },
      {
        id: "jaggery",
        name: "Jaggery",
        category: "Food & Commodities",
        categorySlug: "food-commodities",
        description: "Traditional Indian jaggery products.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability",
        image: "/images/products/jaggery.jpg",
      },
      {
        id: "edible-oils",
        name: "Edible Oils",
        category: "Food & Commodities",
        categorySlug: "food-commodities",
        description: "Indian edible oils for food processing and retail.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability",
        image: "/images/products/edible-oils.jpg",
      },
      {
        id: "processed-foods",
        name: "Processed Foods",
        category: "Food & Commodities",
        categorySlug: "food-commodities",
        description: "Processed and packaged food products from Indian manufacturers.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability",
        image: "/images/products/processed-foods.jpg",
      },
    ],
  },
  {
    id: "minerals",
    number: "03",
    title: "Minerals & Raw Materials",
    slug: "minerals",
    description:
      "Sourcing industrial minerals, natural stone and raw materials through supplier coordination and buyer requirement matching.",
    image: "/images/minerals.jpg",
    products: [
      {
        id: "industrial-minerals",
        name: "Industrial Minerals",
        category: "Minerals & Raw Materials",
        categorySlug: "minerals",
        description: "Industrial mineral sourcing and supplier coordination for international buyers.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability and specifications",
        image: "/images/products/industrial-minerals.jpg",
      },
      {
        id: "natural-stone",
        name: "Natural Stone",
        category: "Minerals & Raw Materials",
        categorySlug: "minerals",
        description: "Indian natural stone products sourced from select suppliers.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability and specifications",
        image: "/images/products/natural-stone.jpg",
      },
      {
        id: "raw-materials",
        name: "Raw Materials",
        category: "Minerals & Raw Materials",
        categorySlug: "minerals",
        description: "Raw material sourcing based on buyer specifications and requirements.",
        origin: "India",
        packaging: "Available on request",
        availability: "Subject to availability and specifications",
        image: "/images/products/raw-materials.jpg",
      },
    ],
  },
  {
    id: "custom-sourcing",
    number: "04",
    title: "Custom Sourcing",
    slug: "custom-sourcing",
    description:
      "Tailored sourcing solutions for specific product requirements, OEM and private label needs from Indian suppliers.",
    image: "/images/custom-sourcing.jpg",
    products: [],
  },
];

export const featuredProducts = [
  "Fresh Produce",
  "Grains",
  "Pulses",
  "Spices",
  "Commodities",
  "Minerals",
];
