import PanelSelection from "@/components/panelselection";
import { Roboto_Condensed } from "next/font/google";
import TwoPanelCard from "@/components/twoPanelCard";
import List from "@/components/list";
import { Circle, EggFried, Globe, Shell } from "lucide-react";
import Testimonials from "@/components/testimonials";
import FAQs from "@/components/faqs";
import Hero from "@/components/hero";
import WorksSection from "@/components/sections/works";
import WorkSection from "@/components/works/stacking-cards";
import AboutSection from "@/components/sections/about";
import StatsSection from "@/components/sections/stats-section";
import ProcessSection from "@/components/sections/process";
import GridDraggableCards from "@/components/grid-draggablecards";
import HorizontalScrollCards from "@/components/horizontal-scroll-cards";
import HeroAnimation from "@/components/hero-animation";
import Image from "next/image";
import ServicesSection from "@/components/sections/services";
import AboutMe from "@/components/sections/about-me";
import TechStacksSection from "@/components/sections/tech-stacks";
import CallBookingForm from "@/components/form";

const roboto = Roboto_Condensed({
  weight: "700",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="relative w-full bg-[#22282a] overflow-hidden px-5" id="hero">
        <div className="mx-auto w-full max-w-[1600px] relative h-[100vh]">
          <div className="absolute inset-0 flex justify-center items-end overflow-hidden border-x border-white/15">
            <HeroAnimation />
          </div>

          <div className="relative z-10 px-5 ">
            <Hero />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#22282a] px-5">
        <div className="mx-auto w-full max-w-[1600px] border border-white/15 pb-24">
          <StatsSection />
        </div>
      </div>

      <div id="about" className="w-full bg-[#22282a] px-5">
        <div className="mx-auto w-full max-w-[1600px]">
          <AboutMe />
        </div>
      </div>

      {/* <div className="w-full bg-[#22282a] px-5">
        <div className="mx-auto w-full max-w-[1600px]">
          <AboutSection />
        </div>
      </div> */}
      <div className="w-full bg-[#22282a] px-5" id="works">
        <div className="mx-auto w-full h-full max-w-[1600px] border border-white/15 pb-24">
          <HorizontalScrollCards />
        </div>
      </div>
                  <div className="w-full bg-[#22282a] px-5">
        <div className="mx-auto w-full max-w-[1600px] border border-white/15 pb-24">
          <TechStacksSection/>
        </div>
      </div>

            {/* <div className="w-full bg-[#22282a] px-5">
        <div className="mx-auto w-full max-w-[1600px] border border-white/15 pb-24">
          <GridDraggableCards />
        </div>
      </div> */}

      <div className="w-full bg-[#22282a] px-5">
        <div className="mx-auto w-full max-w-[1600px]">
          <ProcessSection />
        </div>
      </div>

      <div className="w-full bg-[#22282a] px-5">
        <div className="mx-auto w-full max-w-[1600px] border-x border-white/15">
          {/* <WorksSection /> */}
          <WorkSection />
        </div>
      </div>
      {/* <div className="w-full bg-[#22282a] px-5">
        <div className="mx-auto w-full max-w-[1600px] bg-[#e0e0e0] rounded-2xl">
          <PanelSelection
            spans={[2, 1, 1]}
            panelGap="pt-6 lg:pt-20"
            borders="border-[#0003] divide-x divide-[#0003] border-y-0"
          >
            <TwoPanelCard
              label="Services (04)"
              labelClassName="text-neutral-950"
              className="text-7xl text-[#0e0e0e]"
            >
              <span className={`${roboto.className} text-7xl text-[#0e0e0e]`}>
                <span className="text-[#0e0e0e66] ">Design </span>
                That Speaks for You
              </span>
            </TwoPanelCard>
            <div />
            <div className="flex items-end h-full text-justify lg:text-right border-r-0">
              <p className="p-4 text-right text-xs tracking-widest  text-[#0e0e0e] font-mono uppercase">
                I help brands and startups create digital experiences that feel
                clear, modern, and effortless to use.
              </p>
            </div>
          </PanelSelection>

          <List
            number="01/"
            title="Brand Identity & Visual Systems"
            description="I shape the core visuals of a brand, from logotypes and typography to palettes and systems — ensuring the brand feels memorable and unmistakable."
            tags={["NextJS", "Supabase", "Try", "NextJS", "Supabase", "Try"]}
            image="https://images4.alphacoders.com/133/thumb-1920-1332281.jpeg"
          />
          <PanelSelection
            spans={[1, 1, 1, 1]}
            borders="border-[#0003] lg:divide-x divide-y lg:divide-0 divide-[#0003] border-y-0"
          >
            <div className="flex items-center justify-center p-12 text-[#0e0e0e66] hover:text-white hover:bg-[#0e0e0e66] aspect-square">
              <Circle size={200} />
            </div>
            <div className="flex items-center justify-center p-12 text-[#0e0e0e66] hover:text-white hover:bg-[#0e0e0e66] aspect-square">
              <EggFried size={200} />
            </div>
            <div className="flex items-center justify-center p-12 text-[#0e0e0e66] hover:text-white hover:bg-[#0e0e0e66] aspect-square">
              <Globe size={200} />
            </div>
            <div className="flex items-center justify-center p-12 text-[#0e0e0e66] hover:text-white hover:bg-[#0e0e0e66] aspect-square">
              <Shell size={200} />
            </div>
          </PanelSelection>
        </div>
      </div> */}
      {/* <Testimonials />
      <FAQs /> */}
    </div>
  );
}

// hero / grids // max-w-[1400px] // // text sections // max-w-[1100px] // // nav // max-w-[1600px]
