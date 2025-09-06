import { Container } from '@/components/ui'
import { CTAButton } from '@/components/ui/cta-button'
import Image from 'next/image'

export interface FeatureModule {
  id: string
  layout: 'image-left' | 'text-left'
  eyebrow: string
  headline: string
  body: string
  bulletsTitle?: string
  bullets?: string[]
  imageUrl: string
  ctaLabel: string
}

interface FeatureModulesProps {
  modules: FeatureModule[]
}

export function FeatureModules({ modules }: FeatureModulesProps) {
  return (
    <>
      {modules.map((module) => {
        const imageFirst = module.layout === 'image-left'
        return (
          <Container id={module.id} key={module.id} variant="section">
            <div className="grid w-full grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-12">
              {/* Visual */}
              <div className={`${imageFirst ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'} relative`}>
                <Image
                  src={module.imageUrl}
                  alt={`${module.headline} - Feature Visual`}
                  className="sm:max-w-[40rem] object-left left sm:min-h-[30rem] object-cover w-full rounded-xl"
                  width={1000}
                  height={1000}
                />
                                 {/* Organic fade overlay */}
                {imageFirst ? (
                  <>
                    {/* Desktop: single layered background to avoid over-darkening */}
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
                    {/* Mobile: gentler coverage with bottom support */}
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
                    {/* Desktop: mirrored layering for right side */}
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
                    {/* Mobile: mirrored gentle fade */}
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

              {/* Copy */}
              <div className={`${imageFirst ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
                <div className="text-left">
                  <p className="mb-3 text-xs uppercase tracking-widest text-white/60 font-medium">{module.eyebrow}</p>
                  <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                    {module.headline}
                  </h2>
                  <div className="mt-4 text-white/80 text-base md:text-base font-normal leading-relaxed whitespace-pre-line">
                    {module.body}
                  </div>
                  {module.bullets && module.bullets.length > 0 && (
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-white/90 mb-3">{module.bulletsTitle}</p>
                      <ul className="list-disc pl-6 space-y-2 text-white/80 text-base font-normal">
                        {module.bullets.map((item: string) => (
                          <li key={item} className="text-base">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                 
                </div>
              </div>
            </div>
          </Container>
        )
      })}
    </>
  )
} 