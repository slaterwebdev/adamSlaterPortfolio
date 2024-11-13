import { useState } from "react";

type StackedCardsProps = {
  cardHeight?: number;
  cardWidth?: number;
  cardImageURLs?: Array<string>;
};

const baseStyles = `absolute bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out group-hover:rotate-0`;
const generateRandomDegrees = () => {
  const randomDegree = Math.floor(Math.random() * 21); // Random number between 0 and 30
  const rotationDegree =
    Math.random() < 0.5 ? `-${randomDegree}` : `${randomDegree}`;
  return `${rotationDegree}deg`;
};

export const StackedCards = ({
  cardHeight = 225,
  cardWidth = 375,
  cardImageURLs = [],
}: StackedCardsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex justify-center items-center group hover:overflow-scroll p-4 relative mb-12 sm:mb-24 w-full max-w-sm group-hover:rotate-0`}
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
            transform: isHovered ? `translateX(${120 * index + 1}%)` : undefined,
            backgroundImage: `url(${cardImageURLs[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      ))}
    </div>
  )
};
