"use client"

import { CTAContainer, Headline } from '@/components/ui'
import ScrollingColumns from './ScrollingColumns'
import TestimonialMobileCarousel from './TestimonialMobileCarousel'

interface TestimonialProps {
  name: string
  title: string
  image: string
  text: string
  pullQuote?: string
  rating?: number
  grayscale?: boolean
}

const testimonials2: TestimonialProps[] = [
  {
    name: "Marco Schache",
    title: "Vetsak Design Lead",
    image: "/marco_schache.avif",
    pullQuote: "Communication down by 80% for my team",
    rating: 5,
    text: "Unstructured communication between Slack, Whatsapp and Asana is down by 80% for my team of 7. Everyone actually reads and replies to their project messages now."
  },
  {
    name: "Rana Faizan",
    title: "66Loop CEO",
    image: "/rana_faizan.avif",
    pullQuote: "My digital home base - I practically live in it all day",
    rating: 5,
    text: "Auto splits are a game-changer! My 13-person team churns out hundreds of comments across 10+ projects weekly. Hypertask has become my digital home base - I practically live in it all day."
  },
  {
    name: "Robin Morgan",
    title: "Indepenjend Agency",
    image: "/robin_morgan.avif",
    pullQuote: "Inbox zero mindset is a game changer",
    rating: 5,
    text: "Applying 'inbox zero' mindset to project boards is a game changer. We communicate more and are better organized."
  },
  {
    name: "Rodrigo Nask",
    title: "Growth Marketer",
    image: "https://duv2gcpdgd578.cloudfront.net/tasks/attachments/1756289966053image.png",
    pullQuote: "Feeling like there's a breath of fresh air in engineering",
    rating: 5,
    text: "ClickUp, Todoist, Monday... you name it, I tried it all. Some lack features and some have too many or are too slow. Hypertask gave me the capacity to DO my f*** tasks without needing to MANAGE the system or getting a degree on it. You press a key and it responds, its like magic!"
  },
  {
    name: "Rein Figuracion",
    title: "Product Manager - IDA",
    image: "https://duv2gcpdgd578.cloudfront.net/tasks/attachments/1756413650201image.png",
    pullQuote: "Game-changer for team productivity and clarity",
    rating: 5,
    text: "Hypertask.ai has been a game-changer for our team. It keeps all our tasks organized in one place and makes it way easier to stay on track and work together. Highly recommend for any team looking to boost productivity and clarity.",
    grayscale: false
  },
  {
    name: "Varun Celly",
    title: "CRO Consultant",
    image: "https://duv2gcpdgd578.cloudfront.net/tasks/attachments/1756398032844image.png",
    pullQuote: "The best task management tool I've used",
    rating: 5,
    text: "After three months with Hypertask.ai, I can say it's the best task management tool I've used. It's a huge upgrade from Asana - faster, smarter, and far more efficient. The AI feels like a real partner, anticipating my needs and streamlining tasks, while the flexible Kanban board keeps our team running smoothly. For anyone in a fast-paced environment, Hypertask.ai is a game changer."
  },
  {
    name: "Lewis Mudrich",
    title: "Agency Owner",
    image: "/lewis_mudrich.avif",
    pullQuote: "Like Asana and Superhuman had a baby",
    rating: 5,
    text: "Hypertask is like Asana and Superhuman had a baby. All my tasks and team communication in one tool"
  },
  {
    name: "Denis Sotskii",
    title: "Designer",
    image: "https://duv2gcpdgd578.cloudfront.net/tasks/attachments/1756413633953image.png",
    text: "Hypertask completely streamlined our team communications. What used to take hours of back-and-forth messages now happens seamlessly in one place. The AI-powered features are incredibly helpful for keeping everyone aligned.",
    grayscale: true
  },
  {
    name: "Ellene Gladys",
    title: "Executive Assistant",
    image: "https://duv2gcpdgd578.cloudfront.net/tasks/attachments/1755172785582image.png",
    text: "The AI task writer is a game changer for our product development workflow. It understands our project context perfectly and generates detailed specifications that would normally take me hours to write. Our sprint planning is now 3x faster.",
    grayscale: true
  },
  {
    name: "Mohsin Rohani",
    title: "Freelance UX Designer",
    image: "https://duv2gcpdgd578.cloudfront.net/tasks/attachments/17551628715331516903412789.jpg",
    text: "As a designer, I used to spend way too much time chasing updates or rewriting the same specs in different places. With Hypertask, everything just flows. The AI actually understands context, writes tasks for me, and our whole team — design, dev, product — stays aligned without the usual back-and-forth. It's honestly made my workday way less chaotic.",
    grayscale: false
  }
]

function Testimonials2() {
  // Create deterministic slides for mobile carousel (no Math.random to prevent hydration issues)
  const createDeterministicSlides = () => {
    // Use a simple deterministic shuffle based on index positions instead of Math.random()
    const shuffled = [...testimonials2]
    const slides = []
    
    // Create slides with 4-5 testimonials each for better mobile experience
    const testimonialsPerSlide = Math.min(5, Math.ceil(shuffled.length / 2))
    const numberOfSlides = Math.ceil(shuffled.length / testimonialsPerSlide)
    
    for (let i = 0; i < numberOfSlides; i++) {
      const startIndex = (i * testimonialsPerSlide) % shuffled.length
      const slideTestimonials = []
      
      for (let j = 0; j < testimonialsPerSlide; j++) {
        const testimonialIndex = (startIndex + j) % shuffled.length
        slideTestimonials.push(shuffled[testimonialIndex])
      }
      
      slides.push(slideTestimonials)
    }
    
    return slides
  }

  const deterministicSlides = createDeterministicSlides()

  return (
    <div className=" min-h-screen py-16 relative overflow-hidden">
      <Headline variant="regular" className="text-white text-center mb-8">
        What our users say
      </Headline>
      <p className="text-gray-400 text-center text-lg mb-12">
        Real teams. Real results.
      </p>

      {/* Desktop and Tablet: Show scrolling columns */}
      <ScrollingColumns testimonials={testimonials2} />

      {/* Mobile: Show carousel with Embla CSS only loaded when needed */}
      <TestimonialMobileCarousel testimonials={deterministicSlides[0]} />
    </div>
  )
}

export default Testimonials2 