type StackedCardsProps = {
  cardHeight?: number;
  cardWidth?: number;
  cardImages?: Array<string>;
};

export const StackedCards = ({
  cardHeight = 225,
  cardWidth = 375,
  cardImages = ["test1", "test2", "test3"]
}: StackedCardsProps) => {
  const baseStyles = `absolute bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out group-hover:rotate-0`;
  const test = ["rotate-[-10deg]", "rotate-5", "rotate-[-5deg]"];
  const test2 = [
    "",
    "group-hover:translate-x-[120%]",
    "group-hover:translate-x-[240%]",
  ];
  return (
    <div
      className={`flex justify-center items-center group hover:overflow-scroll p-4 relative mb-12 sm:mb-24`}
      style={{ height: `${cardHeight + 40}px` }}
    >
      {cardImages.map((_, index) => (
        <div
          className={`${baseStyles} ${test[index]} ${test2[index]}`}
          style={{ height: `${cardHeight}px`, width: `${cardWidth}px` }}
        >
          {cardImages[index]}
        </div>
      ))}
    </div>
  );
};
