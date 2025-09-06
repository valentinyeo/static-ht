import { Container, ContentWrapper } from '@/components/ui'
import { CTAButton, CTAGroup } from '@/components/ui/cta-button'

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

interface BottomCTASectionProps {
  ctaData: BottomCTAData
}

const secondaryButton = 'border-white text-white bg-transparent hover:bg-white/10'

export function BottomCTASection({ ctaData }: BottomCTASectionProps) {
  return (
    <section id="cta">
      <Container variant="section" className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="mx-auto h-64 w-[90%] rounded-3xl bg-gradient-to-r from-purple-700/25 via-fuchsia-600/20 to-purple-500/25 blur-3xl opacity-60" />
        </div>

        <div className="w-full rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:p-10">
          <ContentWrapper>
            <h3 className="text-balance text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
              {ctaData.title}
            </h3>
            <p className="max-w-3xl text-white/80 text-base md:text-lg font-normal leading-relaxed">
              {ctaData.body}
            </p>
            <CTAGroup>
              <CTAButton
                href={ctaData.primaryCta.href}
                external={Boolean(ctaData.primaryCta.external)}
                variant="primary"
                size="lg"
              >
                {ctaData.primaryCta.label}
              </CTAButton>
              <CTAButton href={ctaData.secondaryCta.href} variant="secondary" size="lg" className={secondaryButton}>
                {ctaData.secondaryCta.label}
              </CTAButton>
            </CTAGroup>
          </ContentWrapper>
        </div>
      </Container>
    </section>
  )
} 