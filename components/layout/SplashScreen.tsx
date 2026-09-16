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
      sessionStorage.setItem("mali_splash_fullscreen_v1", "true");
      document.body.style.overflow = "";
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);

    // Check if user already saw this splash video in current session
    const hasSeen = sessionStorage.getItem("mali_splash_fullscreen_v1");
    if (hasSeen) {
      setShowSplash(false);
      return;
    }

    // Lock page scrolling during splash playback
    document.body.style.overflow = "hidden";

    // Play video with sound always on
    const startPlayback = async () => {
      const v = mainVideoRef.current;
      if (!v) return;

      // Unmuted by default (Sound always on)
      v.muted = false;

      try {
        await v.play();
      } catch {
        // If the browser strictly restricts unmuted autoplay without prior user gesture,
        // start playback muted and unmute immediately on the user's first touch/click
        v.muted = true;
        try {
          await v.play();
        } catch {
          // Playback error fallback
        }

        const unmuteOnInteraction = () => {
          if (mainVideoRef.current) {
            mainVideoRef.current.muted = false;
          }
          window.removeEventListener("click", unmuteOnInteraction);
          window.removeEventListener("touchstart", unmuteOnInteraction);
        };
        window.addEventListener("click", unmuteOnInteraction, { once: true });
        window.addEventListener("touchstart", unmuteOnInteraction, { once: true });
      }
    };

    startPlayback();

    // Safety fallback: auto-dismiss after 12 seconds max if video playback stalls
    const safetyTimer = setTimeout(() => {
      dismissSplash();
    }, 12000);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = "";
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
            className="fixed inset-0 z-[99999] w-screen h-screen overflow-hidden select-none bg-black cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(8px)",
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }}
            onClick={dismissSplash}
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
              onClick={(e) => {
                e.stopPropagation();
                dismissSplash();
              }}
              className="absolute top-5 right-5 sm:top-7 sm:right-8 z-50 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-semibold text-white/95 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-[#E6CA85] shadow-lg transition-all duration-200 cursor-pointer"
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
              playsInline
              preload="auto"
              disablePictureInPicture
              controls={false}
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


