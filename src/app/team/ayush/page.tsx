"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import { Compass, Eye, Award, Briefcase, ExternalLink, ArrowLeft, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ayushBrands = [
  {
    badge: "Tech Core",
    title: "Nexoresha Technologies",
    subtitle: "Owner & Founder",
    description: "The technical core, building premium custom software solutions, ecommerce platforms, web applications, and digital interfaces.",
    url: "https://nexoresha.tech/"
  },
  {
    badge: "Storytelling & Literature",
    title: "Nexoresha Tales",
    subtitle: "Owner & Founder",
    description: "The storytelling division, drafting rich narrative copy, editorial scriptures, brand storylines, and creative content scripts.",
    url: "https://www.nexoreshamedia.works/"
  },
  {
    badge: "Cinematography & Branding",
    title: "Nexoresha Media Works",
    subtitle: "Owner & Founder",
    description: "The production house, designing visual assets, filming cinematic advertisements, and managing high-tier social media channels.",
    url: "https://www.nexoreshamedia.works/"
  }
];

function AyushGamifiedCard({ brand, index }: { brand: typeof ayushBrands[0]; index: number }) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="h-full w-full"
    >
      <Link href={brand.url} target="_blank" className="block h-full w-full group">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-full w-full rounded-[32px] theme-brown bg-maroon-black overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-[1.03] shadow-lg"
        >
          {/* Dynamic Flashlight/Spotlight */}
          <div
            className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(197, 168, 128, 0.2), transparent 60%)`,
            }}
          />
          
          {/* Gamified Glowing Border Trace */}
          <div 
            className="absolute inset-0 z-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, rgba(197, 168, 128, 1), transparent 100%)`,
              padding: '1px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10 border border-warm-beige/10 rounded-[32px] bg-maroon-black/70 backdrop-blur-sm group-hover:border-transparent transition-colors duration-500">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold border border-luxury-gold/30 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(197,168,128,0.15)] bg-warm-beige/5 group-hover:bg-luxury-gold/15 group-hover:shadow-[0_0_20px_rgba(197,168,128,0.3)] transition-all duration-300">
                  {brand.badge}
                </span>
                <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-luxury-gold group-hover:rotate-12 transition-all duration-300" />
              </div>
              <div className="space-y-1.5 transform group-hover:-translate-y-1.5 transition-transform duration-500">
                <h3 className="font-display text-2xl md:text-3xl text-luxury-gold tracking-wide uppercase group-hover:text-white transition-colors group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                  {brand.title}
                </h3>
                <p className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] font-semibold uppercase">
                  {brand.subtitle}
                </p>
              </div>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light transform group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                {brand.description}
              </p>
            </div>
            
            {/* Gamification Progress/Power Bar */}
            <div className="w-full h-1.5 bg-white/5 mt-10 rounded-full overflow-hidden relative">
              <div className="absolute top-0 bottom-0 left-0 w-0 bg-gradient-to-r from-luxury-gold to-white group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(197,168,128,0.8)]" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function AyushProfilePage() {
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
      className="theme-light flex flex-col min-h-screen bg-[#F9EEDC] text-[#2E1A17] w-full overflow-x-hidden relative"
    >
      <Navbar />

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5A121A]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#EAD8C0]/50 rounded-full blur-[100px]" />
      </div>

      <main className="flex-grow pb-24 pt-28 md:pt-36 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5A121A] hover:text-[#5A121A] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Main
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 w-full aspect-[2/3] rounded-3xl overflow-hidden relative group transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(90,18,26,0.2)]"
          >
            <Image
              src="/faces/ayush.png"
              alt="Ayush Choudhary"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
            {/* Inner edge vignette shadow for the image */}
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(46,26,23,0.4)] pointer-events-none transition-shadow duration-700 group-hover:shadow-[inset_0_0_30px_rgba(46,26,23,0.2)]" />
            {/* Glowing Border Trace Effect */}
            <div className="absolute inset-0 rounded-3xl border border-[#5A121A]/15 pointer-events-none group-hover:border-[#5A121A]/40 transition-colors duration-700" />
          </motion.div>
          <div className="lg:col-span-8 relative rounded-3xl group transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(90,18,26,0.12)]">
            {/* Edge inner shadow and borders */}
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(90,18,26,0.06)] border border-[#5A121A]/15 pointer-events-none group-hover:border-[#5A121A]/30 group-hover:shadow-[inset_0_0_80px_rgba(90,18,26,0.08)] transition-all duration-700" />
            {/* Soft background gradient on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5A121A]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 space-y-6 p-8 md:p-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2.5"
            >
              <span className="text-xs uppercase font-bold tracking-widest text-[#5A121A] bg-[#EAD8C0] px-3.5 py-1 rounded w-fit block">
                Founder & Director
              </span>
              <h1 className="font-display text-5xl md:text-7xl text-[#2E1A17] uppercase leading-none tracking-tight">
                Ayush Choudhary
              </h1>
              <p className="text-xs uppercase font-bold tracking-wider text-[#2E1A17]/55">
                Owner & Founder of Nexoresha Ventures
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-sm md:text-base text-[#2E1A17]/80 leading-relaxed font-light max-w-2xl"
            >
              Ayush Choudhary is a visionary entrepreneur and strategist who operates at the intersection of technology, creative narrative, and high-impact cinematography. As the orchestrator of the Nexoresha ecosystem, he sets the brand's direction and builds frameworks that bridge complex web software and narrative storytelling with commercial media marketing.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3.5 pt-2"
            >
              <Link
                href="/contact"
                className="bg-[#2E1A17] hover:bg-[#5A121A] text-white/95 px-6 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Discuss Business
              </Link>
            </motion.div>
            </div>
          </div>
        </div>

        {/* Executive Qualities Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 space-y-12 relative z-10">
          <div className="text-center space-y-3 max-w-md mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-[#5A121A]">
              Executive Qualities
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#2E1A17] uppercase">
              LEADERSHIP PROFILE
            </h2>
            <p className="text-xs text-[#2E1A17]/60 font-light leading-relaxed">
              The values and operational methods driving Nexoresha's growth roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
                        <motion.div initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              <TiltCard className="theme-brown bg-maroon-black border border-warm-beige/10 group interactive-hover h-full w-full relative">
                <div className="flex gap-5 w-full h-full relative z-10">

              <div className="w-12 h-12 rounded-xl bg-deep-gray/50 border border-warm-beige/15 flex items-center justify-center text-luxury-gold flex-shrink-0 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl md:text-2xl text-white/95 tracking-wide uppercase">
                  Ecosystem Visionary
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  The capability to construct and orchestrate a multi-company ecosystem bridging software technologies, creative literature, and visual media production under a unified brand voice.
                </p>
              </div>
            
              </div>
              </TiltCard>
            </motion.div>

            {/* Card 2 */}
                        <motion.div initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <TiltCard className="theme-brown bg-maroon-black border border-warm-beige/10 group interactive-hover h-full w-full relative">
                <div className="flex gap-5 w-full h-full relative z-10">

              <div className="w-12 h-12 rounded-xl bg-deep-gray/50 border border-warm-beige/15 flex items-center justify-center text-luxury-gold flex-shrink-0 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl md:text-2xl text-white/95 tracking-wide uppercase">
                  Strategic Innovation
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Expertise in aligning core technological foundations with audience psychology and social media algorithms to maximize conversion value for premium brands.
                </p>
              </div>
            
              </div>
              </TiltCard>
            </motion.div>

            {/* Card 3 */}
                        <motion.div initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}>
              <TiltCard className="theme-brown bg-maroon-black border border-warm-beige/10 group interactive-hover h-full w-full relative">
                <div className="flex gap-5 w-full h-full relative z-10">

              <div className="w-12 h-12 rounded-xl bg-deep-gray/50 border border-warm-beige/15 flex items-center justify-center text-luxury-gold flex-shrink-0 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl md:text-2xl text-white/95 tracking-wide uppercase">
                  Empowering Leadership
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Fostering a creative playground where directors, designers, and editors work with absolute agency, standardizing production pipelines to deliver premium high-end results.
                </p>
              </div>
            
              </div>
              </TiltCard>
            </motion.div>

            {/* Card 4 */}
                        <motion.div initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}>
              <TiltCard className="theme-brown bg-maroon-black border border-warm-beige/10 group interactive-hover h-full w-full relative">
                <div className="flex gap-5 w-full h-full relative z-10">

              <div className="w-12 h-12 rounded-xl bg-deep-gray/50 border border-warm-beige/15 flex items-center justify-center text-luxury-gold flex-shrink-0 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl md:text-2xl text-white/95 tracking-wide uppercase">
                  Operational Excellence
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Transitioning creative media from pure aesthetic art into structured business growth parameters, turning likes and organic reach into measurable client revenue assets.
                </p>
              </div>
            
              </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 space-y-12 relative z-10">
          <div className="text-center space-y-3 max-w-md mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-[#5A121A]">
              The Ecosystem
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#2E1A17] uppercase">
              NEXORESHA BRANDS
            </h2>
            <p className="text-xs text-[#2E1A17]/60 font-light leading-relaxed">
              Ventures built to scale custom engineering, storytelling, and high-fidelity production.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ayushBrands.map((brand, idx) => (
              <AyushGamifiedCard key={idx} brand={brand} index={idx} />
            ))}
          </div>
        </div>
      </main>

      {/* Since the page background is beige, we want the footer to remain in the Brown theme, which we configured via the Footer component's classes */}
      <Footer />
    </motion.div>
  );
}
