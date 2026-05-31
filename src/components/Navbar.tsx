"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
          scrolled ? "px-4 md:px-8" : "px-6 md:px-12"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? "glass-panel bg-maroon-black/60 shadow-lg border-warm-beige/10"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo / Branding */}
          <a
            href="/"
            className="flex items-center space-x-3 group interactive-hover"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.img
              src="/logo.png"
              alt="NEXORESHA Logo"
              className="w-16 h-16 object-contain"
              animate={isHovered ? {
                scale: 1.2,
                rotate: 12,
                filter: "drop-shadow(0 0 16px rgba(168, 85, 247, 0.95)) drop-shadow(0 0 28px rgba(168, 85, 247, 0.5))",
              } : {
                scale: 1,
                rotate: 0,
                filter: "drop-shadow(0 0 4px rgba(168, 85, 247, 0.3))",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
            <motion.span
              className="text-xl md:text-2xl font-display font-bold text-gradient-beige"
              animate={isHovered ? {
                y: -1,
                letterSpacing: "0.2em",
                filter: "brightness(1.25) drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))",
              } : {
                y: 0,
                letterSpacing: "0.1em",
                filter: "brightness(1)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              NEXORESHA
            </motion.span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans font-medium text-warm-beige/65 hover:text-warm-beige transition-colors duration-300 relative py-1 group interactive-hover"
              >
                {link.name}
                {/* Sleek hover line indicator */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-widest bg-warm-beige text-maroon-black border border-warm-beige hover:bg-transparent hover:text-warm-beige transition-all duration-300 group interactive-hover"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-warm-beige hover:text-luxury-gold transition-colors duration-300 interactive-hover"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 bg-maroon-black/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center space-y-8 px-6"
          >
            <div className="w-full flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-display font-medium text-warm-beige/70 hover:text-warm-beige transition-colors duration-300 py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-[280px] text-center py-3.5 rounded-full text-sm font-display font-bold uppercase tracking-widest bg-warm-beige text-maroon-black hover:bg-transparent hover:text-warm-beige border border-warm-beige transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
