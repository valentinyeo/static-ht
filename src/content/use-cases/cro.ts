import { APP_LOGIN_URL } from '@/lib/redirect-utils'

export const croHero = {
  title: 'Hypertask for CRO',
  subtitle: 'Scale Your A/B Testing from 10 to 100+ Concurrent Experiments',
  primaryCta: { label: 'Get Hypertask Free', href: APP_LOGIN_URL, external: true },
  secondaryCta: { label: 'Book Demo', href:"https://calendly.com/hypertask/30min"
               },
}

import type { FeatureModule } from '@/components/pages/UseCases'

export const croFeatureModules: FeatureModule[] = [
  {
    id: 'ai-task-writer',
    layout: 'image-left',
    eyebrow: 'Module 1: AI-Powered Test Creation at Scale',
    headline: 'Generate Complete Test Specifications in 2 Minutes',
    body:
      "TaskWriter transforms how CRO teams create A/B tests. With project-aware AI that understands your testing methodology, generate comprehensive test specifications 95% faster than traditional methods.",
    bulletsTitle: 'Key capabilities:',
    bullets: [
      'Custom CRO instructions for your methodology',
      'Web research for competitive insights',
      'Automatic ICE rating and hypothesis generation',
      'Complete test specs from minimal prompts',
    ],
    imageUrl: '/images/features/task_subcard_writewithai.avif',
    ctaLabel: 'See AI Task Writer',
  },
  {
    id: 'manage-concurrent-tests',
    layout: 'text-left',
    eyebrow: 'Module 2: Manage 50+ Concurrent Tests Without Chaos',
    headline: 'Purpose-Built for High-Volume Testing Operations',
    body:
      "Traditional project tools break down when managing dozens of overlapping tests. Hypertask thrives on complexity. Our lightning-fast interface handles hundreds of concurrent tickets while AI-powered organization keeps every test trackable.",
    bulletsTitle: 'Built for scale:',
    bullets: [
      'Handle 40-50+ concurrent A/B tests',
      'Aggressive overlapping test strategies',
      'Instant filtering by test parameters',
      'AI that learns your testing patterns',
    ],
    imageUrl: '/images/features/boards_mainimage.avif',
    ctaLabel: 'View Testing Board',
  },
  {
    id: 'unified-communication',
    layout: 'image-left',
    eyebrow: 'Module 3: Unified Communication That Moves at Testing Speed',
    headline: 'Every Test Discussion in Perfect Context',
    body:
      "Stop losing critical test insights between Slack threads and email chains. Hypertask's premium inbox consolidates all test-related communication directly within each experiment's context.",
    bulletsTitle: 'Communication excellence:',
    bullets: [
      'Premium email-style project inbox',
      'AI comment writer for technical clarity',
      'Voice dictation with AI enhancement',
      'Zero context switching between tools',
    ],
    imageUrl: '/images/features/tasks_RTE.avif',
    ctaLabel: 'Try Inbox',
  },
  {
    id: 'transform-workflow',
    layout: 'text-left',
    eyebrow: 'Module 4: Transform Your CRO Workflow',
    headline: 'From Manual Coordination to AI-Powered Optimization',
    body:
      'CRO teams using Hypertask report 10x increases in testing volume with the same team size. By eliminating the friction of test creation and communication, your team focuses on what matters: finding winning variants and implementing results.',
    bulletsTitle: 'Proven results:',
    bullets: [
      '10x increase in concurrent test capacity',
      '85% reduction in test creation time',
      '100% of communication consolidated',
      'Complete institutional knowledge capture',
    ],
    imageUrl: '/images/features/keyboard_subcard_2.avif',
    ctaLabel: 'See Results',
  },
]

export const croBottomCta = {
  title: 'Ready to Scale Your Testing?',
  body:
    'Leading CRO teams use Hypertask to run 50+ concurrent experiments with better documentation and communication than ever before.',
  primaryCta: { label: 'Get Hypertask Free', href: APP_LOGIN_URL, external: true },
  secondaryCta: { label: 'Book Demo', href:"https://calendly.com/hypertask/30min"
               },
} 