import { Metadata } from "next";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = generatePageMetadata("customSourcing");

export default function CustomSourcingPage() {
  const capabilities = [
    "OEM Manufacturing",
    "Private Label Products",
    "Custom Specifications",
    "Bulk Procurement",
    "Sample Development",
    "Packaging Customization",
  ];

  return (
    <>
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Custom Sourcing" },
            ]}
          />
          <AnimatedSection>
            <SectionLabel className="mb-4">Custom Sourcing</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">Custom Sourcing</h1>
            <p className="text-xl text-muted max-w-[620px] leading-relaxed">
              Tailored sourcing solutions for specific product requirements, OEM and private label
              needs from Indian suppliers.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-dark-text mb-6">Your requirements, our sourcing.</h2>
                <p className="text-muted leading-relaxed mb-6">
                  Every business has unique product requirements. Our custom sourcing service is
                  designed to match your specific needs with suitable Indian manufacturers and
                  suppliers.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  Whether you need custom formulations, specific packaging, private label
                  production or unique product specifications, we work to find the right sourcing
                  solution from India.
                </p>
                <Button href="/request-quote" size="lg">
                  Submit Your Requirement
                </Button>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-text mb-6">Capabilities</h3>
                <div className="grid grid-cols-1 gap-1">
                  {capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-off-white"
                    >
                      <span className="text-xs font-semibold text-gold tracking-[0.1em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-dark-text">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
