"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Smartphone, Globe, Wrench, GraduationCap, Megaphone, Search, BarChart3, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import TiltCard from "./TiltCard";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  glowColor: string;
  route: string;
}

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      title: "Website Design & Development",
      description: "Build ultra-fast web systems and immersive interactive interfaces using React, Next.js, and modern architectural frameworks designed to scale.",
      icon: Globe,
      glowColor: "rgba(197, 168, 128, 0.1)",
      route: "/services/web-design",
    },
    {
      title: "High Performance Mobile Apps",
      description: "Deliver high-fidelity native iOS and Android experiences featuring butter-smooth animations, caching, and offline support.",
      icon: Smartphone,
      glowColor: "rgba(230, 213, 195, 0.1)",
      route: "/services/mobile-apps",
    },
    {
      title: "DevOps Automation & Deployment",
      description: "Automate server setups, secure continuous pipelines, and scale hosting nodes with AWS, Docker, Kubernetes, and optimized serverless builds.",
      icon: Cpu,
      glowColor: "rgba(74, 52, 40, 0.15)",
      route: "/services/devops",
    },
    {
      title: "Reliable Maintenance & Support",
      description: "Keep your application healthy, secure, and updated with round-the-clock monitoring, fast bug fixes, and continuous performance tuning.",
      icon: Wrench,
      glowColor: "rgba(197, 168, 128, 0.1)",
      route: "/services/maintenance",
    },
    {
      title: "Technical Training",
      description: "Practical, real-world technical training programs designed to prepare students and teams for enterprise-level software engineering.",
      icon: GraduationCap,
      glowColor: "rgba(230, 213, 195, 0.1)",
      route: "/services/training",
    },
    {
      title: "Digital Marketing Services",
      description: "Scale your user growth and market dominance with optimized search marketing, premium copy, and visual campaign templates.",
      icon: Megaphone,
      glowColor: "rgba(74, 52, 40, 0.15)",
      route: "/services/digital-marketing",
    },
    {
      title: "Search Engine Optimization",
      description: "Grow organic traffic at scale with structured keyword mapping, lightning-fast technical SEO audits, and premium backlink strategies.",
      icon: Search,
      glowColor: "rgba(197, 168, 128, 0.1)",
      route: "/services/seo",
    },
    {
      title: "Analytics & Performance Tracking",
      description: "Unlock deep tracking dashboards, real-time analytics data pipelines, custom conversion goals, and user behavior maps.",
      icon: BarChart3,
      glowColor: "rgba(230, 213, 195, 0.1)",
      route: "/services/analytics",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="services" className="relative w-full py-24 md:py-32 bg-maroon-black overflow-hidden">
      {/* Decorative soft glowing backdrop sphere */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-maroon/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border-warm-beige/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span className="text-[10px] font-display font-bold uppercase tracking-widest text-warm-beige/85">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient-beige mb-6 max-w-2xl">
            Futuristic Services for Next-Gen Brands
          </h2>
          <p className="text-sm md:text-base font-sans text-warm-beige/50 max-w-lg">
            We operate at the intersection of high-fidelity code and cinematic brand design to deploy scalable systems.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Link href={service.route} className="block h-full group">
                  <TiltCard className="group relative h-full flex flex-col justify-between interactive-hover">
                    <div>
                      {/* Icon container with beige glow */}
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center bg-deep-gray/50 border border-warm-beige/10 mb-8 relative transition-all duration-500 group-hover:border-warm-beige/35 group-hover:scale-110"
                        style={{ boxShadow: `inset 0 0 10px ${service.glowColor}` }}
                      >
                        <Icon className="w-5 h-5 text-luxury-gold group-hover:rotate-12 transition-transform duration-500" />
                        {/* Floating secondary particle circle */}
                        <div className="absolute inset-0 rounded-xl border border-warm-beige/10 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500" />
                      </div>

                      <h3 className="text-lg md:text-xl font-display font-semibold text-warm-beige mb-4 tracking-wide group-hover:text-luxury-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-xs md:text-sm font-sans text-warm-beige/55 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Visual bottom indicator */}
                    <div className="mt-8 pt-4 border-t border-warm-beige/5 flex items-center justify-between text-[10px] font-display font-bold uppercase tracking-widest text-luxury-gold/55 group-hover:text-luxury-gold transition-colors duration-300">
                      <span>Explore service</span>
                      <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
