import { Plus_Jakarta_Sans, Roboto_Condensed } from "next/font/google";
import PanelSelection from "../panelselection";
import TwoPanelCard from "../twoPanelCard";
import AutoProgressTabs from "../progress-tabs";

const roboto = Roboto_Condensed({
  weight: "700",
  variable: "--font-roboto",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export default function ProcessSection() {
  return (
    <div className="bg-[#92a6b0] rounded-2xl">
      <PanelSelection
        spans={[1,2,1]}
        classNames={["", ""]}
        borders="border-white/15 divide-x divide-[#b1c5ce] border-y-0"
      >
                <div/>
        <div className="pb-20 pt-32 text-center flex flex-col px-6 gap-7">
          <div className="text-[#5f6f77] justify-center text-xs uppercase tracking-widest font-bold">
            [ Efficiency, Scalability, and Agility ]
          </div>
          <div
            className={`font-bold lg:text-7xl text-5xl leading-[0.9em] tracking-[-0.03em] text-[#f5fcff] ${jakarta.className}`}
          >
            <span className="block">Where Ideas Take </span>
            <span className="text-[#22282a] block">Form</span>
          </div>
        </div>
        <div/>
        <div />

        <div />
      </PanelSelection>

      <PanelSelection
        spans={[1, 2, 1]}
        classNames={["", "pb-24"]}
        borders="border-white/15 divide-x divide-white/15 border-y border-b z-0"
      >
        <div/>
        <AutoProgressTabs />
        <div/>
      </PanelSelection>
    </div>
  );
}
