import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/pages/LandingPage/Hero/hero'))
const VideoShowcase = dynamic(() => import('@/components/pages/LandingPage/video-showcase'))
const ClientLogos = dynamic(() => import('@/components/pages/LandingPage/client-logos'))
const TaskWriter = dynamic(() => import('@/components/pages/LandingPage/task-writer'))
const Inbox = dynamic(() => import('@/components/pages/LandingPage/inbox'))
const AIModels = dynamic(() => import('@/components/pages/LandingPage/ai-models'))
const DictateAndImprove = dynamic(() => import('@/components/pages/LandingPage/dictate-and-improve'))
const Testimonials2 = dynamic(() => import('@/components/pages/LandingPage/testimonials').then(mod => ({ default: mod.Testimonials2 })))
const AIComparisonTable = dynamic(() => import('@/components/pages/LandingPage/Comparison/comparison-table-ai-features'))
const ProductivityComparisonTable = dynamic(() => import('@/components/pages/LandingPage/Comparison/comparison-table-productivity-features'))

// Force static generation to reduce CPU usage on Cloudflare Workers
export const revalidate = 3600 // Revalidate every hour instead of 5 minutes
export const fetchCache = 'force-cache' // Force caching for all data fetches
export const preferredRegion = 'auto' // Optimize for closest region

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Video Section - Right after hero */}
      <VideoShowcase />
      
      {/* <ComparisonTable /> */}
      {/* AI Features Table */}
      <AIComparisonTable />

      {/* Productivity Features Table */}
      <ProductivityComparisonTable />
      
      <ClientLogos />
      <TaskWriter />
      <Inbox />
      <AIModels />
      <DictateAndImprove />
      {/* <Testimonials /> */}
      <Testimonials2 />
    </>
  )
}