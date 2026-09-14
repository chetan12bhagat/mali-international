"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { productCategories, featuredProducts } from "@/data/products";
import { services, processSteps } from "@/data/services";
import { globalMarkets } from "@/lib/constants";

/* ============================================
   HERO
   ============================================ */
function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 bg-off-white overflow-hidden">
      {/* Subtle gold accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <AnimatedSection>
            <SectionLabel className="mb-6">Mali International</SectionLabel>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-dark-text mb-6 leading-[1.08]">
              Connecting Indian Supply{" "}
              <span className="block">With Global Demand.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-muted max-w-[560px] mb-10 leading-relaxed">
              Mali International helps international businesses source quality
              products from India through reliable supplier coordination,
              procurement support and export solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Button href="/products" size="lg">
                Explore Products
              </Button>
              <Button href="/request-quote" variant="outline" size="lg">
                Request a Quote
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      {/* Decorative gold swoosh */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[60%] opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
          <path
            d="M50,200 Q150,50 350,180 Q250,320 50,200"
            fill="none"
            stroke="#C99A3A"
            strokeWidth="1.5"
          />
          <path
            d="M80,220 Q180,80 370,200 Q260,340 80,220"
            fill="none"
            stroke="#C99A3A"
            strokeWidth="0.8"
          />
        </svg>
      </div>
    </section>
  );
}

/* ============================================
   TRUST STRIP
   ============================================ */
