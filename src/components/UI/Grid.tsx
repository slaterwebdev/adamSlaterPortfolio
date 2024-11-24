import { GridItem } from "@/utils/types";
import { iconMapper } from "@/utils/iconMapper";

type GridProps = {
  items: GridItem[];
  columns?: string;
  gap?: string;
};

const renderImageCard = (item: GridItem) => (
  <a
    href={item?.url}
    target="_blank"
    className="bg-cover bg-center bg-no-repeat pt-[55%] relative shadow-lg rounded-sm group block"
    style={{ backgroundImage: `url(${item?.src})` }}
  >
    {item?.url && (
      <div className="bg-zinc-900 text-white w-full h-full top-0 absolute opacity-0 group-hover:opacity-70 flex justify-center items-center cursor-pointer">
        <h2 className="underline">VIEW</h2>
      </div>
    )}
  </a>
);

const renderContentCard = ({ id, content }: GridItem) => (
  <div
    key={id}
    className="flex justify-between gap-5 items-center sm:mb-0 sm:flex-col"
  >
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
        {!item.content ? renderImageCard(item) : renderContentCard(item)}
      </div>
    ))}
  </div>
);
