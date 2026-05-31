"use client";

import { useEffect, useState, useRef } from "react";

interface SmokeParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  color: string;
  shape: "circle" | "triangle" | "square";
  rotation: number;
  vRotation: number;
}

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [rotation, setRotation] = useState(0);
  const [particles, setParticles] = useState<SmokeParticle[]>([]);
  const lastPosition = useRef({ x: -100, y: -100 });
  const lastSpawnPosition = useRef({ x: -100, y: -100 });
  const particleIdRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      const curX = e.clientX;
      const curY = e.clientY;
      setPosition({ x: curX, y: curY });
      setIsVisible(true);

      const dx = curX - lastPosition.current.x;
      const dy = curY - lastPosition.current.y;
      
      let angle = rotation;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        // Calculate angle in degrees
        const rad = Math.atan2(dy, dx);
        angle = (rad * 180) / Math.PI + 90; // offset by 90 degrees since SVG points up
        setRotation(angle);

        // Spawn smoke particle if we moved past threshold
        const distFromLastSpawn = Math.sqrt(
          Math.pow(curX - lastSpawnPosition.current.x, 2) +
          Math.pow(curY - lastSpawnPosition.current.y, 2)
        );

        if (distFromLastSpawn > 10) {
          const radCar = (angle - 90) * Math.PI / 180;
          // Calculate exhaust position at the rear of the car
          const radExhaust = angle * Math.PI / 180;
          const exhaustX = curX - 22 * Math.sin(radExhaust);
          const exhaustY = curY + 22 * Math.cos(radExhaust);

          const id = particleIdRef.current++;
          const vx = -Math.cos(radCar) * 0.5 + (Math.random() - 0.5) * 0.4;
          const vy = -Math.sin(radCar) * 0.5 + (Math.random() - 0.5) * 0.4;
          
          // Lavender and Beige neon color palette
          const smokeColors = [
            "#E6E6FA", // Soft lavender
            "#D1B3FF", // Neon light lavender
            "#FFECA1", // Neon beige
            "#FDF6E2", // Soft cream beige
          ];
          const color = smokeColors[Math.floor(Math.random() * smokeColors.length)];
          const shapes = ["circle", "triangle", "square"] as const;
          const shape = shapes[Math.floor(Math.random() * shapes.length)];
          const particleRotation = Math.random() * 360;
          const vRotation = (Math.random() - 0.5) * 6; // spin rate

          const newParticle: SmokeParticle = {
            id,
            x: exhaustX,
            y: exhaustY,
            size: 8 + Math.random() * 10,
            opacity: 0.8,
            vx,
            vy,
            color,
            shape,
            rotation: particleRotation,
            vRotation,
          };

          setParticles((prev) => [...prev, newParticle].slice(-80)); // cap max active particles
          lastSpawnPosition.current = { x: curX, y: curY };
        }
      }

      lastPosition.current = { x: curX, y: curY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", () => setIsVisible(false));
      document.removeEventListener("mouseenter", () => setIsVisible(true));
    };
  }, [rotation]);

  // High performance particle physics update loop
  useEffect(() => {
    let animId: number;
    const update = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            size: p.size + 0.2,
            rotation: p.rotation + p.vRotation,
            opacity: p.opacity - 0.015,
          }))
          .filter((p) => p.opacity > 0)
      );
      animId = requestAnimationFrame(update);
    };
    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Smoke Shapes (Lavender & Beige Neon) */}
      {particles.map((p) => (
        <svg
          key={p.id}
          className="fixed pointer-events-none z-9997"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            opacity: p.opacity,
            filter: `drop-shadow(0 0 4px ${p.color})`,
          }}
          viewBox="0 0 24 24"
        >
          {p.shape === "circle" && (
            <circle cx="12" cy="12" r="8" fill={p.color} />
          )}
          {p.shape === "square" && (
            <rect x="4" y="4" width="16" height="16" fill={p.color} />
          )}
          {p.shape === "triangle" && (
            <polygon points="12,3 3,21 21,21" fill={p.color} />
          )}
        </svg>
      ))}

      {/* Neon Beige Luxury Sports Car Cursor */}
      <div
        className="fixed pointer-events-none z-9999 hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          width: 28,
          height: 56,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          transformOrigin: "center",
          transition: "transform 0.08s ease-out",
          filter: "drop-shadow(0 0 6px rgba(255, 236, 161, 0.85))", // Neon beige glow
        }}
      >
        <svg width="28" height="56" viewBox="0 0 28 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wheels */}
          <rect x="1" y="10" width="3" height="8" rx="1.5" fill="#111" />
          <rect x="24" y="10" width="3" height="8" rx="1.5" fill="#111" />
          <rect x="1" y="38" width="3" height="8" rx="1.5" fill="#111" />
          <rect x="24" y="38" width="3" height="8" rx="1.5" fill="#111" />
          
          {/* Neon Beige Car Body */}
          <path d="M4,12 C4,6 8,2 14,2 C20,2 24,6 24,12 L24,42 C24,47 21,50 14,50 C7,50 4,47 4,42 Z" fill="#FFECA1" />
          <path d="M5,13 C5,8 9,4 14,4 C19,4 23,8 23,13 L23,41 C23,45 20,48 14,48 C8,48 5,45 5,41 Z" fill="#FDF6E2" />
          
          {/* Cabin / Windshield (Lavender themed) */}
          <path d="M7,20 C7,17 10,15 14,15 C18,15 21,17 21,20 L19,32 C19,34 17,35 14,35 C11,35 9,34 9,32 Z" fill="#1A0D2A" />
          <path d="M9,19 C9,18 11,17 14,17 C17,17 19,18 19,19 L18,22 C18,23 16,24 14,24 C12,24 10,23 10,22 Z" fill="#D1B3FF" opacity="0.6" />
          
          {/* Spoiler */}
          <rect x="2" y="46" width="24" height="3" rx="1" fill="#FFECA1" />
          
          {/* Exhaust Pipes */}
          <circle cx="10" cy="51" r="1.2" fill="#BBBBBB" />
          <circle cx="18" cy="51" r="1.2" fill="#BBBBBB" />
        </svg>
      </div>
    </>
  );
}
