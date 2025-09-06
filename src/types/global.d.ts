// Global type declarations for analytics
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, string | number | boolean | Record<string, string | number | boolean>>
    ) => void
    dataLayer: Array<Record<string, unknown>>
    google_tag_manager: Record<string, unknown>
    fbq: (command: string, eventName: string, parameters?: Record<string, string | number | boolean>) => void
    _vwo_code: Record<string, unknown>
  }
}

export {} 