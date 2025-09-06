import { UseCaseTemplate } from '@/components/pages/UseCases'
import { productHero, productFeatureModules, productBottomCta } from '@/content/use-cases/product'

// Static generation configuration for maximum caching
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Hypertask for Product Development — AI-Powered Feature Management',
  description:
    "Ship features faster with AI-powered product management. Streamline PRD creation, roadmap planning, and stakeholder communication with Hypertask's intelligent project management platform.",
}

export default function ProductPage() {
  return (
    <UseCaseTemplate 
      heroData={productHero}
      featureModules={productFeatureModules}
      bottomCTAData={productBottomCta}
    />
  )
} 