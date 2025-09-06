
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

const Inbox = () => {
  return (
      <Container variant="section">
        <ContentWrapper gap="lg">
          <Headline>Smart inbox that works for you.</Headline>
          <Subheadline>
            Your inbox automatically organizes, prioritizes, and transforms incoming information into actionable tasks.
          </Subheadline>
          
          <GradientContainer gradientVariant='11' variant="fullscreen">
            <MediaContainer 
              src="https://duv2gcpdgd578.cloudfront.net/tasks/attachments/1754433893575Inbox%20homepage%20movie%20%282%29.mp4" 
              type="video"
              alt="Inbox Functions"
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

export default Inbox 