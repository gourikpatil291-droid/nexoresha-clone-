"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import Footer from "@/components/Footer";
import HolographicGlobe from "@/components/HolographicGlobe";

export default function ServicesPage() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ((window as any).preloaderFinished) {
        setIsReady(true);
      }
      const handlePreloader = () => setIsReady(true);
      window.addEventListener("preloader-done", handlePreloader);
      return () => {
        window.removeEventListener("preloader-done", handlePreloader);
      };
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isReady ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex flex-col min-h-screen bg-maroon-black w-full overflow-x-hidden relative"
    >
      <Navbar />
      
      {/* Top banner for stand-alone page */}
      <div className="relative pt-32 pb-8 text-center overflow-hidden flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex justify-center items-center space-x-2 text-[10px] md:text-xs font-display uppercase tracking-widest text-warm-beige/40 mb-4 select-none">
            <Link href="/" className="hover:text-luxury-gold transition-colors duration-300">Homepage</Link>
            <span>—</span>
            <span className="text-luxury-gold">Services</span>
          </nav>
          <span className="text-xs font-display font-bold uppercase tracking-widest text-luxury-gold mb-3 block">
            Innovative Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient-beige mb-4 drop-shadow-2xl">
            Our Services
          </h1>
          <p className="text-sm md:text-base font-sans text-warm-beige/60 max-w-2xl mx-auto drop-shadow-md">
            Explore our specialized digital capabilities ranging from responsive web development to high-performance mobile architectures and automated deployment pipelines.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        <ServicesSection />
        <CtaSection />
      </main>

      <Footer />
    </motion.div>
  );
}
