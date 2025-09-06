import { HeroSection } from './HeroSection'
import { FeatureModules, type FeatureModule } from './FeatureModules'
import { BottomCTASection } from './BottomCTASection'

interface HeroData {
  title: string
  subtitle: string
  primaryCta: { 
    label: string
    href: string
    external?: boolean
  }
  secondaryCta: { 
    label: string
    href: string
  }
}

interface BottomCTAData {
  title: string
  body: string
  primaryCta: {
    label: string
    href: string
    external?: boolean
  }
  secondaryCta: {
    label: string
    href: string
  }
}

interface UseCaseTemplateProps {
  heroData: HeroData
  featureModules: FeatureModule[]
  bottomCTAData: BottomCTAData
}

export function UseCaseTemplate({ heroData, featureModules, bottomCTAData }: UseCaseTemplateProps) {
  return (
    <>
      <HeroSection heroData={heroData} />
      <FeatureModules modules={featureModules} />
      <BottomCTASection ctaData={bottomCTAData} />
    </>
  )
}

// Export types for use in other files
export type { HeroData, BottomCTAData, FeatureModule } 