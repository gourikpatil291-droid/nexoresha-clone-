const fs = require('fs');

let scriptJs = fs.readFileSync('public/js/script.js', 'utf-8');

// Replace top-level DOM queries with let declarations, and assign them in init()
scriptJs = scriptJs.replace(/const cards\s*=\s*Array\.from\(document\.querySelectorAll\('\.showcase__card'\)\);/, 'let cards = [];');
scriptJs = scriptJs.replace(/const infoCategory\s*=\s*document\.getElementById\('infoCategory'\);/, 'let infoCategory = null;');
scriptJs = scriptJs.replace(/const infoDate\s*=\s*document\.getElementById\('infoDate'\);/, 'let infoDate = null;');
scriptJs = scriptJs.replace(/const infoTitle\s*=\s*document\.getElementById\('infoTitle'\);/, 'let infoTitle = null;');
scriptJs = scriptJs.replace(/const counterEl\s*=\s*document\.getElementById\('counterCurrent'\);/, 'let counterEl = null;');
scriptJs = scriptJs.replace(/const prevBtn\s*=\s*document\.getElementById\('prevBtn'\);/, 'let prevBtn = null;');
scriptJs = scriptJs.replace(/const nextBtn\s*=\s*document\.getElementById\('nextBtn'\);/, 'let nextBtn = null;');
scriptJs = scriptJs.replace(/const progressBar\s*=\s*document\.getElementById\('progressBar'\);/, 'let progressBar = null;');
scriptJs = scriptJs.replace(/const viewProjectBtn\s*=\s*document\.getElementById\('viewProjectBtn'\);/, 'let viewProjectBtn = null;');
scriptJs = scriptJs.replace(/const hamburger\s*=\s*document\.getElementById\('hamburger'\);/, 'let hamburger = null;');
scriptJs = scriptJs.replace(/const mobileMenu\s*=\s*document\.getElementById\('mobileMenu'\);/, 'let mobileMenu = null;');
scriptJs = scriptJs.replace(/const navEl\s*=\s*document\.getElementById\('nav'\);/, 'let navEl = null;');
scriptJs = scriptJs.replace(/const scrollHint\s*=\s*document\.getElementById\('scrollHint'\);/, 'let scrollHint = null;');
scriptJs = scriptJs.replace(/const showcaseEl\s*=\s*document\.getElementById\('showcase'\);/, 'let showcaseEl = null;');
scriptJs = scriptJs.replace(/const scrollSpace\s*=\s*document\.querySelector\('\.showcase__scroll-space'\);/, 'let scrollSpace = null;');
scriptJs = scriptJs.replace(/const globalBackTop\s*=\s*document\.getElementById\('globalBackTop'\);/, 'let globalBackTop = null;');

// Add the assignments to init()
let initAssigns = `
    cards = Array.from(document.querySelectorAll('.showcase__card'));
    infoCategory = document.getElementById('infoCategory');
    infoDate = document.getElementById('infoDate');
    infoTitle = document.getElementById('infoTitle');
    counterEl = document.getElementById('counterCurrent');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    progressBar = document.getElementById('progressBar');
    viewProjectBtn = document.getElementById('viewProjectBtn');
    hamburger = document.getElementById('hamburger');
    mobileMenu = document.getElementById('mobileMenu');
    navEl = document.getElementById('nav');
    scrollHint = document.getElementById('scrollHint');
    showcaseEl = document.getElementById('showcase');
    scrollSpace = document.querySelector('.showcase__scroll-space');
    globalBackTop = document.getElementById('globalBackTop');
`;

scriptJs = scriptJs.replace(/function init\(\) \{/, 'function init() {' + initAssigns);

fs.writeFileSync('public/js/script.js', scriptJs);
console.log('script.js updated!');
