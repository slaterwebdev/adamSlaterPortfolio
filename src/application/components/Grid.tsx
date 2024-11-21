import { GridItem} from "@/application/utils/types";
import { iconMapper } from "@/application/utils/iconMapper";
import { findPortfolioImage } from "@/application/features/pages/portfolio/imageMapper";

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
      className="bg-cover bg-center bg-no-repeat pt-[55%] relative shadow-lg rounded-sm group block cursor-pointer"
      style={{ backgroundImage: `url(${image?.src})` }}
    >
      {image?.url && (
        <div className="bg-zinc-900 text-white w-full h-full top-0 absolute opacity-0 group-hover:opacity-70 flex justify-center items-center">
          <h2 className="underline">VIEW</h2>
        </div>
      )}
    </a>
  );
};

const renderContentCard = ({ id, content }: GridItem) => (
  <div key={id} className="flex justify-between gap-5 items-center sm:mb-0 sm:flex-col">
    {id && <i className="hover:text-primary">{iconMapper[id]}</i>}
    {content && <p>{content}</p>}
  </div>
);

export const Grid = ({
  items,
  columns = "1fr 1fr 1fr",
  gap = ".5rem",
}: GridProps) => (
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
    ))}
  </div>
);
