import { Plus_Jakarta_Sans } from "next/font/google";
import PanelSelection from "../panelselection";

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export default function AboutMe() {
  return (
    <div className="bg-[#92a6b0] rounded-2xl">
      <PanelSelection
        spans={[1, 2, 1]}
        classNames={["", ""]}
        borders="border-white/15 divide-x divide-[#b1c5ce] border-y-0"
      >
        <div />
        <div className="pb-20 pt-32 text-center flex flex-col px-6 gap-7">
          <div className="text-[#5f6f77] justify-center text-xs uppercase tracking-widest font-bold">
            [ Efficiency, Scalability, and Agility ]
          </div>
          <div
            className={`font-bold lg:text-7xl text-5xl leading-[0.9em] tracking-[-0.03em] text-[#22282a] ${jakarta.className}`}
          >
            <span className="">About </span>
            <span className=" text-[#f5fcff]">Me</span>
          </div>
        </div>
        <div />
        <div />

        <div />
      </PanelSelection>
      <PanelSelection
        spans={[1, 2, 1]}
        classNames={["", "pb-24"]}
        borders="border-white/15 divide-x divide-white/15 border-y border-b z-0"
      >
        <div />
        <div className="bg-[#b1c5ce] outline-[#b1c5ce] outline-[1.6px] rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.6px]">
          <div className="bg-[#92a6b0] rounded-2xl col-span-1 lg:col-span-1 p-6">
            <h2 className="text-[#394247] text-xs leading-relaxed font-mono uppercase">
              Location
            </h2>
            <p className="text-[#22282a] text-sm uppercase font-bold">
              Philippines
            </p>
          </div>
          <div className="bg-[#92a6b0] rounded-2xl col-span-1 lg:col-span-1 p-6">
            <h2 className="text-[#22282a] text-xs leading-relaxed font-mono uppercase">
              Field
            </h2>
            <p className="text-[#394247] text-sm uppercase font-bold">
              WEB DEV / FUNNELS AND AUTOMATIONS
            </p>
          </div>
          <div className="bg-[#92a6b0] rounded-2xl col-span-1 lg:col-span-1 p-6">
            <h2 className="text-[#394247] text-xs leading-relaxed font-mono uppercase">
              Approach
            </h2>
            <p className="text-[#22282a] text-sm uppercase font-bold">
              BUILD SIMPLE. LEARN FAST.
            </p>
          </div>
          <div className="bg-[#92a6b0] rounded-2xl col-span-1 lg:col-span-1 p-6">
            <h2 className="text-[#394247] text-xs leading-relaxed font-mono uppercase">
              CLIENTS / FOCUS
            </h2>
            <p className="text-[#22282a] text-sm uppercase font-bold">
              STARTUPS · PERSONAL PROJECTS
            </p>
          </div>

          <div className="bg-[#92a6b0] rounded-2xl col-span-1 md:col-span-2 lg:col-span-4 p-8 aspect-square">
            <img
              src="/me.png"
              alt="gojo"
              className="object-cover object-[50%_10%] rounded-2xl aspect-square"
            />
          </div>

          <div className="bg-[#92a6b0] rounded-2xl col-span-1 md:col-span-2 lg:col-span-4 p-8">
            <p className="text-[#22282a] text-2xl font-bold leading-10 tracking-[-0.03em] ">
              I’m{" "}
              <span className="text-white uppercase">Kim Darren</span> — a full-stack web dev
              from the Philippines, learning by building real products. I enjoy
              taking rough ideas or incomplete concepts and turning them into
              simple and automated working applications.
            </p>
          </div>
        </div>

        <div />
      </PanelSelection>
    </div>
  );
}
