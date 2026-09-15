"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, X, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Product } from "@/data/products";
import AgriProductCard from "./AgriProductCard";

interface ProductSearchFilterProps {
  products: Product[];
  initialCategory?: string;
}

const CATEGORIES = [
  "All",
  "Vegetables",
  "Fruits",
  "Fresh Produce",
  "Spices",
  "Coconut",
] as const;

type SortOption = "featured" | "name-asc" | "name-desc" | "rate-asc" | "rate-desc";

export default function ProductSearchFilter({
  products,
  initialCategory = "All",
}: ProductSearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  // Keep synced if initialCategory changes via URL query
  useEffect(() => {
    if (initialCategory && initialCategory !== selectedCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Filter and Sort Pipeline
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category matching
        const matchesCategory =
          selectedCategory === "All" ||
          product.category.toLowerCase().includes(selectedCategory.toLowerCase());

        // Search text matching across name, variant, altName, location, category
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          product.name.toLowerCase().includes(q) ||
          (product.variant && product.variant.toLowerCase().includes(q)) ||
          (product.altName && product.altName.toLowerCase().includes(q)) ||
          product.category.toLowerCase().includes(q) ||
          (product.location && product.location.toLowerCase().includes(q)) ||
          (product.destination && product.destination.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "name-asc":
            return a.name.localeCompare(b.name);
          case "name-desc":
            return b.name.localeCompare(a.name);
          case "rate-asc":
            // Safe comparison: compare rate numbers
            return (a.rate || 0) - (b.rate || 0);
          case "rate-desc":
            return (b.rate || 0) - (a.rate || 0);
          default:
            return 0; // maintain default curated order
        }
      });
  }, [products, searchQuery, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("featured");
  };

  return (
    <div>
      {/* Controls Bar */}
      <div className="bg-white border border-light-gray rounded-[4px] p-4 md:p-5 mb-8 shadow-xs">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chilli, onion, banana, pomegranate..."
              className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 text-sm text-dark-text rounded-[3px] outline-none focus:bg-white focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-xs font-medium text-slate-500 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 py-2 px-3 rounded-[3px] outline-none focus:border-navy cursor-pointer"
            >
              <option value="featured">Featured Sequence</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="rate-asc">Lowest Indicative Rate</option>
              <option value="rate-desc">Highest Indicative Rate</option>
            </select>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-hide pb-1">
          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 mr-1.5 shrink-0 hidden sm:block" />
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-navy text-white shadow-xs"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-navy"
                }`}
              >
                {cat}
              </button>
            );
          })}

          {(selectedCategory !== "All" || searchQuery) && (
            <button
              type="button"
              onClick={clearFilters}
              className="ml-auto text-xs text-gold hover:underline font-medium whitespace-nowrap pl-2"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <p className="text-xs tracking-wider uppercase font-semibold text-slate-500">
          Showing <span className="text-navy font-bold">{filteredProducts.length}</span>{" "}
          {filteredProducts.length === 1 ? "Product" : "Products"}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>

        <span className="text-[11px] text-slate-400 italic hidden sm:inline">
          Rates valid for 24h · Subject to final confirmation
        </span>
      </div>

      {/* Product Grid: 4 cols desktop, 2 cols tablet, 1 col mobile */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <AgriProductCard key={product.id} product={product} priority={index < 4} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-light-gray rounded-[4px] p-12 text-center max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-dark-text mb-2">No products found</h3>
          <p className="text-sm text-muted mb-6">
            We couldn&apos;t find any agricultural commodities matching your current filters.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="px-5 py-2 text-xs font-semibold text-white bg-navy hover:bg-navy-dark rounded-[3px] transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
