const fs = require('fs');

let html = fs.readFileSync('lesse/index.html', 'utf-8');

const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
let content = bodyMatch ? bodyMatch[1] : html;

// Remove scripts
content = content.replace(/<script[\s\S]*?<\/script>/g, '');
// Remove Nav
content = content.replace(/<!-- -- NAV --[\s\S]*?<\/nav>/g, '');
// Remove Mobile Menu
content = content.replace(/<!-- -- MOBILE MENU --[\s\S]*?<\/div>\s*<\/div>/g, ''); // Wait, the div ends at line 40, so let's just use regex for it
content = content.replace(/<div class="mobile-menu" id="mobileMenu">[\s\S]*?<\/ul>\s*<\/div>/g, '');
// Remove custom cursor
content = content.replace(/<!-- Custom cursor -->[\s\S]*?<\/div>/g, ''); // Actually there are two divs

// Let's just dangerouslySetInnerHTML so we don't have to perfectly convert all attributes like class->className etc.
// The issue is that Next.js component will render it as raw HTML.
// Wait, if we use dangerouslySetInnerHTML, React will just inject the raw HTML, meaning class will work perfectly!
// And we don't need to fix self-closing tags, style attributes, etc.!

const jsx = "use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./portfolio.css";

export default function PortfolioPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="portfolio-theme w-full overflow-x-hidden relative flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-[80px]">
        {isMounted && (
            <div dangerouslySetInnerHTML={{ __html: \${content.replace(//g, '\\').replace(/\$/g, '\\$')}\ }} />
        )}
      </main>

      <Footer />

      {isMounted && (
        <>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="lazyOnload" />
          <Script src="/js/script.js" strategy="lazyOnload" />
          <Script src="/js/project.js" strategy="lazyOnload" />
        </>
      )}
    </div>
  );
};

fs.writeFileSync('src/app/portfolio/page.tsx', jsx);
console.log('Done');
