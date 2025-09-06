// AI Communication Features Comparison Table
import { MobileTableWithBadge } from './comparison-table-mobile-with-badge'
import { DesktopTableWithBadge } from './comparison-table-desktop-with-badge'
import { Container, ContentWrapper, Subheadline, Headline } from '@/components/ui'

// AI Communication Features Data
export interface AIComparisonFeature {
  feature: string
  description?: string
  hypertask: "✓" | "~" | "X"
  notion: "✓" | "~" | "X"
  trello: "✓" | "~" | "X"
  asana: "✓" | "~" | "X"
  linear: "✓" | "~" | "X"
  monday: "✓" | "~" | "X"
  clickup: "✓" | "~" | "X"
}

export const aiFeatures: AIComparisonFeature[] = [
  {
    feature: "AI Task Writer with Context",
    description: "Describe tasks in your own words. AI writes complete, detailed tasks using your entire board context - not generic templates.",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "X"
  },
  {
    feature: "Dictate and Improve",
    description: "Speak naturally and get polished, professional text instantly. 4x faster than typing, perfect for non-native speakers.",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "X"
  },
  {
    feature: "Improve Any Text with AI",
    description: "Transform rough drafts into clear, readable communication with one click. Makes every update professional.",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "X"
  },
  {
    feature: "Real-Time AI Task Summaries",
    description: "Press '!' to instantly understand any task or long discussion. Never waste time reading through lengthy content.",
    hypertask: "✓",
    notion: "~",
    trello: "X",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "X"
  },
  {
    feature: "Context-Aware Project Boards",
    description: "AI understands your entire project structure, team members, and history to provide relevant, accurate assistance.",
    hypertask: "✓",
    notion: "~",
    trello: "X",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "X"
  }
]

export const aiTableConfig = {
  title: "AI That Actually Gets Used",
  subtitle: "Not bolted-on AI checkboxes - communication features teams use hundreds of times daily",
  ctaText: "Start Free Trial",
  ctaUrl: APP_LOGIN_URL
}

const AIComparisonTable = () => {
  return (
    <Container variant="section" className=''>
      <ContentWrapper gap="lg">
          <Headline variant="regular">
            {aiTableConfig.title}
          </Headline>
          <Subheadline>
            {aiTableConfig.subtitle}
          </Subheadline>
          
          <div className="w-full max-w-full mx-auto overflow-x-auto p-0 md:p-4 bg-transparent md:bg-transparent border border-white/10 md:border-white/10 rounded-lg md:rounded">
            <MobileTableWithBadge features={aiFeatures} competitors={competitors} />
            <DesktopTableWithBadge features={aiFeatures} competitors={competitors} />
          </div>

        
      </ContentWrapper>
    </Container>
  )
}

// Import competitors from the original data file
import { competitors } from './comparison-table-data'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

export default AIComparisonTable 