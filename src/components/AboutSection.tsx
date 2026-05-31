"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import * as THREE from "three";
import { ShieldCheck, Zap, Users } from "lucide-react";

// Reusable animated counter component
function Counter({ value, duration = 2.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const current = Math.round(end * (progress * (2 - progress)));
      
      setCount(current);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counterInterval);
      }
    }, 1000 / 60);

    return () => clearInterval(counterInterval);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutSection() {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !canvasContainerRef.current) return;

    const container = canvasContainerRef.current;
    const canvas = canvasRef.current;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Metallic Torus Knot Geometry
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.5, 120, 16);
    
    // High-end reflective physical material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x7B1822, // Rich Maroon
      metalness: 0.95,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      flatShading: true, // Faceted look to capture light beautifully
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xffffff, 200, 50); // White light
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xC5A880, 300, 50); // Gold highlight light
    light2.position.set(-5, -5, -5);
    scene.add(light2);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(0, 5, 10);
    scene.add(dirLight);

    // Mouse tracking for mesh parallax rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / height) * 2 + 1;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mesh.rotation.y = elapsedTime * 0.15 + targetX * 0.5;
      mesh.rotation.x = elapsedTime * 0.1 + -targetY * 0.5;

      // Floating motion
      mesh.position.y = Math.sin(elapsedTime * 0.8) * 0.25;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvasContainerRef.current) return;
      width = canvasContainerRef.current.clientWidth;
      height = canvasContainerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-maroon-black/50 border-t border-warm-beige/5 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text & Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-display font-bold uppercase tracking-widest text-luxury-gold mb-4">
              Behind The Scenes
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient-beige mb-6 leading-tight">
              We Craft Digital Interfaces and Autonomous Systems
            </h2>
            <p className="text-sm md:text-base font-sans text-warm-beige/60 mb-8 leading-relaxed">
              Nexoresha is a futuristic design and development studio. We build intelligent platforms that help next-generation businesses grow at lightspeed. We value structural speed, hyper-polished layouts, and custom interactive code.
            </p>

            {/* Core Values */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-maroon/20 border border-warm-beige/10 rounded-lg text-luxury-gold mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-display font-semibold text-warm-beige">Security & Compliance Standards</h4>
                  <p className="text-xs md:text-sm font-sans text-warm-beige/45">Fully compliant and secure data flow protocols across custom models.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-maroon/20 border border-warm-beige/10 rounded-lg text-luxury-gold mt-1">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-display font-semibold text-warm-beige">Sub-millisecond Speed</h4>
                  <p className="text-xs md:text-sm font-sans text-warm-beige/45">Every platform is optimized for peak performance and layout responses.</p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-warm-beige/10">
              <div className="flex flex-col">
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-beige mb-1">
                  <Counter value={200} />+
                </div>
                <div className="text-[10px] md:text-xs font-display font-bold uppercase tracking-widest text-warm-beige/40">
                  Projects
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-beige mb-1">
                  <Counter value={50} />+
                </div>
                <div className="text-[10px] md:text-xs font-display font-bold uppercase tracking-widest text-warm-beige/40">
                  Clients
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gradient-beige mb-1">
                  <Counter value={5} />+
                </div>
                <div className="text-[10px] md:text-xs font-display font-bold uppercase tracking-widest text-warm-beige/40">
                  Years
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0 }}
            className="w-full h-[350px] md:h-[500px] flex items-center justify-center relative rounded-3xl overflow-hidden glass-card"
          >
            {/* Interactive container */}
            <div ref={canvasContainerRef} className="absolute inset-0 w-full h-full flex items-center justify-center">
              <canvas ref={canvasRef} className="block w-full h-full" />
            </div>

            {/* Small glass stats overlay card */}
            <div className="absolute bottom-6 left-6 p-4 rounded-xl glass-panel border-warm-beige/10 flex items-center space-x-3 pointer-events-none select-none">
              <Users className="w-4 h-4 text-luxury-gold animate-bounce" />
              <div>
                <div className="text-[8px] font-display font-bold uppercase tracking-widest text-warm-beige/45">Active Global Teams</div>
                <div className="text-xs font-sans font-medium text-warm-beige">United States, Europe, India</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
