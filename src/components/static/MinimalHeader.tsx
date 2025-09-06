// Ultra-minimal header for static export - no React state needed
import Link from 'next/link';
import Image from 'next/image';

export default function MinimalHeader() {
  return (
    <header className="header-main-container border-1 mb-5 sticky top-5 z-[9999] w-[90vw] sm:w-[85vw] md:w-[95vw] mx-auto shadow-lg bg-black rounded-xl border-transparent">
      <div className="header-container flex justify-between items-center px-3 sm:px-8 sm:h-16 h-14 w-full">
        {/* Logo */}
        <div className="logo-container flex items-center relative">
          <Link href="/" className="logo flex items-center font-bold text-base text-white no-underline">
            <Image 
              className="sm:h-7 h-6 w-full" 
              height={200} 
              width={200} 
              src="/hypertask_white.png" 
              alt="HYPERTASK.AI Logo" 
              loading="lazy"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav hidden md:flex items-center gap-0 lg:gap-6">
          <Link href="/pricing" className="text-neutral hover:text-white transition-colors">Pricing</Link>
          <Link href="/features" className="text-neutral hover:text-white transition-colors">Features</Link>
          <a href="https://help.hypertask.ai/" className="text-neutral hover:text-white transition-colors" target="_blank" rel="noopener">Help</a>
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="desktop-auth hidden md:flex items-center gap-5">
          <a 
            href="https://app.hypertask.ai/login" 
            className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/10 transition-colors"
            target="_blank"
            rel="noopener"
          >
            Login
          </a>
          <a 
            href="https://app.hypertask.ai/signup" 
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener"
          >
            Get Started
          </a>
        </div>
        
        {/* Mobile CTA + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <a 
            href="https://app.hypertask.ai/signup" 
            className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener"
          >
            Get Started
          </a>
          {/* Mobile Menu Button - uses vanilla JS */}
          <button
            className="hamburger text-white p-2"
            aria-label="Toggle menu"
            onClick={() => {
              if (typeof window !== 'undefined' && window.toggleMobileMenu) {
                window.toggleMobileMenu();
              }
            }}
          >
            <span className="text-xl sm:text-2xl">☰</span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu - controlled by vanilla JS */}
      <div id="mobile-menu" className="hidden absolute left-0 right-0 bg-black p-4 z-50 md:hidden rounded-b-xl">
        <nav className="flex flex-col gap-4">
          <Link href="/pricing" className="text-neutral hover:text-white transition-colors">Pricing</Link>
          <Link href="/features" className="text-neutral hover:text-white transition-colors">Features</Link>
          <a href="https://help.hypertask.ai/" className="text-neutral hover:text-white transition-colors" target="_blank" rel="noopener">Help</a>
          <div className="flex flex-col gap-2 pt-4">
            <a 
              href="https://app.hypertask.ai/login" 
              className="w-full px-4 py-2 text-sm font-medium text-white bg-transparent border border-white/20 rounded-md hover:bg-white/10 transition-colors text-center"
              target="_blank"
              rel="noopener"
            >
              Login
            </a>
            <a 
              href="https://app.hypertask.ai/signup" 
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-center"
              target="_blank"
              rel="noopener"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

// Vanilla JS for mobile menu - no React needed
declare global {
  interface Window {
    toggleMobileMenu: () => void;
  }
}

if (typeof window !== 'undefined') {
  window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };
}
