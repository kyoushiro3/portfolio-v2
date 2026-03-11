import { Plus_Jakarta_Sans } from "next/font/google";
import HorizontalScrollCards from "../horizontal-scroll-cards";
import PanelSelection from "../panelselection";

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export default function ServicesSection() {
  return (
    <div>
      <PanelSelection
        spans={[2, 2]}
        classNames={["", ""]}
        borders="border-white/15 divide-x divide-white/15 border-y-0 border-x-0 border-b"
      >
        <div className="py-24 text-center flex flex-col px-6 gap-7">
          <div className="text-[#5f6f77] justify-center text-xs uppercase tracking-widest font-bold">
            [ Solutions, Insights, Execution ]
          </div>
          <div
            className={`font-bold lg:text-7xl text-5xl leading-[0.9em] tracking-[-0.03em] text-[#f5fcff] ${jakarta.className}`}
          >
            <span className="block">My Services</span>
          </div>
        </div>
        <div />
      </PanelSelection>
      <div className="">
        <HorizontalScrollCards />
      </div>
    </div>
  );
}
