"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  const mainVideoRef = useRef<HTMLVideoElement | null>(null);

  const dismissSplash = useCallback(() => {
    setShowSplash(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("mali_splash_seen_active", "true");
      document.body.style.overflow = "";
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined") {
      // If the user reloaded the page (e.g. reviewing changes), allow splash to play again
      const navEntries = performance.getEntriesByType("navigation");
      const isReload =
        navEntries.length > 0 &&
        (navEntries[0] as PerformanceNavigationTiming).type === "reload";

      if (isReload) {
        sessionStorage.removeItem("mali_splash_seen_active");
      }

      // Check if user already saw this splash in this session
      const hasSeen = sessionStorage.getItem("mali_splash_seen_active");
      if (hasSeen && !isReload) {
        setShowSplash(false);
        return;
      }
    }

    // Lock page scrolling during splash playback
    document.body.style.overflow = "hidden";

    // Play video immediately
    const v = mainVideoRef.current;
    if (v) {
      // Start playback (muted in HTML tag guarantees browser autoplay permission)
      v.play()
        .then(() => {
          // Attempt to unmute immediately (sound always on)
          try {
            v.muted = false;
          } catch {
            // If browser blocks unmuted audio without gesture, stay muted until touch
            v.muted = true;
          }
        })
        .catch(() => {
          // Fallback if low power mode or strict policy
          v.muted = true;
          v.play().catch(() => {});
        });
    }

    // Unmute on first user touch, tap, or interaction anywhere on screen
    const enableSoundOnInteraction = () => {
      if (mainVideoRef.current) {
        mainVideoRef.current.muted = false;
      }
      window.removeEventListener("pointerdown", enableSoundOnInteraction);
      window.removeEventListener("touchstart", enableSoundOnInteraction);
      window.removeEventListener("click", enableSoundOnInteraction);
    };

    window.addEventListener("pointerdown", enableSoundOnInteraction, { once: true });
    window.addEventListener("touchstart", enableSoundOnInteraction, { once: true });
    window.addEventListener("click", enableSoundOnInteraction, { once: true });

    // Safety fallback: auto-dismiss after 12 seconds max if video playback stalls
    const safetyTimer = setTimeout(() => {
      dismissSplash();
    }, 12000);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = "";
      window.removeEventListener("pointerdown", enableSoundOnInteraction);
      window.removeEventListener("touchstart", enableSoundOnInteraction);
      window.removeEventListener("click", enableSoundOnInteraction);
    };
  }, [dismissSplash]);

  const handleTimeUpdate = () => {
    if (mainVideoRef.current && mainVideoRef.current.duration) {
      const pct = (mainVideoRef.current.currentTime / mainVideoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && isMounted && (
          <motion.div
            key="splash-video-screen"
            className="fixed inset-0 z-[99999] w-screen h-screen overflow-hidden select-none bg-black"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(6px)",
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            {/* Top luxury gold loading progress line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-40 overflow-hidden pointer-events-none">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C5A059] via-[#E6CA85] to-[#C5A059]"
                style={{ width: `${Math.max(progress, 3)}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>

            {/* Skip Button */}
            <motion.button
              type="button"
              onClick={dismissSplash}
              className="absolute top-5 right-5 sm:top-7 sm:right-8 z-50 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-semibold text-white/95 hover:text-white bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/20 hover:border-[#E6CA85] shadow-lg transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              aria-label="Skip splash screen"
            >
              <span>Skip</span>
              <svg className="w-3.5 h-3.5 text-[#E6CA85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Full Screen Edge-to-Edge Video (Desktop & Mobile Unified) */}
            <video
              ref={mainVideoRef}
              src="/splash.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              controls={false}
              onEnded={dismissSplash}
              onTimeUpdate={handleTimeUpdate}
              onClick={dismissSplash}
              className="w-full h-full object-cover object-center cursor-pointer"
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



