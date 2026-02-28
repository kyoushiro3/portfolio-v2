"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";
import { WorkCard } from "./word-card";
import { worksData } from "@/data/worksData";

export default function WorkSection() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <section ref={container} className="relative">
      {worksData.map((work, index) => (
        <WorkCard
          key={index}
          index={index}
          progress={scrollYProgress}
          title={work.title}
          category={work.category}
          description={work.description}
          image={work.image}
          link={work.link}
          year={work.year}
        />
      ))}
    </section>
  );
}
