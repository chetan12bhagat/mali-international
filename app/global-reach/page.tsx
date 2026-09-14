import { Metadata } from "next";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { globalMarkets } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata("globalReach");

export default function GlobalReachPage() {
  return (
    <>
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Global Reach" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">Global Reach</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">India to Global Markets</h1>
            <p className="text-xl text-muted max-w-[620px] leading-relaxed">
              Connecting Indian supply with international buyers across key global markets.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-[clamp(60px,10vw,150px)] bg-[#041B36] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 1200 600" className="w-full h-full" aria-hidden="true">
            <ellipse cx="600" cy="300" rx="500" ry="250" fill="none" stroke="white" strokeWidth="0.8" />
            <ellipse cx="600" cy="300" rx="350" ry="250" fill="none" stroke="white" strokeWidth="0.4" />
            <ellipse cx="600" cy="300" rx="200" ry="250" fill="none" stroke="white" strokeWidth="0.3" />
            <ellipse cx="600" cy="300" rx="500" ry="120" fill="none" stroke="white" strokeWidth="0.3" />
            <ellipse cx="600" cy="300" rx="500" ry="50" fill="none" stroke="white" strokeWidth="0.2" />
            <line x1="100" y1="300" x2="1100" y2="300" stroke="white" strokeWidth="0.3" />
            <line x1="600" y1="50" x2="600" y2="550" stroke="white" strokeWidth="0.3" />
            {/* India dot */}
            <circle cx="720" cy="260" r="6" fill="#C99A3A" opacity="0.8" />
            <circle cx="720" cy="260" r="12" fill="none" stroke="#C99A3A" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </div>

        <Container className="relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-white mb-4">Sourcing from India.</h2>
              <p className="text-white/40 max-w-[500px] mx-auto">
                India serves as our sourcing base, connecting with international buyers across major
                global markets.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {globalMarkets.map((market, i) => (
              <AnimatedSection key={market.name} delay={i * 0.08}>
                <div className="py-6 border-t border-white/10">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {market.name}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">{market.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Sourcing Base */}
      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <SectionLabel className="mb-4">Sourcing Base</SectionLabel>
                <h2 className="text-dark-text mb-6">India — a diverse sourcing ecosystem.</h2>
                <p className="text-muted leading-relaxed mb-6">
                  India&apos;s diverse geography, climate and industrial landscape create a wide range of
                  sourcing opportunities. From agricultural heartlands producing fresh produce and
                  grains to industrial regions with mineral and manufacturing capabilities.
                </p>
                <p className="text-muted leading-relaxed">
                  We work across India&apos;s supplier ecosystem to identify products and partners that
                  match international buyer requirements.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {["Agriculture", "Commodities", "Minerals", "Manufacturing"].map((item, i) => (
                    <div key={i} className="p-6 bg-off-white text-center">
                      <span className="text-sm font-medium text-dark-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,120px)] bg-[#082B57] text-white">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-white mb-6">Interested in sourcing from India?</h2>
              <p className="text-white/50 mb-8 text-lg">
                Let us know your market and product requirements.
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
