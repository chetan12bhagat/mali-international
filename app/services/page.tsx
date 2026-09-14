import { Metadata } from "next";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { services, processSteps } from "@/data/services";

export const metadata: Metadata = generatePageMetadata("services");

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">Services</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">Services</h1>
            <p className="text-xl text-muted max-w-[620px] leading-relaxed">
              Practical support across the sourcing and export journey.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <div className="space-y-0">
            {services.map((service, i) => (
              <AnimatedSection key={service.number} delay={i * 0.04}>
                <div className="py-8 md:py-10 border-t border-light-gray">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <span className="text-xs font-semibold text-gold tracking-[0.1em]">
                        {service.number}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="text-lg font-semibold text-dark-text">{service.title}</h3>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-muted leading-relaxed">{service.details}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-[clamp(60px,10vw,150px)] bg-off-white">
        <Container>
          <AnimatedSection>
            <div className="mb-12 md:mb-16">
              <SectionLabel className="mb-4">Process</SectionLabel>
              <h2 className="text-dark-text">How we work.</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.08}>
                <div className="relative">
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-4 left-full w-full h-[1px] bg-light-gray" />
                  )}
                  <span className="text-2xl md:text-3xl font-bold text-gold/20 block mb-3">
                    {step.number}
                  </span>
                  <h4 className="text-base font-semibold text-dark-text mb-2">{step.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
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
              <h2 className="text-white mb-6">Ready to start sourcing?</h2>
              <p className="text-white/50 mb-8 text-lg">
                Tell us about your requirements and we&apos;ll guide you through the process.
              </p>
              <Button href="/request-quote" variant="secondary" size="lg">
                Get Started
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
