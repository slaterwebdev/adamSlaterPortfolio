import { GridItem } from "@/utils/types";

export const Card = ({
  id,
  src,
  url,
  transform,
  isHovered,
}: GridItem & { transform: string; isHovered: boolean }) => (
  <a
    href={isHovered ? url : undefined}
    aria-label={id || "Portfolio Image"}
    className="absolute bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out bg-cover bg-center bg-no-repeat h-[205px] w-[320px]"
    style={{
      transform,
      backgroundImage: `url(${src})`,
    }}
    target="_blank"
    rel="noopener noreferrer"
  />
);
