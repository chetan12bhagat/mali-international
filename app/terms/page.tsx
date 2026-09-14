import { Metadata } from "next";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { company } from "@/data/company";

export const metadata: Metadata = generatePageMetadata("terms");

export default function TermsPage() {
  return (
    <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
        <SectionLabel className="mb-4">Legal</SectionLabel>
        <h1 className="text-dark-text mb-8 max-w-3xl">Terms & Conditions</h1>

        <div className="max-w-3xl prose">
          <p>
            These Terms & Conditions govern your use of the {company.name} website and services.
            By accessing our website, you agree to these terms.
          </p>

          <h2>Use of Website</h2>
          <p>
            This website is provided for informational purposes. The content is intended for
            businesses seeking sourcing and export services from India.
          </p>

          <h2>Product Information</h2>
          <p>
            Product availability, specifications and pricing are subject to change. All product
            information on this website is indicative and subject to current availability and buyer
            requirements. Contact us for the latest information.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content, logos, images and materials on this website are the property of{" "}
            {company.name} and are protected by intellectual property laws. You may not
            reproduce, distribute or use any content without our written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            {company.name} makes no warranties regarding the accuracy or completeness of website
            content. We shall not be liable for any damages arising from the use of this website.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any
            disputes shall be subject to the jurisdiction of courts in India.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms & Conditions, please contact us through our website.
          </p>

          <p className="text-sm text-muted mt-8">
            Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
          </p>
        </div>
      </Container>
    </section>
  );
}
