import { FileMagnifyingGlassIcon, PaletteIcon, TerminalWindowIcon, PackageIcon } from "@phosphor-icons/react";
import { LucideIcon } from "lucide-react";

export type Tab = {
  title: string;
  subtitle: string;
  content: string;
  list: string[];
  icon: LucideIcon;
  color: string;
};

export const Process: Tab[] = [
  {
    title: "Discover",
    subtitle: "Clarity before creation.",
    content:
      "I start by understanding your business at its core — your audience, your goals, and the challenges behind them.",
    list: [
      "Strategy call & project brief",
      "Market & competitor analysis",
      "Audience and offer clarity",
      "Define KPIs and success metrics",
      "Map the customer journey",
    ],
    icon: FileMagnifyingGlassIcon,
    color: "bg-[#FBCDCD]",
  },
  {
    title: "Design",
    subtitle: "Where strategy becomes experience.",
    content:
      "I translate strategy into structure and experience. This is where user flows, content hierarchy, and visual identity come together to create a conversion-focused experience.",
    list: [
      "Information architecture",
      "Wireframes & user flows",
      "Conversion strategy (CTAs, funnels)",
      "Visual design & interactive prototypes",
      "Feedback & refinement",
    ],
    icon: PaletteIcon,
    color: "bg-[#FEE09F]",
  },
  {
    title: "Develop",
    subtitle: "Built for performance. Engineered for scale.",
    content:
      "The design becomes a high-performance digital product — built for speed, scalability, and automation integration.",
    list: [
      "Frontend / full-stack development",
      "Responsive & cross-browser testing",
      "Performance optimization",
      "SEO foundations",
      "CMS or custom backend setup",
      "API & automation integrations",
    ],
    icon: TerminalWindowIcon,
    color: "bg-[#E3FFD1]",
  },
  {
    title: "Deploy & Drive",
    subtitle: "This is where your website becomes a working growth engine.",
    content:
      "I implement automation systems that capture, nurture, and convert leads — turning traffic into measurable revenue.",
    list: [
      "CRM & pipeline architecture",
      "Intelligent lead capture systems",
      "Automated follow-ups (SMS & email)",
      "Appointment & workflow automation",
      "Campaign & reactivation sequences",
      "Reporting & conversion tracking",
    ],
    icon: PackageIcon,
    color: "bg-[#9BF7FF]",
  },
];