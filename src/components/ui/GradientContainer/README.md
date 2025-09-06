# GradientContainer - CSS-Based A/B Testing

The GradientContainer component has been updated to use CSS classes instead of inline styles, making it easy to A/B test gradient backgrounds with VWO.

## Features

- **CSS-based gradients**: All gradients are now defined in CSS classes
- **VWO-friendly**: Easy to target with CSS selectors for A/B testing
- **Backward compatible**: Still supports the `backgroundImage` prop as fallback
- **Multiple variants**: 13 numbered gradients + 4 A/B test variants

## Usage

### Basic Usage

```tsx
import GradientContainer from '@/components/ui/GradientContainer';

// Use default gradient (gradient 5)
<GradientContainer variant="compact">
  <div>Your content here</div>
</GradientContainer>

// Use specific gradient
<GradientContainer gradientVariant="12" variant="compact">
  <div>Your content here</div>
</GradientContainer>

// Use A/B test variant
<GradientContainer gradientVariant="a" variant="compact">
  <div>Your content here</div>
</GradientContainer>
```

### Available Gradient Variants

#### Numbered Gradients (1-13)
- `gradientVariant="1"` → `.gradient-bg-1`
- `gradientVariant="2"` → `.gradient-bg-2`
- ...
- `gradientVariant="13"` → `.gradient-bg-13`

#### A/B Test Variants
- `gradientVariant="a"` → `.gradient-variant-a`
- `gradientVariant="b"` → `.gradient-variant-b`
- `gradientVariant="c"` → `.gradient-variant-c`
- `gradientVariant="d"` → `.gradient-variant-d`

## VWO A/B Testing

### Setup Instructions

1. **Add gradient container to your page** with a specific `gradientVariant`:
   ```tsx
   <GradientContainer gradientVariant="a" variant="compact">
     <div>Your content</div>
   </GradientContainer>
   ```

2. **In VWO, create a variation** that changes the CSS class:
   - Target: `.gradient-variant-a`
   - Change to: `.gradient-variant-b`

### Example VWO CSS

```css
/* Change from variant A to variant B */
.gradient-variant-a {
  background-image: url('/images/gradients/gradient (3).avif') !important;
}

/* Change from gradient 5 to gradient 12 */
.gradient-bg-5 {
  background-image: url('/images/gradients/gradient(12).avif') !important;
}
```

### CSS Classes Available

All gradient classes are defined in `src/styles/gradient-backgrounds.css`:

- `.gradient-bg-1` through `.gradient-bg-13` - Numbered gradients
- `.gradient-variant-a` through `.gradient-variant-d` - A/B test variants
- `.gradient-container` - Base container styles

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gradientVariant` | `'1' \| '2' \| ... \| '13' \| 'a' \| 'b' \| 'c' \| 'd'` | `'5'` | CSS class for gradient background |
| `backgroundImage` | `string` | `undefined` | Fallback for custom background image |
| `variant` | `'fullscreen' \| 'compact' \| 'medium'` | `'fullscreen'` | Container size variant |
| `maxWidth` | `string` | Auto | Custom max width |
| `padding` | `string` | Auto | Custom padding |
| `flexDirection` | `'row' \| 'col'` | `'row'` | Flex direction |
| `alignItems` | `'center' \| 'start' \| 'end'` | `'center'` | Flex align items |
| `justifyContent` | `'center' \| 'start' \| 'end' \| 'between'` | `'center'` | Flex justify content |
| `className` | `string` | `''` | Additional CSS classes |

## Migration from Inline Styles

If you were using the old `backgroundImage` prop:

```tsx
// Old way (still works as fallback)
<GradientContainer backgroundImage="/images/gradients/gradient (6).avif">
  <div>Content</div>
</GradientContainer>

// New way (recommended for A/B testing)
<GradientContainer gradientVariant="5">
  <div>Content</div>
</GradientContainer>
```

## Example Component

See `src/components/examples/GradientContainerExample.tsx` for a complete example showing all variants and VWO integration. 