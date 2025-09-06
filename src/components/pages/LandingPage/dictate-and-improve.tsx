
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

const DictateAndImprove = () => {
  return (
      <Container variant="section">
        <ContentWrapper gap="lg">
          <Headline>Dictate and improve with AI.</Headline>
          <Subheadline>
            Speak your thoughts, then let AI enhance them. Perfect for complex tasks, detailed descriptions, and professional communication.
          </Subheadline>
          
          <GradientContainer gradientVariant='13' variant="fullscreen">
            <MediaContainer 
              src="https://duv2gcpdgd578.cloudfront.net/tasks/attachments/1754314979073dictate%20and%20improve%20module.mp4" 
              type="video"
              alt="Dictate and Improve Functions"
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

export default DictateAndImprove 