import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const OUT_DIR = path.resolve('out');
const TARGET_DIR = 'C:\\Users\\valen\\Documents\\GitHub\\static-ht';

// Function to clean target directory while preserving .git
function cleanTargetDirectory() {
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
    console.log(`Created target directory: ${TARGET_DIR}`);
    return;
  }

  const entries = fs.readdirSync(TARGET_DIR, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(TARGET_DIR, entry.name);
    
    // Skip .git directory
    if (entry.name === '.git') {
      console.log(`Preserving .git directory: ${fullPath}`);
      continue;
    }
    
    if (entry.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`Removed directory: ${fullPath}`);
    } else {
      fs.unlinkSync(fullPath);
      console.log(`Removed file: ${fullPath}`);
    }
  }
}

// Function to copy files from source to target
function copyFiles(sourceDir, targetDir) {
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
  
  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);
    
    if (entry.isDirectory()) {
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      copyFiles(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.isFile() && e.name.endsWith('.html')) transformHtml(full);
  }
}

function transformHtml(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;

  // 1) <img> → lazy
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
  });

  // 2) <video> → poster + lazy attach sources
  document.querySelectorAll('video').forEach(v => {
    // ensure poster exists; keep any existing poster
    if (!v.hasAttribute('poster')) {
      // optional: set a default poster per design system
      // v.setAttribute('poster', '/media/default-poster.webp');
    }
    v.setAttribute('playsinline', '');
    v.setAttribute('muted', ''); // usually true for hero/loops

    // move <source> to data- attrs to stop immediate download
    const sources = [...v.querySelectorAll('source')];
    sources.forEach((s, i) => {
      const type = s.getAttribute('type') || '';
      const src = s.getAttribute('src') || '';
      if (src) v.setAttribute(`data-src-${i}`, src);
      if (type) v.setAttribute(`data-type-${i}`, type);
      s.remove();
    });

    // annotate hero vs non-hero by class if you have it; keep markup intact
    if (!v.classList.contains('hero-video')) {
      v.setAttribute('data-lazy-video', '1');
      v.setAttribute('preload', 'none'); // Non-hero: no preload
    } else {
      // hero gets metadata only; the sprinkles will attach sources immediately on DOMReady
      v.setAttribute('data-hero-video', '1');
      v.setAttribute('preload', 'metadata'); // Hero: metadata only
    }
  });

  // 3) <script> → defer where safe (non-module, no inline blocking)
  document.querySelectorAll('script[src]:not([async]):not([defer])').forEach(s => {
    // Skip Next runtime and tracking scripts if present
    const src = s.getAttribute('src') || '';
    if (!/\/_next\//.test(src) && !src.includes('facebook') && !src.includes('gtm')) {
      s.setAttribute('defer', '');
    }
  });

  // 4) Add critical resource hints
  const head = document.head;
  
  // Preload critical CSS
  if (!document.querySelector('link[rel="preload"][as="style"]')) {
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/_next/static/css/app/layout.css';
    head.appendChild(criticalCSS);
  }
  
  // Preload critical fonts
  if (!document.querySelector('link[rel="preload"][href*="fonts.googleapis.com"]')) {
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'style';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    head.appendChild(fontPreload);
  }
  
  // Add modulepreload for critical chunks
  const criticalChunks = [
    '/_next/static/chunks/vendors.js',
    '/_next/static/chunks/common.js',
    '/_next/static/chunks/main.js'
  ];
  
  criticalChunks.forEach(chunk => {
    if (!document.querySelector(`link[rel="modulepreload"][href="${chunk}"]`)) {
      const preload = document.createElement('link');
      preload.rel = 'modulepreload';
      preload.href = chunk;
      head.appendChild(preload);
    }
  });

  // Add HTTP/2 Server Push hints
  const pushResources = [
    '/_next/static/css/app/layout.css',
    '/_next/static/chunks/vendors.js',
    '/_next/static/chunks/common.js',
    '/_next/static/chunks/main.js',
    '/essential.min.js'
  ];
  
  pushResources.forEach(resource => {
    if (!document.querySelector(`link[rel="preload"][href="${resource}"]`)) {
      const push = document.createElement('link');
      push.rel = 'preload';
      push.href = resource;
      push.as = resource.endsWith('.css') ? 'style' : 'script';
      head.appendChild(push);
    }
  });

  // 5) inject essential.min.js (minimal JavaScript for static site)
  if (!document.querySelector('script[src="/essential.min.js"]')) {
    const sn = document.createElement('script');
    sn.setAttribute('src', '/essential.min.js');
    sn.setAttribute('defer', '');
    document.body.appendChild(sn);
  }

  fs.writeFileSync(filePath, dom.serialize(), 'utf8');
}

// Main execution
console.log('Starting post-export optimization...');

// Step 1: Clean target directory (preserve .git)
console.log('Cleaning target directory...');
cleanTargetDirectory();

// Step 2: Copy files from out/ to target directory
console.log('Copying files to target directory...');
copyFiles(OUT_DIR, TARGET_DIR);

// Step 3: Apply HTML transformations in target directory
console.log('Applying HTML transformations...');
walk(TARGET_DIR);

console.log('Post-export transforms applied successfully!');
console.log(`Files saved to: ${TARGET_DIR}`);
