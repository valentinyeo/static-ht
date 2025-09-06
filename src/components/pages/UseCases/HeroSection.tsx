import { Container, ContentWrapper, Headline, Subheadline } from '@/components/ui'
import { CTAButton, CTAGroup } from '@/components/ui/cta-button'

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

interface HeroSectionProps {
  heroData: HeroData
}

const secondaryButton = 'border-white text-white bg-transparent hover:bg-white/10'

export function HeroSection({ heroData }: HeroSectionProps) {
  return (
      <Container variant="hero" className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="mx-auto h-[420px] w-[85%] rounded-full bg-gradient-to-r from-purple-700/25 via-fuchsia-600/20 to-purple-500/25 blur-3xl opacity-50" />
        </div>

        <ContentWrapper gap="lg">
          <Headline variant="hero">{heroData.title}</Headline>
          <Subheadline>{heroData.subtitle}</Subheadline>

          <CTAGroup>
            <CTAButton
              href={heroData.primaryCta.href}
              external={Boolean(heroData.primaryCta.external)}
              variant="primary"
              size="hero"
            >
              {heroData.primaryCta.label}
            </CTAButton>
            <CTAButton href={heroData.secondaryCta.href} variant="secondary" size="hero" className={secondaryButton}>
              {heroData.secondaryCta.label}
            </CTAButton>
          </CTAGroup>
        </ContentWrapper>
      </Container>
  )
} 