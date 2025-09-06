// Ultra-minimal JavaScript for static site - ~2KB total
(function() {
  'use strict';
  
  // Mobile menu toggle
  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }
  
  // Header scroll effect
  function handleScroll() {
    const header = document.querySelector('.header-main-container');
    if (header) {
      const isScrolled = window.scrollY > 0;
      header.classList.toggle('border-brand-border', isScrolled);
      header.classList.toggle('border-transparent', !isScrolled);
    }
  }
  
  // Smooth scroll for anchor links
  function handleSmoothScroll(e) {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
      e.preventDefault();
      const targetId = target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
  // Initialize when DOM is ready
  function init() {
    // Mobile menu
    const menuButton = document.querySelector('.hamburger');
    if (menuButton) {
      menuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Scroll effects
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Smooth scrolling
    document.addEventListener('click', handleSmoothScroll);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      const menu = document.getElementById('mobile-menu');
      const menuButton = document.querySelector('.hamburger');
      if (menu && !menu.contains(e.target) && !menuButton?.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Expose toggle function globally for onclick handlers
  window.toggleMobileMenu = toggleMobileMenu;
  
})();
