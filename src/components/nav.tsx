"use client";

import Link from "next/link";
import { links } from "@/data/navbar";
import { useState } from "react";
import {
  Host_Grotesk,
  Plus_Jakarta_Sans,
  Roboto_Condensed,
} from "next/font/google";
import { AnimatePresence, motion } from "motion/react";
import {
  CircleChevronRight,
  SquareChevronDown,
  SquareChevronUp,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CallBookingForm from "./form";

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="w-full bg-[#22282a] px-5 fixed border-b border-white/15 z-99">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="hidden lg:grid grid-cols-4">
          <div className="flex items-center border-l border-r border-white/15 p-4 text-white font-bold font-mono">
            <Image
              src={"/kai-logo.svg"}
              width={24}
              height={24}
              alt="kai-logo"
            />
          </div>

          <nav className="group flex justify-center items-center gap-8 col-span-2 border-r border-white/15 p-5 text-sm font-medium font-mono tracking-wide">
            {links.map((link, i) => {
              const active = pathName === link.href;

              return (
                <Link
                  key={i}
                  href={link.href}
                  data-active={active}
                  className="
              relative transition-all duration-300 ease-out
              text-white/70
              group-hover:text-white/30
              hover:text-white
              data-[active=true]:text-white
              data-[active=true]:group-hover:text-white
            "
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <a
            href="https://calendly.com/kimdarrenperalta/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="flex items-center justify-between px-6 py-2 lg:p-4 text-sm text-white font-medium font-mono border-r border-white/15 uppercase">
              Book a call
              <CircleChevronRight />
            </div>
          </a>
        </div>

        <div className="flex lg:hidden justify-between items-center p-4 border-x border-white/15">
          <div className="text-white font-bold font-mono">
            <Image
              src={"/kai-logo.svg"}
              width={24}
              height={24}
              alt="kai-logo"
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <a
              href="https://calendly.com/kimdarrenperalta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="flex items-center justify-between px-6 py-2 lg:p-4 text-sm text-white font-medium font-mono uppercase">
                Book a call
               
              </div>
            </a>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="text-white font-mono"
              aria-label="nav-bar dropdown"
            >
              {open ? <SquareChevronUp /> : <SquareChevronDown />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="border-b-0 lg:hidden"
            >
              <div className="border border-white/15 border-b-0">
                <div className="group lg:hidden w-full grid grid-cols-1 grid-rows-4 border-b border-white/15 px-6 py-5">
                  {links.map((link, i) => {
                    const active = pathName === link.href;

                    return (
                      <Link
                        href={link.href}
                        key={i}
                        data-active={active}
                        className={`${jakarta.className} font-semibold text-3xl uppercase leading-8 tracking-[-0.03em]
                       relative transition-all duration-300 ease-out
              text-white/70
              group-hover:text-white/30
              hover:text-white
              data-[active=true]:text-white
              data-[active=true]:group-hover:text-white 
                        `}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
                <a
                  href="https://calendly.com/kimdarrenperalta/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <div className="flex items-center justify-between px-6 py-2 lg:p-4 text-sm text-white font-medium font-mono border-r border-white/15 uppercase">
                    Book a call
                    <CircleChevronRight />
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
