import { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { values } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata("about");

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">About Us</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">About Mali International</h1>
            <p className="text-xl text-muted max-w-[600px] leading-relaxed">
              Connecting trusted Indian supply with global business.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionLabel className="mb-4">Our Story</SectionLabel>
                <Image
                  src="/logos/mali-globe.jpeg"
                  alt="Mali International Globe"
                  width={200}
                  height={200}
                  className="mt-8 w-[160px] h-auto opacity-30"
                />
              </div>
              <div className="lg:col-span-7">
                <h2 className="text-dark-text mb-6">
                  A sourcing partner built on trust and practical support.
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Mali International was established to bridge the gap between India&apos;s diverse supplier
                  ecosystem and international businesses seeking reliable sourcing partners. We understand
                  the challenges that come with international procurement — finding the right suppliers,
                  ensuring quality consistency, managing logistics and navigating documentation.
                </p>
                <p className="text-muted leading-relaxed">
                  Our approach is straightforward: we work closely with our clients to understand their
                  requirements, identify suitable suppliers across India, coordinate procurement processes
                  and support the journey from sourcing to shipment.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-[clamp(60px,10vw,150px)] bg-off-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <AnimatedSection>
              <div>
                <SectionLabel className="mb-4">Our Mission</SectionLabel>
                <h3 className="text-dark-text mb-4">
                  Making India sourcing accessible and reliable for international businesses.
                </h3>
                <p className="text-muted leading-relaxed">
                  We aim to be the trusted link between Indian suppliers and global buyers — providing
                  practical sourcing support that helps businesses access quality products with confidence.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <SectionLabel className="mb-4">Our Vision</SectionLabel>
                <h3 className="text-dark-text mb-4">
                  To be recognised as a dependable India sourcing partner by businesses worldwide.
                </h3>
                <p className="text-muted leading-relaxed">
                  We envision a future where international businesses can confidently source from India,
                  supported by transparent communication, quality-focused processes and long-term
                  partnerships.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <AnimatedSection>
            <div className="mb-12 md:mb-16">
              <SectionLabel className="mb-4">Our Values</SectionLabel>
              <h2 className="text-dark-text">What guides us.</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div>
                  <span className="block w-8 h-[2px] bg-gold mb-4" />
                  <h4 className="text-base font-semibold text-dark-text mb-2">{value.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                </div>
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
              <h2 className="text-white mb-6">Work with us.</h2>
              <p className="text-white/50 mb-8 text-lg">
                Let&apos;s discuss how Mali International can support your sourcing needs from India.
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
