// components/ComparisonTable.tsx
import Link from 'next/link'
import { features, competitors, tableConfig } from './comparison-table-data'
import { MobileTable } from './comparison-table-mobile'
import { DesktopTable } from './comparison-table-desktop'
import { Container, ContentWrapper, Subheadline, Headline } from '@/components/ui'

const ComparisonTable = () => {
  return (
    <Container variant="section" className='VWO_381_DISABLE_ON_VWO'>
      <ContentWrapper gap="lg">
          <Headline variant="regular">
            {tableConfig.title}
          </Headline>
          <Subheadline>
            {tableConfig.subtitle}
          </Subheadline>
          
          <div className="w-full max-w-full mx-auto overflow-x-auto p-0 md:p-4 bg-transparent md:bg-transparent border border-white/10 md:border-white/10 rounded-lg md:rounded">
            <MobileTable features={features} competitors={competitors} />
            <DesktopTable features={features} competitors={competitors} />
          </div>

        
      </ContentWrapper>
    </Container>
  )
}

export default ComparisonTable