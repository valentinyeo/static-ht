// Core Productivity Features Comparison Table
import Link from 'next/link'
import { MobileTableWithBadge } from './comparison-table-mobile-with-badge'
import { DesktopTableWithBadge } from './comparison-table-desktop-with-badge'
import { Container, ContentWrapper, Subheadline, Headline } from '@/components/ui'
import { competitors } from './comparison-table-data'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

// Core Productivity Features Data
export interface ProductivityComparisonFeature {
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

export const productivityFeatures: ProductivityComparisonFeature[] = [
  {
    feature: "Premium-Level Inbox",
    description: "Superhuman-quality inbox built into project management. Not an afterthought - a core feature designed for speed and efficiency.",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "X"
  },
  {
    feature: "Auto-Splits for Multi-Project Management",
    description: "Automatically clusters notifications by project. Manage 10+ projects effortlessly with intelligent inbox organization.",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "X"
  },
  {
    feature: "Bulk Actions in Inbox",
    description: "The only project management inbox with bulk actions. Archive or defer multiple notifications at once.",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "X"
  },
  {
    feature: "Complete Keyboard Navigation",
    description: "Navigate entire workflows without touching your mouse. Everything is 2 keystrokes away. Gmail-compatible shortcuts for instant productivity.",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "✓",
    monday: "X",
    clickup: "X"
  },
  {
    feature: "Lightning Fast Performance",
    description: "Views load in under 100ms. Zero wait time maintains flow state. The fastest Kanban board on the market.",
    hypertask: "✓",
    notion: "X",
    trello: "✓",
    asana: "X",
    linear: "✓",
    monday: "X",
    clickup: "X"
  },
  {
    feature: "Inbox Zero Philosophy",
    description: "Built-in archiving and inbox processing workflows designed to help teams achieve and maintain Inbox Zero daily.",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "X"
  }
]

export const productivityTableConfig = {
  title: "Built for Speed, Designed for Flow",
  subtitle: "The only project management tool with a premium inbox and complete keyboard control",
  ctaText: "Start Free Trial",
  ctaUrl: APP_LOGIN_URL
}

const ProductivityComparisonTable = () => {
  return (
    <Container variant="section" className=''>
      <ContentWrapper gap="lg">
          <Headline variant="regular">
            {productivityTableConfig.title}
          </Headline>
          <Subheadline>
            {productivityTableConfig.subtitle}
          </Subheadline>
          
          <div className="w-full max-w-full mx-auto overflow-x-auto p-0 md:p-4 bg-transparent md:bg-transparent border border-white/10 md:border-white/10 rounded-lg md:rounded">
            <MobileTableWithBadge features={productivityFeatures} competitors={competitors} />
            <DesktopTableWithBadge features={productivityFeatures} competitors={competitors} />
          </div>

        
      </ContentWrapper>
    </Container>
  )
}

export default ProductivityComparisonTable 