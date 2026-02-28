import { Plus_Jakarta_Sans, Roboto_Condensed } from "next/font/google";
import React from "react";

interface textProps {
  label?: string;
  labelClassName?: string;
  children: React.ReactNode;
  className?: string;
} 

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

const TwoPanelCard = ({
  label,
  labelClassName="",
  children,
  className = "",
}: textProps) => {
  return (
    <div className={`flex flex-col px-6 border-b-0 gap-7${className}`}>
      {label && (
        <div className={`text-xs uppercase tracking-widest font-mono ${labelClassName} flex flex-row items-center gap-2`}>
          {/* <div className="gpu-led"/> */}
          {label}
        </div>
      )}
      <div className={`font-bold lg:text-7xl text-5xl leading-[0.9em] tracking-[-0.03em] ${jakarta.className}`}>
        {children}
      </div>
    </div>
  );
};

export default TwoPanelCard;