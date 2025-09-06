import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const OUT_DIR = path.resolve('out');

// Image optimization function
function optimizeImages(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html);
  const { document } = dom.window;

  // Optimize all images
  document.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src');
    if (!src) return;

    // Add WebP support with fallback
    if (src.match(/\.(jpg|jpeg|png)$/i)) {
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      // Create picture element for WebP support
      const picture = document.createElement('picture');
      
      // WebP source
      const webpSource = document.createElement('source');
      webpSource.srcset = webpSrc;
      webpSource.type = 'image/webp';
      
      // Original source as fallback
      const originalSource = document.createElement('source');
      originalSource.srcset = src;
      originalSource.type = `image/${src.split('.').pop()}`;
      
      // Clone the img element
      const newImg = img.cloneNode(true);
      
      // Build picture element
      picture.appendChild(webpSource);
      picture.appendChild(originalSource);
      picture.appendChild(newImg);
      
      // Replace original img with picture
      img.parentNode.replaceChild(picture, img);
    }

    // Add loading optimization
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add decoding optimization
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
    
    // Add fetchpriority for above-the-fold images
    if (img.getAttribute('fetchpriority') !== 'high') {
      if (src.includes('hero') || src.includes('logo') || src.includes('gradient')) {
        img.setAttribute('fetchpriority', 'high');
      }
    }
  });

  fs.writeFileSync(filePath, dom.serialize(), 'utf8');
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.isFile() && e.name.endsWith('.html')) {
      optimizeImages(full);
    }
  }
}

walk(OUT_DIR);
console.log('Image optimization applied successfully!');
