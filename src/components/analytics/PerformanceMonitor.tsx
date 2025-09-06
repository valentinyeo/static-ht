'use client'

import React, { useEffect } from 'react'

interface PerformanceMetric {
  name: string
  value: number
  timestamp: number
}

interface PerformanceMonitorProps {
  enabled?: boolean
  onMetric?: (metric: PerformanceMetric) => void
}

export default function PerformanceMonitor({ 
  enabled = process.env.NODE_ENV === 'production',
  onMetric 
}: PerformanceMonitorProps) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    // Track when analytics scripts load
    const trackScriptPerformance = () => {
      const resourceEntries = performance.getEntriesByType('resource')
      const scriptEntries = resourceEntries.filter((entry) => 
        entry.name.includes('googletagmanager') || 
        entry.name.includes('visualwebsiteoptimizer') ||
        entry.name.includes('analytics')
      )

      scriptEntries.forEach((entry) => {
        const metric: PerformanceMetric = {
          name: `script_load_${entry.name.split('/').pop()?.split('.')[0] || 'unknown'}`,
          value: Math.round(entry.duration),
          timestamp: Date.now()
        }

        console.log(`Script loaded: ${entry.name}`, {
          duration: Math.round(entry.duration),
          transferSize: (entry as PerformanceResourceTiming).transferSize || 0
        })

        // Send to analytics if available
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'script_performance', {
            event_category: 'Performance',
            event_label: metric.name,
            value: metric.value
          })
        }

        onMetric?.(metric)
      })
    }

    // Track basic performance metrics
    const trackBasicMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        const metrics: PerformanceMetric[] = [
          {
            name: 'dom_content_loaded',
            value: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
            timestamp: Date.now()
          },
          {
            name: 'page_load_time',
            value: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
            timestamp: Date.now()
          }
        ]

        metrics.forEach(metric => {
          console.log(`[Performance] ${metric.name}:`, metric.value)
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'performance_metric', {
              event_category: 'Performance',
              event_label: metric.name,
              value: metric.value
            })
          }

          onMetric?.(metric)
        })
      }
    }

    // Track script loading performance after page load
    const timer = setTimeout(() => {
      trackScriptPerformance()
      trackBasicMetrics()
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [enabled, onMetric])

  return null
}

// Hook for performance data
export function usePerformanceData() {
  const [metrics, setMetrics] = React.useState<PerformanceMetric[]>([])
  const [isSupported, setIsSupported] = React.useState(false)

  useEffect(() => {
    setIsSupported(typeof window !== 'undefined' && 'performance' in window)
  }, [])

  const addMetric = React.useCallback((metric: PerformanceMetric) => {
    setMetrics(prev => [...prev.filter(m => m.name !== metric.name), metric])
  }, [])

  const getAverageMetric = React.useCallback((name: string) => {
    const matchingMetrics = metrics.filter(m => m.name === name)
    return matchingMetrics.length > 0 
      ? matchingMetrics.reduce((sum, m) => sum + m.value, 0) / matchingMetrics.length
      : 0
  }, [metrics])

  return {
    metrics,
    isSupported,
    addMetric,
    getAverageMetric
  }
} 