"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const dismissSplash = useCallback(() => {
    setShowSplash(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("mali_splash_logo_v1", "true");
      document.body.style.overflow = "";
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);

    // Check if user already saw this splash in current session
    const hasSeen = sessionStorage.getItem("mali_splash_logo_v1");
    if (hasSeen) {
      setShowSplash(false);
      return;
    }

    // Lock page scrolling during splash screen
    document.body.style.overflow = "hidden";

    // Auto-dismiss after 2.3 seconds
    const timer = setTimeout(() => {
      dismissSplash();
    }, 2300);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [dismissSplash]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && isMounted && (
          <motion.div
            key="splash-logo-screen"
            className="fixed inset-0 z-[99999] w-screen h-screen overflow-hidden select-none cursor-pointer flex flex-col items-center justify-center bg-gradient-to-b from-[#FAFBFD] via-[#F4F6F9] to-[#EDF1F6]"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.015,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            onClick={dismissSplash}
          >
            {/* Ambient background soft light glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />

            {/* Skip Button */}
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                dismissSplash();
              }}
              className="absolute top-6 right-6 z-30 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-semibold text-slate-600 hover:text-navy bg-white/80 hover:bg-white backdrop-blur-md border border-slate-200/80 shadow-xs transition-all duration-200"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              aria-label="Skip splash screen"
            >
              Skip
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Main Logo & Brand Presentation */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md">
              {/* Emblem with subtle animated glow ring */}
              <motion.div
                className="relative mb-6"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-2 bg-white shadow-[0_12px_40px_rgba(10,25,47,0.08)] border border-slate-100 flex items-center justify-center">
                  <Image
                    src="/logos/main-logo.jpeg"
                    alt="Mali International"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain rounded-full"
                    priority
                    quality={100}
                  />
                </div>
              </motion.div>

              {/* Title Typography */}
              <motion.h1
                className="text-2xl md:text-3xl font-bold tracking-[0.18em] text-navy uppercase font-sans mb-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                Mali International
              </motion.h1>

              {/* Golden accent line */}
              <motion.div
                className="w-16 h-[2.5px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-3"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 64, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              />

              {/* Tagline */}
              <motion.p
                className="text-xs md:text-sm tracking-[0.22em] text-slate-500 uppercase font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                Global Trade · Trusted Partnerships
              </motion.p>
            </div>

            {/* Bottom Progress Line */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 md:w-56 flex flex-col items-center gap-2 pointer-events-none">
              <div className="w-full h-[2.5px] bg-slate-200/80 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#0A192F] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.1, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Content */}
      <div className="min-h-screen flex flex-col">
        {children}
      </div>
    </>
  );
}
