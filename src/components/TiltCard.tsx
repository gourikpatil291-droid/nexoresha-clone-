"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for tracking relative mouse position
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth spring configuration
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);

  // Slight shift on translate
  const scale = useSpring(hovered ? 1.03 : 1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative positions between 0 and 1
    const relativeX = (e.clientX - rect.left) / width;
    const relativeY = (e.clientY - rect.top) / height;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0.5); // Reset to center
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        scale,
      }}
      className={`glass-card rounded-2xl p-8 relative overflow-hidden transition-colors duration-300 ${className}`}
    >
      {/* 3D shadow depth effect on hover */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-warm-beige/5 to-maroon/15 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ transform: "translateZ(-20px)" }}
      />
      
      {/* Dynamic beige reflection highlight */}
      <div 
        className="absolute -inset-[100%] bg-radial from-soft-ivory/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          transform: `translate3d(${(x.get() - 0.5) * 50}px, ${(y.get() - 0.5) * 50}px, 0) scale(0.5)`,
        }}
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
