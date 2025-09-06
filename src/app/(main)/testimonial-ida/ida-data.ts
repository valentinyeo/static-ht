import type {
  HeroData,
  BottomCTAData,
  MetricsOverview,
  ChallengeSection,
  SolutionSection,
  ResultsSection,
  MetricsTable,
  KeyFeaturesSection,
  WhyItWorksSection
} from '@/components/pages/UseCases/TestimonialTemplate'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

export const idaHeroData: HeroData = {
  title: "How IDA went from 5 Tests to 50 Tests Monthly in 30 Days",
  subtitle: "From 5 tests to 50 concurrent tests in 6 months - here's how we transformed our CRO operation",
  primaryCta: {
    label: "Get Started",
    href: APP_LOGIN_URL,
    external: true
  },
  secondaryCta: {
    label: "Book Demo",
    href: "https://calendly.com/hypertask/30min"
  }
}

export const idaMetricsOverview: MetricsOverview = {
  metrics: [
    {
      value: "10x",
      label: "test volume increase"
    },
    {
      value: "85%",
      label: "faster test creation"
    },
    {
      value: "40-50",
      label: "concurrent A/B tests"
    }
  ]
}

export const idaChallengeSection: ChallengeSection = {
  title: "The Challenge: Scaling CRO Operations",
  before: {
    title: "Current Struggles",
    items: [
      "Limited Scale - 5-10 concurrent A/B tests maximum",
      "Scattered Communication - Between ClickUp and Slack", 
      "Lost Context - Conversations and missing context",
      "Slow Process - 15-20 minutes per test specification",
      "Frustrating Management - Slow, frustrating project management"
    ]
  },
  after: {
    title: "HyperTask Solution",
    items: [
      "Massive Scale - 40-50 concurrent A/B tests",
      "Unified Communication - All-in-one communication system",
      "Lightning Fast - Faster test creation and management", 
      "Advanced Strategy - Aggressive overlapping testing strategy",
      "Streamlined Workflow - Intuitive project management"
    ]
  },
  imageUrl: "/images/features/boards_mainimage.avif",
  challengeSolutionCards: {
    challenge: {
      title: "The Challenge",
      description: "Scaling CRO operations requires managing dozens of concurrent A/B tests while maintaining clear communication across teams. Traditional project management tools couldn't handle the complexity and speed required for aggressive testing strategies."
    },
    solution: {
      title: "The Solution", 
      description: "HyperTask's AI-powered platform enables teams to create tests 10x faster, manage 40-50 concurrent experiments, and maintain unified communication. The system learns from project history to become smarter than individual team members."
    }
  }
}

export const idaSolutionSection: SolutionSection = {
  title: "The Solution: Complete Migration to HyperTask",
  layout: "feature-modules",
  solutions: [
    {
      title: "22-Person Team Migration",
      description: "Moved entire CRO operation from ClickUp to HyperTask, bringing together product managers, developers, and analysts under one unified system.",
      imageUrl: "/images/features/boards_views.avif"
    },
    {
      title: "AI-Powered Test Creation",
      description: "Implemented HyperTask's TaskWriter with custom instructions specific to IDA's A/B testing methodology:",
      bullets: [
        "ICE rating frameworks",
        "Hypothesis structures", 
        "Variation specifications",
        "Metrics tracking requirements"
      ],
      imageUrl: "/images/features/ai_subcard_task_writer.avif"
    },
    {
      title: "Web Research Integration",
      description: "TaskWriter's web research feature enables competitive analysis and inspiration gathering directly within the task creation process.",
      imageUrl: "/images/features/tasks_parse_all_links.avif"
    }
  ]
}

export const idaResultsSection: ResultsSection = {
  title: "The Results: Dramatic Operational Improvements",
  results: [
    {
      title: "10x Test Volume Increase",
      before: "5-10 concurrent tests",
      after: "40-50 concurrent tests",
      note: "Strategy: Aggressive overlapping A/B testing"
    },
    {
      title: "95% Faster Test Creation",
      before: "15-20 minutes per test",
      after: "2-3 minutes with TaskWriter",
      note: "100% of tasks now created with AI assistance"
    },
    {
      title: "Unified Communication",
      before: "Multiple platforms",
      after: "Single platform",
      note: "All task-related communication consolidated"
    }
  ]
}

