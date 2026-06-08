"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-maroon-black relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col relative z-10">
        
        {/* Top small text (aligned right on desktop) */}
        <div className="w-full flex justify-end mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-warm-beige/60 text-sm md:text-base font-sans max-w-[320px] text-right"
          >
            Looking to make your mark? We'll help you turn your project into a success story.
          </motion.p>
        </div>

        {/* Massive Main Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center w-full mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-display text-warm-beige leading-[1.1] tracking-tight">
            <span className="font-bold">Let's make an</span> <span className="font-light italic">impact</span>
            <br />
            <span className="font-bold">together. Ready</span> <span className="font-light">when you are</span>
          </h2>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center w-full"
        >
          <Link 
            href="/contact" 
            className="group flex items-center justify-center bg-[#F7931A] hover:bg-[#E58315] text-[#2E1A17] rounded-full px-8 py-4 transition-all duration-300 shadow-[0_10px_30px_rgba(247,147,26,0.3)] hover:shadow-[0_15px_40px_rgba(247,147,26,0.5)] hover:-translate-y-1"
          >
            <span className="text-xs font-bold tracking-widest uppercase mr-4">Contact Us</span>
            <div className="bg-[#2E1A17] text-[#F7931A] rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
