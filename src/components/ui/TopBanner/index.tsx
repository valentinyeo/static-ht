'use client'

import { getAppLoginURL } from '@/lib/redirect-utils';
import React, { useState, useEffect } from 'react';

interface TopBannerProps {
  headline?: string;
  subheadline?: string;
  ctaUrl?: string;
  onDismiss?: () => void;
  onCtaClick?: () => void;
}

const TopBanner: React.FC<TopBannerProps> = ({
  headline = "Founding Member Access: Help shape the product while saving 4+ hours per week",
  // subheadline = "Join the first 100 teams and save 40% on your first 6 months",
  ctaUrl = getAppLoginURL(),
  onDismiss,
  onCtaClick
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const isDismissed = localStorage.getItem('topBannerDismissed');
    if (!isDismissed) {
      setIsVisible(true);
      // Trigger animation after component mounts
      setTimeout(() => setIsAnimating(true), 50);
    }
  }, []);

  const handleDismiss = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('topBannerDismissed', 'true');
      onDismiss?.();
    }, 300);
  };

  const handleBannerClick = () => {
    if (ctaUrl) {
      window.open(ctaUrl, '_blank', 'noopener,noreferrer');
    }
    onCtaClick?.();
    // Track banner click if analytics is available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Top Banner',
        event_label: 'Banner Click',
        value: 1
      });
    }
  };

  // No need to manage body padding since banner is not fixed

  if (!isVisible) return null;

  return (
    <div 
      className={`w-full VWO_349 bg-white/5  border-b border-gray-700 px-4 py-3 shadow-lg transition-all duration-300 cursor-pointer ${
        isAnimating ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
      }`}
      role="banner"
      aria-live="polite"
      onClick={handleBannerClick}
      id="get-started-button"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1 flex-1 text-center">
          <h3 className="text-white text-base font-medium">
            {headline}
          </h3>
          {/* <p className="text-gray-300 text-sm">
            {subheadline}
          </p> */}
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          className="text-white hover:bg-white/10 p-2 rounded transition-colors opacity-60 hover:opacity-100 flex-shrink-0 ml-4"
          aria-label="Dismiss banner"
          type="button"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M18 6L6 18M6 6L18 18" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopBanner; 