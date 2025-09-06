import { UseCaseTemplate } from '@/components/pages/UseCases'
import { croHero, croFeatureModules, croBottomCta } from '@/content/use-cases/cro'

// Static generation configuration for maximum caching
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Hypertask for CRO — AI-Powered Project Management',
  description:
    "Scale your A/B testing with AI-powered project management. Transform CRO workflows with Hypertask's AI Task Writer, Superhuman-style inbox, and experiment boards.",
}



export default function CROPage() {
  return (
    <UseCaseTemplate 
      heroData={croHero}
      featureModules={croFeatureModules}
      bottomCTAData={croBottomCta}
    />
  )
} 