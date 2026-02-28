"use client";

import { useState } from "react";
import PanelSelection from "./panelselection";
import TwoPanelCard from "./twoPanelCard";
import { reviews } from "@/data/reviews";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function nextReview() {
    setIndex((prev) => (prev + 1) % reviews.length);
  }

  function prevReview() {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }

  const review = reviews[index];

  return (
    <div className="w-full bg-[#0e0e0e] px-5">
      <PanelSelection
        spans={[1, 2, 1]}
        borders="border-white/15 divide-x divide-white/15 border-y"
        panelGap="pt-6 lg:pt-24"
      >
        <div />
        <TwoPanelCard
          label="Testimonials (05)"
          labelClassName="text-white/50 text-center"
          className=" text-white text-center"
        >
            <span className="text-white/50 ">Words </span>
            That Resonate
        </TwoPanelCard>
        <div />
        <div />
      </PanelSelection>
      <PanelSelection
        spans={[1, 2, 1]}
        borders="border-white/15 divide-x divide-white/15 border-y-0"
      >
        <div />
        <div className="font-mono flex flex-col  justify-between">
          <div className="p-10">
            <div className="text-center h-[140px]">"{review.comment}"</div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 overflow-hidden rounded-full">
                <img src={review.img} alt="gojo" className="h-full w-full object-cover" />
              </div>

              <span className="uppercase text-xs font-mono tracking-widest">
                {review.name}
              </span>
              <span className="text-white/50 uppercase text-xs font-mono tracking-widest">
                {review.work}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x divide-white/15 border-t border-white/15">
            <button
              onClick={prevReview}
              className="uppercase text-xs font-mono tracking-widest py-5 px-6"
            >
              previous
            </button>
            <button
              onClick={nextReview}
              className="uppercase text-xs font-mono tracking-widest py-5 px-6"
            >
              next
            </button>
          </div>
        </div>
        <div />
      </PanelSelection>
    </div>
  );
}
