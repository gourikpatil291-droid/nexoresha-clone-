const fs = require('fs');

let css = fs.readFileSync('src/app/portfolio/portfolio.css', 'utf-8');

// Extract @keyframes
let keyframes = [];
let keyframeRegex = /@keyframes\s+[a-zA-Z0-9_-]+\s*{[^{}]*(?:{[^{}]*}[^{}]*)*}/g;

// Since regex for balanced braces is hard, let's just do a simple character loop
function extractKeyframes(cssText) {
    let result = '';
    let kfs = '';
    let i = 0;
    while(i < cssText.length) {
        let kfMatch = cssText.indexOf('@keyframes', i);
        if(kfMatch === -1) {
            result += cssText.slice(i);
            break;
        }
        result += cssText.slice(i, kfMatch);
        let openBraces = 0;
        let j = kfMatch;
        let started = false;
        while(j < cssText.length) {
            if(cssText[j] === '{') {
                openBraces++;
                started = true;
            }
            else if(cssText[j] === '}') {
                openBraces--;
            }
            if(started && openBraces === 0) {
                kfs += cssText.slice(kfMatch, j + 1) + '\n\n';
                i = j + 1;
                break;
            }
            j++;
        }
    }
    return { remaining: result, keyframes: kfs };
}

let parsed = extractKeyframes(css);

let newCss = parsed.keyframes + '\n' + '.portfolio-theme {\n' + parsed.remaining + '\n}';

// Also replace body/html rules that would break if nested
newCss = newCss.replace(/html\s*{/g, '& {');
newCss = newCss.replace(/body\s*{/g, '& {');

fs.writeFileSync('src/app/portfolio/portfolio.css', newCss);
console.log('CSS Scoped successfully!');
