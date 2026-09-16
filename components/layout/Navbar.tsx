"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { mainNavigation, mobileNavigation } from "@/data/navigation";
import { company } from "@/data/company";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import Container from "./Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-light-gray shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-white/0"
        }`}
        style={{ height: "80px" }}
      >
        <Container className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2.5 md:gap-3 shrink-0"
            aria-label="Mali International Home"
          >
            <Image
              src="/logos/main-logo.jpeg"
              alt="Mali International"
              width={60}
              height={60}
              className="h-[46px] md:h-[52px] w-auto object-contain rounded-full shadow-xs border border-slate-100"
              priority
            />
            <div className="flex flex-col">
              <span className="text-[0.95rem] md:text-[1.1rem] font-bold tracking-[0.08em] text-navy uppercase font-sans leading-none">
                Mali International
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.16em] text-gold uppercase font-semibold mt-0.5 leading-none">
                Global Trade &amp; Sourcing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-[0.875rem] font-medium tracking-[0.01em] transition-colors duration-200 flex items-center gap-1 ${
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-navy"
                      : scrolled
                      ? "text-dark-text hover:text-navy"
                      : "text-dark-text/80 hover:text-navy"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white border border-light-gray rounded-md shadow-lg py-2 min-w-[220px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-[0.875rem] transition-colors duration-150 ${
                                pathname === child.href
                                  ? "text-navy bg-off-white"
                                  : "text-muted hover:text-navy hover:bg-off-white"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-[0.875rem] font-medium rounded-sm hover:bg-navy-dark transition-colors duration-200 group"
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative z-10 p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            onKeyDown={(e) => handleKeyDown(e, () => setMobileOpen(!mobileOpen))}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-dark-text" />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-dark-text" : "text-dark-text"}`} />
            )}
          </button>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav
              className="flex flex-col pt-24 pb-8 px-6 h-full overflow-y-auto"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1">
                {mobileNavigation.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-3 text-lg font-medium border-b border-light-gray transition-colors ${
                        pathname === item.href ? "text-navy" : "text-dark-text hover:text-navy"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block py-2.5 text-[0.9375rem] border-b border-light-gray/50 transition-colors ${
                              pathname === child.href ? "text-navy" : "text-muted hover:text-navy"
                            }`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-light-gray space-y-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-navy text-white font-medium rounded-sm hover:bg-navy-dark transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Let&apos;s Talk
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-center gap-3 pt-2">
                  {company.social.instagram && (
                    <a
                      href={company.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Mali International on Instagram"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-pink-50 border border-slate-200 hover:border-pink-200 text-slate-700 hover:text-pink-600 flex items-center justify-center transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  )}
                  {company.social.facebook && (
                    <a
                      href={company.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Mali International on Facebook"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 hover:text-blue-600 flex items-center justify-center transition-colors"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
