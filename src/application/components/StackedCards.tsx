import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type StackedCardsProps = {
  cardHeight?: number;
  cardWidth?: number;
  cardImageURLs?: string[];
};

const baseStyles = `absolute bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out bg-cover bg-center bg-no-repeat`;

const generateRandomDegrees = () => {
  const degree = Math.floor(Math.random() * 41) - 20;
  return `${degree}deg`;
};

export const StackedCards = ({
  cardHeight = 205,
  cardWidth = 320,
  cardImageURLs = [],
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
        {cardImageURLs.map((url, index) => (
          <div
            key={index}
            className={`${baseStyles} ${isHovered ? "rotate-0" : ""}`}
            style={{
              height: `${cardHeight}px`,
              width: `${cardWidth}px`,
              rotate: isHovered ? "0deg" : generateRandomDegrees(),
              transform: isHovered ? `translateX(${index * 120}%)` : undefined,
              backgroundImage: `url(${url})`,
            }}
          />
        ))}
      </div>
      {isHovered && (
        <p className="mt-6 flex justify-center items-center gap-5 text-cyan-400">
          SCROLL <FaArrowRight />
        </p>
      )}
    </div>
  );
};
