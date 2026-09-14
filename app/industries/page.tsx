import { Metadata } from "next";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { industries } from "@/data/industries";

export const metadata: Metadata = generatePageMetadata("industries");

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">Industries</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">Industries We Serve</h1>
            <p className="text-xl text-muted max-w-[620px] leading-relaxed">
              Supporting businesses across multiple industry verticals with India sourcing solutions.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {industries.map((industry, i) => (
              <AnimatedSection key={industry.id} delay={i * 0.06}>
                <div className="bg-off-white hover:bg-light-gray transition-colors duration-300 p-8 md:p-10">
                  <span className="text-xs font-semibold text-gold tracking-[0.1em] mb-3 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-dark-text mb-3">{industry.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{industry.description}</p>
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
              <h2 className="text-white mb-6">Your industry, our sourcing.</h2>
              <p className="text-white/50 mb-8 text-lg">
                Whatever your industry, we can help you source quality products from India.
              </p>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to Us
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
