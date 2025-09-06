import { UseCaseTemplate } from '@/components/pages/UseCases'
import { agencyHero, agencyFeatureModules, agencyBottomCta } from '@/content/use-cases/agency'

// Static generation configuration for maximum caching
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Hypertask for Agencies — Multi-Client Project Management',
  description:
    "Manage multiple clients without losing your mind. Streamline project scoping, client communication, and agency operations with Hypertask's AI-powered project management platform.",
}

export default function AgencyPage() {
  return (
    <UseCaseTemplate 
      heroData={agencyHero}
      featureModules={agencyFeatureModules}
      bottomCTAData={agencyBottomCta}
    />
  )
} 