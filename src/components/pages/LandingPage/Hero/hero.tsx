// components/Hero.tsx
import {
  Headline,
  Subheadline,
  Container,
  ContentWrapper,
  CTAButton,
  CTAGroup
} from '@/components/ui'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

const Hero = () => {
  return (
    <section className='py-0  hero mx-auto max-w-[1808px] sm:px-[1.5rem] px-3 ' >
      <div className="section_container w-full">
        {/* Hero Content Container with specified padding */}
        <Container className="md:max-h-[88svh] gradient-container gradient-bg-12"  variant="hero">
          {/* Headlines Container with specified gap */}
          <ContentWrapper gap="lg" className="z-10 relative sm:px-0 px-2">
            <Headline variant='hero'>Stop Project Chaos Instantly</Headline>
            <Subheadline variant='hero'>
              The best project management app for AI-powered productivity.
            </Subheadline>
          </ContentWrapper>

          {/* Main Screen Image */}
          <div className="mainscreen-container  order-2 flex-grow flex sm:items-end items-start justify-center w-full relative">
            {/* <Image
              src="/mainscreen.avif"
              alt="Project Board Screen"
              className="mainscreen  object-contain relative top-7 h-fit sm:top-0 max-w-[95%] w-full lg:max-w-[70%] lg:w-[70%] sm:max-w-[95%] sm:w-full rounded-t-lg"
              loading='lazy'
              width={2300}
              height={2100}
            /> */}
            <video
              src="/board-inbox-task.mp4"
              className="mainscreen  object-contain relative top-7 h-fit sm:top-0 max-w-[95%] w-full lg:max-w-[70%] lg:w-[70%] sm:max-w-[95%] sm:w-full rounded-t-lg"
              autoPlay
              muted
              loop
              playsInline
              // ref={(video) => {
              //   if (video) {
              //     video.playbackRate = 0.5;
              //   }
              // }}
            />
          </div>
          
          {/* CTA Container - positioned at bottom on mobile */}
          <CTAGroup orientation="vertical" style={{zIndex: 20}} className="w-full  order-1 sm:w-auto px-4 sm:px-0 absolute sm:relative bottom-4 left-0 right-0 sm:bottom-auto sm:left-auto sm:right-auto sm:mt-6 z-20">
            <div className='flex items-center gap-4 flex-col sm:flex-row w-full'>
              <CTAButton
                id='get-started-button'
                href={APP_LOGIN_URL}
                variant="primary"
                size="hero"
                external
                className="w-full sm:w-auto"
              >
                Get Started
              </CTAButton>
              <CTAButton
                id='get-started-button'
                href="https://calendly.com/hypertask/30min"
                variant="outline"
                size="hero"
                external
                className="w-full sm:w-auto bg-black border-white border sm:border"
              >
                Book Demo
              </CTAButton>
              {/* Reassurance Element */}
            </div>
          <p className="text-white font-semibold tracking-tighter text-base mb-1">
              🔥 Yes, your team will really use it.
            </p>
          </CTAGroup>
          
        </Container>
      </div>
    </section>
  )
}

export default Hero