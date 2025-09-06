import Hero from '@/components/pages/LandingPage/Hero/hero'
import ClientLogos from '@/components/pages/LandingPage/client-logos'
import { Testimonials, Testimonials2 } from '@/components/pages/LandingPage/testimonials'

// Static generation configuration for maximum caching
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function HomepageDuplicate() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Testimonials />
      <Testimonials2 />
    </>
  )
}