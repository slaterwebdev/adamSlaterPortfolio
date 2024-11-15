import { GridItem } from "@/types/types";
import { iconMapper } from "@/utilities/iconMapper";
import { findPortfolioImage } from "@/utilities/imageMapper";

type GridProps = {
  items: (string | GridItem)[];
  columns?: string;
  gap?: string;
};

const renderImageCard = (item: string) => {
  const image = findPortfolioImage(item);
  return (
    <a
      href={image?.url}
      className="bg-cover bg-center bg-no-repeat h-[200px] shadow-lg rounded-sm group block"
      style={{ backgroundImage: `url(${image?.src})` }}
      aria-label="View details"
    >
      {image?.url && (
        <div className="bg-zinc-900 cursor-pointer text-white w-full h-full opacity-0 group-hover:opacity-70 flex justify-center items-center">
          <h2 className="underline">VIEW</h2>
        </div>
      )}
    </a>
  );
};

const renderContentCard = ({ icon, content }: GridItem) => (
  <div className="flex justify-between gap-5 mb-5 items-center sm:mb-0 sm:flex-col">
    {icon && <i className="hover:text-primary">{iconMapper[icon]}</i>}
    {content && <p>{content}</p>}
  </div>
);

export const Grid = ({ items, columns = "1fr", gap = ".5rem" }: GridProps) => (
  <div
    className="flex flex-col sm:grid"
    style={{ gridTemplateColumns: columns, gap }}
  >
    {items.map((item, index) => (
        <div key={index}>
          {typeof item === "string"
            ? renderImageCard(item as string)
            : renderContentCard(item as GridItem)}
        </div>
      ))
    }
  </div>
);
