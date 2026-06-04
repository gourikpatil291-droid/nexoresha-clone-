const fs = require('fs');

let style = fs.readFileSync('lesse/style.css', 'utf-8');
let project = fs.readFileSync('lesse/project.css', 'utf-8');

let css = style + '\n' + project;

// Extract @keyframes
let keyframes = '';
let i = 0;
while(i < css.length) {
    let kfMatch = css.indexOf('@keyframes', i);
    if(kfMatch === -1) {
        break;
    }
    let openBraces = 0;
    let j = kfMatch;
    let started = false;
    while(j < css.length) {
        if(css[j] === '{') {
            openBraces++;
            started = true;
        }
        else if(css[j] === '}') {
            openBraces--;
        }
        if(started && openBraces === 0) {
            keyframes += css.slice(kfMatch, j + 1) + '\n\n';
            css = css.slice(0, kfMatch) + css.slice(j + 1);
            i = kfMatch;
            break;
        }
        j++;
    }
}

// Replace theme colors in :root
css = css.replace(/:root\s*{[\s\S]*?}/, `& {
  --beige-light:  #F4EFE6;
  --beige:        #EAE0D0;
  --beige-mid:    #FFFDF9;
  --beige-dark:   #C5A880;
  --maroon:       #7B1822;
  --maroon-mid:   #5A121A;
  --maroon-light: #9A2222;
  --maroon-deep:  #3A080C;
  --text-dark:    #3A080C;
  --text-mid:     #5A121A;
  --text-light:   #C5A880;

  --font-serif: var(--font-outfit), system-ui, sans-serif;
  --font-sans:  var(--font-jakarta), system-ui, sans-serif;

  --ease-out:    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}`);

// Replace body with & (targets .portfolio-theme)
css = css.replace(/body\s*{/g, '& {');
css = css.replace(/html\s*{/g, '& {');

// Add clip-x
css += `
&.clip-x { overflow-x: clip; }
`;

let finalCss = keyframes + '\n' + '.portfolio-theme {\n' + css + '\n}\n\nhtml:has(.portfolio-theme) {\n  scroll-behavior: auto !important;\n  overflow-x: clip !important;\n}';

fs.writeFileSync('src/app/portfolio/portfolio.css', finalCss);
console.log('Fixed CSS scope!');
