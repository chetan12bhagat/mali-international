import { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = generatePageMetadata("sustainability");

export default function SustainabilityPage() {
  const pillars = [
    {
      title: "Responsible Sourcing",
      description: "Working with suppliers who follow responsible production and labour practices.",
    },
    {
      title: "Farmer Relationships",
      description: "Supporting fair and respectful relationships with farming communities.",
    },
    {
      title: "Efficient Packaging",
      description: "Promoting packaging solutions that minimize waste while protecting product quality.",
    },
    {
      title: "Reduced Waste",
      description: "Encouraging practices that reduce waste throughout the sourcing and supply chain.",
    },
    {
      title: "Long-Term Partnerships",
      description: "Building lasting supplier relationships that support sustainable business growth.",
    },
  ];

  return (
    <>
      <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Responsible Trade" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">Sustainability</SectionLabel>
            <h1 className="text-dark-text mb-6 max-w-3xl">Responsible Trade</h1>
            <p className="text-xl text-muted max-w-[620px] leading-relaxed">
              We believe in trade that respects people, products and the environment.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,150px)] bg-white">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Image
                  src="/logos/mali-globe.jpeg"
                  alt="Mali International - The farmer is the nourisher of the world"
                  width={300}
                  height={300}
                  className="w-[200px] md:w-[260px] h-auto mx-auto lg:mx-0"
                />
                <div className="mt-8 text-center lg:text-left">
                  <p className="text-lg font-semibold text-navy mb-1">
                    कृषकः विश्वस्य पोषकः
                  </p>
                  <p className="text-sm text-muted italic">
                    &ldquo;The farmer is the nourisher of the world.&rdquo;
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <h2 className="text-dark-text mb-6">
                  Trade that creates value for everyone involved.
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  At Mali International, responsible trade is not just a statement — it is how we
                  approach our business. We work to ensure that our sourcing activities contribute
                  positively to the communities and ecosystems we operate within.
                </p>
                <p className="text-muted leading-relaxed">
                  From respecting farmer relationships to promoting efficient packaging and reducing
                  waste, we aim to make trade more sustainable and beneficial for all participants
                  in the supply chain.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,150px)] bg-off-white">
        <Container>
          <AnimatedSection>
            <div className="mb-12 md:mb-16">
              <SectionLabel className="mb-4">Our Approach</SectionLabel>
              <h2 className="text-dark-text">How we practice responsible trade.</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.08}>
                <div>
                  <span className="block w-8 h-[2px] bg-green-accent mb-4" />
                  <h3 className="text-base font-semibold text-dark-text mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
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
              <h2 className="text-white mb-6">Trade responsibly.</h2>
              <p className="text-white/50 mb-8 text-lg">
                Learn more about how we approach responsible sourcing.
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
