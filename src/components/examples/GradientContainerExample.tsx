import React from 'react';
import GradientContainer from '@/components/ui/GradientContainer';

const GradientContainerExample = () => {
  return (
    <div className="space-y-12 py-12">
      {/* Fullscreen variant - for videos, large content */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Fullscreen Variant</h3>
        <GradientContainer variant="fullscreen">
          <video 
            className="w-full md:max-w-2xl h-auto rounded-t-[10px] shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/taskwriter.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </GradientContainer>
      </section>

      {/* Medium variant - for feature showcases */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Medium Variant</h3>
        <GradientContainer variant="medium" flexDirection="col">
          <h4 className="text-xl font-semibold text-white mb-4">Feature Showcase</h4>
          <p className="text-white/80 text-center max-w-md">
            This is a medium-sized gradient container perfect for showcasing features 
            or important content sections.
          </p>
        </GradientContainer>
      </section>

      {/* Compact variant - for CTAs, small content */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Compact Variant</h3>
        <GradientContainer variant="compact" flexDirection="col">
          <h4 className="text-lg font-semibold text-white mb-2">Call to Action</h4>
          <p className="text-white/80 text-center text-sm mb-4">
            Ready to get started?
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold">
            Get Started
          </button>
        </GradientContainer>
      </section>

      {/* Custom variant with different background */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Custom Background</h3>
        <GradientContainer 
          variant="medium" 
          backgroundImage="/gradient2.avif"
          flexDirection="col"
        >
          <h4 className="text-xl font-semibold text-white mb-4">Custom Gradient</h4>
          <p className="text-white/80 text-center max-w-md">
            You can easily customize the background image by passing a different 
            backgroundImage prop.
          </p>
        </GradientContainer>
      </section>

      {/* Horizontal layout */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Horizontal Layout</h3>
        <GradientContainer 
          variant="medium" 
          flexDirection="row"
          justifyContent="between"
          className="gap-8"
        >
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-2">Left Content</h4>
            <p className="text-white/80 text-sm">
              Content on the left side of the container.
            </p>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-2">Right Content</h4>
            <p className="text-white/80 text-sm">
              Content on the right side of the container.
            </p>
          </div>
        </GradientContainer>
      </section>
    </div>
  );
};

export default GradientContainerExample; 