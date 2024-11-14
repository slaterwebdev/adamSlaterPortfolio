import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type StackedCardsProps = {
  cardHeight?: number;
  cardWidth?: number;
  cardImageURLs?: Array<string>;
};

const baseStyles = `absolute bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out group-hover:rotate-0`;
const generateRandomDegrees = () => {
  const randomDegree = Math.floor(Math.random() * 21);
  const rotationDegree =
    Math.random() < 0.5 ? `-${randomDegree}` : `${randomDegree}`;
  return `${rotationDegree}deg`;
};

export const StackedCards = ({
  cardHeight = 205,
  cardWidth = 320,
  cardImageURLs = [],
}: StackedCardsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full max-w-sm mb-12 sm:mb-24">
      <div
        className={`flex justify-center items-center group hover:overflow-scroll p-4 relative group-hover:rotate-0`}
        style={{ height: `${cardHeight + 40}px` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cardImageURLs.map((_, index) => (
          <div
            key={index}
            className={baseStyles}
            style={{
              height: `${cardHeight}px`,
              width: `${cardWidth}px`,
              rotate: isHovered ? "0deg" : `${generateRandomDegrees()}`,
              transform: isHovered
                ? `translateX(${120 * index + 1}%)`
                : undefined,
              backgroundImage: `url(${cardImageURLs[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
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
