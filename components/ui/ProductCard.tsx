import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  category?: string;
  description?: string;
  href: string;
  number?: string;
  image?: string;
}

export default function ProductCard({
  title,
  category,
  description,
  href,
  number,
  image,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group block relative overflow-hidden bg-off-white hover:bg-light-gray transition-colors duration-300"
    >
      {/* Image */}
      {image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-light-gray">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-navy/10" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {number && (
          <span className="text-xs font-semibold text-gold tracking-[0.1em] mb-2 block">
            {number}
          </span>
        )}
        <h3 className="text-lg font-semibold text-dark-text group-hover:text-navy transition-colors duration-200">
          {title}
        </h3>
        {category && (
          <p className="text-xs text-muted mt-1 uppercase tracking-wider">{category}</p>
        )}
        {description && (
          <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-2">{description}</p>
        )}

        {/* Bottom */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-light-gray">
          <span className="text-sm font-medium text-navy">View Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-navy transition-transform duration-200 group-hover:translate-x-[3px]" />
          <span className="ml-auto block w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-8" />
        </div>
      </div>
    </Link>
  );
}
