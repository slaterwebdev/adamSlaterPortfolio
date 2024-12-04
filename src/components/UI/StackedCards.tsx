import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { generateRandomDegrees } from "@/utils/utilities";
import { GridItem } from "@/utils/types";
import { fallBackImage } from "@/constants/constants";

const BASE_CARD_CLASSES = `absolute bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out bg-cover bg-center bg-no-repeat inset-0`;

export const StackedCards = ({
  cards = [],
  height = "200px",
  width = "320px",
}: {
  cards: GridItem[];
  height?: string;
  width?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="w-full max-w-sm mb-12 sm:mb-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="mx-auto group p-4 relative hover:overflow-scroll mb-6 relative"
        style={{
          height: height,
          width: width,
        }}
      >
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
                backgroundImage: `url(${card.src || fallBackImage})`,
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
