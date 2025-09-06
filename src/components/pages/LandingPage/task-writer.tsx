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

const TaskWriter = () => {
  return (
      <Container variant="section">
        <ContentWrapper gap="lg">
          <Headline>Say what you need. Get the task.</Headline>
          <Subheadline>
            Hypertask <b>learns your projects</b>, so every ticket is context-aware. <br className='hidden md:block' />
            Just describe what you need and get clear, detailed tasks instantly.
          </Subheadline>
          
          <GradientContainer gradientVariant='12' variant="fullscreen">
            <MediaContainer 
              src="/taskwriter.mp4" 
              type="video"
              alt="Task Writer Demo Video"
              className=''
            />
          </GradientContainer>

          {/* CTA Button */}
          <CTAContainer marginTop="sm">
            <CTAButton
              href={APP_LOGIN_URL}
              variant="primary"
              size="lg"
              className="w-full md:w-fit"
            >
              Get Started
            </CTAButton>
          </CTAContainer>
        </ContentWrapper>
      </Container>
  )
}

export default TaskWriter