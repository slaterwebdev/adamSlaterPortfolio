import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { generateRandomDegrees } from "@/utils/utilities";
import { GridItem } from "@/utils/types";

const BASE_CARD_CLASSES = `absolute bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out bg-cover bg-center bg-no-repeat h-[205px] w-[320px]`;

export const StackedCards = ({ cards = [] }: { cards: GridItem[] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="w-full max-w-sm mb-12 sm:mb-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-center group p-4 relative hover:overflow-scroll mb-6 h-[245px]">
        {cards.map((card, index) => {
          if (!card || !card.src) return null;

          const transformValue = isHovered
            ? `rotate(0deg) translateX(${index * 120}%)`
            : `rotate(${generateRandomDegrees()})`;
          
          return (
            <a
              key={card?.id}
              href={isHovered ? card?.url : undefined}
              className={BASE_CARD_CLASSES}
              target="_blank"
              style={{
                transform: transformValue,
                backgroundImage: `url(${card.src})`,
              }}
            />
          );
        })}
      </div>
      {isHovered && (
        <p className="flex justify-center items-center gap-5 text-primary">
          SCROLL {<FaArrowRight />}
        </p>
      )}
    </div>
  );
};
