"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const mainVideoRef = useRef<HTMLVideoElement | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  const dismissSplash = useCallback(() => {
    setShowSplash(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("mali_splash_video_v3", "true");
      document.body.style.overflow = "";
    }
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!mainVideoRef.current) return;
    const newMuted = !mainVideoRef.current.muted;
    mainVideoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  useEffect(() => {
    setIsMounted(true);

    // Check if user already saw this splash video in current session
    const hasSeen = sessionStorage.getItem("mali_splash_video_v3");
    if (hasSeen) {
      setShowSplash(false);
      return;
    }

    // Lock page scrolling during splash playback
    document.body.style.overflow = "hidden";

    // Play video programmatically with muted start (essential for mobile iOS Safari & Android Chrome)
    const playMedia = async () => {
      try {
        if (mainVideoRef.current) {
          mainVideoRef.current.defaultMuted = true;
          mainVideoRef.current.muted = true;
          await mainVideoRef.current.play();
          setIsPlaying(true);
        }
      } catch {
        // Autoplay policy or low power mode fallback
      }

      try {
        if (bgVideoRef.current) {
          bgVideoRef.current.defaultMuted = true;
          bgVideoRef.current.muted = true;
          await bgVideoRef.current.play();
        }
      } catch {
        // Ambient background video fallback
      }
    };

    playMedia();

    // Safety fallback: auto-dismiss after 12 seconds max if video playback stalls or fails
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
            className="fixed inset-0 z-[99999] w-screen h-screen overflow-hidden select-none bg-[#060D18] flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(6px)",
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            {/* Top luxury gold loading progress line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-40 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C5A059] via-[#E6CA85] to-[#C5A059]"
                style={{ width: `${Math.max(progress, 3)}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>

            {/* Ambient Background Video (Dual-Layer: fills any screen aspect-ratio on mobile & desktop seamlessly) */}
            <video
              ref={bgVideoRef}
              src="/splash.mp4"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-35 brightness-75 pointer-events-none"
            />

            {/* Vignette & cinematic contrast gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D18] via-transparent to-[#060D18]/80 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-radial from-transparent via-[#060D18]/40 to-[#060D18]/90 pointer-events-none z-10" />

            {/* Top Action Controls: Audio Toggle & Skip */}
            <div className="absolute top-5 right-5 sm:top-7 sm:right-8 z-50 flex items-center gap-2.5">
              {/* Sound Toggle Button */}
              <motion.button
                type="button"
                onClick={toggleSound}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 shadow-lg transition-all duration-200 cursor-pointer"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                title={isMuted ? "Unmute video" : "Mute video"}
                aria-label={isMuted ? "Unmute splash video" : "Mute splash video"}
              >
                {isMuted ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-[#E6CA85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                    <span>Unmute</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-[#E6CA85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <span>Sound On</span>
                  </>
                )}
              </motion.button>

              {/* Skip Button */}
              <motion.button
                type="button"
                onClick={dismissSplash}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-semibold text-white/95 hover:text-white bg-gradient-to-r from-[#C5A059]/30 to-[#9E782F]/30 hover:from-[#C5A059]/50 hover:to-[#9E782F]/50 backdrop-blur-md border border-[#C5A059]/50 hover:border-[#E6CA85] shadow-lg transition-all duration-200 cursor-pointer"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                aria-label="Skip splash screen"
              >
                <span>Skip</span>
                <svg className="w-3.5 h-3.5 text-[#E6CA85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            {/* Main Foreground Presentation - Centered, Responsive, Edge-to-Edge Adaptive */}
            <div className="relative z-20 w-full h-full max-h-screen flex flex-col items-center justify-center p-3 sm:p-6 md:p-10">
              <motion.div
                className="relative w-full max-w-5xl aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.85)] border border-white/15 bg-black/60 backdrop-blur-xs flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  ref={mainVideoRef}
                  src="/splash.mp4"
                  autoPlay
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  controls={false}
                  onEnded={dismissSplash}
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain sm:object-cover"
                />

                {/* Mobile tap play hint if browser blocked autoplay */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={() => {
                      if (mainVideoRef.current) {
                        mainVideoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
                      }
                    }}
                    className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-xs text-white cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#C5A059]/80 flex items-center justify-center shadow-xl border border-white/20">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}
              </motion.div>

              {/* Bottom Brand Watermark */}
              <motion.div
                className="absolute bottom-4 sm:bottom-6 z-20 flex flex-col items-center text-center px-4 pointer-events-none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#E6CA85] uppercase">
                  Mali International
                </p>
                <p className="text-[9px] sm:text-[10px] tracking-[0.2em] text-white/50 uppercase mt-0.5">
                  Global Agricultural &amp; Commodity Trade
                </p>
              </motion.div>
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

