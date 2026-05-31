"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Compass, PenTool, Terminal, Rocket, Sparkles } from "lucide-react";

interface ProcessStep {
  num: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export default function ProcessSection() {
  const steps: ProcessStep[] = [
    {
      num: "01",
      title: "Discover",
      description: "Thoroughly research your model needs, system bottlenecks, and user stories to map out target metrics.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Design",
      description: "Create premium glassmorphic UI layout mockups and plan high-performance database schema designs.",
      icon: PenTool,
    },
    {
      num: "03",
      title: "Develop",
      description: "Deploy robust, scalable codebases with Next.js, tailwind-optimized builds, and integrated AI layers.",
      icon: Terminal,
    },
    {
      num: "04",
      title: "Launch",
      description: "Deploy your site or platform to staging, execute latency tests, and release to global servers.",
      icon: Rocket,
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="process" className="relative w-full py-24 md:py-32 bg-maroon-black overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute right-0 top-[20%] w-[300px] h-[300px] rounded-full bg-warm-beige/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border-warm-beige/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span className="text-[10px] font-display font-bold uppercase tracking-widest text-warm-beige/85">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient-beige mb-6">
            The Timeline of Excellence
          </h2>
          <p className="text-sm md:text-base font-sans text-warm-beige/50 max-w-md">
            Our step-by-step methodology ensures zero downtime and premium visual precision.
          </p>
        </div>

        {/* Timeline Steps Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative"
        >
          {/* Connector Line for Desktop */}
          <div className="absolute top-[28px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-warm-beige/5 via-luxury-gold/25 to-warm-beige/5 hidden md:block z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={stepVariants}
                className="flex flex-col items-center text-center relative z-10 group"
              >
                {/* Number Badge */}
                <span className="absolute -top-6 text-[10px] font-display font-bold uppercase tracking-widest text-luxury-gold/45 mb-2">
                  Step {step.num}
                </span>

                {/* Icon Container with glowing ring */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-gray border border-warm-beige/15 group-hover:border-warm-beige/65 shadow-md relative z-10 transition-all duration-500 group-hover:scale-110 interactive-hover">
                  <Icon className="w-5 h-5 text-luxury-gold" />
                  
                  {/* Glowing hover orbit ring */}
                  <div className="absolute inset-0.5 rounded-full border border-dashed border-luxury-gold/0 group-hover:border-luxury-gold/50 group-hover:rotate-45 transition-all duration-700" />
                </div>

                {/* Step title */}
                <h3 className="text-lg md:text-xl font-display font-bold text-warm-beige mt-6 mb-3 tracking-wide">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-xs md:text-sm font-sans text-warm-beige/50 max-w-[220px] leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector dot for mobile */}
                {idx < 3 && (
                  <div className="w-[1px] h-10 bg-gradient-to-b from-luxury-gold/20 to-transparent md:hidden mt-6" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
