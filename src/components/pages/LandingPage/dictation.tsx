import {
  Headline,
  Subheadline,
  Container,
  ContentWrapper,
  CTAContainer
} from '@/components/ui'
import { CTAButton } from '@/components/ui/cta-button'
import MediaContainer from '@/components/ui/MediaContainer'
import GradientContainer from '@/components/ui/GradientContainer'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

const Dictation = () => {
  return (
      <Container variant="section">
        <ContentWrapper gap="lg">
          <Headline>Ultra-accurate voice-to-text built in.</Headline>
          <Subheadline>
            Just talk. Hypertask captures your thoughts, even in chaos hands-free, multilingual, and instant.
            {/* Hypertask uses Whisper Sync to transcribe your thoughts flawlessly, even with accents or background noise.<br className='hidden md:block'/>
            Multilingual and lightning-fast, it lets you add tasks hands-free without breaking your flow. */}
          </Subheadline>
          
          <GradientContainer gradientVariant='12' variant="fullscreen">
            <MediaContainer 
              src="https://duv2gcpdgd578.cloudfront.net/tasks/attachments/1754315167783voice-to-text.mp4" 
              type="video"
              alt="Dictation Functions"
              className='md:max-w-[75%]'
            />
          </GradientContainer>
           
          {/* CTA Button */}
          <CTAContainer marginTop="sm">
            <CTAButton
              href={APP_LOGIN_URL}
              variant="primary"
              size="lg"
            >
              Get Started
            </CTAButton>
          </CTAContainer>
        </ContentWrapper>
      </Container>
  )
}

export default Dictation