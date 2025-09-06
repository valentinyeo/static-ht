import { APP_LOGIN_URL } from "@/lib/redirect-utils"

export interface ComparisonFeature {
  feature: string
  hypertask: "✓" | "~" | "X"
  notion: "✓" | "~" | "X"
  trello: "✓" | "~" | "X"
  asana: "✓" | "~" | "X"
  linear: "✓" | "~" | "X"
  monday: "✓" | "~" | "X"
  clickup: "✓" | "~" | "X"
}

export interface CompetitorInfo {
  name: string
  key: keyof Omit<ComparisonFeature, 'feature'>
  isHighlighted?: boolean
  badge?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function AsanaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <ellipse cx={5.22} cy={17.824} rx={5.22} ry={5.176} fill="#b3b3b3" />
      <ellipse cx={12} cy={6.176} rx={5.22} ry={5.176} fill="#b3b3b3" />
      <ellipse cx={18.78} cy={17.824} rx={5.22} ry={5.176} fill="#b3b3b3" />
    </svg>
  );
}
// Notion logo SVG (fixed, correct icon)
export function NotionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <path
        fill="#b3b3b3"
        fillRule="evenodd"
        d="m5.2,47.56s8,10.37,8.48,10.83c1.16,1.11,2.73,1.69,4.33,1.6,8.37-.42,27.54-1.38,35.57-1.78,3.11-.16,5.55-2.72,5.56-5.83l.1-35.5c0-1.99-1.03-3.83-2.72-4.87t0,0c-2.99-1.84-8.91-5.49-10.7-6.68-1.46-.97-3.2-1.43-4.96-1.32-5.96.38-23.45,1.51-30.85,1.98-2.96.19-5.24,2.62-5.24,5.54v34.78c0,.45.15.89.43,1.24h0Zm50.01-28.91v.02l-.1,33.7c0,.97-.77,1.77-1.74,1.82l-35.57,1.78c-.5.03-.99-.16-1.35-.5-.36-.34-.57-.82-.57-1.32V20.71c0-.97.75-1.77,1.72-1.82l35.67-2.06c.5-.03.99.15,1.36.5.36.34.57.82.57,1.32h0Zm-11.98,21.42v-13.72c-.63-.72-1.63-.67-3.07-1.11-.1-.03-.19-.11-.23-.21-.04-.1-.03-.22.03-.31,1.72-2.53,6.63-.95,9.83-1.96.09-.03.2-.02.28.05.08.07.11.17.09.27-.31,1.39-1.4,2.1-2.95,2.4v22.57c0,.75-.45,1.44-1.15,1.72-.64.26-1.31.54-1.31.54-1.54.8-3.43.29-4.37-1.17l-11.46-17.87v16.27c.62.72,1.63.67,3.07,1.11.1.03.19.11.23.21.04.1.03.22-.03.31-1.73,2.53-6.63.95-9.83,1.96-.09.04-.2.02-.28-.05-.08-.06-.11-.17-.09-.27.31-1.39,1.4-2.1,2.95-2.4v-21.31l-3.02-.29s.21-2.45,3.09-2.73c1.42-.14,5.13-.3,6.47-.36.3-.01.59.13.77.38l10.99,15.95h0ZM15.03,14.28c.55.42,1.24.63,1.93.59,5.09-.29,26.82-1.53,32.21-1.84.17-.01.31-.13.35-.29.04-.16-.03-.33-.17-.42-2.39-1.49-4.74-2.95-5.76-3.63-.73-.48-1.6-.71-2.48-.66,0,0-24.7,1.36-29.78,1.91-.64.07-.78.3-.8.39-.09.31.02.54.27.74,1.02.78,3.07,2.33,4.23,3.21h0Z"
      />
    </svg>
  );
}

function TrelloIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" id="trello">
      <path fill="#b3b3b3" d="M14.96 23.567V6.925c0-.152-.049-.276-.146-.374s-.222-.146-.374-.146H6.639c-.152 0-.276.049-.374.146s-.146.222-.146.374v16.642c0 .152.049.276.146.374s.222.146.374.146h7.801c.152 0 .276-.049.374-.146s.146-.222.146-.374zm10.921-6.241V6.925c0-.152-.049-.276-.146-.374s-.222-.146-.374-.146H17.56c-.152 0-.276.049-.374.146s-.146.222-.146.374v10.401c0 .152.049.276.146.374s.222.146.374.146h7.801c.152 0 .276-.049.374-.146s.146-.222.146-.374zm2.601-12.482v22.883c0 .282-.103.526-.309.732s-.45.309-.731.309H4.559c-.282 0-.525-.103-.731-.309s-.309-.45-.309-.732V4.844c0-.282.103-.526.309-.731s.45-.309.731-.309h22.883c.282 0 .526.103.731.309s.309.45.309.731z"></path>
    </svg>
  )
}


function ClickUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
  <svg
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 31 38"
    {...props}
  >
    <path
      d="M.152 29.072l5.603-4.335c2.977 3.924 6.139 5.733 9.66 5.733 3.5 0 6.573-1.788 9.416-5.68l5.683 4.23c-4.102 5.614-9.198 8.58-15.1 8.58-5.882 0-11.029-2.947-15.262-8.528z"
      fill="#b3b3b3"
    />
    <path
      d="M15.396 10.23l-9.972 8.68-4.61-5.4L15.417.8l14.488 12.72-4.63 5.381-9.879-8.67z"
      fill="#b3b3b3"
    />

  </svg>
  );


}
function MondayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 60 65" fill="none" {...props}><g transform="matrix(3.208255 0 0 3.208255 -35.559129 -63.587202)"><path d="M13.513 35.76a2.433 2.433 0 0 1-2.059-3.723l4.377-6.99a2.432 2.432 0 1 1 4.123 2.582l-4.378 6.99a2.43 2.43 0 0 1-2.063 1.141z" fill="#b3b3b3"/><path d="M21.056 35.76a2.433 2.433 0 0 1-2.063-3.723l4.38-6.99a2.432 2.432 0 1 1 4.117 2.582l-4.372 6.99a2.43 2.43 0 0 1-2.063 1.141z" fill="#b3b3b3"/><ellipse ry="2.375" rx="2.436" cy="33.384" cx="28.597" fill="#b3b3b3"/></g></svg>
  
  );
};



