import { Host_Grotesk } from "next/font/google";
import PanelSelection from "../panelselection";
import TwoPanelCard from "../twoPanelCard";
import Image from "next/image";

const hostGrotesk = Host_Grotesk({
  weight: ["700", "800"],
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export default function WorksSection(){
    return(
        <>
         <PanelSelection
            spans={[3, 1]}
            classNames={["", ""]}
            borders="border-white/15 divide-x divide-white/15 border-y-0"
          >
            <div className="border-b border-white/15">
              <TwoPanelCard
                label="ㆍSelected works(05)"
                labelClassName="text-white/50"
              >
                <p className="lg:text-7xl text-5xl leading-[0.95em] tracking-[-0.03em] uppercase text-neutral-400">
                  Digital experiences, {" "}
                  <span className="text-white">
                    thoughtfully built
                  </span>
                </p>
              </TwoPanelCard>
            </div>

            <div className="flex items-end h-full text-justify lg:text-right border-r-0">
              <p className="p-4 text-right text-xs tracking-widest  text-white font-mono uppercase">
                I build websites that <br className="hidden lg:block" />
                <span className="text-right text-xs tracking-widest  text-white/50 font-mono uppercase">
                  feel as good as they look. Clean, intentional,
                </span>
                and made to leave an impression.
              </p>
            </div>
            <div />

            <div />
          </PanelSelection>

          <PanelSelection
            spans={[1, 2, 1]}
            borders="border-white/15 divide-x divide-white/15 border-y-0"
          >
            <div />
            <div className="flex flex-col">
              <div className="h-full p-6 border-b border-white/15">
                <div className="h-full w-full lg:aspect-square border border-white/15">
                  <img
                    src="https://images4.alphacoders.com/133/thumb-1920-1332281.jpeg"
                    alt="gojo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/15">
                <div
                  className={`font-bold text-3xl leading-[0.9em] tracking-[-0.03em] uppercase p-6 ${hostGrotesk.className}`}
                >
                  GOJO
                </div>
                <div className="text-right p-6 text-xs uppercase tracking-widest text-white font-mono">
                  <p>WEB DESIGN</p>
                  <p>BRANDING</p>
                </div>
              </div>
            </div>
            <div />
          </PanelSelection>

          <PanelSelection
            spans={[1, 1, 2]}
            panelGap=" border-t border-white/15"
            borders="border-white/15 divide-x divide-white/15 border-y-0"
          >
            <div className="flex flex-col">
              <div className="h-full p-6 border-b border-white/15">
                <div className="h-full w-full lg:aspect-square border border-white/15">
                  <img
                    src="https://images4.alphacoders.com/133/thumb-1920-1332281.jpeg"
                    alt="gojo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/15  border-b border-white/15">
                <div
                  className={`font-bold text-3xl leading-[0.9em] tracking-[-0.03em] uppercase p-6 ${hostGrotesk.className}`}
                >
                  GOJO
                </div>
                <div className="text-right p-6 text-xs uppercase tracking-widest text-white font-mono">
                  <p>2WEB DESIGN</p>
                  <p>BRANDING</p>
                </div>
              </div>
            </div>
            <div />
            <div className="flex flex-col">
              <div className="h-full p-6 border-b border-white/15">
                <div className="h-full w-full aspect-video border border-white/15">
                  <Image
                    src="/work-1.png"
                    alt="gojo"
                    width={1000}
                    height={1000}    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/15  border-b border-white/15">
                <div
                  className={`font-bold text-3xl leading-[0.9em] tracking-[-0.03em] uppercase p-6 ${hostGrotesk.className}`}
                >
                  MASTER SPARKLE'S CLEANING SERVICE
                </div>
                <div className="text-right p-6 text-xs uppercase tracking-widest text-white font-mono">
                  <p>3WEB DESIGN</p>
                  <p>BRANDING</p>
                </div>
              </div>
            </div>
          </PanelSelection>

          <PanelSelection
            spans={[2, 1, 1]}
            panelGap=" border-t border-white/15"
            borders="border-white/15 divide-x divide-white/15 border-y-0"
          >
            <div className="flex flex-col">
              <div className="h-full p-6 border-b border-white/15">
                <div className="h-full w-full lg:aspect-square border border-white/15">
                  <img
                    src="https://images4.alphacoders.com/133/thumb-1920-1332281.jpeg"
                    alt="gojo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/15  border-b border-white/15">
                <div
                  className={`font-bold text-3xl leading-[0.9em] tracking-[-0.03em] uppercase p-6 ${hostGrotesk.className}`}
                >
                  GOJO
                </div>
                <div className="text-right p-6 text-xs uppercase tracking-widest text-white font-mono">
                  <p>WEB DESIGN</p>
                  <p>BRANDING</p>
                </div>
              </div>
            </div>
            <div />
            <div />
          </PanelSelection>
        </>
    )
}
