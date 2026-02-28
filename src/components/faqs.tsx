import { Plus, X } from "lucide-react";
import PanelSelection from "./panelselection";
import TwoPanelCard from "./twoPanelCard";
import { questions } from "@/data/faqs";

export default function FAQs() {
  return (
    <div className="w-full bg-[#0e0e0e] px-5">
      <PanelSelection
        spans={[1, 2, 1]}
        borders="border-white/15 divide-x divide-white/15 border-y"
        panelGap="pt-6 lg:pt-24"
      >
        <div />
        <TwoPanelCard
          label="FAQs (08)"
          labelClassName="text-white/50 text-center"
          className="text-8xl text-white text-center"
        >
          <span className="text-white/50 ">Frequently </span>
          Asked Questions
        </TwoPanelCard>
        <div />
      </PanelSelection>
      <PanelSelection
        spans={[1, 2, 1]}
        borders="border-white/15 divide-x divide-white/15 border-y-0"
      >
        <div />
        <div>
          <div>
            {questions.map((q, i) => (
              <details
                key={i}
                className="group transition-all duration-300 ease-in-out open:text-white/50 px-6 py-5 border-b border-white/15"
              >
                <summary className="uppercase text-sm font-mono tracking-widest cursor-pointer list-none [&::-webkit-details-marker]:hidden  flex justify-between">
                  {q.question}
                  <Plus className="text-white w-5 h-5 transition-all duration-300 group-open:rotate-90" />
                </summary>
                <div className="py-5">
                  <p className="uppercase text-white text-xs font-mono tracking-widest">
                    {q.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
        <div />
      </PanelSelection>
    </div>
  );
}
