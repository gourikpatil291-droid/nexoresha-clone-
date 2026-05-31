"use client";

import React from "react";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  // Triple the items to ensure we have more than enough content to cover the screen width for seamless looping
  const tripleItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-maroon-black/50 border-y border-warm-beige/5">
      {/* Side fades (vignette gradient) */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-maroon-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-maroon-black to-transparent z-10 pointer-events-none" />

      {/* Sliding track */}
      <div className="flex w-max animate-marquee">
        {tripleItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-12 md:px-16 py-4 mx-4 md:mx-6 rounded-full glass-card border border-warm-beige/10 hover:border-warm-beige/30 transition-all duration-300 group interactive-hover"
          >
            {/* Tech text and soft gold glow */}
            <span className="text-xl md:text-2xl font-display font-medium text-warm-beige/65 group-hover:text-warm-beige group-hover:drop-shadow-[0_0_12px_rgba(123,24,34,0.3)] transition-all duration-300 tracking-wide select-none">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
