# Tailwind v4 Theme System Guide

This guide covers all the theme variable namespaces available in Tailwind v4 and how to use them in your components.

## 🎨 Color Utilities (`--color-*`)

Define custom colors that automatically generate utilities like `bg-*`, `text-*`, `border-*`, etc.

### In CSS (`globals.css`):
```css
@theme {
  --color-primary: oklch(0.2 0 0);                    /* Dark primary */
  --color-primary-foreground: oklch(0.98 0 0);        /* Light text on primary */
  --color-brand-blue: oklch(0.6 0.2 250);             /* Custom brand color */
  --color-mint-500: oklch(0.72 0.11 178);             /* Custom mint shade */
}
```

### In Components:
```tsx
// Basic usage
<div className="bg-primary text-primary-foreground">Primary button</div>
<div className="bg-brand-blue text-white">Brand colored element</div>
<div className="border-mint-500 text-mint-500">Mint border and text</div>

// All color utilities work: bg-, text-, border-, ring-, decoration-, etc.
<button className="bg-primary hover:bg-primary/80 text-primary-foreground border-primary">
  Hover with opacity
</button>
```

---

## 🔤 Font Family Utilities (`--font-*`)

Define custom font families that generate `font-*` utilities.

### In CSS:
```css
@theme {
  --font-heading: "Inter", "Helvetica Neue", sans-serif;
  --font-body: "System UI", sans-serif;
  --font-code: "Fira Code", "Consolas", monospace;
}
```

### In Components:
```tsx
<h1 className="font-heading text-4xl font-bold">Main Heading</h1>
<p className="font-body text-base">Body text content</p>
<code className="font-code bg-gray-100 px-2 py-1 rounded">const example = true;</code>
```

---

## 📏 Font Size Utilities (`--text-*`)

Define custom font sizes with optional line heights that generate `text-*` utilities.

### In CSS:
```css
@theme {
  --text-hero: 4rem;                                   /* 64px */
  --text-hero--line-height: 1.1;                      /* Custom line height */
  --text-caption: 0.875rem;                           /* 14px */
  --text-display: 6rem;                               /* 96px */
}
```

### In Components:
```tsx
<h1 className="text-hero font-bold">Hero Headline</h1>
<h2 className="text-display font-black">Display Text</h2>
<p className="text-caption text-muted-foreground">Small caption text</p>

// Combine with other utilities
<div className="text-hero md:text-display lg:text-[8rem]">Responsive sizing</div>
```

---

## ⚖️ Font Weight Utilities (`--font-weight-*`)

Define custom font weights that generate `font-*` utilities.

### In CSS:
```css
@theme {
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-strong: 700;
  --font-weight-heavy: 900;
}
```

### In Components:
```tsx
<h1 className="font-heavy">Heavy weight heading</h1>
<p className="font-regular">Regular body text</p>
<span className="font-strong">Strong emphasis</span>
<button className="font-medium">Medium weight button</button>
```

---

## 📐 Letter Spacing Utilities (`--tracking-*`)

Define custom letter spacing that generates `tracking-*` utilities.

### In CSS:
```css
@theme {
  --tracking-micro: -0.01em;
  --tracking-tight: -0.025em;
  --tracking-loose: 0.05em;
  --tracking-wide: 0.1em;
}
```

### In Components:
```tsx
<h1 className="tracking-micro text-4xl">Tight headline</h1>
<p className="tracking-loose">Spaced out text</p>
<button className="tracking-wide uppercase text-sm">BUTTON TEXT</button>
```

---

## 📏 Line Height Utilities (`--leading-*`)

Define custom line heights that generate `leading-*` utilities.

### In CSS:
```css
@theme {
  --leading-tight: 1.2;
  --leading-comfortable: 1.6;
  --leading-relaxed: 1.8;
  --leading-loose: 2.0;
}
```

### In Components:
```tsx
<h1 className="leading-tight text-4xl">Tight heading</h1>
<p className="leading-comfortable">Comfortable reading text</p>
<blockquote className="leading-relaxed text-lg italic">
  Relaxed quote text for better readability
</blockquote>
```

---

## 📱 Responsive Breakpoints (`--breakpoint-*`)

Define custom breakpoints that generate responsive variants like `sm:*`, `md:*`, etc.

### In CSS:
```css
@theme {
  --breakpoint-xs: 20rem;                             /* 320px */
  --breakpoint-tablet: 48rem;                         /* 768px */
  --breakpoint-desktop: 80rem;                        /* 1280px */
  --breakpoint-wide: 120rem;                          /* 1920px */
}
```

### In Components:
```tsx
<div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 wide:grid-cols-4">
  <div>Responsive grid item</div>
</div>

<h1 className="text-2xl tablet:text-4xl desktop:text-6xl">
  Responsive typography
</h1>

<div className="p-4 tablet:p-8 desktop:p-12">
  Responsive padding
</div>
```

