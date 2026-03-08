"use client";

import {
  CanvaOriginalIcon,
  DjangoPlainIcon,
  FigmaPlainIcon,
  GitPlainIcon,
  IllustratorPlainIcon,
  MongodbPlainIcon,
  NextjsPlainIcon,
  NotionPlainIcon,
  PhotoshopPlainIcon,
  PostmanPlainIcon,
  ReactOriginalIcon,
  SupabasePlainIcon,
  TailwindcssOriginalIcon,
  TypescriptPlainIcon,
  VercelOriginalIcon,
  WordpressPlainIcon,
} from "@devicon/react";
import { FramerLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
import PanelSelection from "../panelselection";

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  variable: "--font-jakarta",
  subsets: ["latin"],
});
type Card = {
  id: number;
  name: string;
  icon: React.ElementType;
  category: string;
};

export default function TechStacksSection() {
  const [cards] = useState<Card[]>([
    { id: 1, name: "Next.js", icon: NextjsPlainIcon, category: "Frontend" },
    { id: 2, name: "React", icon: ReactOriginalIcon, category: "Frontend" },
    {
      id: 3,
      name: "TypeScript",
      icon: TypescriptPlainIcon,
      category: "Frontend",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      icon: TailwindcssOriginalIcon,
      category: "Frontend",
    },
    { id: 5, name: "Django", icon: DjangoPlainIcon, category: "Backend" },
    { id: 6, name: "Supabase", icon: SupabasePlainIcon, category: "Database" },
    { id: 7, name: "MongoDB", icon: MongodbPlainIcon, category: "Database" },
    { id: 8, name: "Figma", icon: FigmaPlainIcon, category: "Design" },
    { id: 9, name: "Photoshop", icon: PhotoshopPlainIcon, category: "Design" },
    {
      id: 10,
      name: "Illustrator",
      icon: IllustratorPlainIcon,
      category: "Design",
    },
    { id: 13, name: "Canva", icon: CanvaOriginalIcon, category: "Design" },
    { id: 11, name: "Git", icon: GitPlainIcon, category: "Tools" },
    { id: 12, name: "Framer", icon: FramerLogoIcon, category: "Design" },
    { id: 14, name: "Notion", icon: NotionPlainIcon, category: "Tools" },
    { id: 15, name: "Wordpress", icon: WordpressPlainIcon, category: "Tools" },
    { id: 16, name: "Vercel", icon: VercelOriginalIcon, category: "Tools" },
    { id: 17, name: "Postman", icon: PostmanPlainIcon, category: "Tools" },
  ]);
  const grouped = cards.reduce(
    (acc, card) => {
      if (!acc[card.category]) acc[card.category] = [];
      acc[card.category].push(card);
      return acc;
    },
    {} as Record<string, Card[]>,
  );

  return (
    <div>
      <PanelSelection
        spans={[2, 2]}
        classNames={["", ""]}
        borders="border-white/15 divide-x divide-white/15 border-y-0 border-x-0 border-b"
      >
        <div />
        <div className="py-24 text-center lg:text-right flex flex-col px-6 gap-7">
          <div className="text-[#5f6f77] justify-center text-xs uppercase tracking-widest font-bold">
            [ Solutions, Insights, Execution ]
          </div>
          <div
            className={`font-bold lg:text-7xl text-5xl leading-[0.9em] tracking-[-0.03em] text-[#f5fcff] ${jakarta.className}`}
          >
            <span className="block">My Tech Stacks</span>
          </div>
        </div>
      </PanelSelection>
      <PanelSelection
        spans={[1, 2, 1]}
        classNames={["", ""]}
        borders="border-white/15 divide-x divide-white/15 border-y-0 border-x-0 border-b"
      >
        <div />
        <div className="flex flex-col gap-10 p-8">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-sm uppercase tracking-widest text-[#5f6f77] font-semibold">
                {category}
              </h3>
              <div className="grid grid-cols-6 md:grid-cols-8 gap-4">
                {items.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.id}
                      className="group relative bg-[#394247] shadow-lg flex items-center justify-center aspect-square rounded-2xl hover:bg-[#465158] transition-all duration-300 w-full"
                    >
                      <Icon size="60px" color="white" />

                      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
                        {card.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div />
      </PanelSelection>
    </div>
  );
}
