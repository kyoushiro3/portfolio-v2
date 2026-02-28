import { Germania_One, Host_Grotesk, Josefin_Sans } from "next/font/google";
import React from "react";

interface ListRowProps {
  number: string;
  title: string;
  description: string;
  tags?: string[];
  image?: string;
}

const germaniOne = Germania_One({
  weight: "400",
  variable: "--font-germania",
  subsets: ["latin"],
});

const hostGrotesk = Host_Grotesk({
  weight: ["700", "800"],
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  weight: "700",
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});


export default function List({
  number,
  title,
  description,
  tags = [],
  image,
}: ListRowProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 border-x border-y border-[#0003] py-5 gap-5 lg:gap-0">
      <div className="px-6 text-sm tracking-widest text-[#0e0e0e] leading-5 font-mono font-bold uppercase">
        {number}
      </div>
      <div className="px-6 flex flex-col gap-2.5">
        <h3 className={`${josefin.className} text-lg text-[#0e0e0e] uppercase leading-[1em] font-bold`}>
          {title}
        </h3>
        <p className="text-xs tracking-widest text-[#0e0e0e] leading-5 font-mono uppercase">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 px-6 self-start">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center justify-center border border-[#0003] px-3 h-8 text-[11px] font-bold uppercase leading-none tracking-wide text-[#0e0e0e]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="px-6">
        {image && (
          <div className="w-full lg:aspect-[3/2] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}