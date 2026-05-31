"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ArrowUpRight, Cpu, Sparkles } from "lucide-react";
import ThreeCanvas from "./ThreeCanvas";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for floating elements mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smoother movement of elements
  const springConfig = { damping: 50, stiffness: 250, mass: 0.8 };
  const cardX1 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const cardY1 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);

  const cardX2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [25, -25]), springConfig);
  const cardY2 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-40, 40]), springConfig);

  const cardX3 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const cardY3 = useSpring(useTransform(mouseY, [-0.5, 0.5], [35, -35]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinate: -0.5 to 0.5
      const normX = (e.clientX / window.innerWidth) - 0.5;
      const normY = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(normX);
      mouseY.set(normY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Framer Motion reveal variants for text
  const headingText = "We Build Intelligent Digital Experiences";
  const words = headingText.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: 60, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-maroon-black"
    >
      {/* 3D Canvas Background scene */}
      <ThreeCanvas />

      {/* Main Hero Content Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Ambient top glowing line tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border-warm-beige/10 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
          <span className="text-[10px] md:text-xs font-display font-bold uppercase tracking-widest text-warm-beige/85">
            Next Generation Agency
          </span>
        </motion.div>

        {/* Animated large heading */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-gradient-beige leading-[1.1] mb-8 max-w-4xl"
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className="inline-block mr-3 md:mr-4 select-none"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl font-sans text-warm-beige/60 max-w-2xl mb-12 leading-relaxed"
        >
          AI-powered platforms, scalable web systems, immersive digital products, and futuristic experiences for next-generation businesses.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-display font-bold uppercase tracking-widest text-xs bg-warm-beige text-maroon-black hover:bg-transparent hover:text-warm-beige border border-warm-beige hover:border-warm-beige/35 transition-all duration-300 group interactive-hover"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-display font-bold uppercase tracking-widest text-xs glass-panel border-warm-beige/10 hover:border-warm-beige/35 text-warm-beige hover:bg-warm-beige/5 transition-all duration-300 interactive-hover"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Floating UI Glassmorphism Cards with Parallax */}
      
      {/* Card 1: Left Center */}
      <motion.div
        style={{ x: cardX1, y: cardY1 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute top-[25%] left-[5%] md:left-[8%] xl:left-[12%] hidden lg:flex items-center space-x-4 p-4 rounded-2xl glass-card w-64 select-none pointer-events-none"
      >
        <div className="p-2.5 rounded-xl bg-maroon/30 border border-warm-beige/10">
          <Cpu className="w-5 h-5 text-luxury-gold" />
        </div>
        <div>
          <div className="text-[10px] font-display font-bold uppercase tracking-widest text-warm-beige/45">AI Deployments</div>
          <div className="text-sm font-sans font-medium text-warm-beige">Active & Scaling</div>
        </div>
      </motion.div>

      {/* Card 2: Right Top */}
      <motion.div
        style={{ x: cardX2, y: cardY2 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="absolute top-[20%] right-[5%] md:right-[8%] xl:right-[12%] hidden lg:flex flex-col p-4 rounded-2xl glass-card w-56 select-none pointer-events-none"
      >
        <div className="text-[10px] font-display font-bold uppercase tracking-widest text-warm-beige/45 mb-1.5">System Latency</div>
        <div className="flex items-end space-x-2">
          <div className="text-3xl font-display font-extrabold text-gradient-beige leading-none">12ms</div>
          <div className="text-[10px] font-sans text-green-400 font-bold mb-1">99.9% uptime</div>
        </div>
      </motion.div>

      {/* Card 3: Left Bottom */}
      <motion.div
        style={{ x: cardX3, y: cardY3 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="absolute bottom-[18%] left-[8%] md:left-[10%] xl:left-[15%] hidden lg:flex items-center space-x-3 p-3.5 rounded-2xl glass-card select-none pointer-events-none"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
        <span className="text-[10px] font-display font-bold uppercase tracking-widest text-warm-beige/85">
          Awwwards-inspired Agent 2.0
        </span>
      </motion.div>
    </section>
  );
}
