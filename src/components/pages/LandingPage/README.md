# Comparison Table Component

This directory contains a modular comparison table system that makes it easy to update features, competitors, and styling.

## 📁 File Structure

```
LandingPage/
├── comparison-table.tsx              # Main component
├── comparison-table-data.ts          # Data configuration
├── comparison-table-header.tsx       # Table header component
├── comparison-table-row.tsx          # Table row component
├── comparison-table-mobile.tsx       # Mobile-specific table
├── comparison-table-desktop.tsx      # Desktop-specific table
└── README.md                         # This file
```

## 🔧 How to Update

### Adding/Removing Features

Edit `comparison-table-data.ts`:

```typescript
export const features: ComparisonFeature[] = [
  {
    feature: "Your New Feature",
    hypertask: "✓",
    notion: "~",
    trello: "X",
    asana: "✓",
    linear: "~",
    monday: "X"
  },
  // ... other features
]
```

**Feature Values:**
- `"✓"` = Full support
- `"~"` = Partial support  
- `"X"` = No support

### Adding/Removing Competitors

Edit the `competitors` array in `comparison-table-data.ts`:

```typescript
export const competitors: CompetitorInfo[] = [
  { name: "Hypertask", key: "hypertask", isHighlighted: true, badge: "NEW" },
  { name: "Your New Tool", key: "yournewtool" },
  // ... other competitors
]
```

**Then update the interface:**

```typescript
export interface ComparisonFeature {
  feature: string
  hypertask: "✓" | "~" | "X"
  yournewtool: "✓" | "~" | "X"  // Add this line
  // ... other competitors
}
```

### Updating Content

Edit `tableConfig` in `comparison-table-data.ts`:

```typescript
export const tableConfig = {
  title: "Your New Title",
  subtitle: "Your new subtitle text.",
  ctaText: "Your CTA Button Text",
  ctaUrl: "https://your-url.com"
}
```

### Styling Changes

Each component has clearly separated styling classes:

- **Mobile styles**: Look for `isMobile ? "mobile-classes" : "desktop-classes"`
- **Highlighted columns**: Controlled by `competitor.isHighlighted`
- **Feature rows**: Styled in `comparison-table-row.tsx`

## 🎨 Customization Examples

### Change Highlight Color

Replace `purple-600` with your brand color in:
- `comparison-table-header.tsx`
- `comparison-table-row.tsx`

### Add Feature Categories

Group features by adding section headers:

```typescript
export const features: ComparisonFeature[] = [
  // Navigation Features
  { feature: "Keyboard-First Navigation", ... },
  { feature: "Command Center (Ctrl+K)", ... },
  
  // AI Features  
  { feature: "AI-Powered Summaries", ... },
  // ... etc
]
```

### Custom Badge Styling

Modify badge classes in `comparison-table-header.tsx`:

```typescript
{competitor.badge && (
  <span className="bg-your-color text-white px-1 py-0.5 rounded text-[0.7rem] ml-1">
    {competitor.badge}
  </span>
)}
```

## 🚀 Benefits of This Structure

1. **Easy Updates**: Change data in one file
2. **Type Safety**: TypeScript interfaces prevent errors
3. **Maintainable**: Separated concerns and reusable components
4. **Responsive**: Separate mobile/desktop components
5. **Consistent**: Centralized styling and configuration

## 💡 Tips

- Always update both the `ComparisonFeature` interface and `features` array when adding competitors
- Use meaningful feature names that clearly explain the benefit
- Test on both mobile and desktop after changes
- Keep competitor order consistent with your marketing priorities 