// ThemeExample.tsx - Example component showing Tailwind v4 theme usage

import React from 'react'

export function ThemeExample() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-bold text-primary">Tailwind v4 Theme Example</h1>
      
      {/* Color Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-card-foreground">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-primary text-primary-foreground p-4 rounded-card">
            Primary
          </div>
          <div className="bg-secondary text-secondary-foreground p-4 rounded-card">
            Secondary
          </div>
          <div className="bg-brand-blue text-white p-4 rounded-card">
            Brand Blue
          </div>
          <div className="bg-mint-500 text-white p-4 rounded-card">
            Mint 500
          </div>
        </div>
      </section>

      {/* Spacing Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-card-foreground">Custom Spacing</h2>
        <div className="space-y-2">
          <div className="bg-muted p-18 rounded-card">
            Padding 18 (4.5rem)
          </div>
          <div className="bg-accent h-88 rounded-card flex items-center justify-center">
            Height 88 (22rem)
          </div>
        </div>
      </section>

      {/* Border Radius Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-card-foreground">Custom Border Radius</h2>
        <div className="flex gap-4">
          <div className="bg-secondary p-4 rounded-cta">
            CTA Radius
          </div>
          <div className="bg-accent p-4 rounded-card">
            Card Radius
          </div>
        </div>
      </section>

      {/* Shadow Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-card-foreground">Custom Shadows</h2>
        <div className="flex gap-4">
          <div className="bg-card p-6 rounded-card shadow-brand">
            Brand Shadow
          </div>
          <div className="bg-card p-6 rounded-card shadow-glow">
            Glow Shadow
          </div>
        </div>
      </section>

      {/* Animation Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-card-foreground">Custom Animations</h2>
        <div className="flex gap-4">
          <div className="bg-primary text-primary-foreground p-4 rounded-card animate-fade-in">
            Fade In
          </div>
          <div className="bg-brand-blue text-white p-4 rounded-card animate-slide-up">
            Slide Up
          </div>
          <div className="bg-mint-500 text-white p-4 rounded-card animate-scale-in">
            Scale In
          </div>
        </div>
      </section>

      {/* Using CSS Variables in Arbitrary Values */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-card-foreground">CSS Variables in Arbitrary Values</h2>
        <div className="bg-[var(--color-brand-purple)] text-white p-4 rounded-[calc(var(--radius-card)*2)]">
          Using CSS variables directly: brand-purple background with double card radius
        </div>
      </section>
    </div>
  )
}

export default ThemeExample 