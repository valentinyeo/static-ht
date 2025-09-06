// theme-utils.ts - Utilities for working with Tailwind v4 theme variables

/**
 * Available theme colors in your design system
 * These correspond to the --color-* variables defined in @theme
 */
export const themeColors = {
  // Core colors
  primary: 'primary',
  'primary-foreground': 'primary-foreground',
  secondary: 'secondary',
  'secondary-foreground': 'secondary-foreground',
  accent: 'accent',
  'accent-foreground': 'accent-foreground',
  muted: 'muted',
  'muted-foreground': 'muted-foreground',
  card: 'card',
  'card-foreground': 'card-foreground',
  border: 'border',
  input: 'input',
  ring: 'ring',
  
  // Brand colors
  'brand-blue': 'brand-blue',
  'brand-purple': 'brand-purple',
  'mint-500': 'mint-500',
} as const

/**
 * Available custom spacing values
 * These correspond to the --spacing-* variables defined in @theme
 */
export const customSpacing = {
  18: '18',
  88: '88',
  128: '128',
} as const

/**
 * Available custom border radius values
 * These correspond to the --radius-* variables defined in @theme
 */
export const customRadius = {
  cta: 'cta',
  card: 'card',
} as const

/**
 * Available custom shadows
 * These correspond to the --shadow-* variables defined in @theme
 */
export const customShadows = {
  brand: 'brand',
  glow: 'glow',
} as const

/**
 * Available custom animations
 * These correspond to the --animate-* variables defined in @theme
 */
export const customAnimations = {
  'fade-in': 'fade-in',
  'slide-up': 'slide-up',
  'scale-in': 'scale-in',
} as const

/**
 * Helper function to get a CSS variable value at runtime
 */
export function getCSSVariable(varName: string): string {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(`--${varName}`)
}

/**
 * Helper function to get a theme color CSS variable value
 */
export function getThemeColor(colorName: keyof typeof themeColors): string {
  return getCSSVariable(`color-${colorName}`)
}

/**
 * Type definitions for better TypeScript support
 */
export type ThemeColor = keyof typeof themeColors
export type CustomSpacing = keyof typeof customSpacing
export type CustomRadius = keyof typeof customRadius
export type CustomShadow = keyof typeof customShadows
export type CustomAnimation = keyof typeof customAnimations 