import { cn } from '@/lib/utils'
import { CompetitorInfo } from './comparison-table-data'
import { CTAButton } from '@/components/ui/cta-button'
import Image from 'next/image'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

interface TableHeaderProps {
  competitors: CompetitorInfo[]
  isMobile?: boolean
}

export const TableHeader = ({ competitors, isMobile = false }: TableHeaderProps) => {
  const baseClasses = isMobile 
    ? "p-1 text-center font-bold  text-xs text-white/90 uppercase border-b border-gray-700 bg-black sticky top-0"
    : "p-3 md:p-4 text-center font-semibold text-xs text-white/70 uppercase border-b-2 border-white/10 pb-4"

  const featureClasses = isMobile
    ? "p-4 text-left font-bold text-xs text-white/90 uppercase border-b border-gray-700 bg-black sticky top-0 w-[30%] sticky left-0 z-10"
    : "p-3 md:p-4 text-left font-semibold text-xs text-white/70 uppercase border-b-2 border-white/10 pb-4 pl-6"

  const getCompetitorClasses = (index: number, competitor: CompetitorInfo) => {
    const isSecondColumn = index === 0
    const stickyClasses = isSecondColumn && isMobile 
      ? ""//"sticky left-[38%] z-9 bg-black" 
      : ""
    
    return `${baseClasses} ${competitor.isHighlighted ? (isMobile ? 'w-[130px]' : 'bg-purple-600/5  font-semibold') : ''} ${stickyClasses}`
  }

  return (
    <thead className={isMobile ? "bg-gray-800 table-header-group" : ""}>
      <tr className={isMobile ? "table-row border-b border-gray-700" : ""}>
        <th className={featureClasses}>
          Feature
        </th>
        {competitors.map((competitor, index) => (
          <th 
            key={competitor.key}
            className={cn(getCompetitorClasses(index, competitor))}
          >
            <div className="flex flex-col items-center gap-2 justify-center">
              <div className="flex items-center gap-2 justify-center">
                {competitor.badge && (
                  <Image
                    src="/Favicon - Light.png"
                    alt="Hypertask badge"
                    width={24}
                    height={24}
                    className='min-w-[18px] min-h-[18px]'
                  />
                )}
                {competitor.icon && <competitor.icon />}
                <span className={` ${competitor.key !== "hypertask" ? " hidden md:block" : " text-[#8d44be]"}`}>{competitor.name}</span>
              </div>
              
              {/* Add CTA button for Hypertask column - Desktop */}
              {competitor.key === 'hypertask' && !isMobile && (
                <CTAButton 
                  href={APP_LOGIN_URL}
                  variant="primary"
                  size="sm"
                  className=" mt-2 text-xs px-3 py-1 font-semibold !normal-case"
                >
                  Get Started
                </CTAButton>
              )}
              
              {/* Add small mobile CTA for Hypertask column */}
              {competitor.key === 'hypertask' && isMobile && (
                <CTAButton 
                  href={APP_LOGIN_URL}
                  variant="primary"
                  size="sm"
                  className="mt-1 text-xs px-2 font-semibold py-0.5 !normal-case"
                >
                  Get Started
                </CTAButton>
              )}
            </div>
            
          </th>
        ))}
      </tr>
    </thead>
  )
} 