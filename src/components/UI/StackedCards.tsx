import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GridItem } from "@/utils/types";
import { Card } from "./Card";

export const StackedCards = ({ cards = [] }: { cards: GridItem[] }) => {
  const [isHovered, setIsHovered] = useState(false);

  const transformValues = cards.map((_, index) =>
    isHovered
      ? `rotate(0deg) translateX(${index * 120}%)`
      : `rotate(${Math.random() * 15 - 7.5}deg)`
  );

  return (
    <div
      className="w-full max-w-sm mb-12 sm:mb-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center items-center group p-4 relative hover:overflow-scroll mb-6 h-[245px]">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            {...card}
            transform={transformValues[index]}
            isHovered={isHovered}
          />
        ))}
      </div>
      {isHovered && (
        <p className="flex justify-center items-center gap-5 text-primary">
          SCROLL <FaArrowRight />
        </p>
      )}
    </div>
  );
};
