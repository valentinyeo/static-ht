import React from 'react';
import GradientContainer from '@/components/ui/GradientContainer';
import MediaContainer from '@/components/ui/MediaContainer';

const MediaContainerExample = () => {
  return (
    <div className="space-y-12 py-12">
      {/* Video Example */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Video Example</h3>
        <GradientContainer variant="fullscreen">
          <MediaContainer 
            src="/taskwriter.mp4" 
            type="video"
            alt="Task Writer Demo Video"
          />
        </GradientContainer>
      </section>

      {/* Video with Controls */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Video with Controls</h3>
        <GradientContainer variant="medium">
          <MediaContainer 
            src="/taskwriter.mp4" 
            type="video"
            alt="Task Writer Demo Video"
            controls={true}
            autoPlay={false}
            className="w-full max-w-lg h-auto rounded-lg shadow-lg"
          />
        </GradientContainer>
      </section>

      {/* Image Example */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Image Example</h3>
        <GradientContainer variant="medium">
          <MediaContainer 
            src="/mainscreen.avif" 
            type="image"
            alt="Main Screen Screenshot"
            width={600}
            height={400}
            className="w-full max-w-lg h-auto rounded-lg shadow-lg"
          />
        </GradientContainer>
      </section>

      {/* GIF Example */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">GIF Example (Animated)</h3>
        <GradientContainer variant="compact">
          <MediaContainer 
            src="/features/htc_small@1x.avif" 
            type="gif"
            alt="Feature Animation"
            width={400}
            height={300}
            className="w-full max-w-sm h-auto rounded-lg shadow-lg"
          />
        </GradientContainer>
      </section>

      {/* Multiple Media in Grid */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Multiple Media Grid</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GradientContainer variant="compact">
            <MediaContainer 
              src="/features/inbox_small@1x.avif" 
              type="image"
              alt="Inbox Feature"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </GradientContainer>
          
          <GradientContainer variant="compact">
            <MediaContainer 
              src="/features/keyboard_shortcuts_small@1x.avif" 
              type="image"
              alt="Keyboard Shortcuts"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </GradientContainer>
        </div>
      </section>

      {/* Custom Styling Example */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Custom Styling</h3>
        <GradientContainer variant="medium" flexDirection="col">
          <h4 className="text-xl font-semibold text-white mb-4">Custom Border & Shadow</h4>
          <MediaContainer 
            src="/mainscreen.avif" 
            type="image"
            alt="Custom Styled Image"
            width={500}
            height={300}
            className="w-full max-w-md h-auto rounded-2xl border-4 border-white/20 shadow-2xl"
          />
        </GradientContainer>
      </section>
    </div>
  );
};

export default MediaContainerExample; 