"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export default function Container({ children, className = "", wide = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full ${wide ? "max-w-[1400px]" : "max-w-[1280px]"} ${className}`}
      style={{ paddingInline: "clamp(20px, 5vw, 80px)" }}
    >
      {children}
    </div>
  );
}
