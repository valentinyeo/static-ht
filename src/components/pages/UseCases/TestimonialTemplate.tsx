import { HeroSection } from './HeroSection'
import { BottomCTASection } from './BottomCTASection'
import { Container, ContentWrapper, Headline } from '@/components/ui'
import Image from 'next/image'
import React from 'react'

// --- Interfaces (unchanged) ---
interface HeroData {
  title: string
  subtitle: string
  primaryCta: { 
    label: string
    href: string
    external?: boolean
  }
  secondaryCta: { 
    label: string
    href: string
  }
}

interface BottomCTAData {
  title: string
  body: string
  primaryCta: {
    label: string
    href: string
    external?: boolean
  }
  secondaryCta: {
    label: string
    href: string
  }
}

interface ChallengeSection {
  title: string
  before: {
    title: string
    items: string[]
  }
  after: {
    title: string
    items: string[]
  }
  imageUrl?: string
  challengeSolutionCards?: {
    challenge: {
      title: string
      description: string
    }
    solution: {
      title: string
      description: string
    }
  }
}

interface SolutionSection {
  title: string
  solutions: Array<{
    title: string
    description: string
    bullets?: string[]
    imageUrl?: string
  }>
  layout?: 'grid' | 'feature-modules'
}

interface ResultsSection {
  title: string
  results: Array<{
    title: string
    before: string
    after: string
    note?: string
    imageUrl?: string
  }>
  layout?: 'cards' | 'feature-modules'
}

interface MetricsTable {
  title: string
  metrics: Array<{
    metric: string
    before: string
    after: string
    improvement: string
  }>
}

interface KeyFeaturesSection {
  title: string
  features: Array<{
    title: string
    description: string
    bullets?: string[]
    quote?: string
    imageUrl?: string
    layout?: 'image-left' | 'text-left'
  }>
}

interface WhyItWorksSection {
  title: string
  reasons: Array<{
    title: string
    description: string
  }>
}

interface MetricsOverview {
  metrics: Array<{
    value: string
    label: string
  }>
}

interface TestimonialTemplateProps {
  heroData: HeroData
  metricsOverview: MetricsOverview
  challengeSection: ChallengeSection
  solutionSection: SolutionSection
  resultsSection: ResultsSection
  metricsTable: MetricsTable
  keyFeaturesSection: KeyFeaturesSection
  whyItWorksSection: WhyItWorksSection
  bottomCTAData: BottomCTAData
  aboutCompany: string
}

// --- Modular Components ---

function MetricsOverviewSection({ metrics }: MetricsOverview) {
  return (
    <Container variant="section">
      <ContentWrapper>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                {metric.value}
              </div>
              <div className="text-lg text-white/80 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </Container>
  )
}

