import { Plus_Jakarta_Sans } from "next/font/google";
import NumAnimation from "../animations/numAnim";
import PanelSelection from "../panelselection";

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export default function StatsSection() {
  return (
    <div>
      <PanelSelection
        spans={[1, 1, 1, 1]}
        classNames={["", ""]}
        borders="border-white/15 divide-x border-b border-x-0 lg:divide-y-0 divide-y divide-white/15 border-y-0 p-0 lg:gap-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* Project Stats */}
        <div className="p-6 m-4 flex flex-col justify-end gap-4 bg-[#394247] text-[#d5e1e7] rounded-2xl aspect-square transition-all duration-300 ease-in-out hover:bg-white hover:text-[#43554B] group">
          <h2
            className={`${jakarta.className} font-bold transition-colors duration-300
                        text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            <NumAnimation num={10} />+
          </h2>
          <p className="text-xs uppercase tracking-widest font-mono transition-colors duration-300">
            Projects
          </p>
          <p className="text-xs tracking-widest font-mono leading-5 min-h-[60px] text-[#b1c5ce] transition-colors duration-300 group-hover:text-[#6b7d75]">
            Websites designed & built for startups, agencies, and brands worldwide.
          </p>
        </div>

        {/* Client Satisfaction */}
        <div className="p-6 m-4 flex flex-col justify-end gap-4 bg-[#394247] text-[#d5e1e7] rounded-2xl aspect-square transition-all duration-300 ease-in-out hover:bg-white hover:text-[#43554B] group">
          <h2
            className={`${jakarta.className} font-bold transition-colors duration-300
                        text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            <NumAnimation num={98} />
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">%</span>
          </h2>
          <p className="text-xs uppercase tracking-widest font-mono transition-colors duration-300">
            Client Satisfaction
          </p>
          <p className="text-xs tracking-widest font-mono leading-5 min-h-[60px] text-[#b1c5ce] transition-colors duration-300 group-hover:text-[#6b7d75]">
            Long-term relationships, strong communication, and clear delivery.
          </p>
        </div>

        {/* Years Experience */}
        <div className="p-6 m-4 flex flex-col justify-end gap-4 bg-[#394247] text-[#d5e1e7] rounded-2xl aspect-square transition-all duration-300 ease-in-out hover:bg-white hover:text-[#43554B] group">
          <h2
            className={`${jakarta.className} font-bold transition-colors duration-300
                        text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            <NumAnimation num={2} />+
          </h2>
          <p className="text-xs uppercase tracking-widest font-mono transition-colors duration-300">
            Years Experience
          </p>
          <p className="text-xs tracking-widest font-mono leading-5 min-h-[60px] text-[#b1c5ce] transition-colors duration-300 group-hover:text-[#6b7d75]">
            Refining process, clarity, and performance-driven design.
          </p>
        </div>

        {/* Avg Rating */}
        <div className="p-6 m-4 flex flex-col justify-end gap-4 bg-[#394247] text-[#d5e1e7] rounded-2xl aspect-square transition-all duration-300 ease-in-out hover:bg-white hover:text-[#43554B] group">
          <h2
            className={`${jakarta.className} font-bold transition-colors duration-300
                        text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            <NumAnimation num={5} />+
          </h2>
          <p className="text-xs uppercase tracking-widest font-mono transition-colors duration-300">
            Avg Rating
          </p>
          <p className="text-xs tracking-widest font-mono leading-5 min-h-[60px] text-[#b1c5ce] transition-colors duration-300 group-hover:text-[#6b7d75]">
            Trusted by founders, creatives & teams across different industries.
          </p>
        </div>
      </PanelSelection>
    </div>
  );
}