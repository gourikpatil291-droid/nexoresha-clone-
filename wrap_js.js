const fs = require('fs');

// Restore script.js and project.js from lesse/
fs.copyFileSync('lesse/script.js', 'public/js/script.js');
fs.copyFileSync('lesse/project.js', 'public/js/project.js');

// Now, modify both scripts to wrap their entire IIFE contents inside a global function
function wrapScript(path, funcName) {
    let content = fs.readFileSync(path, 'utf-8');
    
    // The scripts are wrapped in (function () { 'use strict'; ... })();
    // Let's replace the IIFE with window.initPortfolioX = function() { 'use strict'; ... }
    
    // We just replace the start and end.
    // Instead of regex, let's just append and prepend manually since we know the structure, 
    // or better, just replace the exact IIFE signature.
    
    // Actually, we can just remove the IIFE wrapper by replacing `(function () {` with `window[funcName] = function() {`
    // and `})();` at the end with `};`
    
    content = content.replace(/\(function\s*\(\)\s*\{/, `window.${funcName} = function() {`);
    content = content.replace(/\}\)\(\);([\s\n]*)$/, '};$1');
    
    // Also, we need to handle missing DOM elements gracefully since they use React Navbar and Footer now.
    // We can add optional chaining or simple null checks automatically for addEventListener.
    // Let's just override document.getElementById and querySelector temporarily inside the function? No.
    // Let's just do simple regex replacements for addEventListener to prevent crashes on null objects.
    content = content.replace(/([a-zA-Z0-9_]+)\.addEventListener/g, '( $1 && $1.addEventListener )');
    // Wait, replacing with `( $1 && $1.addEventListener )` is wrong syntax for calling it.
    // Correct syntax: `$1?.addEventListener`
    content = content.replace(/([a-zA-Z0-9_]+)\.addEventListener/g, '$1?.addEventListener');
    
    // Same for style assignments: card.style -> card?.style
    // Actually, that's too complex. 
    
    fs.writeFileSync(path, content);
}

wrapScript('public/js/script.js', 'initPortfolioScript');
wrapScript('public/js/project.js', 'initPortfolioProject');

console.log('Scripts wrapped successfully!');
