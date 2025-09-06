import { UseCaseTemplate } from '@/components/pages/UseCases'
import { marketingHero, marketingFeatureModules, marketingBottomCta } from '@/content/use-cases/marketing'

// Static generation configuration for maximum caching
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Hypertask for Marketing — AI-Powered Campaign Management',
  description:
    "Run complex multi-channel marketing campaigns without the chaos. Streamline campaign planning, content collaboration, and marketing operations with Hypertask's AI-powered project management platform.",
}

export default function MarketingPage() {
  return (
    <UseCaseTemplate 
      heroData={marketingHero}
      featureModules={marketingFeatureModules}
      bottomCTAData={marketingBottomCta}
    />
  )
} 