(function () {
  // attach <source> children from data-attrs (prevents preload)
  function attachSources(videoEl) {
    if (videoEl.dataset.ready) return;
    let i = 0, created = 0;
    while (videoEl.hasAttribute(`data-src-${i}`)) {
      const src = videoEl.getAttribute(`data-src-${i}`);
      const type = videoEl.getAttribute(`data-type-${i}`) || '';
      const source = document.createElement('source');
      source.src = src;
      if (type) source.type = type;
      videoEl.appendChild(source);
      i++; created++;
    }
    if (created) {
      videoEl.dataset.ready = '1';
      videoEl.load();
      // try to autoplay silently
      if (videoEl.muted) videoEl.play().catch(()=>{});
    }
  }

  // Hero videos: attach on DOM ready (keeps first view snappy with poster fallback)
  function initHeroes() {
    document.querySelectorAll('video[data-hero-video]').forEach(attachSources);
  }

  // Non-hero videos: attach on intersection
  function initLazyVideos() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          attachSources(e.target);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '200px 0px' });
    document.querySelectorAll('video[data-lazy-video]').forEach(v => io.observe(v));
  }

  // Lazy-load non-critical vendor JS after idle/consent
  window.deferNonCritical = (fn) => {
    if ('requestIdleCallback' in window) requestIdleCallback(fn, { timeout: 2500 });
    else setTimeout(fn, 1500);
  };

  // Load non-critical analytics after page is interactive
  window.loadNonCriticalAnalytics = () => {
    // Load VWO, PostHog, and other non-critical analytics async
    const analyticsScript = document.createElement('script');
    analyticsScript.src = '/_next/static/chunks/analytics.js';
    analyticsScript.async = true;
    document.head.appendChild(analyticsScript);
  };

  // Auto-load non-critical analytics after 2 seconds (or on user interaction)
  let nonCriticalAnalyticsLoaded = false;
  const loadNonCriticalAnalyticsOnInteraction = () => {
    if (!nonCriticalAnalyticsLoaded) {
      nonCriticalAnalyticsLoaded = true;
      window.loadNonCriticalAnalytics();
      // Remove listeners after first load
      document.removeEventListener('click', loadNonCriticalAnalyticsOnInteraction);
      document.removeEventListener('scroll', loadNonCriticalAnalyticsOnInteraction);
    }
  };

  // Load non-critical analytics on first user interaction or after 2s
  document.addEventListener('click', loadNonCriticalAnalyticsOnInteraction, { once: true });
  document.addEventListener('scroll', loadNonCriticalAnalyticsOnInteraction, { once: true });
  setTimeout(loadNonCriticalAnalyticsOnInteraction, 2000);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initHeroes(); initLazyVideos(); });
  } else {
    initHeroes(); initLazyVideos();
  }
})();
