import { Metadata } from "next";
import { generatePageMetadata } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata("requestQuote");

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
