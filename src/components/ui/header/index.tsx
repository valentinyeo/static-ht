'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { 
  Button, 
  Navigation, 
  NavigationGroup, 
  CTAButton, 
  CTAGroup 
} from '@/components/ui'
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import { ChevronDown } from 'lucide-react'
import { APP_LOGIN_URL } from '@/lib/redirect-utils';

// Solutions data
const solutionsData = [
  {
    href: "/use-cases/agency",
    title: "For Agencies",
    description: "Multi-client workflows",
  },
  {
    href: "/use-cases/product",
    title: "For Product",
    description: "Ship features faster",
  },
  {
    href: "/use-cases/marketing",
    title: "For Marketing",
    description: "Run campaigns",
  },
  {
    href: "/use-cases/cro",
    title: "For CRO",
    description: "Scale experimentation",
  },
];

// Customer Stories data
const customerStoriesData = [
  {
    href: "/testimonial-ida",
    title: "IDA",
    description: "Real results from teams",
  },
];

type UseCaseLinksProps = {
  className?: string;
};

const UseCaseLinks: React.FC<UseCaseLinksProps> = ({ className = "" }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-6">
      {/* Solutions Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Solutions</h3>
        <div className="space-y-1">
          {solutionsData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-md px-3 py-2 hover:bg-white/10 transition-colors ${className}`}
            >
              <div className="text-base font-semibold text-white">{link.title}</div>
              <div className="text-sm text-neutral mt-1">{link.description}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Customer Stories Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Customer Stories</h3>
        <div className="space-y-1">
          {customerStoriesData.map((story) => (
            <Link
              key={story.href}
              href={story.href}
              className={`block rounded-md px-3 py-2 hover:bg-white/10 transition-colors border border-white/10 ${className}`}
            >
              <div className="text-base font-semibold text-white">{story.title}</div>
              <div className="text-sm text-neutral mt-1">{story.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Desktop Use Cases mega menu
function UseCasesMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-neutral rounded-sm hover:text-white hover:bg-white/10 transition-all duration-200 p-2 font-semibold no-underline text-base bg-transparent">
            Use Cases
          </NavigationMenuTrigger>
          <NavigationMenuContent className="md:w-auto left-0 md:left-auto">
            <div className="bg-black text-white border border-white/5 rounded-xl shadow-xl w-[90vw] md:w-[600px] max-w-[calc(100vw-2rem)]">
              <UseCaseLinks />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
           
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileUseCasesOpen(false); // Also close use cases submenu
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={
        `header-main-container border-1  mb-5 sticky top-5 z-[9999] w-[90vw] sm:w-[85vw] md:w-[95vw] mx-auto shadow-lg bg-black
        ${mobileMenuOpen ? 'rounded-t-xl rounded-b-none' : 'rounded-xl'}
        ${isScrolled ? 'border-brand-border  transition-colors duration-300' : 'border-transparent'}`
      }
    >
      <div className="header-container flex justify-between items-center px-3 sm:px-8 sm:h-16 h-14 w-full">
        {/* Logo */}
        <div className="logo-container flex items-center relative">
          <Link href="/" className="logo flex items-center font-bold text-base text-white no-underline">
            <Image 
              className=' sm:h-7 h-6 w-full ' 
              height={200} 
              width={200} 
              src="/hypertask_white.png" 
              alt="HYPERTASK.AI Logo" 
              loading="lazy"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation - 24px gap on large screens */}
        <div className="desktop-nav hidden md:flex items-center gap-0 lg:gap-6">
          <Navigation 
            links={[
              { href: '/pricing', label: 'Pricing' },
              { href: '/features', label: 'Features' },
            ]}
            gap="lg" // 24px gap as specified
          />
          <UseCasesMegaMenu />
          <Navigation 
            links={[
              // { href: 'https://blog.hypertask.ai', label: 'Blog', external: true },
              { href: 'https://help.hypertask.ai/', label: 'Help', external: true },
            ]}
            gap="lg" // 24px gap as specified
          />
        </div>
        
        {/* Desktop Auth Buttons - 20px gap */}
        <div className="desktop-auth hidden md:block">
          <CTAGroup >
            <CTAButton 
              id='login-button'
              href={APP_LOGIN_URL} 
              variant="secondary"
              size="header"
              external
            >
              Login
            </CTAButton>
            <CTAButton 
              id='get-started-button'
              href={APP_LOGIN_URL} 
              variant="primary"
              size="header"
              external
            >
              Get Started
            </CTAButton>
          </CTAGroup>
        </div>
        
        {/* Mobile CTA + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <CTAButton 
            id='mobile-get-started-button'
            href={APP_LOGIN_URL} 
            variant="primary"
            size="header"
            external
          >
            Get Started
          </CTAButton>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="hamburger text-white p-2" 
            aria-label="Toggle menu" 
            onClick={toggleMobileMenu}
          >
            <span className="text-xl sm:text-2xl">☰</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu - 20px gap on smaller screens */}
      <div
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } absolute left-0 right-0 bg-black p-4 z-50 md:hidden rounded-b-xl`}
      >
        <NavigationGroup className='flex-col items-stretch' gap="sm"> {/* stack content and left align */}
          <Navigation 
            links={[
              { href: '/pricing', label: 'Pricing' },
              { href: '/features', label: 'Features' },
            ]}
            orientation="vertical"
            gap="sm"
            className="gap-2"
            linkClassName="w-full text-left block"
            onClick={closeMobileMenu} // Add click handler to close menu
          />
        </NavigationGroup>
        
        {/* Mobile Use Cases collapsible - positioned between Features and Blog */}
        <div>
          <button
            className="w-full flex items-center justify-between px-2 py-4 rounded-md text-neutral hover:text-white hover:bg-white/10 transition font-semibold text-left"
            onClick={() => setMobileUseCasesOpen((v) => !v)}
            aria-expanded={mobileUseCasesOpen}
          >
            <span>Use Cases</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileUseCasesOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`${mobileUseCasesOpen ? 'block' : 'hidden'} mt-1 space-y-3`}> 
            {/* Solutions */}
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">Solutions</h4>
              <div className="space-y-1">
                <Link href="/use-cases/agency" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10 text-left" onClick={closeMobileMenu}>For Agencies</Link>
                <Link href="/use-cases/product" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10 text-left" onClick={closeMobileMenu}>For Product</Link>
                <Link href="/use-cases/marketing" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10 text-left" onClick={closeMobileMenu}>For Marketing</Link>
                <Link href="/use-cases/cro" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10 text-left" onClick={closeMobileMenu}>For CRO</Link>
              </div>
            </div>
            
            {/* Customer Stories */}
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">Customer Stories</h4>
              <div className="space-y-1">
                <Link href="/testimonial-ida" className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10 text-left border border-white/10 mx-3" onClick={closeMobileMenu}>IDA</Link>
              </div>
            </div>
          </div>
        </div>
        
        <NavigationGroup className='flex-col items-stretch' gap="sm">
          <Navigation 
            links={[
              // { href: 'https://blog.hypertask.ai', label: 'Blog', external: true },
              { href: 'https://help.hypertask.ai/', label: 'Help', external: true },
            ]}
            orientation="vertical"
            gap="sm"
            className="gap-2"
            linkClassName="w-full text-left block"
            onClick={closeMobileMenu} // Add click handler to close menu
          />
          <CTAGroup className='hidden' orientation="vertical" >
            <CTAButton 
              id='login-button'
              href={APP_LOGIN_URL} 
              variant="outline"
              size="header"
              external
              className="w-full"
              onClick={closeMobileMenu} // Add click handler to close menu
            >
              Login
            </CTAButton>
            <CTAButton 
              id='get-started-button'
              href={APP_LOGIN_URL} 
              variant="primary"
              size="header"
              external
              className="w-full"
              onClick={closeMobileMenu} // Add click handler to close menu
            >
              Get Started
            </CTAButton>
          </CTAGroup>
        </NavigationGroup>
        <CTAGroup  className='flex justify-center-center ' >
            <CTAButton 
              id='get-started-button'
              href={APP_LOGIN_URL} 
              variant="secondary"
              external
              className='w-full'
              onClick={closeMobileMenu} // Add click handler to close menu
            >
              Login
            </CTAButton>
            <CTAButton 
              id='get-started-button'
              href={APP_LOGIN_URL} 
              variant="primary"
              size="header"
              external
              className='w-full'
              onClick={closeMobileMenu} // Add click handler to close menu
            >
              Get Started
            </CTAButton>
          </CTAGroup>
      </div>
    </header>
  )
}

export default Header