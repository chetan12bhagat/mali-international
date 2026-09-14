import { MetadataRoute } from "next";
import { articles } from "@/data/insights";
import { productCategories } from "@/data/products";

const BASE_URL = "https://maliinternational.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/products",
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

  const productPages = productCategories.map((cat) => `/products/${cat.slug}`);

  const articlePages = articles.map((article) => `/insights/${article.slug}`);

  const allPages = [...staticPages, ...productPages, ...articlePages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") ? 0.8 : 0.6,
  }));
}
