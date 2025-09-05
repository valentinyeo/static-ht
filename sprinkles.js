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

  // Optional: lazy-load non-critical vendor JS after idle/consent
  window.deferNonCritical = (fn) => {
    if ('requestIdleCallback' in window) requestIdleCallback(fn, { timeout: 2500 });
    else setTimeout(fn, 1500);
  };

  // Example usage (guard behind consent in EU):
  // deferNonCritical(() => {
  //   const s = document.createElement('script');
  //   s.src = 'https://example.com/analytics.js';
  //   s.async = true;
  //   document.head.appendChild(s);
  // });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initHeroes(); initLazyVideos(); });
  } else {
    initHeroes(); initLazyVideos();
  }
})();
