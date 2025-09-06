// components/ClientLogos.tsx
import Image from 'next/image'
import { Container, ContentWrapper, Separator } from '@/components/ui'

const logos = [
  { src: '/images/logos/IDA.avif', alt: 'International Drivers Association' },
  { src: '/images/logos/66looplogo.avif', alt: '66LOOP' },
  { src: '/images/logos/Vetsak.avif', alt: 'vetsak' },
  { src: '/images/logos/inne.avif', alt: 'inne' },
]

const ClientLogos = () => {
  return (
    <Container variant="section">
      <ContentWrapper gap="lg">
        <h2 className="text-center text-base  font-medium tracking-widest text-white/90">
          Trusted By Customers
        </h2>

        <div className="w-full flex justify-center">
          <div
            className="
              grid 
              grid-cols-2 
              gap-x-8 gap-y-6 
              sm:flex sm:items-center sm:justify-center
            "
          >
            {logos.map((logo, index) => (
              <div key={logo.src} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={`${logo.alt} logo`}
                  width={1000}
                  height={1000}
                  loading='lazy'
                  className="h-8  w-auto object-contain opacity-80"
                />
                {/* Show separator only on desktop between logos */}
                {index < logos.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="mx-6 md:mx-10 hidden sm:block h-8 md:h-10 bg-white/20"
                    decorative
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </Container>
  )
}

export default ClientLogos