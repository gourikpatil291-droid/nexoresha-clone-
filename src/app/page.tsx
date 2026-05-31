import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import Marquee from "@/components/Marquee";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AI/LLM",
    "AWS",
    "Docker",
    "TypeScript",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-maroon-black w-full overflow-x-hidden relative">
      {/* Header / Navbar */}
      <Navbar />

      {/* Hero Section (incorporates 3D sphere background) */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section (incorporates 3D Torus Knot) */}
      <AboutSection />

      {/* Process Section (glowing timeline) */}
      <ProcessSection />

      {/* Tech Stack Marquee */}
      <section className="w-full bg-maroon-black">
        <Marquee items={techStack} />
      </section>

      {/* Portfolio Showcase Bento Grid */}
      <PortfolioSection />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* Contact Form Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
