import Image from "next/image";
import {
  Headline,
  Subheadline,
  SectionTitle,
  BodyText,
  Container,
  ContentWrapper,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardSubheadline,
  CardHeadline
} from '@/components/ui';
import MediaContainer from '@/components/ui/MediaContainer';
import GradientContainer from '@/components/ui/GradientContainer';

// Force static generation to reduce CPU usage on Cloudflare Workers
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour instead of 5 minutes

function SubFeatureGrid({ features }: { features: { title: string; description: string; image?: string; imageAlt?: string }[] }) {
  const getGridCols = () => {
    if (features.length >= 6) {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    } else {
      return "grid-cols-1 sm:grid-cols-2";
    }
  };
  
  return (
    <div className={`grid ${getGridCols()} gap-4 sm:gap-6 mt-8 w-full`}>
      {features.map((f, i) => (
        <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="text-left">
            {f.image && (
              <div className="mb-4 w-fit relative overflow-hidden rounded-sm">
                <MediaContainer
                  src={f.image}
                  type="image"
                  alt={f.imageAlt || f.title}
                  width={400}
                  height={300}
                  className="rounded-sm aspect-square object-cover object-left md:max-w-[334px]"
                />
             
              {/* gradient overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/60 via-black/10 " />
              </div>
              
            )}
            <CardHeadline  className="">{f.title}</CardHeadline>
            <CardSubheadline className="text-white/70">{f.description}</CardSubheadline>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

type FeatureSectionLayout = "split" | "docked";

function FeatureSection({
  title,
  description,
  image,
  imageAlt,
  bgImage,
  subFeatures,
  gradientVariant = "5",
  layout = "split",
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  bgImage: string;
  subFeatures: { title: string; description: string; image?: string; imageAlt?: string }[];
  gradientVariant: '5' | 'a' | 'b' | '1' | '2' | '3' | '4' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | 'c' | 'd';
  layout?: FeatureSectionLayout;
}) {
  return (
    <Container variant="hero" className="lg:px-0">
      <ContentWrapper className="sm:w-full max-w-[90vw] md:max-w-full" gap="lg">
        <GradientContainer
          gradientVariant={gradientVariant}
          variant="fullscreen"
          className={`text-left gap-5 w-full sm:w-full flex-col lg:flex-row md:max-w-full ${layout === "docked" ? "pr-0" : "pr-20"}`}
        >
          {layout === "split" ? (
            <>
              <div className="flex-1 self-start lg:self-end lg:p-7 xl:p-14">
                <Headline className="text-left mb-4">{title}</Headline>
                <Subheadline className="font-medium text-left">{description}</Subheadline>
              </div>
              <div className="flex-1">
                <MediaContainer
                  src={image}
                  type="image"
                  alt={imageAlt}
                  width={2000}
                  height={2000}
                  className="shadow-lg w-full max-w-[42rem] md:max-w-[36rem] sm:max-w-[22rem] relative -bottom-2 rounded-sm"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 self-start lg:self-end lg:p-7 xl:p-14">
                <Headline className="text-left mb-4">{title}</Headline>
                <Subheadline className="font-medium text-left">{description}</Subheadline>
              </div>
              <div className="w-[60%]">
                <MediaContainer
                  src={image}
                  type="image"
                  alt={imageAlt}
                  width={2000}
                  height={2000}
                  className="shadow-lg min-w-[35rem] sm:min-w-[55rem] rounded-tr-none relative -bottom-2 w-full max-w-[42rem] md:max-w-[36rem] sm:max-w-[22rem]"
                />
              </div>
            </>
          )}
        </GradientContainer>
        <SubFeatureGrid features={subFeatures} />
      </ContentWrapper>
    </Container>
  );
}

export default function FeaturesPage() {
  return (
    <>
      {/* Features Header */}
      <Container variant="section">
        <ContentWrapper gap="md">
          <Headline variant="regular">Features</Headline>
          <Subheadline >Speed up project work</Subheadline>
        
      {/* 1. Boards */}
      <FeatureSection
        gradientVariant="13"
        title="Boards"
        layout="docked"
        description="The foundation of your project workspace"
        image="/images/features/boards_mainimage.avif"
        imageAlt="Multi-board system in Hypertask"
        bgImage="/images/gradients/gradient (12).avif"
        subFeatures={[
          { title: "Multi-board System", description: "Separate boards for different projects and teams with instant switching", image: "/images/features/boards_subcard_switching.avif", imageAlt: "Multi-board system interface" },
          { title: "Subtask System", description: "Organize complex work into manageable, trackable components with seamless parent-child relationships", image: "/images/features/boards_subtasks.avif", imageAlt: "Real-time collaboration features" },
          { title: "Advanced Filtering", description: "Shift+F with multiple filter combinations to find exactly what you need", image: "/images/features/boards_filtering.avif", imageAlt: "Advanced filtering interface" },
          { title: "Custom Views & Sorting", description: "Save filtered views and sort by various criteria for personalized workflows", image: "/images/features/boards_views.avif", imageAlt: "Custom views and sorting options" },
        ]}
      />

      {/* 2. Tasks */}
      <FeatureSection
        gradientVariant="12"
        title="Tasks"
        description="AI-powered task management that thinks ahead"
        image="/images/features/task_mainimage.avif"
        imageAlt="AI Task Writer in Hypertask"
        bgImage="/images/gradients/gradient (4).avif"
        layout="docked"
        subFeatures={[
          { title: "Loom & Figma Embeds", description: "Embed interactive Loom videos and Figma designs directly in your tasks for seamless collaboration.", image: "/images/features/tasks_interactive_loom_figma.avif", imageAlt: "Loom and Figma embed interface" },
          { title: "Rich Text Editor", description: "Write, format, and organize your task details with a powerful rich text editor.", image: "/images/features/tasks_RTE.avif", imageAlt: "Rich text editor interface" },
          { title: "Write with AI", description: "Tell AI what you want to say, and it will write your comments or task descriptions for you.", image: "/images/features/task_subcard_writewithai.avif", imageAlt: "AI writing assistant" },
          { title: "HTC Support", description: "Strong HTC (Hypertask Completion) support to help you clear your tasks and stay productive.", image: "/images/features/task_subcard_HTC.avif", imageAlt: "HTC support interface" },
          { title: "Quick Link Navigation", description: "Press CTRL+O to instantly read and navigate all links within a task.", image: "/images/features/tasks_parse_all_links.avif", imageAlt: "Quick link navigation" },
          { title: "Public Task Sharing", description: "Share any task publicly—no signup required. Collaborate with colleagues just like sharing a Google Doc.", image: "/images/features/tasks_share_task.avif", imageAlt: "Public task sharing" },
        ]}
      />

      {/* 3. Inbox */}
      <FeatureSection
        gradientVariant="13"
        title="Inbox"
        description="Superhuman-inspired project communication"
        image="/images/features/inbox_main_image.avif"
        imageAlt="Hypertask's powerful inbox interface"
        layout="docked"
        bgImage="/images/gradients/gradient (3).avif"
        subFeatures={[
          { title: "Auto-splits", description: "Automatic categorization by project and type (Important, Mentions, Reactions, Updates)", image: "/images/features/inbox_subcard_autosplits.avif", imageAlt: "Auto-splits categorization" },
          { title: "Snooze Functionality", description: "Press 'H' to remind later, understand natural language inputs", image: "/images/features/inbox_subcard_reminder.avif", imageAlt: "Snooze functionality" },
          { title: "HTC Inbox", description: "Clear your inbox daily for peak productivity and focus", image: "/images/features/inbox_subcard_htc.avif", imageAlt: "Inbox zero interface" },
          { title: "Bulk Processing", description: "Handle hundreds of notifications efficiently with keyboard shortcuts", image: "/images/features/inbox_subcard_bulk.avif", imageAlt: "Bulk processing interface" },
        ]}
      />

      {/* 4. AI */}
      <FeatureSection
        gradientVariant="13"
        title="AI"
        layout='docked'
        description="Multiple premium AI models at your fingertips"
        image="/images/features/ai_main_image.avif"
        imageAlt="AI models and features in Hypertask"
        bgImage="/images/gradients/gradient (4).avif"
        subFeatures={[
          { title: "Multiple AI Models", description: "Access GPT-5, Claude Opus, and other premium models seamlessly", image: "/images/features/ai_subcard_models.avif", imageAlt: "Multiple AI models interface" },
          { title: "Auto Summaries", description: "Real-time AI summaries that update as tasks and projects evolve", image: "/images/features/ai_subcard_autosummaries.avif", imageAlt: "Auto summaries feature" },
          { title: "Inline AI", description: "AI assistant that knows your entire project context and history", image: "/images/features/ai_subcard_inline.avif", imageAlt: "Board chat interface" },
          { title: "Write with AI", description: "AI enhances readability of messages and task descriptions", image: "/images/features/ai_subcard_task_writer.avif", imageAlt: "Dictate and improve functionality" },
        ]}
      />

      {/* 5. Voice Dictation */}
      <FeatureSection
        gradientVariant="12"
        title="Voice Dictation"
        description="Speak your ideas into structured tasks"
        image="/images/features/dictation_mainimage.avif"
        imageAlt="Voice dictation features in Hypertask"
        bgImage="/images/gradients/gradient (4).avif"
        subFeatures={[
          { title: "Voice to Tasks", description: "Transform spoken ideas into detailed, structured task descriptions", image: "/images/features/dictation_subcard_dictation_to_task.avif", imageAlt: "Voice to tasks interface" },
          { title: "Mobile Optimized", description: "Perfect for capturing thoughts while walking or commuting", image: "/images/features/dictation_mobile_support.avif", imageAlt: "Mobile optimized interface" },
          { title: "Multi-language Support", description: "Dictate in your preferred language with high accuracy", image: "/images/features/dictation_subcard_multilingual.avif", imageAlt: "Multi-language support" },
          { title: "Smart Formatting", description: "Automatically formats dictated content into proper task structure", image: "/images/features/dictation_subcard_formatting.avif", imageAlt: "Smart formatting feature" },
        ]}
      />

      {/* 6. Keyboard-Driven */}
      <FeatureSection
        gradientVariant="13"
        title="Keyboard-Driven"
        description="Navigate at the speed of thought"
        image="/images/features/keyboard_shortcuts_small@1x.avif"
        imageAlt="Keyboard shortcuts and navigation in Hypertask"
        bgImage="/images/gradients/gradient (5).avif"
        subFeatures={[
          { title: "Complete Keyboard Coverage", description: "Every action possible without touching your mouse", image: "/images/features/keyboard_shortcuts_small@1x.avif", imageAlt: "Keyboard shortcuts interface" },
          { title: "J/K Navigation", description: "Move up/down through tasks and inbox items like a pro", image: "/images/features/Keyboard_navigation.avif", imageAlt: "J/K navigation demonstration" },
          { title: "Quick Actions", description: "Press 'C' to create, 'G+A' for all tasks, Alt+1-9 for board favorites", image: "/images/features/Quick Actions.avif", imageAlt: "Quick actions menu" },
          { title: "Hypertask Command Center", description: "Ctrl+K for natural language commands and instant navigation", image: "/images/features/keyboard_subcard_2.avif", imageAlt: "Command center interface" },
        ]}
      />

      </ContentWrapper>
      </Container>


    </>
  );
} 