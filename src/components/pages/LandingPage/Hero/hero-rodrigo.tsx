'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ContentWrapper, Headline, Subheadline } from '@/components/ui'
import { CTAButton } from '@/components/ui/CTA'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

interface HeroVideoProps {
    videoId?: string
    className?: string
    parentClassName?: string
}

const HeroVideo = ({ 
    videoId = "iTQ2QwJrn-A", 
    className = "", 
    parentClassName = "w-full md:mt-20 flex justify-center relative" 
}: HeroVideoProps) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)
    
    const loadVideo = () => {
        setIsVideoLoaded(true)
    }

    return (
        <div
            className={parentClassName}
            style={{
                zIndex: 5,
            }}
        >
            <div className="relative w-full max-w-[90%]">
                <div
                    className={cn("video-container relative w-full overflow-hidden rounded-lg shadow-2xl", className)}
                    style={{
                        paddingBottom: '56.25%' /* 16:9 aspect ratio */,
                        background: '#18181b',
                    }}
                >
                    {!isVideoLoaded ? (
                        // YouTube thumbnail with play button - no third-party scripts loaded
                        <div 
                            className="absolute top-0 left-0 w-full h-full rounded-lg cursor-pointer group"
                            onClick={loadVideo}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    loadVideo()
                                }
                            }}
                            aria-label="Play video"
                        >
                            {/* YouTube thumbnail - loads instantly, no scripts */}
                            <img
                                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                alt="Video thumbnail"
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                                loading="lazy"
                            />
                            
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                            
                            {/* Play button */}
                            <div className="absolute  left-1/2 inset-0 flex items-center justify-center w-16">
                                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path className=" ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f03"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>
                            </div>
                            
                            
                            {/* "Click to play" text */}
                            <div className="absolute bottom-4 left-4 text-white text-sm opacity-80">
                                Click to play video
                            </div>
                        </div>
                    ) : (
                        // Load actual YouTube iframe only after user clicks
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&color=white&theme=dark&autoplay=1`}
                            title="Hypertask Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

interface HeroRodrigoProps {
    title?: string
    subtitle?: string
    ctaPrimary?: string
    videoId?: string
}

const HeroRodrigo = ({
    title = "Stop Project Chaos Instantly",
    subtitle = "The best project management app for AI-powered productivity.",
    ctaPrimary = "Get Started",
    videoId = "iTQ2QwJrn-A",
}: HeroRodrigoProps) => {
    return (
        <section className='py-0  hero mx-auto max-w-[1808px] sm:px-[1.5rem] px-3 ' >
            <div className="section_container w-full">

                {/* Absolute gradient background */}

                {/* <Container className="md:max-h-[88svh] bg-transparent"  variant="hero"> */}

                <ContentWrapper
                    className={cn(
                        "z-10 rounded-2xl relative flex flex-col items-center text-center w-full",
                        // Desktop styles
                        "lg:gap-6 gap-5 lg:px-10 md:pt-24  px-0 pt-12",
                        // Mobile styles
                        "md:gap-5 md:px-10 md:pt-24 md:pb-0 ",
                        "sm:gap-4 sm:px-4 sm:pt-10 sm:pb-12",
                        "px-2 pt-8 pb-4"
                    )}
                >
                   
                    <Headline>{title}</Headline>
                    <Subheadline className="max-w-4xl mx-auto">
                        {subtitle}
                    </Subheadline>
                        <CTAButton
                            id="get-started-button"
                            href={APP_LOGIN_URL}
                            variant="primary"
                            size="lg"
                            target="_blank"
                            className='m-auto'
                        >
                            {ctaPrimary}
                        </CTAButton>
                    {/* Video - Mobile */}
                    <HeroVideo
                        className="md:hidden block md:mt-16"
                        videoId={videoId}
                        parentClassName="w-full  flex justify-center relative"
                    />

                </ContentWrapper>
                {/* </Container> */}

                {/* Video - Desktop */}
                <HeroVideo
                    className="md:block hidden"
                    videoId={videoId}
                    parentClassName="w-full md:mt-20 flex justify-center relative"
                />
            </div>
        </section>
    )
}

export default HeroRodrigo