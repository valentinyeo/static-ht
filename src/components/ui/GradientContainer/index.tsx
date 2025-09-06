import React from 'react';

interface GradientContainerProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  gradientVariant?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | 'a' | 'b' | 'c' | 'd';
  variant?: 'fullscreen' | 'compact' | 'medium';
  maxWidth?: string;
  padding?: string;
  flexDirection?: 'row' | 'col';
  alignItems?: 'center' | 'start' | 'end';
  justifyContent?: 'center' | 'start' | 'end' | 'between';
}

const GradientContainer: React.FC<GradientContainerProps> = ({
  children,
  className = '',
  backgroundImage,
  gradientVariant = '5', // Default to gradient 5 (was gradient (6).avif)
  variant = 'fullscreen',
  maxWidth,
  padding,
  flexDirection = 'row',
  alignItems = 'center',
  justifyContent = 'center'
}) => {
  // Default values based on variant
  const getDefaultMaxWidth = () => {
    if (maxWidth) return maxWidth;
    switch (variant) {
      case 'fullscreen': return 'max-w-[90vw] md:max-w-[70vw]';
      case 'medium': return 'max-w-4xl';
      case 'compact': return 'max-w-2xl';
      default: return 'max-w-4xl'; 
    }
  };

  const getDefaultPadding = () => {
    if (padding) return padding;
    switch (variant) {
      case 'fullscreen': return 'px-5 pt-14 pb-0';
      case 'medium': return 'p-8';
      case 'compact': return 'p-6';
      default: return 'p-8';
    }
  };

  // Get gradient class based on variant
  const getGradientClass = () => {
    if (backgroundImage) {
      // If backgroundImage is provided, use inline style (fallback)
      return '';
    }
    
    if (gradientVariant === 'a' || gradientVariant === 'b' || gradientVariant === 'c' || gradientVariant === 'd') {
      return `gradient-variant-${gradientVariant}`;
    }
    
    return `gradient-bg-${gradientVariant}`;
  };

  const flexClasses = `flex-${flexDirection} items-${alignItems} justify-${justifyContent}`;
  const baseClasses = `w-[95%] sm:w-[90%] md:w-full h-auto rounded-gradient-bg overflow-hidden flex ${flexClasses} bg-cover ${getGradientClass()}`;
  
  return (
    <div 
      className={`${baseClasses} ${getDefaultMaxWidth()} ${getDefaultPadding()} ${className}`}
      style={backgroundImage ? { backgroundImage: `url("${backgroundImage}")` } : undefined}
    >
      {children}
    </div>
  );
};

export default GradientContainer; 