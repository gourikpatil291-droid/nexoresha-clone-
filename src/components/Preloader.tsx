"use client";

import React, { useEffect, useState, useRef } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    // Initial load backup timeout (12 seconds) - if video doesn't start playing at all
    timeoutRef.current = setTimeout(() => {
      handleComplete();
    }, 12000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.body.style.overflow = "unset";
    };
  }, []);

  const handlePlay = () => {
    // Clear initial load timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set a new backup timeout based on the actual duration of the video + 4 seconds buffer
    const duration = videoRef.current?.duration || 7;
    timeoutRef.current = setTimeout(() => {
      handleComplete();
    }, (duration * 1000) + 4000);
  };

  const handleComplete = () => {
    setVisible(false);
    document.body.style.overflow = "unset";
    
    // Dispatch custom event to notify other components (e.g. HeroSection)
    if (typeof window !== "undefined") {
      (window as any).preloaderFinished = true;
      window.dispatchEvent(new Event("preloader-done"));
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black">
      {/* Fullscreen Video Preloader - no overlay glows, no opacity changes, no animations */}
      <video
        ref={videoRef}
        src="/use_video.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onPlay={handlePlay}
        onEnded={handleComplete}
        className="w-full h-full object-cover"
      />

      {/* Skip Intro Button */}
      <button
        onClick={handleComplete}
        className="absolute bottom-10 right-10 z-20 px-6 py-2.5 rounded-full border border-warm-beige/10 hover:border-warm-beige/40 text-warm-beige/60 hover:text-warm-beige bg-maroon-black/30 backdrop-blur-md transition-all duration-300 text-[10px] font-display font-bold uppercase tracking-widest interactive-hover"
      >
        Skip Intro
      </button>
    </div>
  );
}