function TrustStrip() {
  const items = [
    "India-Based Sourcing",
    "Quality-Focused",
    "Global Trade",
    "Reliable Coordination",
  ];

  return (
    <section className="border-b border-light-gray bg-white">
      <Container>
        <div className="py-6 md:py-8 flex flex-wrap md:flex-nowrap items-center justify-between gap-y-4 gap-x-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 basis-[calc(50%-1rem)] md:basis-auto"
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              <span className="text-sm font-medium text-dark-text tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============================================
   ABOUT INTRO
   ============================================ */
function AboutIntro() {
  return (
    <section className="py-[clamp(60px,10vw,150px)] bg-white">
      <Container>
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <SectionLabel className="mb-4">About Mali International</SectionLabel>
              <div className="mt-8 hidden lg:block">
                <Image
                  src="/logos/mali-globe.jpeg"
                  alt="Mali International Globe"
                  width={120}
                  height={120}
                  className="w-[100px] h-auto opacity-20"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-dark-text mb-6">
                Building reliable connections between Indian suppliers and global
                businesses.
              </h2>
              <p className="text-muted leading-relaxed max-w-[640px] mb-8">
                Mali International works with businesses seeking dependable
                sourcing opportunities from India. We support product
                identification, supplier coordination, procurement, quality
                requirements and export processes.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-navy font-medium group"
              >
                More About Us
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ============================================
   PRODUCTS
   ============================================ */
function Products() {
  return (
    <section className="py-[clamp(60px,10vw,150px)] bg-off-white">
      <Container>
        <AnimatedSection>
          <div className="mb-12 md:mb-16">
            <SectionLabel className="mb-4">What We Source</SectionLabel>
            <h2 className="text-dark-text">Products We Source</h2>
            <p className="text-muted mt-4 max-w-[480px]">
              Explore sourcing opportunities across agriculture, commodities,
              minerals and custom requirements.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {productCategories.map((cat, i) => (
            <AnimatedSection key={cat.id} delay={i * 0.1}>
              <Link
                href={`/products/${cat.slug}`}
                className="group block relative overflow-hidden bg-white hover:bg-light-gray transition-colors duration-300 p-8 md:p-10"
              >
                <span className="text-xs font-semibold text-gold tracking-[0.1em] mb-3 block">
                  {cat.number}
                </span>
                <h3 className="text-xl font-semibold text-dark-text group-hover:text-navy transition-colors duration-200 mb-3">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-6">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-navy">Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 text-navy transition-transform duration-200 group-hover:translate-x-[3px]" />
                  <span className="ml-auto block w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-8" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============================================
   FEATURED PRODUCT STRIP
   ============================================ */
function FeaturedStrip() {
  return (
    <section className="py-10 md:py-14 bg-white border-y border-light-gray overflow-hidden">
      <Container>
        <div className="flex items-center gap-8 md:gap-12 overflow-x-auto scrollbar-hide pb-2">
          {featuredProducts.map((product, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span className="block w-2 h-2 rounded-full bg-gold/60" />
              <span className="text-sm md:text-base font-medium text-dark-text whitespace-nowrap">
                {product}
              </span>
            </div>
          ))}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy shrink-0 group"
          >
            View Product Categories
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-[3px]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ============================================
   SERVICES
   ============================================ */
function Services() {
  const displayServices = services.slice(0, 6);

  return (
    <section className="py-[clamp(60px,10vw,150px)] bg-white">
      <Container>
        <AnimatedSection>
          <div className="mb-12 md:mb-16">
            <SectionLabel className="mb-4">Our Services</SectionLabel>
            <h2 className="text-dark-text">From sourcing to shipment.</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {displayServices.map((service, i) => (
            <AnimatedSection key={service.number} delay={i * 0.05}>
              <div className="py-6 md:py-8 border-t border-light-gray group">
                <div className="flex gap-4 md:gap-6">
                  <span className="text-xs font-semibold text-gold tracking-[0.1em] pt-1 shrink-0">
                    {service.number}
                  </span>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-dark-text mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-navy font-medium group"
            >
              All Services
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ============================================
   HOW WE WORK
   ============================================ */
function HowWeWork() {
  return (
    <section className="py-[clamp(60px,10vw,150px)] bg-off-white">
      <Container>
        <AnimatedSection>
          <div className="mb-12 md:mb-16">
            <SectionLabel className="mb-4">Process</SectionLabel>
            <h2 className="text-dark-text">A straightforward sourcing process.</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.08}>
              <div className="relative">
                {/* Connecting line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-4 left-full w-full h-[1px] bg-light-gray" />
                )}
                <span className="text-2xl md:text-3xl font-bold text-gold/20 block mb-3">
                  {step.number}
                </span>
                <h4 className="text-base font-semibold text-dark-text mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============================================
   GLOBAL REACH
   ============================================ */
function GlobalReach() {
  return (
    <section className="py-[clamp(60px,10vw,150px)] bg-[#041B36] text-white relative overflow-hidden">
      {/* Subtle world map */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1200 600" className="w-full h-full" aria-hidden="true">
          <ellipse cx="600" cy="300" rx="500" ry="250" fill="none" stroke="white" strokeWidth="0.5" />
          <ellipse cx="600" cy="300" rx="350" ry="250" fill="none" stroke="white" strokeWidth="0.3" />
          <ellipse cx="600" cy="300" rx="500" ry="120" fill="none" stroke="white" strokeWidth="0.3" />
          <line x1="100" y1="300" x2="1100" y2="300" stroke="white" strokeWidth="0.3" />
          <line x1="600" y1="50" x2="600" y2="550" stroke="white" strokeWidth="0.3" />
        </svg>
      </div>

      <Container className="relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl mb-12 md:mb-16">
            <SectionLabel light className="mb-4">
              Global Reach
            </SectionLabel>
            <h2 className="text-white mb-6">India to the world.</h2>
            <p className="text-white/50 text-lg leading-relaxed">
              We connect international buyers with sourcing opportunities across
              India&apos;s diverse supplier and production ecosystem.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {globalMarkets.map((market, i) => (
            <AnimatedSection key={market.name} delay={i * 0.06}>
              <div className="py-4 border-t border-white/10">
                <h4 className="text-base md:text-lg font-semibold text-white mb-1">
                  {market.name}
                </h4>
                <p className="text-sm text-white/40">{market.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-10">
            <Link
              href="/global-reach"
              className="inline-flex items-center gap-2 text-gold font-medium group"
            >
              Explore Our Global Reach
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ============================================
   WHY MALI
   ============================================ */
function WhyMali() {
  const reasons = [
    {
      number: "01",
      title: "Reliable Sourcing",
      description:
        "Consistent product identification and supplier coordination you can depend on.",
    },
    {
      number: "02",
      title: "Transparent Communication",
      description:
        "Clear, honest updates throughout the sourcing and procurement process.",
    },
    {
      number: "03",
      title: "Quality-Focused Procurement",
      description:
        "Attention to product specifications, packaging and quality requirements.",
    },
    {
      number: "04",
      title: "Long-Term Partnerships",
      description:
        "Building lasting business relationships based on trust and shared success.",
    },
  ];

  return (
    <section className="py-[clamp(60px,10vw,150px)] bg-white">
      <Container>
        <AnimatedSection>
          <div className="mb-12 md:mb-16">
            <SectionLabel className="mb-4">Why Us</SectionLabel>
            <h2 className="text-dark-text">Why Mali International?</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.number} delay={i * 0.1}>
              <div>
                <span className="text-xs font-semibold text-gold tracking-[0.1em] mb-3 block">
                  {reason.number}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-dark-text mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted leading-relaxed">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============================================
   QUALITY SECTION
   ============================================ */
function Quality() {
  const qualityItems = [
    "Product Specifications",
    "Supplier Coordination",
    "Packaging Requirements",
    "Pre-Shipment Checks",
  ];

  return (
    <section className="py-[clamp(60px,10vw,150px)] bg-off-white">
      <Container>
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel className="mb-4">Quality</SectionLabel>
              <h2 className="text-dark-text mb-6">
                Quality is part of the process.
              </h2>
              <p className="text-muted leading-relaxed mb-8 max-w-[480px]">
                We integrate quality coordination throughout the sourcing
                journey — from initial product specifications to pre-shipment
                verification.
              </p>
              <Button href="/quality" variant="outline">
                Explore Our Quality Approach
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {qualityItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 border border-light-gray"
                >
                  <span className="text-xs font-semibold text-gold tracking-[0.1em] block mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-dark-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ============================================
   FINAL CTA
   ============================================ */
function FinalCTA() {
  return (
    <section className="py-[clamp(80px,12vw,180px)] bg-[#082B57] text-white">
      <Container>
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white mb-6">
              Looking for a sourcing partner in India?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-[520px] mx-auto">
              Tell us what you need. We&apos;ll help you explore the right
              sourcing path.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/request-quote" variant="secondary" size="lg">
                Request a Quote
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white text-[0.9375rem] font-medium rounded-[3px] hover:bg-white/10 transition-colors duration-200 group"
              >
                Contact Us
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ============================================
   HOMEPAGE
   ============================================ */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutIntro />
      <Products />
      <FeaturedStrip />
      <Services />
      <HowWeWork />
      <GlobalReach />
      <WhyMali />
      <Quality />
      <FinalCTA />
    </>
  );
}
