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



           
const RodrigoHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);

  

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
        ${mobileMenuOpen ? 'rounded-t-xl' : 'rounded-xl'}
        ${isScrolled ? 'border-brand-border  transition-colors duration-300' : 'border-transparent'}`
      }
    >
      <div className="header-container flex justify-between items-center px-3 sm:px-8 sm:h-16 h-14 w-full">
        {/* Logo */}
        <div className="logo-container flex items-center relative">
          <Link href="/r" className="logo flex items-center font-bold text-base text-white no-underline">
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
        
        </div>
      </div>
      
    
    </header>
  )
}

export default RodrigoHeader 