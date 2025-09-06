import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const OUT_DIR = path.resolve('out');
const CRITICAL_CSS_FILE = path.join(OUT_DIR, 'critical.css');

// Critical CSS for above-the-fold content
const CRITICAL_CSS = `
/* Critical above-the-fold styles */
* { box-sizing: border-box; }
body { 
  margin: 0; 
  padding: 0; 
  background: #000; 
  color: #fff; 
  font-family: Inter, system-ui, sans-serif; 
  line-height: 1.5;
}

/* Header styles */
.header-container { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 0 1rem;
  height: 3.5rem;
}

.logo { 
  display: flex; 
  align-items: center; 
  font-weight: bold; 
  color: white; 
  text-decoration: none; 
  font-size: 1rem;
}

.desktop-nav { display: none; }
@media (min-width: 768px) { 
  .desktop-nav { display: flex; } 
  .header-container { padding: 0 2rem; height: 4rem; }
}

/* Hero section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/gradients/gradient(13).avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  padding: 0 1rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* Buttons */
.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: transform 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

/* Loading states */
.loading { opacity: 0; }
.loaded { opacity: 1; transition: opacity 0.2s; }

/* Prevent layout shifts */
img { max-width: 100%; height: auto; }
video { max-width: 100%; height: auto; }
`;

function injectCriticalCSS(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;

  // Remove existing critical CSS if any
  const existingCritical = document.querySelector('style[data-critical]');
  if (existingCritical) {
    existingCritical.remove();
  }

  // Inject critical CSS
  const criticalStyle = document.createElement('style');
  criticalStyle.setAttribute('data-critical', 'true');
  criticalStyle.textContent = CRITICAL_CSS;
  
  // Insert at the beginning of head
  const head = document.head;
  head.insertBefore(criticalStyle, head.firstChild);

  // Add preload for main CSS
  const mainCSS = document.createElement('link');
  mainCSS.rel = 'preload';
  mainCSS.as = 'style';
  mainCSS.href = '/_next/static/css/app/layout.css';
  mainCSS.onload = "this.onload=null;this.rel='stylesheet'";
  head.appendChild(mainCSS);

  // Add fallback stylesheet
  const fallbackCSS = document.createElement('link');
  fallbackCSS.rel = 'stylesheet';
  fallbackCSS.href = '/_next/static/css/app/layout.css';
  fallbackCSS.media = 'print';
  fallbackCSS.onload = "this.media='all'";
  head.appendChild(fallbackCSS);

  fs.writeFileSync(filePath, dom.serialize(), 'utf8');
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.isFile() && e.name.endsWith('.html')) {
      injectCriticalCSS(full);
    }
  }
}

// Write critical CSS file
fs.writeFileSync(CRITICAL_CSS_FILE, CRITICAL_CSS, 'utf8');

// Inject into all HTML files
walk(OUT_DIR);
console.log('Critical CSS extracted and injected successfully!');

