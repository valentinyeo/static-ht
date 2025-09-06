import { TestimonialTemplate } from '@/components/pages/UseCases/TestimonialTemplate'

// Force static generation to reduce CPU usage on Cloudflare Workers
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour instead of 5 minutes
import {
  idaHeroData,
  idaMetricsOverview,
  idaChallengeSection,
  idaSolutionSection,
  idaResultsSection,
  idaMetricsTable,
  idaKeyFeaturesSection,
  idaWhyItWorksSection,
  idaBottomCTAData,
  idaAboutCompany
} from './ida-data'

export default function TestimonialIdaPage() {
  return (
    <TestimonialTemplate
      heroData={idaHeroData}
      metricsOverview={idaMetricsOverview}
      challengeSection={idaChallengeSection}
      solutionSection={idaSolutionSection}
      resultsSection={idaResultsSection}
      metricsTable={idaMetricsTable}
      keyFeaturesSection={idaKeyFeaturesSection}
      whyItWorksSection={idaWhyItWorksSection}
      bottomCTAData={idaBottomCTAData}
      aboutCompany={idaAboutCompany}
    />
  )
}