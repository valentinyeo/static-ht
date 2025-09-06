import type { FeatureModule } from '@/components/pages/UseCases'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

export const productHero = {
  title: 'Hypertask for Product Development',
  subtitle: 'Ship Features Faster with AI-Powered Product Management',
  primaryCta: { label: 'Get Hypertask Free', href: APP_LOGIN_URL, external: true },
  secondaryCta: { label: 'Book a Product Demo', href:"https://calendly.com/hypertask/30min"
               },
}

export const productFeatureModules: FeatureModule[] = [
  {
    id: 'ai-product-specs',
    layout: 'image-left',
    eyebrow: 'Module 1: AI-Generated Product Specs That Engineers Love',
    headline: 'From User Story to Technical Specification in Minutes',
    body:
      "TaskWriter transforms how product teams create feature specifications. Generate comprehensive PRDs, user stories, and acceptance criteria with AI that understands your product architecture and technical constraints.\n\nOur RAG system learns from your existing features to maintain product consistency while custom instructions ensure every spec includes edge cases, performance requirements, and API considerations. Web research integration lets you analyze competitor features and industry standards directly within spec creation.",
    bulletsTitle: 'Key capabilities:',
    bullets: [
      'Technical requirement generation',
      'User story decomposition with acceptance criteria',
      'Automatic edge case identification',
      'API and integration specifications',
    ],
    imageUrl: '/images/features/task_subcard_writewithai.avif',
    ctaLabel: 'See AI Spec Writer',
  },
  {
    id: 'complex-roadmaps',
    layout: 'text-left',
    eyebrow: 'Module 2: Manage Complex Roadmaps with Perfect Clarity',
    headline: 'See Every Feature\'s Journey from Idea to Launch',
    body:
      "Product development requires orchestrating design, engineering, QA, and stakeholder feedback across multiple sprints. Hypertask gives you instant visibility into feature progress while maintaining agility for rapid iteration.\n\nSmart filters surface features by release, priority, or engineering team. Auto-splits automatically organize incoming bug reports, user feedback, and stakeholder requests. Track dependencies, blockers, and launch readiness across your entire product portfolio.",
    bulletsTitle: 'Built for product complexity:',
    bullets: [
      'Manage multiple release tracks simultaneously',
      'Visualize feature dependencies',
      'Sprint planning with drag-and-drop',
      'Real-time progress across all teams',
    ],
    imageUrl: '/images/features/boards_mainimage.avif',
    ctaLabel: 'View Roadmap Board',
  },
  {
    id: 'stakeholder-communication',
    layout: 'image-left',
    eyebrow: 'Module 3: Stakeholder Communication Without the Meeting Overload',
    headline: 'Keep Everyone Aligned Without Endless Status Updates',
    body:
      "Stop repeating the same updates in standups, stakeholder meetings, and Slack threads. Hypertask's premium inbox consolidates all product discussions, decisions, and feedback directly within each feature's context.\n\nAI-powered summaries help stakeholders quickly understand technical discussions. Voice dictation captures product decisions instantly. Every design review, engineering clarification, and go-to-market discussion stays permanently linked to its feature.",
    bulletsTitle: 'Communication excellence:',
    bullets: [
      'Automated stakeholder updates',
      'AI summaries of technical discussions',
      'Decision logging with context',
      'Async collaboration across time zones',
    ],
    imageUrl: '/images/features/inbox_main_image.avif',
    ctaLabel: 'Try Product Inbox',
  },
  {
    id: 'product-velocity',
    layout: 'text-left',
    eyebrow: 'Module 4: Transform Your Product Velocity',
    headline: 'From Feature Factories to Strategic Product Development',
    body:
      'Product teams using Hypertask report 40% faster feature delivery with 50% fewer alignment meetings. By unifying specs, tasks, and communication, your team focuses on building the right features instead of managing the process.',
    bulletsTitle: 'Proven results:',
    bullets: [
      '40% faster feature delivery',
      '50% reduction in status meetings',
      '75% less context switching',
      'Complete feature history and decisions',
    ],
    imageUrl: '/images/features/keyboard_subcard_2.avif',
    ctaLabel: 'See Velocity Gains',
  },
]

export const productBottomCta = {
  title: 'Ready to Accelerate Your Product Development?',
  body:
    'See how leading product teams use Hypertask to ship features faster with better alignment. From MVPs to major releases – all with clearer specs and smoother coordination than ever before.',
  primaryCta: { label: 'Get Hypertask Free', href: APP_LOGIN_URL, external: true },
  secondaryCta: { label: 'Book a Product Demo', href:"https://calendly.com/hypertask/30min"
               },
} 