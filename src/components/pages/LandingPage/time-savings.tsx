// components/TimeSavings.tsx

import Image from 'next/image'
import { Container, ContentWrapper, Headline, Subheadline, CTAContainer } from '@/components/ui'
import { CTAButton } from '@/components/ui/cta-button'
import { FastForward, ZapIcon } from 'lucide-react'
import { APP_LOGIN_URL } from '@/lib/redirect-utils'

interface ComparisonCardProps {
  title: string
  traditionalTime: string
  traditionalTasks: string[]
  hypertaskTime: string
  hypertaskTasks: string[]
  savings: string
  index: number
}

// Modular subcomponents for repeated UI

const IconGroup = () => (
  <div className="flex gap-1 items-center">
    <div className="w-6 h-6 md:w-7 md:h-7 rounded flex items-center justify-center opacity-60">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.269-.186z" fill="rgba(255,255,255,0.6)" />
      </svg>
    </div>
    <div className="w-6 h-6 md:w-7 md:h-7 rounded flex items-center justify-center opacity-60">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 0H3C1.343 0 0 1.343 0 3v18c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.645-1.44-1.44V5.82c0-.795.645-1.44 1.44-1.44H9c.795 0 1.44.645 1.44 1.44v12.36zm9.44-6.84c0 .795-.645 1.44-1.44 1.44H14c-.795 0-1.44-.645-1.44-1.44V5.82c0-.795.645-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44v5.52z" fill="rgba(255,255,255,0.6)" />
      </svg>
    </div>
    <div className="w-6 h-6 md:w-7 md:h-7 rounded flex items-center justify-center opacity-60">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="17.5" cy="6.5" r="5.5" fill="rgba(255,255,255,0.6)" />
        <circle cx="6.5" cy="6.5" r="5.5" fill="rgba(255,255,255,0.6)" />
        <circle cx="12" cy="17.5" r="5.5" fill="rgba(255,255,255,0.6)" />
      </svg>
    </div>
  </div>
);

const TaskList = ({ tasks }: { tasks: string[] }) => (
  <div className="text-base md:text-base text-white/70 leading-relaxed max-w-[360px]">
    <ul className="list-none ml-3 p-0 m-0 text-left space-y-1">
      {tasks.map((task, idx) => (
        <li key={idx} className="mb-1">• {task}</li>
      ))}
    </ul>
  </div>
);

const SideColumn = ({
  icon,
  label,
  tasks,
  logoSrc,
  logoAlt,
}: {
  icon?: React.ReactNode
  label?: string
  tasks: string[]
  logoSrc?: string
  logoAlt?: string
}) => (
  <div className="flex flex-col items-start justify-center">
    {icon && (
      <div className="flex items-center justify-center gap-2 mb-4">
        {icon}
        {label && (
          <span className="text-base md:text-base text-white/70 font-medium">{label}</span>
        )}
      </div>
    )}
    {logoSrc && logoAlt && (
      <div className="flex items-center justify-center mb-4">
        <Image
          src={logoSrc}
          alt={logoAlt}
          className="h-7 md:h-8 w-auto object-contain"
          width={120}
          height={32}
        />
      </div>
    )}
    <TaskList tasks={tasks} />
  </div>
);

const VsSection = ({
  traditionalTime,
  hypertaskTime,
  traditionalLabel,
  hypertaskLabel,
}: {
  traditionalTime: string
  hypertaskTime: string
  traditionalLabel: string
  hypertaskLabel: string
}) => {
  // Parse numbers from labels (remove "min" if present)
  const parseTime = (label: string) => {
    const num = parseFloat(label.replace(/[^\d.]/g, ''));
    return isNaN(num) ? 1 : num;
  };
  const traditional = parseTime(traditionalTime);
  const hypertask = parseTime(hypertaskTime);
  const ratio = hypertask && traditional ? (traditional / hypertask) : null;

  return (
    <div className="flex flex-col items-center bg-white/5 p-1 rounded-lg w-fit justify-self-center justify-center">
      <div className="flex items-center gap-2 rounded-b-none px-4 py-2">
        <FastForward size={20} className=" text-purple-400 " />
        <span className="text-white font-semibold mt-0.5 text-base">
          {ratio ? `${ratio.toFixed(1)}x` : "—"}
        </span>
      </div>
      <div className="flex items-center gap-2 bg-black/70 rounded-b-lg px-3 py-2">
        <span className="text-white/60 line-through text-base">{traditionalLabel}</span>
        <span className="text-base font-semibold text-yellow-400">⚡</span>
        <span className="text-base font-semibold bg-gradient-to-r from-fuchsia-300 via-purple-200 to-indigo-200 bg-clip-text text-transparent">{hypertaskLabel}</span>
      </div>
    </div>
  );
};

