import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { company } from "@/data/company";
import { footerNavigation } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white" role="contentinfo">
      <Container>
        {/* Top Section */}
        <div className="pt-[clamp(60px,8vw,100px)] pb-12 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" aria-label="Mali International Home" className="flex items-center gap-3">
                <Image
                  src="/logos/main-logo.jpeg"
                  alt="Mali International"
                  width={64}
                  height={64}
                  className="h-[52px] w-auto object-contain rounded-full bg-white p-0.5 shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-[0.08em] text-white uppercase font-sans leading-none">
                    Mali International
                  </span>
                  <span className="text-[10px] tracking-[0.18em] text-gold uppercase font-semibold mt-1 leading-none">
                    Global Trade &amp; Sourcing
                  </span>
                </div>
              </Link>
              <p className="mt-5 text-[0.9375rem] text-white/50 leading-relaxed max-w-[320px]">
                {company.tagline}
              </p>
            </div>

            {/* Links */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                  Company
                </h4>
                <ul className="space-y-2.5">
                  {footerNavigation.company.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[0.875rem] text-white/60 hover:text-gold transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                  Products
                </h4>
                <ul className="space-y-2.5">
                  {footerNavigation.products.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[0.875rem] text-white/60 hover:text-gold transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                  Services
                </h4>
                <ul className="space-y-2.5">
                  {footerNavigation.services.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[0.875rem] text-white/60 hover:text-gold transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                  Resources
                </h4>
                <ul className="space-y-2.5">
                  {footerNavigation.resources.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[0.875rem] text-white/60 hover:text-gold transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {currentYear} {company.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
