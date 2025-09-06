import { Container, ContentWrapper, Headline, Subheadline } from '@/components/ui'

interface VideoShowcaseProps {
  videoId?: string
  title?: string
  subtitle?: string
  className?: string
}

const VideoShowcase = ({ 
  videoId = "iTQ2QwJrn-A",
  title = "See Hypertask in Action",
  subtitle = "Watch how teams are transforming their productivity with AI-powered project management",
  className = "VWO_365"
}: VideoShowcaseProps) => {
  return (
    <Container variant="section" className={className}>
      <ContentWrapper gap="lg">
        {/* Section Header */}
        <div className="text-center ">
          <Headline variant="regular" className="text-white mb-4">
            {title}
          </Headline>
          <Subheadline className="text-gray-400 max-w-3xl mx-auto">
            {subtitle}
          </Subheadline>
        </div>

        {/* Video Container */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&color=white&theme=dark`}
              title="Hypertask Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        
      </ContentWrapper>
    </Container>
  )
}

export default VideoShowcase 