import { ComparisonFeature, CompetitorInfo } from './comparison-table-data'

// Custom CheckMark component with proper colors
interface CheckMarkProps {
  status: "✓" | "~" | "X"
  isHypertask: boolean
}

const CheckMark = ({ status, isHypertask }: CheckMarkProps) => {
  if (status === "✓") {
    return (
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          fill="#8d44be"
        />
        <path 
          d="M9 12l2 2 4-4" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  
  if (status === "~") {
    return (
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          fill={isHypertask ? "#8d44be" : "#6b7280"} 
        />
        <path 
          d="M8 12h8" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
    )
  }
  
  // status === "X"
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        fill="#6b7280" 
      />
      <path 
        d="M15 9l-6 6M9 9l6 6" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface TableRowProps {
  feature: ComparisonFeature & { description?: string }
  competitors: CompetitorInfo[]
  index: number
  isMobile?: boolean
}

export const TableRow = ({ feature, competitors, index, isMobile = false }: TableRowProps) => {
  const featureClasses = isMobile
    ? " bg-black text-left font-medium text-white/90 w-full text-sm border-b border-gray-700 sticky left-0 z-10"
    : "p-3 md:p-4 text-left border-b border-white/10 text-sm transition-colors duration-200 font-semibold pl-6"

  const cellClasses = isMobile
    ? "p-4 text-center text-sm border-b border-gray-700 w-full text-white "
    : "p-3 md:p-4 text-center border-b border-white/10 text-sm transition-colors duration-200 text-white font-bold"

  const getCellClasses = (cellIndex: number, competitor: CompetitorInfo) => {
    const isSecondColumn = cellIndex === 0
    const stickyClasses = isSecondColumn && isMobile 
      ? ""//"sticky left-[38%] z-[50]" 
      : ""
    
    return ` ${cellClasses} ${competitor.isHighlighted ? (isMobile ? 'bg-[#110318]  font-semibold' : ' bg-[#110318]  font-semibold') : ''} ${stickyClasses}`
  }

  return (
    <tr 
      key={index} 
      className={isMobile 
        ? "table-row border-b border-gray-700" 
        : "hover:bg-white/[0.03] transition-colors duration-200"
      }
    >
      <td className={featureClasses}>
        {feature.feature}
      </td>
      {competitors.map((competitor, cellIndex) => (
        <td 
          key={competitor.key}
          className={getCellClasses(cellIndex, competitor)}
        >
          <CheckMark 
            status={feature[competitor.key]} 
            isHypertask={competitor.key === 'hypertask'} 
          />
        </td>
      ))}
    </tr>
  )
} 