import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ParticleBackground from "@/components/ParticleBackground";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXORESHA — Intelligent Digital Experiences",
  description: "We build AI-powered platforms, scalable web systems, immersive digital products, and futuristic experiences for next-generation businesses.",
  metadataBase: new URL("https://nexoresha.tech"),
  openGraph: {
    title: "NEXORESHA — Intelligent Digital Experiences",
    description: "Futuristic AI Agency creating luxury digital SaaS platforms and immersive 3D experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden bg-maroon-black selection:bg-maroon selection:text-warm-beige">
        {/* Preloader Intro Animation */}
        <Preloader />

        {/* Cinematic Film Grain Overlay */}
        <div className="grain-overlay" />
        
        {/* Global 3D Particle Background */}
        <ParticleBackground />
        
        {/* Custom Glowing Cursor */}
        <CustomCursor />
        
        {/* Core App View */}
        <main className="flex-grow flex flex-col">{children}</main>
      </body>
    </html>
  );
}
