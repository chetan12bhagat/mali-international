export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const industries: Industry[] = [
  {
    id: "importers",
    title: "Importers",
    description:
      "Supporting international importers with reliable product sourcing and supplier coordination from India.",
    image: "/images/industries/importers.jpg",
  },
  {
    id: "distributors",
    title: "Distributors",
    description:
      "Helping distributors access quality Indian products for their regional and international distribution networks.",
    image: "/images/industries/distributors.jpg",
  },
  {
    id: "wholesalers",
    title: "Wholesalers",
    description:
      "Connecting wholesalers with Indian suppliers for bulk procurement across multiple product categories.",
    image: "/images/industries/wholesalers.jpg",
  },
  {
    id: "retailers",
    title: "Retailers",
    description:
      "Supporting retail businesses with product sourcing and private label solutions from India.",
    image: "/images/industries/retailers.jpg",
  },
  {
    id: "food-businesses",
    title: "Food Businesses",
    description:
      "Sourcing food-grade products, spices and agricultural commodities for food manufacturing and processing companies.",
    image: "/images/industries/food.jpg",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description:
      "Providing sourcing solutions for the hospitality industry including hotels, restaurants and catering businesses.",
    image: "/images/industries/hospitality.jpg",
  },
  {
    id: "industrial-buyers",
    title: "Industrial Buyers",
    description:
      "Sourcing raw materials, minerals and industrial products for manufacturing and industrial applications.",
    image: "/images/industries/industrial.jpg",
  },
  {
    id: "private-label",
    title: "Private Label Businesses",
    description:
      "Supporting private label and white label sourcing from Indian manufacturers and producers.",
    image: "/images/industries/private-label.jpg",
  },
];
