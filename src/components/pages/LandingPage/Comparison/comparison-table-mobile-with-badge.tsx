import { ComparisonFeature, CompetitorInfo } from "./comparison-table-data"
import { TableHeader } from "@/components/pages/LandingPage/Comparison/comparison-table-header"
import { TableRowWithBadge } from "@/components/pages/LandingPage/Comparison/comparison-table-row-with-badge"
import { CTAButton } from '@/components/ui/cta-button'
import { APP_LOGIN_URL } from "@/lib/redirect-utils"


interface MobileTableWithBadgeProps {
  features: (ComparisonFeature & { description?: string })[]
  competitors: CompetitorInfo[]
}

export const MobileTableWithBadge = ({ features, competitors }: MobileTableWithBadgeProps) => {
  return (
    <div className="md:hidden border-none rounded-lg shadow-lg overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse text-white table-fixed">
        <TableHeader competitors={competitors} isMobile={true} />
        <tbody className="table-row-group">
          {features.map((feature, index) => (
            <TableRowWithBadge 
              key={index}
              feature={feature}
              competitors={competitors}
              index={index}
              isMobile={true}
            />
          ))}
        </tbody>
      </table>
      
      {/* Mobile CTA Section */}
      <div className="flex flex-col items-center gap-3 p-4 bg-[#110318] border-t border-gray-700">
        <div className="text-center">
          <h3 className="text-[#8d44be] font-semibold text-lg">Ready to get started with Hypertask?</h3>
          <p className="text-white/70 text-sm mt-1">Start your team&apos;s journey with Hypertask</p>
        </div>
        <CTAButton 
          href={APP_LOGIN_URL}
          variant="primary"
          size="lg"
          className="w-full max-w-xs"
        >
          Get Started Free
        </CTAButton>
      </div>
      
      <div className="block text-center p-2  text-xs text-white/60 sticky left-0 border-t border-gray-700">
        ← Scroll →
      </div>
    </div>
  )
} 