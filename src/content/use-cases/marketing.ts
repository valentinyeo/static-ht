import type { FeatureModule } from '@/components/pages/UseCases'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

export const marketingHero = {
  title: 'Hypertask for Marketing',
  subtitle: 'Run Complex Campaigns Without the Chaos',
  primaryCta: { label: 'Get Hypertask Free', href: APP_LOGIN_URL, external: true },
  secondaryCta: { label: 'Book a Marketing Demo', href:"https://calendly.com/hypertask/30min"
               },
}

export const marketingFeatureModules: FeatureModule[] = [
  {
    id: 'ai-campaign-planning',
    layout: 'image-left',
    eyebrow: 'Module 1: AI-Powered Campaign Planning',
    headline: 'From Campaign Brief to Execution Plan in Minutes',
    body:
      "TaskWriter revolutionizes how marketing teams plan campaigns. Generate comprehensive campaign briefs, content calendars, and channel strategies with AI that understands your brand voice and marketing objectives.\n\nOur RAG system analyzes your successful past campaigns to maintain brand consistency while custom instructions ensure every campaign follows your messaging framework, target personas, and KPI requirements. Web research integration lets you analyze competitor campaigns and trending topics directly within task creation.",
    bulletsTitle: 'Key capabilities:',
    bullets: [
      'Custom brand voice and tone instructions',
      'Competitor campaign analysis built-in',
      'Automatic content calendar generation',
      'Complete campaign specs from basic ideas',
    ],
    imageUrl: '/images/features/task_subcard_writewithai.avif',
    ctaLabel: 'See AI Campaign Planner',
  },
  {
    id: 'multi-channel-coordination',
    layout: 'text-left',
    eyebrow: 'Module 2: Coordinate Multi-Channel Campaigns Seamlessly',
    headline: 'One Source of Truth for Every Marketing Channel',
    body:
      "Marketing teams juggle social media, email, content, paid ads, and events simultaneously. Hypertask's boards give you instant visibility across all channels while maintaining the flexibility each channel needs.\n\nSmart filters surface tasks by campaign, channel, or deadline. Auto-splits automatically organize incoming performance data and stakeholder feedback by channel. See exactly what's launching when, who's responsible, and how each piece connects to your larger campaign goals.",
    bulletsTitle: 'Built for marketing complexity:',
    bullets: [
      'Manage 10+ campaigns simultaneously',
      'Track assets across all channels',
      'Instant filtering by campaign or channel',
      'Unified view of all marketing activities',
    ],
    imageUrl: '/images/features/boards_mainimage.avif',
    ctaLabel: 'View Campaign Board',
  },
  {
    id: 'content-collaboration',
    layout: 'image-left',
    eyebrow: 'Module 3: Content Collaboration That Actually Works',
    headline: 'End the Endless Revision Email Chains',
    body:
      "Stop losing feedback between email threads, Slack messages, and Google Docs comments. Hypertask's premium inbox keeps all creative feedback, copy revisions, and approval discussions directly within each asset's context.\n\nAI-assisted comment writing helps stakeholders articulate design feedback clearly. Quick approvals happen with keyboard shortcuts. Every revision request, creative note, and final approval stays permanently linked to its asset and campaign.",
    bulletsTitle: 'Collaboration excellence:',
    bullets: [
      'Centralized creative feedback system',
      'AI-powered copy suggestions',
      'Clear approval workflows',
      'Asset version tracking',
    ],
    imageUrl: '/images/features/inbox_main_image.avif',
    ctaLabel: 'Try Creative Inbox',
  },
  {
    id: 'marketing-operations',
    layout: 'text-left',
    eyebrow: 'Module 4: Transform Your Marketing Operations',
    headline: 'From Scattered Coordination to Unified Execution',
    body:
      'Marketing teams using Hypertask report 60% faster campaign launches with 80% less communication overhead. By eliminating tool-switching and consolidating all marketing work, your team focuses on creativity and strategy instead of project management.',
    bulletsTitle: 'Proven results:',
    bullets: [
      '60% faster campaign time-to-market',
      '80% reduction in status meetings',
      '100% of feedback consolidated',
      'Complete campaign history preserved',
    ],
    imageUrl: '/images/features/keyboard_subcard_2.avif',
    ctaLabel: 'See Results',
  },
]

export const marketingBottomCta = {
  title: 'Ready to Streamline Your Marketing Operations?',
  body:
    'See how leading marketing teams use Hypertask to run sophisticated multi-channel campaigns with perfect coordination. From blog posts to product launches – all with better collaboration and clearer communication than ever before.',
  primaryCta: { label: 'Get Hypertask Free', href: APP_LOGIN_URL, external: true },
  secondaryCta: { label: 'Book a Marketing Demo', href:"https://calendly.com/hypertask/30min"
               },
} 