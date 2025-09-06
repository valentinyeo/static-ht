import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestShadcnPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">shadcn/ui Integration Test</h1>
          <p className="text-muted-foreground">Testing pixel-perfect components with your design system</p>
        </div>

        {/* Button Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
            <CardDescription>Different button variants with consistent spacing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">⚡</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badge Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Badge Components</CardTitle>
            <CardDescription>Status indicators with consistent typography</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Error</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Custom Spacing Test */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Design System Integration</CardTitle>
            <CardDescription>Using your custom CSS variables alongside shadcn</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div 
              className="p-4 rounded-lg border"
              style={{
                padding: 'var(--custom-spacing-lg)',
                borderRadius: 'var(--custom-radius-lg)',
                boxShadow: 'var(--custom-shadow-md)'
              }}
            >
              <p className="text-sm">This uses your custom spacing (--custom-spacing-lg: 24px)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div 
                className="p-3 bg-secondary rounded-md"
                style={{ gap: 'var(--custom-spacing-sm)' }}
              >
                <Badge>8px spacing</Badge>
              </div>
              <div 
                className="p-4 bg-secondary rounded-md"
                style={{ gap: 'var(--custom-spacing-md)' }}
              >
                <Badge>16px spacing</Badge>
              </div>
              <div 
                className="p-6 bg-secondary rounded-md"
                style={{ gap: 'var(--custom-spacing-lg)' }}
              >
                <Badge>24px spacing</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography Test */}
        <Card>
          <CardHeader>
            <CardTitle>Typography Scale</CardTitle>
            <CardDescription>Consistent font sizes across the application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p style={{ fontSize: 'var(--custom-font-size-xs)' }}>Extra Small Text (12px)</p>
            <p style={{ fontSize: 'var(--custom-font-size-sm)' }}>Small Text (14px)</p>
            <p style={{ fontSize: 'var(--custom-font-size-base)' }}>Base Text (16px)</p>
            <p style={{ fontSize: 'var(--custom-font-size-lg)' }}>Large Text (18px)</p>
            <p style={{ fontSize: 'var(--custom-font-size-xl)' }}>Extra Large Text (20px)</p>
            <p style={{ fontSize: 'var(--custom-font-size-2xl)' }}>2XL Text (24px)</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 