---

## 📦 Container Queries (`--container-*`)

Define container query breakpoints that generate `@*:` variants and `max-w-*` utilities.

### In CSS:
```css
@theme {
  --container-card: 20rem;                            /* 320px */
  --container-sidebar: 24rem;                         /* 384px */
  --container-content: 42rem;                         /* 672px */
  --container-wide: 80rem;                            /* 1280px */
}
```

### In Components:
```tsx
<div className="@container">
  <div className="grid grid-cols-1 @card:grid-cols-2 @content:grid-cols-3">
    Container query responsive grid
  </div>
</div>

<div className="max-w-content mx-auto">
  Content with max width
</div>

<aside className="max-w-sidebar">
  Sidebar with container width
</aside>
```

---

## 📏 Spacing & Sizing (`--spacing-*`)

Define custom spacing values that generate padding, margin, gap, width, height utilities.

### In CSS:
```css
@theme {
  --spacing-tight: 0.125rem;                          /* 2px */
  --spacing-comfortable: 1.5rem;                      /* 24px */
  --spacing-loose: 3rem;                              /* 48px */
  --spacing-section: 6rem;                            /* 96px */
}
```

### In Components:
```tsx
<div className="p-comfortable m-loose">
  Custom padding and margin
</div>

<section className="py-section">
  Section with custom vertical spacing
</section>

<div className="grid gap-tight">
  Grid with tight gap
</div>

<div className="w-comfortable h-loose">
  Custom width and height
</div>
```

---

## 🔘 Border Radius (`--radius-*`)

Define custom border radius values that generate `rounded-*` utilities.

### In CSS:
```css
@theme {
  --radius-button: 0.375rem;                          /* 6px */
  --radius-card: 0.75rem;                             /* 12px */
  --radius-modal: 1rem;                               /* 16px */
  --radius-pill: 9999px;                              /* Fully rounded */
}
```

### In Components:
```tsx
<button className="rounded-button bg-primary text-primary-foreground px-4 py-2">
  Button with custom radius
</button>

<div className="rounded-card bg-card shadow-lg p-6">
  Card with custom radius
</div>

<div className="rounded-modal bg-white p-8">
  Modal with custom radius
</div>

<span className="rounded-pill bg-accent px-3 py-1 text-sm">
  Pill-shaped badge
</span>
```

---

## 🌫️ Box Shadows (`--shadow-*`)

Define custom box shadows that generate `shadow-*` utilities.

### In CSS:
```css
@theme {
  --shadow-subtle: 0 1px 3px 0 rgb(0 0 0 / 0.05);
  --shadow-card: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-modal: 0 20px 25px -5px rgb(0 0 0 / 0.25);
  --shadow-glow: 0 0 20px oklch(0.6 0.2 250 / 0.3);
}
```

### In Components:
```tsx
<div className="shadow-subtle bg-white p-4 rounded-card">
  Subtle shadow card
</div>

<div className="shadow-card bg-white p-6 rounded-lg">
  Standard card shadow
</div>

<div className="shadow-modal bg-white p-8 rounded-xl">
  Modal with strong shadow
</div>

<button className="shadow-glow bg-primary text-primary-foreground px-6 py-3 rounded-button">
  Glowing button
</button>
```

---

## 🔳 Inset Shadows (`--inset-shadow-*`)

Define custom inset shadows that generate `inset-shadow-*` utilities.

### In CSS:
```css
@theme {
  --inset-shadow-input: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --inset-shadow-well: inset 0 4px 8px 0 rgb(0 0 0 / 0.1);
  --inset-shadow-pressed: inset 0 2px 4px 0 rgb(0 0 0 / 0.2);
}
```

### In Components:
```tsx
<input className="inset-shadow-input border border-input rounded-button px-3 py-2" 
       placeholder="Input with inset shadow" />

<div className="inset-shadow-well bg-muted p-4 rounded-card">
  Inset well effect
</div>

<button className="inset-shadow-pressed bg-secondary px-4 py-2 rounded-button active:inset-shadow-pressed">
  Pressed button state
</button>
```

---

## 💧 Drop Shadows (`--drop-shadow-*`)

Define custom drop shadows for the `drop-shadow` filter utility.

### In CSS:
```css
@theme {
  --drop-shadow-soft: 0 4px 8px rgb(0 0 0 / 0.1);
  --drop-shadow-strong: 0 8px 16px rgb(0 0 0 / 0.2);
  --drop-shadow-colored: 0 4px 8px oklch(0.6 0.2 250 / 0.3);
}
```

### In Components:
```tsx
<img className="drop-shadow-soft rounded-card" src="/image.jpg" alt="Soft shadow" />

<div className="drop-shadow-strong bg-white p-6 rounded-lg">
  Strong drop shadow
</div>

<svg className="drop-shadow-colored w-8 h-8">
  <circle cx="16" cy="16" r="16" fill="currentColor" />
</svg>
```

