// Service Worker for aggressive caching
const CACHE_NAME = 'hypertask-v1';
const STATIC_CACHE = 'hypertask-static-v1';
const DYNAMIC_CACHE = 'hypertask-dynamic-v1';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/vendors.js',
  '/_next/static/chunks/common.js',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/tracking.js',
  '/sprinkles.js',
  '/images/gradients/gradient(13).avif',
  '/hypertask_white.png'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(CRITICAL_RESOURCES);
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip analytics and tracking requests
  if (url.hostname.includes('google') || 
      url.hostname.includes('facebook') || 
      url.hostname.includes('vwo') ||
      url.hostname.includes('posthog')) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((response) => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Cache static assets aggressively
        if (url.pathname.startsWith('/_next/static/') || 
            url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|webp|avif|svg|woff|woff2)$/)) {
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
        } else {
          // Cache pages with shorter TTL
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
        }

        return response;
      });
    })
  );
});