function ChallengeCard({
  type,
  title,
  items,
  highlight,
  highlightClass,
  highlightPosition = 'top-left',
  borderClass,
  barClass,
  iconClass,
  iconSvg,
  mockInterface,
}: {
  type: 'before' | 'after'
  title: string
  items: string[]
  highlight: string
  highlightClass: string
  highlightPosition?: 'top-left' | 'top-right'
  borderClass: string
  barClass: string
  iconClass: string
  iconSvg: React.ReactNode
  mockInterface: React.ReactNode
}) {
  return (
    <div className={`p-8 bg-white/[0.02] border-2 ${borderClass} relative overflow-hidden rounded-xl flex flex-col items-start gap-4`}>
      {/* Highlight badge */}
      <div className="w-fit">
          <div className={highlightClass}>
            {highlight}
          </div>
        </div>

      {/* Title and bar */}
      <div className="mb-6 w-full">
        <h3 className="font-bold text-left text-2xl text-white mb-4">{title}</h3>
        <div className={barClass}></div>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {items.map((item, index) => {
          const [itemTitle, description] = item.includes(' - ') ? item.split(' - ') : [item, ''];
          return (
            <div key={index} className="flex items-start space-x-3">
              <div className={`w-5 h-5 ${iconClass} mt-0.5 flex-shrink-0`}>
                {iconSvg}
              </div>
              <div>
                <p className="font-medium text-left text-white">{itemTitle}</p>
                {description && <p className="text-sm text-white/70">{description}</p>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mock Interface */}
      {mockInterface}
    </div>
  );
}

function ChallengeBeforeAfter({
  before,
  after,
  beforeIcon = '✗',
  afterIcon = '✓',
}: {
  before: { title: string; items: string[] }
  after: { title: string; items: string[] }
  beforeIcon?: string
  afterIcon?: string
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16 min-w-[80%] mx-auto">
      {/* Before Card */}
      <ChallengeCard
        type="before"
        title={before.title}
        items={before.items}
        highlight="Before HyperTask"
        highlightClass="bg-hypertask-gray/10 text-hypertask-gray px-5 py-1 rounded-full text-base font-semibold"
        highlightPosition="top-left"
        borderClass="border-hypertask-gray/20"
        barClass="w-16 h-1 bg-hypertask-gray rounded-full"
        iconClass="text-hypertask-gray"
        iconSvg={
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
          </svg>
        }
        mockInterface={
          <div className="mt-8 p-4 w-full bg-white/[0.02] rounded-lg border border-white/10">
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 bg-white/[0.05] rounded border-2 border-dashed border-white/20"></div>
              <div className="h-16 bg-white/[0.05] rounded border-2 border-dashed border-white/20"></div>
              <div className="h-16 bg-white/[0.05] rounded border-2 border-dashed border-white/20"></div>
            </div>
            <p className="text-xs text-white/60 mt-2 text-center">Scattered tools and workflows</p>
          </div>
        }
      />

      {/* After Card */}
      <ChallengeCard
        type="after"
        title={after.title}
        items={after.items}
        highlight="The Goal"
        highlightClass="bg-hypertask-purple/10 text-hypertask-purple px-5 py-1 rounded-full text-base font-semibold"
        highlightPosition="top-right"
        borderClass="border-hypertask-purple/20"
        barClass="w-full h-1 bg-hypertask-purple rounded-full"
        iconClass="text-hypertask-purple"
        iconSvg={
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.236 4.53L8.53 10.53a.75.75 0 00-1.06 1.061l2.03 2.03a.75.75 0 001.137-.089l3.857-5.401z" clipRule="evenodd" />
          </svg>
        }
        mockInterface={
          <div className="mt-8 p-4 bg-hypertask-purple/5 w-full rounded-lg border border-hypertask-purple/20">
            <div className="space-y-2">
              <div className="h-3 bg-hypertask-purple/20 rounded-full w-full"></div>
              <div className="h-3 bg-hypertask-purple/15 rounded-full w-4/5"></div>
              <div className="h-3 bg-hypertask-purple/10 rounded-full w-3/5"></div>
            </div>
            <p className="text-xs text-hypertask-purple mt-2 text-center">Unified, streamlined interface</p>
          </div>
        }
      />
    </div>
  );
}

function ChallengeSectionComponent({ section }: { section: ChallengeSection }) {
  return (
    <Container variant="section">
      <ContentWrapper>
        <div className="text-center mb-16">
          <Headline variant="regular">{section.title}</Headline>
          <p className="text-xl text-white/70 mt-6 max-w-3xl mx-auto leading-relaxed">
            See the dramatic transformation HyperTask delivers
          </p>
        </div>
        
        <ChallengeBeforeAfter before={section.before} after={section.after} />

      </ContentWrapper>
    </Container>
  )
}

function SolutionCard({
  title,
  description,
  bullets,
}: {
  title: string
  description: string
  bullets?: string[]
}) {
  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
      <h3 className="text-xl font-bold mb-4 text-purple-400">{title}</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-4">{description}</p>
      {bullets && (
        <ul className="text-gray-400 space-y-2">
          {bullets.map((bullet, bulletIndex) => (
            <li key={bulletIndex}>&bull; {bullet}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function SolutionFeatureModule({
  solution,
  imageFirst,
}: {
  solution: SolutionSection['solutions'][number]
  imageFirst: boolean
}) {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-12">
      {solution.imageUrl && (
        <div className={`${imageFirst ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'} relative`}>
          <Image
            src={solution.imageUrl}
            alt={`${solution.title} - Feature Visual`}
            className="sm:max-w-[40rem] object-left left sm:min-h-[30rem] object-cover w-full rounded-xl"
            width={1000}
            height={1000}
          />
          {/* Organic fade overlay */}
          {imageFirst ? (
            <>
              <div
                className="pointer-events-none absolute inset-0 hidden sm:block"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(90% 63% at 100% 100%, rgba(0, 0, 0, 0.35) 10%, rgba(0, 0, 0, 0) 64%),' +
                    'linear-gradient(300deg, rgba(0, 0, 0, 0.85) 8%, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0) 78%),' +
                    'radial-gradient(65% 49% at 100% 0%, rgba(0, 0, 0, 1) 2%, rgba(0, 0, 0, 0) 94%)',
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(130% 80% at 0% 100%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.0) 65%),' +
                    'linear-gradient(50deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.0) 75%)',
                }}
              />
            </>
          ) : (
            <>
              <div
                className="pointer-events-none absolute inset-0 hidden sm:block"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(120% 70% at 100% 100%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 70%),' +
                    'linear-gradient(300deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.0) 70%),' +
                    'radial-gradient(60% 45% at 100% 0%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.0) 80%)',
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(130% 80% at 100% 100%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 65%),' +
                    'linear-gradient(310deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.0) 75%)',
                }}
              />
            </>
          )}
        </div>
      )}
      <div className={`${solution.imageUrl ? (imageFirst ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1') : 'lg:col-span-12'}`}>
        <div className="text-left">
          <h3 className="text-balance text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight mb-4">
            {solution.title}
          </h3>
          <div className="text-white/80 text-base md:text-base font-normal leading-relaxed whitespace-pre-line mb-4">
            {solution.description}
          </div>
          {solution.bullets && solution.bullets.length > 0 && (
            <ul className="list-disc pl-6 space-y-2 text-white/80 text-base font-normal">
              {solution.bullets.map((bullet: string, bulletIndex: number) => (
                <li key={bulletIndex} className="text-base">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

function SolutionSectionComponent({ section }: { section: SolutionSection }) {
  return (
    <Container variant="section">
      <ContentWrapper>
        <Headline variant="regular">{section.title}</Headline>
        {section.layout === 'feature-modules' ? (
          <div className="mt-12 space-y-16">
            {section.solutions.map((solution, index) => (
              <SolutionFeatureModule
                key={index}
                solution={solution}
                imageFirst={index % 2 === 0}
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {section.solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                title={solution.title}
                description={solution.description}
                bullets={solution.bullets}
              />
            ))}
          </div>
        )}
      </ContentWrapper>
    </Container>
  )
}

function ResultCard({
  title,
  before,
  after,
  note,
}: {
  title: string
  before: string
  after: string
  note?: string
}) {
  return (
    <div className=" p-8 rounded-xl border text-left border-purple-500/30 ">
      <h3 className="text-2xl font-bold mb-4 text-purple-400">{title}</h3>
      <div className="space-y-3 text-gray-300 " >
        <p className="text-lg">
          <span className="text-gray-400 font-semibold">Before:</span> {before}
        </p>
        <p className="text-lg">
          <span className="text-white font-semibold">After:</span> {after}
        </p>
        {note && (
          <p className="text-sm text-purple-100/60 mt-4">{note}</p>
        )}
      </div>
    </div>
  )
}

function ResultsSectionComponent({ section }: { section: ResultsSection }) {
  return (
    <Container variant="section">
      <ContentWrapper>
        <Headline variant="regular">{section.title}</Headline>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {section.results.map((result, index) => (
            <ResultCard
              key={index}
              title={result.title}
              before={result.before}
              after={result.after}
              note={result.note}
            />
          ))}
        </div>
      </ContentWrapper>
    </Container>
  )
}

function MetricsTableSection({ table }: { table: MetricsTable }) {
  return (
    <Container variant="section">
      <ContentWrapper>
        <Headline variant="regular">{table.title}</Headline>
        <div className="w-full max-w-full mx-auto overflow-x-auto p-0 md:p-4 bg-transparent border border-white/10 rounded-lg mt-12">
          <table className="w-full border-collapse text-white">
            <thead className='font-semibold'>
              <tr className="border-b border-white/20">
                <th className="sticky left-0 z-10 bg-white/5 p-4 text-white  text-lg align-middle text-left">
                  Metric
                </th>
                <th className="p-4 text-gray-300 font-bold text-lg bg-white/5 align-middle text-left">
                  Before HyperTask
                </th>
                <th className="p-4 text-white font-bold text-lg bg-white/5 align-middle text-left">
                  After HyperTask
                </th>
                <th className="p-4 text-purple-400 font-bold text-lg bg-white/5 align-middle text-left">
                  Improvement
                </th>
              </tr>
            </thead>
            <tbody>
              {table.metrics.map((metric, index) => (
                <tr
                  key={index}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <td className="sticky left-0 z-10 bg-black/50 p-4 text-white font-medium text-lg align-middle text-left">
                    {metric.metric}
                  </td>
                  <td className="p-4 text-gray-300 text-lg align-middle text-left">
                    {metric.before}
                  </td>
                  <td className="p-4 text-gray-300 text-lg align-middle text-left">
                    {metric.after}
                  </td>
                  <td className="p-4 text-purple-300 font-bold text-lg align-middle text-left">
                    {metric.improvement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentWrapper>
    </Container>
  )
}


function KeyFeatureModule({
  feature,
  imageFirst,
}: {
  feature: KeyFeaturesSection['features'][number]
  imageFirst: boolean
}) {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-12">
      <div className={`${imageFirst ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'} relative`}>
        <Image
          src={feature.imageUrl!}
          alt={`${feature.title} - Feature Visual`}
          className="sm:max-w-[40rem] object-left left sm:min-h-[30rem] object-cover w-full rounded-xl"
          width={1000}
          height={1000}
        />
        {/* Organic fade overlay */}
        {imageFirst ? (
          <>
            <div
              className="pointer-events-none absolute inset-0 hidden sm:block"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(90% 63% at 100% 100%, rgba(0, 0, 0, 0.35) 10%, rgba(0, 0, 0, 0) 64%),' +
                  'linear-gradient(300deg, rgba(0, 0, 0, 0.85) 8%, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0) 78%),' +
                  'radial-gradient(65% 49% at 100% 0%, rgba(0, 0, 0, 1) 2%, rgba(0, 0, 0, 0) 94%)',
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 sm:hidden"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(130% 80% at 0% 100%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.0) 65%),' +
                  'linear-gradient(50deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.0) 75%)',
              }}
            />
          </>
        ) : (
          <>
            <div
              className="pointer-events-none absolute inset-0 hidden sm:block"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(120% 70% at 100% 100%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 70%),' +
                  'linear-gradient(300deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.0) 70%),' +
                  'radial-gradient(60% 45% at 100% 0%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.0) 80%)',
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 sm:hidden"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(130% 80% at 100% 100%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 65%),' +
                  'linear-gradient(310deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.0) 75%)',
              }}
            />
          </>
        )}
      </div>
      <div className={`${imageFirst ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
        <div className="text-left">
          <h3 className="text-balance text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight mb-4">
            {feature.title}
          </h3>
          {feature.quote ? (
            <blockquote className="text-white/80 text-base md:text-lg font-normal leading-relaxed italic mb-4">
              &ldquo;{feature.quote}&rdquo;
            </blockquote>
          ) : (
            <div className="text-white/80 text-base md:text-base font-normal leading-relaxed whitespace-pre-line mb-4">
              {feature.description}
            </div>
          )}
          {feature.bullets && feature.bullets.length > 0 && (
            <ul className="list-disc pl-6 space-y-2 text-white/80 text-base font-normal">
              {feature.bullets.map((bullet: string, bulletIndex: number) => (
                <li key={bulletIndex} className="text-base">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

function KeyFeatureCard({
  feature,
}: {
  feature: KeyFeaturesSection['features'][number]
}) {
  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-purple-400">{feature.title}</h3>
      {feature.quote ? (
        <p className="text-gray-300 italic text-lg leading-relaxed">
          &ldquo;{feature.quote}&rdquo;
        </p>
      ) : (
        <>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            {feature.description}
          </p>
          {feature.bullets && (
            <ul className="space-y-3 text-gray-300 text-lg">
              {feature.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>&bull; {bullet}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}

function KeyFeaturesSectionComponent({ section }: { section: KeyFeaturesSection }) {
  return (
    <Container variant="section">
      <ContentWrapper>
        <Headline variant="regular">{section.title}</Headline>
        <div className="mt-12 space-y-16">
          {section.features.map((feature, index) => {
            if (feature.imageUrl && feature.layout) {
              const imageFirst = feature.layout === 'image-left';
              return (
                <KeyFeatureModule
                  key={index}
                  feature={feature}
                  imageFirst={imageFirst}
                />
              );
            } else {
              return <KeyFeatureCard key={index} feature={feature} />;
            }
          })}
        </div>
      </ContentWrapper>
    </Container>
  )
}

function WhyItWorksSectionComponent({ section }: { section: WhyItWorksSection }) {
  // Use a responsive grid for better layout
  return (
    <Container variant="section">
      <ContentWrapper>
        <Headline variant="regular" className="text-center">{section.title}</Headline>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
          {section.reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-start h-full w-full max-w-xs min-w-[260px]"
              style={{ maxWidth: "320px" }}
            >
              <h3 className="text-xl font-bold mb-4 text-left text-purple-400 min-h-[3.5rem] flex items-center">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-left leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </Container>
  )
}

function AboutCompanySection({ aboutCompany }: { aboutCompany: string }) {
  return (
    <Container variant="section">
      <div className="text-center">
        <p className="text-lg text-gray-400 leading-relaxed">
          {aboutCompany}
        </p>
      </div>
    </Container>
  )
}

// --- Main Template ---

export function TestimonialTemplate({
  heroData,
  metricsOverview,
  challengeSection,
  solutionSection,
  resultsSection,
  metricsTable,
  keyFeaturesSection,
  whyItWorksSection,
  bottomCTAData,
  aboutCompany
}: TestimonialTemplateProps) {
  return (
    <>
      <HeroSection heroData={heroData} />
      <MetricsOverviewSection metrics={metricsOverview.metrics} />
      <ChallengeSectionComponent section={challengeSection} />
      <SolutionSectionComponent section={solutionSection} />
      <ResultsSectionComponent section={resultsSection} />
      <MetricsTableSection table={metricsTable} />
      <KeyFeaturesSectionComponent section={keyFeaturesSection} />
      <WhyItWorksSectionComponent section={whyItWorksSection} />
      <BottomCTASection ctaData={bottomCTAData} />
      {/* <AboutCompanySection aboutCompany={aboutCompany} /> */}
    </>
  )
}

// Export types for use in other files
export type { 
  HeroData, 
  BottomCTAData, 
  MetricsOverview,
  ChallengeSection,
  SolutionSection,
  ResultsSection,
  MetricsTable,
  KeyFeaturesSection,
  WhyItWorksSection
} 