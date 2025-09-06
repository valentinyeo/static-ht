import type { FeatureModule } from '@/components/pages/UseCases'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

export const agencyHero = {
  title: 'Hypertask for Agencies',
  subtitle: 'Manage Multiple Clients Without Losing Your Mind',
  primaryCta: { label: 'Get Hypertask Free', href: APP_LOGIN_URL, external: true },
  secondaryCta: { label: 'Book an Agency Demo', href: 'https://calendly.com/hypertask/30min' },
}

export const agencyFeatureModules: FeatureModule[] = [
  {
    id: 'ai-project-scoping',
    layout: 'image-left',
    eyebrow: 'Module 1: AI-Powered Project Scoping and Briefing',
    headline: 'From Client Call to Project Plan in Minutes',
    body:
      "TaskWriter revolutionizes how agencies scope and plan client projects. Generate comprehensive project briefs, timelines, and resource plans with AI that understands your agency's processes and client industries.\n\nOur RAG system learns from your successful projects to accurately estimate timelines while custom instructions ensure every brief includes deliverables, milestones, and budget considerations. Web research integration lets you incorporate industry benchmarks and competitive insights directly into proposals.",
    bulletsTitle: 'Key capabilities:',
    bullets: [
      'Multi-client project templates',
      'Automatic timeline and resource estimation',
      'Industry-specific brief generation',
      'SOW and proposal creation',
    ],
    imageUrl: '/images/features/task_subcard_writewithai.avif',
    ctaLabel: 'See AI Project Scoping',
  },
  {
    id: 'multiple-client-projects',
    layout: 'text-left',
    eyebrow: 'Module 2: Juggle 20+ Client Projects with Zero Drops',
    headline: 'Perfect Visibility Across Every Client Account',
    body:
      "Agencies manage dozens of concurrent projects across different industries, timelines, and team members. Hypertask gives you instant visibility into every client's status while maintaining complete separation for confidentiality.\n\nSmart filters surface projects by client, deadline, or team member. Auto-splits automatically organize client feedback, revision requests, and approvals by account. See resource allocation, project profitability, and delivery status across your entire client portfolio.",
    bulletsTitle: 'Built for agency chaos:',
    bullets: [
      'Manage 20+ concurrent client projects',
      'Resource allocation across accounts',
      'Client-separated boards with team access',
      'Deadline tracking across all projects',
    ],
    imageUrl: '/images/features/boards_mainimage.avif',
    ctaLabel: 'View Client Portfolio',
  },
  {
    id: 'client-communication',
    layout: 'image-left',
    eyebrow: 'Module 3: Client Communication That Builds Trust',
    headline: 'End the Revision Request Email Nightmare',
    body:
      "Stop losing client feedback between email chains, Slack messages, and comment threads. Hypertask's premium inbox keeps all client communication, revision requests, and approvals directly within each project's context.\n\nAI-assisted responses help account managers address client concerns professionally. Quick revision logging with keyboard shortcuts. Every feedback round, scope change, and final approval stays permanently documented for each client project.",
    bulletsTitle: 'Client collaboration excellence:',
    bullets: [
      'Centralized client feedback system',
      'Revision round tracking',
      'Approval workflows with audit trails',
      'Client portal access options',
    ],
    imageUrl: '/images/features/inbox_main_image.avif',
    ctaLabel: 'Try Client Communication',
  },
  {
    id: 'agency-operations',
    layout: 'text-left',
    eyebrow: 'Module 4: Transform Your Agency Operations',
    headline: 'From Firefighting to Predictable Delivery',
    body:
      'Agencies using Hypertask report 50% faster project delivery with 70% less internal communication overhead. By unifying project management across all clients, your team focuses on creative work instead of status updates.',
    bulletsTitle: 'Proven results:',
    bullets: [
      '50% faster project turnaround',
      '70% reduction in internal emails',
      '3x more concurrent projects per PM',
      'Complete project history for case studies',
    ],
    imageUrl: '/images/features/keyboard_subcard_2.avif',
    ctaLabel: 'See Agency Results',
  },
]

export const agencyBottomCta = {
  title: 'Ready to Scale Your Agency?',
  body:
    'See how leading agencies use Hypertask to manage complex client portfolios with perfect organization. From pitch to delivery – all with better margins and happier clients than ever before.',
  primaryCta: { label: 'Get Hypertask Free', href: APP_LOGIN_URL, external: true },
  secondaryCta: { label: 'Book an Agency Demo', href: 'https://calendly.com/hypertask/30min' },
} 