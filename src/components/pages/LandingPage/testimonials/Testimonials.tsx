"use client"

import Image from "next/image"
import { CTAButton } from '@/components/ui/cta-button'
import { CTAContainer } from '@/components/ui'
import { Container, ContentWrapper, Headline } from '@/components/ui'
import { APP_LOGIN_URL } from "@/lib/redirect-utils"

interface TestimonialProps {
  name: string
  title: string
  image: string
  text: string
  grayscale?: boolean
}

const TestimonialCard = ({ name, title, image, text, grayscale = false }: TestimonialProps) => {
  return (
    <div className="bg-white/5 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_30px_30px_rgba(0,0,0,0.3)] hover:bg-white/8 border border-white/10">
      <div className="flex items-center mb-6">
        <Image
          src={image}
          alt={name}
          width={1920}
          height={1080}
          className={`w-16 h-16 rounded-full object-cover mr-4 ${grayscale ? 'grayscale' : ''}`}
        />
        <div className="">
          <h3 className="text-base text-start font-semibold mb-1 text-white">{name}</h3>
          <p className="text-sm text-start text-white/70 mb-2">{title}</p>
          <div className="text-yellow-400 text-base text-start tracking-[2px]">★★★★★</div>
        </div>
      </div>
      <p className="text-base text-start text-white/90">{text}</p>
    </div>
  )
}

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Marco Schache",
      title: "Vetsak Design Lead",
      image: "/marco_schache.avif",
      text: "Unstructured communication between Slack, Whatsapp and Asana is down by 80% for my team of 7. Everyone actually reads and replies to their project messages now."
    },
    {
      name: "Rana Faizan",
      title: "66Loop CEO",
      image: "/rana_faizan.avif",
      text: "Auto splits are a game-changer! My 13-person team churns out hundreds of comments across 10+ projects weekly. Hypertask has become my digital home base - I practically live in it all day."
    },
    {
      name: "Robin Morgan",
      title: "Indepenjend Agency",
      image: "/robin_morgan.avif",
      text: "Applying 'inbox zero' mindset to project boards is a game changer. We communicate more and are better organized."
    },
    {
      name: "Lewis Mudrich",
      title: "Agency Owner",
      image: "/lewis_mudrich.avif",
      text: "Hypertask is like Asana and Superhuman had a baby. All my tasks and team communication in one tool"
    },
    {
      name: "Denis Sotskii",
      title: "Designer",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEFIYUuXqq8dA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1664798250473?e=1755734400&v=beta&t=2YUVhU8DUkHcW-wXQDUg99ojGOU6Tx5lGhne_0CyGic",
      text: "Hypertask completely streamlined our team communications. What used to take hours of back-and-forth messages now happens seamlessly in one place. The AI-powered features are incredibly helpful for keeping everyone aligned.",
      grayscale: true
    },
    {
      name: "Rein Figuracion",
      title: "Product Manager",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGEslXRQJmW7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1643777067074?e=1755734400&v=beta&t=sECeuwRFWvW5Gz2EYdYlimysFP5WqBPY8pO3ICGZQUU",
      text: "The AI task writer is a game changer for our product development workflow. It understands our project context perfectly and generates detailed specifications that would normally take me hours to write. Our sprint planning is now 3x faster.",
      grayscale: true
    }
  ]

  return (
    <Container variant="section">
      <ContentWrapper gap="lg">
        <Headline variant="hero">
          What our users say
        </Headline>
        <p className="text-gray-400 text-center text-lg mb-8">
          Real teams. Real results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* CTA Button */}
        <CTAContainer marginTop="sm">
          <CTAButton
            href={APP_LOGIN_URL}
            variant="primary"
            size="lg"
          >
            Get Started
          </CTAButton>
        </CTAContainer>
      </ContentWrapper>
    </Container>
  )
}

export default Testimonials 