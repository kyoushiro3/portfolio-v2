import { links, socials } from "@/data/navbar";
import PanelSelection from "./panelselection";
import { CircleChevronRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-[#22282a] px-5">
      <PanelSelection
        spans={[1, 1, 1, 1]}
        rowSpans={[1, 1, 1, 1]}
        borders="border-white/15 divide-x divide-white/15 border-y"
      >
        <div className="grid grid-cols-1 grid-rows-4 divide-y divide-white/15">
          <div className="px-6 py-5 row-span-3">
            <div className="pb-5">
              <Image
                src={"/kai-logo.svg"}
                width={24}
                height={24}
                alt="kai-logo"
              />
            </div>
            <div className="text-xs uppercase tracking-widest text-white font-mono">
              Crafting thoughtful digital experiences built on clarity, purpose,
              and precision.
            </div>
          </div>

          <div className="px-6 py-5 flex justify-between text-xs uppercase tracking-widest text-white font-mono">
            BOOK A CALL
            <span>
              <CircleChevronRight size={20} />
            </span>
          </div>
        </div>

        
        <div className="grid grid-cols-1 grid-rows-4 divide-y divide-white/15">
          {links.map((link, i) => (
            <div
              className="flex row-span-1 justify-between px-6 py-5 text-xs uppercase tracking-widest text-white font-mono"
              key={i}
            >
              {link.name}
              <span>
                <CircleChevronRight size={20} />
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 divide-y divide-white/15">
          <div className="px-6 py-5 text-xs uppercase tracking-widest text-white font-mono">
            Follow on
          </div>
          {/* <div className="grid grid-cols-1">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <div
                  key={social.name}
                  className="text-white/70 hover:text-white transition-colors duration-300 px-6 py-5 flex gap-4 text-xs uppercase tracking-widest font-mono items-center"
                >
                  {Icon && <Icon />}
                  {social.name}
                </div>
              );
            })}
          </div> */}
        </div>
        <div className="px-6 py-5 text-xs uppercase tracking-widest text-white font-mono">
          Creating experiences that balance aesthetics, usability, and intent.
        </div>
      </PanelSelection>
    </div>
  );
}
