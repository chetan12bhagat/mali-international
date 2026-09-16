import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { productCategories } from "@/data/products";

export const metadata: Metadata = generatePageMetadata("foodCommodities");

export default function FoodCommoditiesPage() {
  const category = productCategories.find((c) => c.slug === "food-commodities")!;

  return (
    <>
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Food & Commodities" },
            ]}
          />
          <AnimatedSection>
            <SectionLabel className="mb-4">Food & Commodities</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">Food & Commodities</h1>
            <p className="text-xl text-muted max-w-[620px] leading-relaxed">
              {category.description}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {category.products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.1}>
                <div className="bg-off-white hover:bg-light-gray transition-colors duration-300 p-8 group">
                  <h3 className="text-lg font-semibold text-dark-text mb-2">{product.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{product.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-t border-light-gray pt-2">
                      <span className="text-muted">Origin</span>
                      <span className="text-dark-text font-medium">{product.origin}</span>
                    </div>
                    <div className="flex justify-between border-t border-light-gray pt-2">
                      <span className="text-muted">Availability</span>
                      <span className="text-dark-text font-medium">{product.availability}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-light-gray">
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-navy hover:text-gold transition-colors"
                    >
                      Inquire Now →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,120px)] bg-[#082B57] text-white">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-white mb-6">Looking for food commodities from India?</h2>
              <p className="text-white/50 mb-8 text-lg">
                Share your product requirements and specifications.
              </p>
              <Button href="/contact" variant="secondary" size="lg">
                Inquire Now
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
