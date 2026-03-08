"use client";
import {
  FileMagnifyingGlassIcon,
  PaletteIcon,
  TerminalWindowIcon,
  PackageIcon,
} from "@phosphor-icons/react";
import { FileCode, LucideIcon, Palette, Rocket, Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Process, Tab } from "@/data/process";
import { motion, AnimatePresence } from "framer-motion";

export default function AutoProgressTabs() {
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
      setActive((prev) => (prev + 1) % Process.length);
    }, duration);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [active]);

  const handleClick = (index: number) => {
    clearTimer();
    setActive(index);
  };

  return (
    <div className="border-b border-[#b1c5ce]">
      <div className="flex flex-col md:flex-row gap-[2px] pb-[2px]">
        {Process.map((tab: Tab, index: number) => {
          const Icon = tab.icon;
          const isActive = active === index;

          return (
            <div key={index} className="flex flex-col md:contents">
              <button
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
                    style={{ animationDuration: `${duration}ms` }}
                  />
                )}
                <div className="relative z-10 flex flex-row gap-3 items-center p-1">
                  <div className={`${tab.color} p-4 rounded-2xl flex items-center justify-center shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <span
                    className="whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ opacity: isActive ? 1 : 0.5 }}
                  >
                    {tab.title}
                  </span>
                </div>
              </button>

              {/* MOBILE CONTENT */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="md:hidden bg-[#b1c5ce] rounded-2xl p-5 mt-[2px] flex flex-col gap-4"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                      className="text-lg text-[#22282a] leading-relaxed font-bold"
                    >
                      "{Process[index].subtitle}"
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                      className="text-[#394247]"
                    >
                      {Process[index].content}
                    </motion.p>
                    <motion.ul
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                      className="list-disc list-inside space-y-1"
                    >
                      {Process[index].list.map((item, i) => (
                        <li key={i} className="text-[#394247] px-1">{item}</li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* DESKTOP CONTENT */}
      <div className="hidden md:block">
        <div className="bg-[#b1c5ce] rounded-2xl p-6 aspect-video flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${active}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
              className="text-lg text-[#22282a] leading-relaxed font-bold"
            >
              "{Process[active].subtitle}"
            </motion.p>
            <motion.p
              key={`content-${active}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="text-[#394247]"
            >
              {Process[active].content}
            </motion.p>
            <motion.ul
              key={`list-${active}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              className="list-disc list-inside space-y-1"
            >
              {Process[active].list.map((item, index) => (
                <li key={index} className="text-[#394247] px-1">{item}</li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
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