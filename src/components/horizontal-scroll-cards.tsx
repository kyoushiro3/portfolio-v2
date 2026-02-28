"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DemoAutomations } from "@/data/demo-automations";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export default function HorizontalScrollCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={sectionRef} className="relative h-auto lg:h-[250vh]">
      <div className="hidden lg:flex sticky top-0 h-screen items-start overflow-hidden">
        <div className="relative w-full h-full">
          <div className="absolute top-16 w-full grid grid-cols-2 border-y border-x-0 divide-white/15 divide-x border-white/15">
            <div className="py-16 px-6 flex flex-col gap-7">
              <div className="text-[#5f6f77] text-xs uppercase tracking-widest font-bold">
                [ Solutions, Insights, Execution ]
              </div>

              <div
                className={`font-bold lg:text-7xl text-5xl leading-[0.9em] tracking-[-0.03em] text-[#f5fcff] ${jakarta.className}`}
              >
                <span className="block">My Services</span>
              </div>
            </div>
            <div />
          </div>
          <motion.div
            style={{ x }}
            className="flex gap-6 absolute top-80 left-[30%]"
          >
            {DemoAutomations.map((item, i) => {
              const Icon = item.icons;

              return (
                <div
                  key={i}
                  className="group relative w-[400px] h-[400px] 
      bg-[#394247] rounded-2xl overflow-hidden cursor-pointer 
      transition-all duration-300 ease-in-out
      hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-white transition-opacity duration-300 group-hover:opacity-0">
                    <Icon className="w-36 h-36" />
                    <span className="text-base md:text-lg font-semibold break-words">
                      {item.title}
                    </span>
                  </div>

                  <div
                    className="absolute inset-0 
        bg-white translate-y-full 
        group-hover:translate-y-0 
        transition-transform duration-500 ease-in-out"
                  />
                  <div
                    className="absolute inset-0 p-6 flex flex-col justify-end 
        text-[#43554B] opacity-0 
        group-hover:opacity-100 
        transition-opacity duration-300 delay-200"
                  >
                    <Icon className="w-36 h-36" />
                    <h3 className="text-lg font-bold">{item.title}</h3>

                    <p className="text-sm mt-2 line-clamp-3">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 pt-6">
        {DemoAutomations.map((item, i) => {
          const Icon = item.icons;

          return (
            <div
              key={i}
              className="relative w-full aspect-square 
      bg-[#394247] rounded-2xl overflow-hidden 
      p-6 flex flex-col justify-center items-center"
            >
              <div className="flex justify-center items-center flex-1">
                <Icon className="w-24 h-24 text-white/90" />
              </div>

              <div className="mt-auto">
                <h3 className="text-lg font-semibold text-white line-clamp-2 min-h-[56px]">
                  {item.title}
                </h3>

                <p className="text-sm text-white/70 mt-2 line-clamp-3 min-h-[72px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
