"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";

export default function ScreenReveal() {
  const progress = useMotionValue(0);
  const [percent, setPercent] = useState(0);

  const y = useTransform(progress, [0, 1], ["0%", "-100%"]);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 4.2,
      ease: [0.22, 1, 0.36, 1], 
      onUpdate: (latest) => {
        setPercent(Math.round(latest * 100));
      },
    });

    return controls.stop;
  }, [progress]);

  return (
    <motion.div
      style={{ y }}
      className="fixed inset-0 z-[9999] bg-[#0e0e0e]"
    >
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold tracking-widest">
        Kai Cancode         {percent}%
      </div>
    </motion.div>
  );
}