const ComparisonCard = ({
  title,
  traditionalTime,
  traditionalTasks,
  hypertaskTime,
  hypertaskTasks,
  savings,
  index
}: ComparisonCardProps) => {
  const traditionalLabel = traditionalTime.includes('min') ? traditionalTime : `${traditionalTime} min`
  const hypertaskLabel = hypertaskTime.includes('min') ? hypertaskTime : `${hypertaskTime} min`

  return (
    <div className="bg-white/5 w-full max-w-sm md:max-w-6xl mx-auto rounded-lg p-8 md:py-11 md:p-8 border border-white/10 transition-all duration-300 hover:translate-y-[-2px] hover:border-white/20 hover:bg-white/8 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-white text-center">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center">
        {/* Traditional Tools - LEFT SIDE */}
        <div className="flex justify-start md:justify-center">
          <SideColumn
            icon={<IconGroup />}
            label="Traditional tools"
            tasks={traditionalTasks}
          />
        </div>
        {/* VS Section - CENTER */}
        <VsSection
          traditionalTime={traditionalTime}
          hypertaskTime={hypertaskTime}
          traditionalLabel={traditionalLabel}
          hypertaskLabel={hypertaskLabel}
        />
        {/* Hypertask - RIGHT SIDE */}
        <div className="flex justify-start md:justify-center">
          <SideColumn
            logoSrc="/hypertask_white.png"
            logoAlt="Hypertask"
            tasks={hypertaskTasks}
          />
        </div>
      </div>
    </div>
  );
};

const TimeSavings = () => {
  const comparisons: ComparisonCardProps[] = [
    {
      title: "Processing notifications",
      traditionalTime: "20",
      traditionalTasks: ["Scattered emails", "Multiple apps", "Manual sorting"],
      hypertaskTime: "2",
      hypertaskTasks: ["Auto-Splits", "Keyboard shortcuts", "Achieve Inbox Zero"],
      savings: "90% faster",
      index: 0
    },
    {
      title: "Creating detailed tasks",
      traditionalTime: "15",
      traditionalTasks: ["Manual typing", "Formatting", "Requirements gathering"],
      hypertaskTime: "2",
      hypertaskTasks: ["Task Writer AI (Context Aware)", "AI Enhanced Dictation (Auto-Edits)", "Smart context"],
      savings: "87% faster",
      index: 1
    },
    {
      title: "Voice dictation for tasks",
      traditionalTime: "15",
      traditionalTasks: ["Manual typing", "OS-level dictation tools", "Inadequate accuracy"],
      hypertaskTime: "2",
      hypertaskTasks: ["Dictate and Improve (4x faster)", "Whisper Sync handles accents", "Accurate even with unclear speech"],
      savings: "87% faster",
      index: 2
    },
    {
      title: "Finding & moving tasks",
      traditionalTime: "8",
      traditionalTasks: ["Multiple clicks", "Slow loading", "Mouse-heavy interface"],
      hypertaskTime: "1",
      hypertaskTasks: ["Keyboard shortcuts + instant search", "Quick filters", "Efficient navigation"],
      savings: "88% faster",
      index: 3
    },
    {
      title: "Catching up on discussions",
      traditionalTime: "12",
      traditionalTasks: ["Reading through long comment threads manually"],
      hypertaskTime: "2",
      hypertaskTasks: ["AI Auto-Summary gives instant context", "Smart filtering", "Priority highlighting"],
      savings: "83% faster",
      index: 4
    },
    {
      title: "Writing task comments",
      traditionalTime: "5",
      traditionalTasks: ["Manual writing", "Crafting updates", "Manual responses"],
      hypertaskTime: "1",
      hypertaskTasks: ["AI writing assistant improves comments", "Smart suggestions", "Context-aware responses"],
      savings: "80% faster",
      index: 5
    }
  ]

  return (
    <Container variant="section">
        <ContentWrapper gap="lg">
        <Headline variant="regular" >
          AI-powered workflow saves 4+ hours weekly
        </Headline>
        <Subheadline>
          See how Hypertask&apos;s AI features transform every project management task
        </Subheadline>

        <div className="grid grid-cols-1 gap-8 md:gap-10 w-full">
          {comparisons.map((comparison, index) => (
            <ComparisonCard key={index} {...comparison} />
          ))}
        </div>

        {/* CTA Button */}
        <CTAContainer marginTop="sm">
            <CTAButton
              href={APP_LOGIN_URL}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get Started
            </CTAButton>
          </CTAContainer>
        </ContentWrapper>
    </Container>
  )
}

export default TimeSavings