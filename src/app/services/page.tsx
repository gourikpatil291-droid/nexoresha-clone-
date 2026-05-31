"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

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
      
      {/* Decorative Spacer / Top banner for stand-alone page */}
      <div className="pt-32 pb-8 text-center bg-gradient-to-b from-[#140708] to-maroon-black">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-luxury-gold mb-3 block">
            Innovative Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient-beige mb-4">
            Our Services
          </h1>
          <p className="text-sm md:text-base font-sans text-warm-beige/60 max-w-2xl mx-auto">
            Explore our specialized digital capabilities ranging from responsive web development to high-performance mobile architectures and automated deployment pipelines.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        <ServicesSection />
      </main>

      <Footer />
    </motion.div>
  );
}
