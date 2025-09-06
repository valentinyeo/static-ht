import { ComparisonFeature, CompetitorInfo } from "@/components/pages/LandingPage/Comparison/comparison-table-data"
import { TableHeader } from "@/components/pages/LandingPage/Comparison/comparison-table-header"
import { TableRowWithBadge } from "@/components/pages/LandingPage/Comparison/comparison-table-row-with-badge"

interface DesktopTableWithBadgeProps {
  features: (ComparisonFeature & { description?: string })[]
  competitors: CompetitorInfo[]
}

export const DesktopTableWithBadge = ({ features, competitors }: DesktopTableWithBadgeProps) => {
  return (
    <table className="hidden md:table w-full border-collapse text-white">
      <TableHeader competitors={competitors} isMobile={false} />
      <tbody>
        {features.map((feature, index) => (
          <TableRowWithBadge 
            key={index}
            feature={feature}
            competitors={competitors}
            index={index}
            isMobile={false}
          />
        ))}
      </tbody>
    </table>
  )
} 