"use client";

import { motion, useTransform } from "framer-motion";

export function WorkCard({
  index,
  progress,
  title,
  category,
  description,
  image,
  link,
  year
}: any) {
  const scale = useTransform(
    progress,
    [index * 0.25, (index + 1) * 0.25],
    [1, 0.82]
  );

  const topOffset = `${index * 25}px`;

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center">
      <motion.div
        onClick={() => window.open(link, "_blank")}
        style={{ scale, top: topOffset }}
        className="relative w-full max-w-[1200px] h-[calc(100%-4rem)] rounded-2xl overflow-hidden origin-top cursor-pointer"
      >
          <div className="absolute inset-0 bg-[#394247] rounded-3xl" />
          <div className="absolute inset-0 flex flex-col lg:flex-row">
<div className="flex-1 p-10 lg:p-20 flex flex-col justify-center text-white">
  <span className="text-white/50 uppercase tracking-widest mb-2">
    {category} • {year}
  </span>

  <h3 className="text-5xl lg:text-7xl font-extrabold mb-6">
    {title}
  </h3>

  <p className="text-white/70 max-w-lg">{description}</p>
</div>

            <div className="flex-1 relative">
              <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Work"
              />
            </div>
          </div>
        </motion.div>
    </div>
  );
}
