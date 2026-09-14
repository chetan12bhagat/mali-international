import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { productCategories } from "@/data/products";

export const metadata: Metadata = generatePageMetadata("products");

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">Products</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">Products & Sourcing</h1>
            <p className="text-xl text-muted max-w-[620px] leading-relaxed">
              Explore sourcing opportunities across agriculture, commodities, minerals and custom
              requirements.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {productCategories.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={i * 0.1}>
                <Link
                  href={`/products/${cat.slug}`}
                  className="group block bg-off-white hover:bg-light-gray transition-colors duration-300 p-8 md:p-12"
                >
                  <span className="text-xs font-semibold text-gold tracking-[0.1em] mb-4 block">
                    {cat.number}
                  </span>
                  <h2 className="text-2xl font-semibold text-dark-text group-hover:text-navy transition-colors duration-200 mb-4">
                    {cat.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-8">{cat.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-navy">View Products</span>
                    <ArrowRight className="w-4 h-4 text-navy transition-transform duration-200 group-hover:translate-x-[3px]" />
                    <span className="ml-auto block w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-12" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-[clamp(60px,10vw,120px)] bg-[#082B57] text-white">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-white mb-6">Need something specific?</h2>
              <p className="text-white/50 mb-8 text-lg">
                Tell us your requirements and we&apos;ll help you find the right sourcing solution.
              </p>
              <Button href="/request-quote" variant="secondary" size="lg">
                Request a Quote
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
