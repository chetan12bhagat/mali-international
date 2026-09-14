import { Metadata } from "next";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = generatePageMetadata("quality");

export default function QualityPage() {
  const qualitySteps = [
    {
      number: "01",
      title: "Product Specifications",
      description:
        "We work with buyers to document clear product specifications, quality standards and testing requirements before sourcing begins.",
    },
    {
      number: "02",
      title: "Supplier Coordination",
      description:
        "Communicating quality expectations to suppliers and verifying their capability to meet specified standards.",
    },
    {
      number: "03",
      title: "Packaging Requirements",
      description:
        "Coordinating packaging specifications that meet international shipping standards and buyer requirements.",
    },
    {
      number: "04",
      title: "Documentation",
      description:
        "Supporting the preparation of quality certificates, test reports and compliance documentation.",
    },
    {
      number: "05",
      title: "Pre-Shipment Coordination",
      description:
        "Coordinating pre-shipment checks and verification to ensure products meet agreed specifications before dispatch.",
    },
    {
      number: "06",
      title: "Optional Third-Party Inspection",
      description:
        "Facilitating independent third-party quality inspections when required by buyers for additional assurance.",
    },
  ];

  return (
    <>
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Quality & Process" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">Quality</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">Quality & Process</h1>
            <p className="text-xl text-muted max-w-[620px] leading-relaxed">
              Quality coordination is integrated throughout our sourcing process — from initial
              specifications to final shipment.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <AnimatedSection>
            <div className="mb-12 md:mb-16 max-w-2xl">
              <h2 className="text-dark-text mb-6">Quality is part of the process.</h2>
              <p className="text-muted leading-relaxed">
                We believe quality should not be an afterthought. Our process integrates quality
                coordination at every stage, ensuring products meet international buyer expectations.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-0">
            {qualitySteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.06}>
                <div className="py-8 border-t border-light-gray">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <span className="text-xs font-semibold text-gold tracking-[0.1em]">
                        {step.number}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="text-lg font-semibold text-dark-text">{step.title}</h3>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-muted leading-relaxed">{step.description}</p>
                    </div>
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
              <h2 className="text-white mb-6">Quality matters to your business.</h2>
              <p className="text-white/50 mb-8 text-lg">
                Discuss your quality requirements with us.
              </p>
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
