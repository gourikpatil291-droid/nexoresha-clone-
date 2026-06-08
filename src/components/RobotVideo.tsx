"use client";
import React, { useRef, useEffect } from 'react';

export default function RobotVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    let animationId: number;

    const processFrame = () => {
      if (video.paused || video.ended) {
        animationId = requestAnimationFrame(processFrame);
        return;
      }
      
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;
      
      // Draw the video onto the small processing canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const length = frame.data.length;
      
      // Top-left pixel as the background color key
      const keyR = frame.data[0];
      const keyG = frame.data[1];
      const keyB = frame.data[2];
      
      const threshold = 55; 
      const thresholdSq = threshold * threshold;

      for (let i = 0; i < length; i += 4) {
        const r = frame.data[i];
        const g = frame.data[i + 1];
        const b = frame.data[i + 2];
        
        // Remove Gemini logo (scaled coordinates for the small canvas)
        const pixelIndex = i / 4;
        const x = pixelIndex % canvas.width;
        const y = Math.floor(pixelIndex / canvas.width);

        if (
          (y > canvas.height - 40 && x > canvas.width - 70) || 
          (y < 40 && x > canvas.width - 70)
        ) {
           frame.data[i + 3] = 0;
           continue;
        }

        // Squared distance check is much faster than Math.sqrt
        const distSq = (r - keyR)*(r - keyR) + (g - keyG)*(g - keyG) + (b - keyB)*(b - keyB);
        
        // Hue-based maroon detection
        const min = Math.min(g, b);
        const chroma = r - min;
        let isMaroonHard = false;
        let isMaroonSoft = false;
        let hueAlpha = 255;

        if (r > g && r > b && chroma > 12) {
          const h = (g - b) / chroma;
          if (h > -0.8 && h < 0.25) {
             isMaroonHard = true;
          } else if (h >= 0.25 && h < 0.45) {
             isMaroonSoft = true;
             hueAlpha = ((h - 0.25) / 0.20) * 255;
          }
        }
        
        let alpha = 255;
        
        if (isMaroonHard) {
          alpha = 0;
        } else if (isMaroonSoft) {
          alpha = hueAlpha;
        }
        
        // Distance check
        if (distSq < thresholdSq) {
          const softness = 25; 
          const softnessSq = softness * softness;
          let distAlpha = 255;
          
          if (distSq < (threshold - softness) * (threshold - softness)) {
            distAlpha = 0;
          } else {
            // Approximation for softness gradient
            distAlpha = ((Math.sqrt(distSq) - (threshold - softness)) / softness) * 255;
          }
          alpha = Math.min(alpha, distAlpha);
        }
        
        if (alpha < frame.data[i + 3]) {
          frame.data[i + 3] = alpha > 0 ? alpha : 0;
        }
      }
      
      ctx.putImageData(frame, 0, 0);
      animationId = requestAnimationFrame(processFrame);
    };

    const handlePlay = () => {
      if (!video || !canvas) return;
      
      // Downscale processing resolution by 75% to eliminate CPU lag!
      // The CSS will scale it back up visually.
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        const targetWidth = Math.min(400, video.videoWidth);
        const scale = targetWidth / video.videoWidth;
        const targetHeight = Math.floor(video.videoHeight * scale);
        
        if (canvas.width !== targetWidth) {
          canvas.width = targetWidth;
          canvas.height = targetHeight;
        }
      }
      processFrame();
    };

    video.addEventListener('loadedmetadata', handlePlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('loadeddata', handlePlay);

    if (video.readyState >= 1) {
      handlePlay();
    }

    return () => {
      video.removeEventListener('loadedmetadata', handlePlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('loadeddata', handlePlay);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <video
        ref={videoRef}
        src="/videos/robot-at-ser.mp4"
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      />
      <canvas 
        ref={canvasRef} 
        className="w-full h-auto max-w-full object-contain filter drop-shadow-2xl"
        style={{ filter: "drop-shadow(0 0 30px rgba(197, 168, 128, 0.15))" }}
      />
    </div>
  );
}
