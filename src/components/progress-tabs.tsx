"use client";

import { FileMagnifyingGlassIcon, PaletteIcon, TerminalWindowIcon, PackageIcon } from "@phosphor-icons/react";
import { FileCode, LucideIcon, Palette, Rocket, Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type Tab = {
  title: string;
  subtitle: string;
  content: string;
  icon: LucideIcon;
  color: string;
};

export default function AutoProgressTabs() {
  const tabs: Tab[] = [
    {
      title: "Discover",
      subtitle: "Clarity before creation.",
      content:
        "I start by understanding your business at its core — your audience, your goals, and the challenges behind them.",
      icon: FileMagnifyingGlassIcon,
      color: "bg-[#FBCDCD]",
    },
    {
      title: "Design",
      subtitle: "Clarity before creation.",
      content: "We craft the visuals.",
      icon: PaletteIcon,
      color: "bg-[#FEE09F]",
    },
    {
      title: "Develop",
      subtitle: "Clarity before creation.",
      content: "We deploy and optimize.",
      icon: TerminalWindowIcon,
      color: "bg-[#E3FFD1]",
    },
    {
      title: "Deliver",
      subtitle: "Clarity before creation.",
      content: "We monitor and improve conversions.",
      icon: PackageIcon,
      color: "bg-[#9BF7FF]",
    },
  ];

  const duration = 4000;

  const [active, setActive] = useState(0);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const startTimer = () => {
    clearTimer();

    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, duration);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearTimer();
    };
  }, [active]);

  const handleClick = (index: number) => {
    clearTimer();
    setActive(index);
  };

  return (
    <div className="border-b border-[#b1c5ce]">
      <div className="flex gap-[2px] pb-[2px]">
        {tabs.map((tab: Tab, index: number) => {
          const Icon = tab.icon;

          const isActive = active === index;
          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`
                relative overflow-hidden
                rounded-2xl text-sm
                transition-all duration-500 ease-in-out
                pr-1
                bg-[#b1c5ce]/40
                text-[#394247] uppercase font-bold
          ${isActive ? "flex-1" : "min-w-fit"}
        `}
            >
              {isActive && (
                <span
                  key={active}
                  className="absolute inset-0 bg-[#b1c5ce] animate-progress z-0"
                  style={{
                    animationDuration: `${duration}ms`,
                  }}
                />
              )}
              <div className="relative z-10 flex flex-row gap-3 items-center p-1">
                <div
                  className={`relative z-10 ${tab.color} p-4 rounded-2xl flex items-center justify-center`}
                >
                  <Icon size={18} />
                </div>
               <span
  className={`
    relative z-10 whitespace-nowrap
    ${isActive ? "block" : "hidden"}
    md:block
  `}>
                  {tab.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative min-h-[80px]">
        <div
          key={active}
          className="transition-opacity duration-500 ease-out bg-[#b1c5ce] rounded-2xl p-6 aspect-square"
        >
          <p className="text-lg text-[#22282a] leading-relaxed">
            "{tabs[active].subtitle}"
          </p>
          <p className="text-[#394247]">{tabs[active].content}</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-progress {
          animation-name: progress;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
