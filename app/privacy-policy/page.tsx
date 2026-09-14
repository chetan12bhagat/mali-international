import { Metadata } from "next";
import { generatePageMetadata } from "@/data/seo";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { company } from "@/data/company";

export const metadata: Metadata = generatePageMetadata("privacyPolicy");

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-[clamp(60px,10vw,120px)] bg-off-white">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <SectionLabel className="mb-4">Legal</SectionLabel>
        <h1 className="text-dark-text mb-8 max-w-3xl">Privacy Policy</h1>

        <div className="max-w-3xl prose">
          <p>
            {company.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting the
            privacy of visitors to our website. This Privacy Policy explains how we collect, use and
            protect your information.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you contact
            us through our website forms, including your name, email address, company name, phone
            number, country and product requirements.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and requests</li>
            <li>Communicate with you about products and services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade or otherwise transfer your personal information to third parties
            without your consent, except as necessary to provide our services or as required by law.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However,
            no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can control cookie
            settings through your browser preferences.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us through our website
            contact form.
          </p>

          <p className="text-sm text-muted mt-8">
            Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
          </p>
        </div>
      </Container>
    </section>
  );
}
