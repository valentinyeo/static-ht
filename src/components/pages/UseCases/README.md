# Use Case Template Components

This directory contains modular components for creating consistent use case pages across the Hypertask website.

## Components

### `UseCaseTemplate`

The main template component that combines all sections. Use this for the simplest implementation.

```tsx
import { UseCaseTemplate } from '@/components/pages/UseCases'
import { heroData, featureModules, bottomCTAData } from '@/content/use-cases/your-use-case'

export default function YourUseCasePage() {
  return (
    <UseCaseTemplate 
      heroData={heroData}
      featureModules={featureModules}
      bottomCTAData={bottomCTAData}
    />
  )
}
```

### Individual Components

For more control, you can use individual components:

#### `HeroSection`
```tsx
import { HeroSection } from '@/components/pages/UseCases'

<HeroSection heroData={heroData} />
```

#### `FeatureModules`
```tsx
import { FeatureModules } from '@/components/pages/UseCases'

<FeatureModules modules={featureModules} />
```

#### `BottomCTASection`
```tsx
import { BottomCTASection } from '@/components/pages/UseCases'

<BottomCTASection ctaData={bottomCTAData} />
```

## Data Structure

### HeroData
```typescript
interface HeroData {
  title: string
  subtitle: string
  primaryCta: { 
    label: string
    href: string
    external?: boolean
  }
  secondaryCta: { 
    label: string
    href: string
  }
}
```

### FeatureModule
```typescript
interface FeatureModule {
  id: string
  layout: 'image-left' | 'text-left'
  eyebrow: string
  headline: string
  body: string
  bulletsTitle?: string
  bullets?: string[]
  imageUrl: string
  ctaLabel: string
}
```

### BottomCTAData
```typescript
interface BottomCTAData {
  title: string
  body: string
  primaryCta: {
    label: string
    href: string
    external?: boolean
  }
  secondaryCta: {
    label: string
    href: string
  }
}
```

## Creating a New Use Case Page

1. **Create your content file** in `/src/content/use-cases/your-use-case.ts`:

```typescript
import type { FeatureModule } from '@/components/pages/UseCases'

export const yourHero = {
  title: 'Your Use Case Title',
  subtitle: 'Your compelling subtitle',
  primaryCta: { label: 'Get Started', href: 'https://app.hypertask.ai/login', external: true },
  secondaryCta: { label: 'Learn More', href:"https://calendly.com/hypertask/30min"
               },
}

export const yourFeatureModules: FeatureModule[] = [
  {
    id: 'feature-1',
    layout: 'image-left',
    eyebrow: 'Module 1',
    headline: 'Your Feature Headline',
    body: 'Your feature description...',
    bulletsTitle: 'Key benefits:',
    bullets: [
      'Benefit 1',
      'Benefit 2',
      'Benefit 3',
    ],
    imageUrl: '/images/your-feature.avif',
    ctaLabel: 'Try Feature',
  },
  // Add more modules...
]

export const yourBottomCta = {
  title: 'Ready to Get Started?',
  body: 'Your closing pitch...',
  primaryCta: { label: 'Get Started', href: 'https://app.hypertask.ai/login', external: true },
  secondaryCta: { label: 'Book Demo', href:"https://calendly.com/hypertask/30min"
               },
}
```

2. **Create your page component** in `/src/app/use-cases/your-use-case/page.tsx`:

```typescript
import { UseCaseTemplate } from '@/components/pages/UseCases'
import { yourHero, yourFeatureModules, yourBottomCta } from '@/content/use-cases/your-use-case'

export const metadata = {
  title: 'Your Use Case — Hypertask',
  description: 'Your SEO description...',
}

export default function YourUseCasePage() {
  return (
    <UseCaseTemplate 
      heroData={yourHero}
      featureModules={yourFeatureModules}
      bottomCTAData={yourBottomCta}
    />
  )
}
```

## Features

- **Responsive Design**: All components are fully responsive
- **Consistent Styling**: Maintains brand consistency across all use case pages
- **Flexible Layouts**: Feature modules support both `image-left` and `text-left` layouts
- **SEO Optimized**: Proper heading hierarchy and semantic markup
- **Accessible**: ARIA labels and proper focus management
- **Type Safe**: Full TypeScript support with proper interfaces

## Layout Options

### Feature Module Layouts

- **`image-left`**: Image on the left, content on the right
- **`text-left`**: Content on the left, image on the right

The layout automatically handles responsive behavior and fade overlays for visual polish.

## Styling

All components use the existing design system with:
- Purple gradient backgrounds for hero and CTA sections
- Consistent typography scales
- White text with opacity variations for hierarchy
- Rounded corners and subtle borders
- Smooth hover transitions on interactive elements 