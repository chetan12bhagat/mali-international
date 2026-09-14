"use client";

import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  dark?: boolean;
  wide?: boolean;
  noPadding?: boolean;
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  dark = false,
  wide = false,
  noPadding = false,
}: SectionProps) {
  const bgClass = dark ? "bg-navy-dark text-white" : "";
  const paddingClass = noPadding ? "" : "py-[clamp(60px,10vw,150px)]";

  return (
    <section
      id={id}
      className={`${bgClass} ${paddingClass} ${className}`}
    >
      <Container className={containerClassName} wide={wide}>
        {children}
      </Container>
    </section>
  );
}
