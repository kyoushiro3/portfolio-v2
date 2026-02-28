"use client";

import { animate } from "motion";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

type NumProps = {
  num: number;
};

export default function NumAnimation({ num }: NumProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    let controls: any;

    if (isInView) {
      controls = animate(count, num, {
        duration: 2,
        ease: "easeOut",
      },);
    } else {
      count.set(0);
    }

    return () => controls?.stop();
  }, [isInView, num, count]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}