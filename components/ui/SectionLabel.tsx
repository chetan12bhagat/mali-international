interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`block w-8 h-[2px] ${light ? "bg-gold-light" : "bg-gold"}`} />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? "text-white/60" : "text-muted"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
