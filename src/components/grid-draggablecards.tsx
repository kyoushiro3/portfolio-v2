"use client";

import { Reorder, motion } from "framer-motion";
import { useState } from "react";
import { ReachOriginalIcon, NextjsPlainIcon } from "@devicon/react";
import { icons } from "lucide-react";

  type Card = { id: number; title: string;   icon: React.ElementType;};

export default function GridDraggableCards() {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, title: "Card 1", icon: NextjsPlainIcon},
    { id: 2, title: "Card 2", icon: ReachOriginalIcon },
    { id: 3, title: "Card 3", icon: ReachOriginalIcon },
    { id: 4, title: "Card 4", icon: ReachOriginalIcon },
    { id: 5, title: "Card 1", icon: ReachOriginalIcon },
    { id: 6, title: "Card 2", icon: ReachOriginalIcon },
    { id: 7, title: "Card 3", icon: ReachOriginalIcon },
    { id: 8, title: "Card 4", icon: ReachOriginalIcon },
  ]);

  return (
    <Reorder.Group
      axis="x"
      values={cards}
      onReorder={setCards}
      className="grid grid-cols-4 lg:grid-cols-8  gap-6 p-6 divide-x divide-y overflow-hidden bg-[#b1c5ce]"
    >
{cards.map((card) => {
  const Icon = card.icon;
  return (
    <Reorder.Item
      key={card.id}
      value={card}
      className="w-full h-full bg-[#394247] shadow-lg flex items-center justify-center cursor-grab aspect-square rounded-2xl"
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        whileTap={{ scale: 0.95 }}
      >
        <Icon size="80px" color="white"/>
      </motion.div>
    </Reorder.Item>
  );
})}
    </Reorder.Group>
  );
}