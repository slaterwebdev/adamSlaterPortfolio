import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { findPortfolioImage } from "@/utilities/imageMapper";
import { generateRandomDegrees } from "@/utilities/utilities";

type StackedCardsProps = {
  cardHeight?: number;
  cardWidth?: number;
  cards: string[];
};

const BASE_CARD_CLASSES = `absolute bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out bg-cover bg-center bg-no-repeat`;

export const StackedCards = ({
  cardHeight = 205,
  cardWidth = 320,
  cards = [],
}: StackedCardsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-sm mb-12 sm:mb-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex justify-center items-center group p-4 relative hover:overflow-scroll"
        style={{ height: `${cardHeight + 40}px` }}
      >
        {cards.map((card, index) => {
          const portfolioImage = findPortfolioImage(card);
          return (
            <a
              key={index}
              href={isHovered ? portfolioImage?.url : undefined}
              aria-label={portfolioImage?.name || "Portfolio Image"}
              className={`${BASE_CARD_CLASSES} ${isHovered ? "rotate-0" : ""}`}
              style={{
                height: `${cardHeight}px`,
                width: `${cardWidth}px`,
                rotate: isHovered ? "0deg" : generateRandomDegrees(),
                transform: isHovered
                  ? `translateX(${index * 120}%)`
                  : undefined,
                backgroundImage: `url(${portfolioImage?.src})`,
              }}
            />
          );
        })}
      </div>
      {isHovered && (
        <p className="mt-6 flex justify-center items-center gap-5 text-primary">
          SCROLL <FaArrowRight />
        </p>
      )}
    </div>
  );
};
