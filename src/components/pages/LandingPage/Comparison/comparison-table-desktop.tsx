import { ComparisonFeature, CompetitorInfo } from "@/components/pages/LandingPage/Comparison/comparison-table-data"
import { TableHeader } from "@/components/pages/LandingPage/Comparison/comparison-table-header"
import { TableRow } from "@/components/pages/LandingPage/Comparison/comparison-table-row"

interface DesktopTableProps {
  features: ComparisonFeature[]
  competitors: CompetitorInfo[]
}

export const DesktopTable = ({ features, competitors }: DesktopTableProps) => {
  return (
    <table className="hidden md:table w-full border-collapse text-white">
      <TableHeader competitors={competitors} isMobile={false} />
      <tbody>
        {features.map((feature, index) => (
          <TableRow 
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