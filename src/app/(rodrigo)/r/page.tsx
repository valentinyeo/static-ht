import ClientLogos from '@/components/pages/LandingPage/client-logos'
import HeroRodrigo from '@/components/pages/LandingPage/Hero/hero-rodrigo'
import { Testimonials2 } from '@/components/pages/LandingPage/testimonials'
import TryHypertask from '@/components/pages/LandingPage/try-hypertask'

// Force static generation to reduce CPU usage on Cloudflare Workers
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour instead of 5 minutes
export const fetchCache = 'force-cache' // Force caching for all data fetches
export const preferredRegion = 'auto' // Optimize for closest region

export default function RodrigoTest3() {
  return (
    <>
      {/* Hero with Video - Test 3 Configuration with more aggressive copy */}
      <HeroRodrigo 
        title="Stop Project Chaos Instantly"
        subtitle="The best project management app for AI-powered productivity."
        videoId="iTQ2QwJrn-A"
        ctaPrimary="Get Started for Free"
      />
      <ClientLogos/>
      {/* What our users say - Testimonials */}
      <Testimonials2 />
      
      {/* Catch all - Final CTA */}
      {/* <TryHypertask /> */}
    </>
  )
} 