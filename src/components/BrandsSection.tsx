"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";

const brands = [
  {
    badge: "TECH CORE",
    title: "NEXORESHA TECHNOLOGIES",
    subtitle: "OWNER & FOUNDER",
    description: "The technical core, building premium custom software solutions, ecommerce platforms, web applications, and digital interfaces.",
    url: "https://nexoresha.tech/home-1.html",
  },
  {
    badge: "STORYTELLING & LITERATURE",
    title: "NEXORESHA TALES",
    subtitle: "OWNER & FOUNDER",
    description: "The storytelling division, drafting rich narrative copy, editorial scriptures, brand storylines, and creative content scripts.",
    url: "https://www.nexoreshamedia.works/",
  },
  {
    badge: "CINEMATOGRAPHY & BRANDING",
    title: "NEXORESHA MEDIA WORKS",
    subtitle: "OWNER & FOUNDER",
    description: "The production house, designing visual assets, filming cinematic advertisements, and managing high-tier social media channels.",
    url: "https://www.nexoreshamedia.works/",
  }
];

function BrandCard({ brand, index }: { brand: typeof brands[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{ perspective: 1200 }}
      className="w-full h-full"
    >
      <motion.a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="block w-full h-full relative glass-card bg-dark-maroon/20 p-8 md:p-10 rounded-[28px] border border-warm-beige/20 group cursor-pointer"
      >
        {/* Gamification Glowing hover effect */}
        <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-br from-luxury-gold/15 to-transparent transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

        {/* 3D Inner Content */}
        <div className="relative z-10 h-full flex flex-col items-start" style={{ transform: 'translateZ(40px)' }}>
          {/* Badge */}
          <div className="flex items-center justify-between w-full mb-8">
            <div className="px-3 py-1 rounded-full border border-warm-beige/30 text-[10px] font-display font-bold text-warm-beige tracking-wider">
              {brand.badge}
            </div>
            <ExternalLink className="w-4 h-4 text-warm-beige/40 group-hover:text-warm-beige transition-colors duration-300" />
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold text-warm-beige mb-1 uppercase">
            {brand.title}
          </h3>
          <p className="text-[10px] md:text-xs font-display text-warm-beige/50 uppercase tracking-widest mb-6">
            {brand.subtitle}
          </p>

          <p className="text-sm text-warm-beige/80 font-sans leading-relaxed mt-auto">
            {brand.description}
          </p>
        </div>
      </motion.a>
    </motion.div>
  );
}

export default function BrandsSection() {
  return (
    <section id="brands" className="relative w-full py-24 md:py-32 overflow-hidden bg-maroon-black">
      {/* Background Particles from Get In Touch Theme */}
      <div className="absolute top-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-warm-beige/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-warm-beige mb-4"
          >
            THE ECOSYSTEM
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[64px] font-display font-bold text-gradient-beige mb-6 uppercase tracking-tight"
          >
            NEXORESHA BRANDS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base font-sans text-warm-beige/65 max-w-2xl mx-auto"
          >
            Ventures built to scale custom engineering, storytelling, and high-fidelity production.
          </motion.p>
        </div>

        {/* Gamified Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {brands.map((brand, idx) => (
            <BrandCard key={idx} brand={brand} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
