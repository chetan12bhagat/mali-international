"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const dismissSplash = useCallback(() => {
    setShowSplash(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("mali_splash_video_seen_v1", "true");
      document.body.style.overflow = "";
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);

    // Check if user already saw the splash video in this session
    const hasSeen = sessionStorage.getItem("mali_splash_video_seen_v1");
    if (hasSeen) {
      setShowSplash(false);
      return;
    }

    // Lock page scrolling during splash playback
    document.body.style.overflow = "hidden";

    // Play video programmatically once mounted
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }

    // Safety fallback: dismiss after 8 seconds max if video playback stalls
    const safetyTimer = setTimeout(() => {
      dismissSplash();
    }, 8000);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = "";
    };
  }, [dismissSplash]);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && isMounted && (
          <motion.div
            key="splash-video-screen"
            className="fixed inset-0 z-[99999] w-screen h-screen overflow-hidden select-none cursor-pointer bg-slate-900 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }}
            onClick={dismissSplash}
          >
            {/* Top slim luxury brand loading progress line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-30 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#0A192F]"
                style={{ width: `${Math.max(progress, 3)}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>

            {/* Skip Button */}
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                dismissSplash();
              }}
              className="absolute top-6 right-6 z-30 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-semibold text-white/90 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200"
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

            {/* Full-bleed Edge-to-Edge Splash Video */}
            <video
              ref={videoRef}
              src="/splash.mp4"
              poster="/splash.png"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={dismissSplash}
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover object-center pointer-events-none"
            />
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
