import { MetadataRoute } from "next";
import { articles } from "@/data/insights";
import { productCategories, agriculturalProducts } from "@/data/products";

const BASE_URL = "https://maliinternational.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/products",
    "/products/agriculture",
    "/market-rates",
    "/services",
    "/industries",
    "/global-reach",
    "/quality",
    "/sustainability",
    "/insights",
    "/contact",
    "/request-quote",
    "/privacy-policy",
    "/terms",
  ];

  const categoryPages = productCategories.map((cat) => `/products/${cat.slug}`);

  const agriProductPages = agriculturalProducts.map(
    (product) => `/products/agriculture/${product.slug}`
  );

  const articlePages = articles.map((article) => `/insights/${article.slug}`);

  const allPages = Array.from(
    new Set([...staticPages, ...categoryPages, ...agriProductPages, ...articlePages])
  );

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === "" || path === "/market-rates" ? "daily" : path.startsWith("/products") ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1.0
        : path === "/market-rates" || path === "/products/agriculture"
        ? 0.9
        : path.startsWith("/products")
        ? 0.8
        : 0.6,
  }));
}
