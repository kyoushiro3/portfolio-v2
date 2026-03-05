"use client";

import { GithubOriginalIcon, LinkedinPlainIcon } from "@devicon/react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="grid grid-cols-4 divide-y divide-white/15 md:divide-x items-stretch">
      <div className="col-span-4 px-6 pt-24">
        <div className="flex flex-col justify-center items-center px-4 py-12 md:py-20 lg:py-32">

          <h2
            className={`${jakarta.className} slide-up text-center font-bold text-[#d5e1e7] 
            text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl`}
          >
            &lt; KIM DARREN /&gt;
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#d5e1e7] font-mono">
            Web Dev | Funnels & Automations
          </p>

          {/* ICONS */}
          <div className="flex gap-8 mt-8">

            {/* Github */}
            <a
              href="https://github.com/kyoushiro3"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#d5e1e7]"
            >
              <GithubOriginalIcon size={32} color="white" />

              <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[120px]">
                Hire Me
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kim-darren-peralta/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#d5e1e7]"
            >
              <LinkedinPlainIcon size={32} color="white" />

              <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[140px]">
                Let's Connect
              </span>
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}