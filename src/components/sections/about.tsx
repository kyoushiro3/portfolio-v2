import { stats } from "@/data/stat";
import PanelSelection from "../panelselection";
import TwoPanelCard from "../twoPanelCard";
import AnimatedText from "../animatedText";
import { about1 } from "@/data/about";

export default function AboutSection() {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/15 divide-y divide-white/15 md:divide-x lg:divide-y-0">
        {stats.map((item, i) => (
          <div key={i} className="p-6">
            <p className="text-xs uppercase tracking-widest text-[#5f6f77] font-mono">
              {item.label.toUpperCase()}
            </p>
            <p className="text-sm text-[#d5e1e7] font-medium font-mono">
              {item.value.toUpperCase()}
            </p>
          </div>
        ))}
      </div>

      <PanelSelection
        spans={[2, 1, 1]}
        classNames={["", "hidden lg:block", ""]}
        panelGap="pt-6 lg:pt-36"
        borders="border-white/15 divide-x divide-white/15 border-y-0"
      >
        <TwoPanelCard label="About" labelClassName="text-white/50">
          <AnimatedText text={about1} />
        </TwoPanelCard>
        <div />
        <div className="text-right">
          <div className="h-full border-y border-white/15 p-4 ">
            <div className="h-full w-full lg:aspect-[9/16]">
              <img
                src="/me.png"
                alt="gojo"
                className="object-cover object-[50%_10%]"
              />
            </div>
          </div>
          <p className="p-6 text-right text-xs tracking-widest  text-white font-mono uppercase">
            I build websites that <br className="hidden lg:block" />
            <span className="text-right text-xs tracking-widest  text-white/50 font-mono uppercase">
              feel as good as they look. Clean, intentional,
            </span>
            and made to leave an impression.
          </p>
        </div>
      </PanelSelection>

      {/* <div
        className="
          lg:grid-rows-2
          grid 
          sm:grid-cols-1 
          md:grid-cols-1
          lg:grid-cols-4
          border-r border-l border-white/15
          divide-y divide-white/15
          md:divide-x
          items-stretch"
      >
        <div className="hidden lg:block col-start-3 row-start-1"></div>
        <div className="hidden lg:block col-start-4 row-start-1"></div>
        <div className="col-span-2 lg:col-start-3 row-start-2 pt-6 lg:pt-36">
          <div className="flex items-center">
            <TwoPanelCard label="" labelClassName="text-white/50">
              <p className="font-bold lg:text-5xl text-4xl leading-[0.95em] tracking-[-0.03em] uppercase text-neutral-400">
                I'm a full-stack web dev.{" "}
                <span className="text-white">
                  Here's the impact behind the design.adsasdasdasdasav adasdadadasda asdaksdhadkh
                </span>
              </p>
            </TwoPanelCard>
          </div>
        </div>
        <div className="col-span-2 lg:row-span-2 col-start-1 row-start-1 border-r border-white/15 pt-6 lg:pt-36">
          <div className="h-full p-4 border-y border-white/15">
            <div className="h-full w-full lg:aspect-[3/2]">
              <img
                src="/me.png"
                alt="gojo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
