"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { about1, about2 } from "@/data/about";

type animatedProps ={
    text: string[];
};

export default function AnimatedText({text}: animatedProps) {
  const { scrollY } = useScroll();

  return (
    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-[0.95em] tracking-[-0.03em] uppercase text-left">
      {about1.map((line, i) => {
        const color = useTransform(
          scrollY,
          [200 + i * 80, 400 + i * 80],
          ["#999999", "#ffffff"],
        );

        return (
          <motion.span
            key={i}
            style={{ color }}
            className="block"
          >
            {line}
          </motion.span>
        );
      })}
    </h1>
  );
}