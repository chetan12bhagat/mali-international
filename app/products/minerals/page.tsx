import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { productCategories } from "@/data/products";

export const metadata: Metadata = generatePageMetadata("minerals");

export default function MineralsPage() {
  const category = productCategories.find((c) => c.slug === "minerals")!;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Minerals & Raw Materials" },
            ]}
          />
          <AnimatedSection>
            <SectionLabel className="mb-4">Minerals</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">Minerals & Raw Materials</h1>
            <p className="text-xl text-muted max-w-[620px] leading-relaxed">
              Sourcing industrial minerals, natural stone and raw materials through supplier
              coordination and buyer requirement matching.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Products */}
      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {category.products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.1}>
                <div className="bg-off-white hover:bg-light-gray transition-colors duration-300 p-8 md:p-10 group">
                  <h3 className="text-lg font-semibold text-dark-text mb-3">{product.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">{product.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-t border-light-gray pt-2">
                      <span className="text-muted">Origin</span>
                      <span className="text-dark-text font-medium">{product.origin}</span>
                    </div>
                    <div className="flex justify-between border-t border-light-gray pt-2">
                      <span className="text-muted">Availability</span>
                      <span className="text-dark-text font-medium text-right max-w-[200px]">
                        {product.availability}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-light-gray">
                    <Link
                      href="/request-quote"
                      className="text-sm font-medium text-navy hover:text-gold transition-colors"
                    >
                      Send Your Specification →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-16 p-8 md:p-12 bg-off-white border border-light-gray">
              <h3 className="text-xl font-semibold text-dark-text mb-3">Custom Mineral Requirements</h3>
              <p className="text-muted leading-relaxed mb-6 max-w-[560px]">
                Have specific mineral or raw material requirements? Share your specifications and we
                will work to identify suitable sourcing options from Indian suppliers.
              </p>
              <Button href="/request-quote">Send Your Specification</Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
