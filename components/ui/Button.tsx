import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  onClick,
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 font-medium transition-all duration-200 rounded-[3px] group";

  const sizeClasses = {
    default: "px-6 py-3 text-[0.875rem]",
    lg: "px-8 py-3.5 text-[0.9375rem]",
  };

  const variantClasses = {
    primary: "bg-navy text-white hover:bg-navy-dark",
    secondary: "bg-gold text-white hover:bg-gold-light",
    outline: "border border-navy text-navy hover:bg-navy hover:text-white",
    ghost: "text-navy hover:text-gold",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  const content = (
    <>
      {children}
      {variant !== "ghost" && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
