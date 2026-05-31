"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";

interface Project {
  title: string;
  category: string;
  image: string;
  sizeClass: string;
  tags: string[];
}

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      title: "Aether AI — Intelligent Copilot Suite",
      category: "AI & Automation",
      image: "/img1.jpeg",
      sizeClass: "md:col-span-2 h-[350px] md:h-[400px]",
      tags: ["Next.js", "Python", "LLMs", "Shaders"],
    },
    {
      title: "Helios Cloud — Automated Nodes Infrastructure",
      category: "Cloud Infrastructure",
      image: "/img2.jpeg",
      sizeClass: "md:col-span-1 md:row-span-2 h-[350px] md:h-auto min-h-[400px]",
      tags: ["AWS", "Docker", "Go", "Terraform"],
    },
    {
      title: "Synapse Labs — Cognitive Interface Studio",
      category: "SaaS Platforms",
      image: "/img3.jpeg",
      sizeClass: "md:col-span-1 h-[350px] md:h-[380px]",
      tags: ["Three.js", "Node.js", "React"],
    },
    {
      title: "Vesper — Luxury Mobile Wealth Platform",
      category: "Mobile Apps",
      image: "/img4.jpeg",
      sizeClass: "md:col-span-1 h-[350px] md:h-[380px]",
      tags: ["React Native", "Expo", "FastAPI"],
    },
  ];

  return (
    <section id="portfolio" className="relative w-full py-24 md:py-32 bg-maroon-black overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-[20%] left-0 w-[450px] h-[450px] rounded-full bg-maroon/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="flex flex-col max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border-warm-beige/10 mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="text-[10px] font-display font-bold uppercase tracking-widest text-warm-beige/85">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient-beige mb-4 md:mb-0">
              Selected Showcase Projects
            </h2>
          </div>
          <p className="text-sm md:text-base font-sans text-warm-beige/50 max-w-xs md:text-right">
            Explore our curated gallery of premium designs and high-performance software builds.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className={project.sizeClass}>
              <TiltCard className="group p-0 w-full h-full relative overflow-hidden flex flex-col justify-end">
                
                {/* Full-bleed background image with scale zoom */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center filter brightness-[0.4] group-hover:brightness-[0.55] transition-all duration-700 ease-out group-hover:scale-105 pointer-events-none"
                    priority
                  />
                  {/* Luxury dark vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-black via-maroon-black/40 to-transparent z-1" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end w-full">
                  <div className="text-[10px] font-display font-bold uppercase tracking-widest text-luxury-gold mb-2">
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-warm-beige tracking-wide leading-tight mb-4 group-hover:text-soft-ivory transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-2 mb-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-sans font-semibold tracking-wider uppercase px-2 py-0.5 rounded border border-warm-beige/10 bg-maroon-black/40 text-warm-beige/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Inline visual arrow */}
                  <div className="flex items-center space-x-1 text-xs font-display font-bold uppercase tracking-widest text-warm-beige/60 group-hover:text-warm-beige transition-colors duration-300">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform translate-y-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>

              </TiltCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