export const idaMetricsTable: MetricsTable = {
  title: "The Transformation in Numbers",
  metrics: [
    {
      metric: "Concurrent Tests",
      before: "5-10",
      after: "40-50",
      improvement: "10x increase"
    },
    {
      metric: "Test Creation Time",
      before: "15-20 minutes",
      after: "2-3 minutes",
      improvement: "85% reduction"
    },
    {
      metric: "Communication Platforms",
      before: "2 (ClickUp + Slack)",
      after: "1 (HyperTask)",
      improvement: "Unified"
    },
    {
      metric: "Team Size",
      before: "22 people",
      after: "22 people",
      improvement: "Same team, 10x output"
    },
    {
      metric: "AI Task Creation",
      before: "0%",
      after: "100%",
      improvement: "Complete adoption"
    }
  ]
}

export const idaKeyFeaturesSection: KeyFeaturesSection = {
  title: "Key Features That Made the Difference",
  features: [
    {
      title: "Speed & Performance",
      description: "ClickUp was notoriously slow. HyperTask is lightning fast.",
      quote: "ClickUp was notoriously slow. HyperTask is lightning fast.",
      imageUrl: "/images/features/boards_filtering.avif",
      layout: "image-left"
    },
    {
      title: "Intelligent Task Creation",
      description: "TaskWriter analyzes project context and incorporates custom CRO instructions to generate complete test specifications from minimal prompts.",
      bullets: [
        "TaskWriter analyzes project context",
        "Incorporates custom CRO instructions",
        "Generates complete test specifications from minimal prompts",
        "Web research capability for competitive insights"
      ],
      imageUrl: "/images/features/ai_subcard_writewithai.avif",
      layout: "text-left"
    },
    {
      title: "Superior Communication System",
      description: "The project inbox is designed like premium email clients with AI-powered features.",
      bullets: [
        "Project inbox designed like premium email clients",
        "AI comment writer for professional communication",
        "Dictation with AI improvement functionality",
        "All context preserved within tasks"
      ],
      imageUrl: "/images/features/inbox_main_image.avif",
      layout: "image-left"
    },
    {
      title: "Volume Management",
      description: "HyperTask handles hundreds of concurrent tickets efficiently while learning from project history.",
      bullets: [
        "Handles hundreds of concurrent tickets efficiently",
        "AI system learns from project history",
        "Better institutional knowledge than individual team members"
      ],
      imageUrl: "/images/features/boards_subtasks.avif",
      layout: "text-left"
    }
  ]
}

export const idaWhyItWorksSection: WhyItWorksSection = {
  title: "Why HyperTask Works for CRO Teams",
  reasons: [
    {
      title: "Built for High-Volume Operations",
      description: "Unlike traditional project tools, HyperTask excels when managing hundreds of concurrent tasks with complex interdependencies."
    },
    {
      title: "AI-First Approach",
      description: "TaskWriter doesn't just help with writing - it understands your entire project context and methodology."
    },
    {
      title: "Communication Excellence",
      description: "The project inbox isn't an afterthought - it's designed to rival the best email clients for professional communication."
    },
    {
      title: "Institutional Knowledge",
      description: "With hundreds of test tickets, the AI system becomes smarter than any individual team member about your testing patterns and requirements."
    }
  ]
}

export const idaBottomCTAData: BottomCTAData = {
  title: "The Bottom Line",
  body: "HyperTask didn't just replace our project management tool - it transformed how we think about and execute A/B testing at scale. We went from being limited by our tools to being empowered by them.",
  primaryCta: {
    label: "Get Started",
    href: APP_LOGIN_URL,
    external: true
  },
  secondaryCta: {
    label: "Book Demo",
    href: "https://calendly.com/hypertask/30min"
  }
}

export const idaAboutCompany = "IDA is a leading provider of International Driving Permits, serving thousands of travelers worldwide. Their aggressive A/B testing strategy focuses on doubling conversion rates through rapid experimentation and data-driven optimization." 