---

## 🌀 Blur Effects (`--blur-*`)

Define custom blur values that generate `blur-*` utilities.

### In CSS:
```css
@theme {
  --blur-subtle: 2px;
  --blur-medium: 8px;
  --blur-strong: 16px;
  --blur-extreme: 32px;
}
```

### In Components:
```tsx
<div className="blur-subtle">Slightly blurred content</div>

<div className="backdrop-blur-medium bg-white/80 p-4 rounded-card">
  Glass morphism effect
</div>

<img className="blur-strong hover:blur-none transition-all" src="/image.jpg" alt="Hover to focus" />
```

---

## 🎭 Perspective (`--perspective-*`)

Define custom perspective values for 3D transforms.

### In CSS:
```css
@theme {
  --perspective-close: 200px;
  --perspective-normal: 500px;
  --perspective-far: 1000px;
}
```

### In Components:
```tsx
<div className="perspective-normal">
  <div className="transform rotate-x-12 bg-card p-6 rounded-card shadow-lg">
    3D perspective card
  </div>
</div>

<div className="perspective-close hover:perspective-far transition-all">
  Dynamic perspective change
</div>
```

---

## 📐 Aspect Ratios (`--aspect-*`)

Define custom aspect ratios that generate `aspect-*` utilities.

### In CSS:
```css
@theme {
  --aspect-golden: 1.618 / 1;                         /* Golden ratio */
  --aspect-photo: 4 / 3;                              /* Photo ratio */
  --aspect-cinema: 21 / 9;                            /* Cinematic */
  --aspect-portrait: 3 / 4;                           /* Portrait */
}
```

### In Components:
```tsx
<div className="aspect-golden bg-gradient-to-r from-blue-500 to-purple-600 rounded-card">
  Golden ratio container
</div>

<img className="aspect-photo object-cover rounded-card" src="/photo.jpg" alt="Photo" />

<video className="aspect-cinema w-full rounded-card" controls>
  <source src="/video.mp4" type="video/mp4" />
</video>

<div className="aspect-portrait bg-muted rounded-card p-4">
  Portrait orientation
</div>
```

---

## ⏱️ Timing Functions (`--ease-*`)

Define custom easing functions for transitions and animations.

### In CSS:
```css
@theme {
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);
}
```

### In Components:
```tsx
<button className="transform hover:scale-105 transition-transform ease-smooth duration-300">
  Smooth scaling button
</button>

<div className="translate-x-0 hover:translate-x-4 transition-transform ease-bounce duration-500">
  Bouncy movement
</div>

<div className="opacity-0 hover:opacity-100 transition-opacity ease-sharp duration-200">
  Sharp fade transition
</div>
```

---

## 🎬 Animations (`--animate-*`)

Define custom animations with keyframes that generate `animate-*` utilities.

### In CSS:
```css
@theme {
  --animate-fade-in: fade-in 0.5s ease-out;
  --animate-slide-up: slide-up 0.3s ease-out;
  --animate-bounce-in: bounce-in 0.6s ease-out;
  
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  @keyframes slide-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes bounce-in {
    0% { opacity: 0; transform: scale(0.3); }
    50% { opacity: 1; transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
}
```

### In Components:
```tsx
<div className="animate-fade-in">
  Fades in on load
</div>

<div className="animate-slide-up delay-100">
  Slides up with delay
</div>

<button className="animate-bounce-in hover:animate-pulse">
  Bounces in, pulses on hover
</button>

// Conditional animations
<div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
  Conditional fade in
</div>
```

---

## 🚀 Usage Tips

### 1. Combining Theme Variables
```tsx
<button className="bg-primary hover:bg-primary/80 text-primary-foreground px-comfortable py-tight rounded-button shadow-card hover:shadow-glow transition-all ease-smooth duration-300 animate-fade-in">
  Fully themed button
</button>
```

### 2. Using CSS Variables Directly
```tsx
<div style={{ 
  backgroundColor: 'var(--color-brand-blue)', 
  borderRadius: 'calc(var(--radius-card) * 2)',
  padding: 'var(--spacing-comfortable)'
}}>
  Direct CSS variable usage
</div>
```

### 3. Arbitrary Values with Theme Variables
```tsx
<div className="bg-[var(--color-mint-500)] p-[var(--spacing-comfortable)] rounded-[calc(var(--radius-card)*1.5)]">
  Arbitrary values with theme variables
</div>
```

### 4. Responsive + Theme Variables
```tsx
<div className="p-tight tablet:p-comfortable desktop:p-loose bg-primary tablet:bg-secondary desktop:bg-accent">
  Responsive with theme variables
</div>
```

This system gives you complete control over your design tokens while maintaining the power and flexibility of Tailwind's utility-first approach! 