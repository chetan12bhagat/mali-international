import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://maliinternational.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="w-3 h-3 text-muted/40" />}
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-xs text-muted hover:text-navy transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-xs text-dark-text font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
