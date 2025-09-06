// components/AIModels.tsx
import { CTAButton } from '@/components/ui/cta-button'
import { Container, ContentWrapper, Headline, Subheadline, CTAContainer } from '@/components/ui'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

interface AIModelColumnProps {
  title: string
  icon: React.ReactNode
  models: string[]
}

const AIModelColumn = ({ title, icon, models }: AIModelColumnProps) => {
  // Helper function to check if a model should have subtle highlighting
  const isHighlightedModel = (model: string) => {
    return model.includes('GPT-5') || model.includes('GPT 5')
  }

  return (
    <div className="bg-white/5 rounded-2xl p-8 md:p-10 text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:bg-white/8 border border-white/10">
      <div className="flex flex-col items-center mb-8 pb-6 border-b border-white/10">
        <div className="mb-4 opacity-90 transition-opacity duration-300 hover:opacity-100">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white m-0 tracking-wide">
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-3">
        {models.map((model, index) => (
          <div
            key={index}
            className={`text-base font-medium text-white/85 py-2 px-4 bg-white/5 rounded-lg border transition-all duration-200 hover:bg-white/10 hover:text-white hover:translate-x-1 tracking-wide ${
              isHighlightedModel(model) 
                ? 'border-purple-300 border-opacity-40 shadow-[0_0_8px_oklch(0.6_0.2_250/0.15)]' 
                : 'border-white/10'
            }`}
          >
            {model}
          </div>
        ))}
      </div>
    </div>
  )
}

const AIModels = () => {
  const aiModels: AIModelColumnProps[] = [
    {
      title: "OpenAI",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="#fff"/>
        </svg>
      ),
      models: ["GPT-5","GPT-5-mini","GPT 4.1", "GPT 4.5", "o4 Mini", "o3"]
    },
    {
      title: "Anthropic",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      models: ["Opus 4", "Sonnet 4", "Haiku 3.5"]
    },
    {
      title: "Google",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
      models: ["Gemini 2.5 Pro", "Gemini 2.5 Flash"]
    }
  ]

  return (
    <Container variant="section">
      <ContentWrapper gap="lg">

        <Headline variant="regular">
          One Workspace. All the AIs.
        </Headline>
        <Subheadline>
          Choose from the best AI models for your workflow.
        </Subheadline>
        
        <div className="w-[90%] max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12">
            {aiModels.map((model, index) => (
              <AIModelColumn key={index} {...model} />
            ))}
          </div>
        </div>

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

export default AIModels