export function LinearIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <rect x={16} y={16} width={224} height={224} rx={70} fill="#EEE" />
      <path
        fill="#222326"
        d="M65.591 114.777L141.223 190.409C142.327 191.513 141.794 193.388 140.259 193.675C137.673 194.158 135.061 194.488 132.436 194.662C132.156 194.68 131.876 194.637 131.613 194.538C131.351 194.438 131.113 194.284 130.915 194.085L61.9155 125.085C61.7164 124.887 61.5619 124.649 61.4623 124.387C61.3626 124.124 61.3202 123.844 61.3379 123.564C61.515 120.91 61.8473 118.3 62.3254 115.741C62.6118 114.206 64.4868 113.673 65.591 114.777ZM63.4598 145.4C62.9546 143.518 65.1785 142.33 66.5566 143.709L112.291 189.443C113.67 190.822 112.482 193.045 110.6 192.54C87.6676 186.392 69.6087 168.333 63.4598 145.4ZM70.0879 94.7518C70.7301 93.6398 72.2478 93.4689 73.1556 94.3773L161.623 182.843C162.532 183.752 162.361 185.269 161.248 185.912C159.371 186.996 157.441 187.987 155.467 188.883C154.722 189.222 153.847 189.051 153.269 188.472L67.528 102.732C66.9493 102.153 66.7785 101.279 67.1165 100.534C68.0126 98.5598 69.0044 96.6304 70.0884 94.7528M127.927 61.333C164.787 61.333 194.667 91.2132 194.667 128.073C194.667 147.64 186.246 165.24 172.831 177.448C172.056 178.153 170.868 178.106 170.127 177.366L78.6342 85.8726C77.8941 85.132 77.8478 83.9439 78.5519 83.1695C90.7598 69.7538 108.36 61.333 127.927 61.333Z"
      />
    </svg>
  );
}

export const competitors: CompetitorInfo[] = [
  { name: "Hypertask", key: "hypertask", isHighlighted: true, badge: "NEW" },
  { name: "Notion", key: "notion", icon: NotionIcon },
  { name: "Trello", key: "trello", icon: TrelloIcon },
  { name: "Asana", key: "asana", icon: AsanaIcon },
  { name: "Linear", key: "linear", icon: LinearIcon },
  { name: "Monday", key: "monday", icon: MondayIcon },
  { name: "ClickUp", key: "clickup", icon: ClickUpIcon }
]

export const features: ComparisonFeature[] = [
  {
    feature: "Keyboard-First Navigation",
    hypertask: "✓",
    notion: "~",
    trello: "X",
    asana: "~",
    linear: "✓",
    monday: "X",
    clickup: "~"
  },
  {
    feature: "Powerful Inbox System",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "~",
    linear: "~",
    monday: "X",
    clickup: "~"
  },
  {
    feature: "Auto-Splits for Organization",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "X", 
    monday: "X",
    clickup: "X"
  },
  {
    feature: "Inbox Zero Philosophy",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "X"
  },
  {
    feature: "AI-Powered Summaries",
    hypertask: "✓",
    notion: "✓",
    trello: "X",
    asana: "~",
    linear: "X",
    monday: "~",
    clickup: "~"
  },
  {
    feature: "Mouse-Free Task Management",
    hypertask: "✓",
    notion: "X",
    trello: "X",
    asana: "X",
    linear: "~",
    monday: "X",
    clickup: "~"
  },
  {
    feature: "Communication-Centric Design",
    hypertask: "✓",
    notion: "~",
    trello: "X",
    asana: "~",
    linear: "~",
    monday: "~",
    clickup: "~"
  },
  {
    feature: "Lightning-Fast Performance",
    hypertask: "✓",
    notion: "~",
    trello: "~",
    asana: "~",
    linear: "✓",
    monday: "X",
    clickup: "~"
  },
  {
    feature: "Command Center (Ctrl+K)",
    hypertask: "✓",
    notion: "✓",
    trello: "X",
    asana: "~",
    linear: "✓",
    monday: "X",
    clickup: "~"
  },
  {
    feature: "Dedicated Archiving (Kanban Zero)",
    hypertask: "✓",
    notion: "X",
    trello: "~",
    asana: "~",
    linear: "~",
    monday: "X",
    clickup: "~"
  },
  {
    feature: "Advanced Filtering (Shift+F)",
    hypertask: "✓",
    notion: "✓",
    trello: "~",
    asana: "✓",
    linear: "✓",
    monday: "✓",
    clickup: "✓"
  },
  {
    feature: "Free Forever Plan",
    hypertask: "✓",
    notion: "✓",
    trello: "✓",
    asana: "X",
    linear: "X",
    monday: "X",
    clickup: "✓"
  }
]

export const tableConfig = {
  title: "Why Choose HyperTask?",
  subtitle: "See how HyperTask outperforms the competition with superior features and workflow efficiency.",
  ctaText: "Start Free Trial",
  ctaUrl: APP_LOGIN_URL
} 