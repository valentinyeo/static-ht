# UI Components

This directory contains simplified shadcn-based UI components designed for maximum simplicity while maintaining pixel-perfect styling.

## Core Components

### Button (`button.tsx`)
Standard shadcn button component - kept as-is for simplicity.

### CTAButton (`cta-button.tsx`)
Simplified call-to-action button with:
- Direct size/variant object mapping instead of switch statements
- Removed ButtonText dependency
- Built-in typography styles
- Support for links and regular buttons

### Typography (`typography.tsx`)
Streamlined typography components:
- `Headline` - Hero and section headlines
- `Subheadline` - Hero descriptions
- `SectionTitle` - Section headers
- `BodyText` - Body content
- Removed complex ButtonText component

### Container (`container.tsx`)
Simplified layout containers:
- `Container` - Main layout wrapper with hero/section/narrow/wide variants
- `ContentWrapper` - Content spacing wrapper
- Direct object mapping for variants

### Navigation (`navigation.tsx`)
Clean navigation components:
- `Navigation` - Link navigation with horizontal/vertical orientation
- `NavigationGroup` - Navigation wrapper with consistent spacing
- Simplified gap logic

### Other Components
- `Badge`, `Card`, `Separator`, `Navigation-menu` - Standard shadcn components kept as-is
- `LinkButton` - Simplified button-link hybrid

## Design Principles

1. **Simple object mappings** instead of complex switch statements
2. **Direct styling** instead of nested component dependencies  
3. **Minimal props** while maintaining full functionality
4. **Pixel-perfect preservation** of all existing styling
5. **TypeScript-first** with proper type definitions

All components maintain the exact same visual output and responsive behavior as before, just with cleaner, more maintainable code. 