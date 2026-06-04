const fs = require('fs');

// Restore original scripts
fs.copyFileSync('lesse/script.js', 'public/js/script.js');
fs.copyFileSync('lesse/project.js', 'public/js/project.js');

let html = fs.readFileSync('lesse/index.html', 'utf-8');

// Extract body
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
let content = bodyMatch ? bodyMatch[1] : html;

// Remove scripts
content = content.replace(/<script[\s\S]*?<\/script>/g, '');

const jsx = `"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import "./portfolio.css";

export default function PortfolioPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="portfolio-theme w-full relative min-h-screen">
      <main className="clip-x">
        {isMounted && (
            <div dangerouslySetInnerHTML={{ __html: \`${content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
        )}
      </main>

      {isMounted && (
        <>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="afterInteractive" />
          <Script src="/js/script.js" strategy="lazyOnload" />
          <Script src="/js/project.js" strategy="lazyOnload" />
        </>
      )}
    </div>
  );
}`;

fs.writeFileSync('src/app/portfolio/page.tsx', jsx);
console.log('Restored page and scripts!');
