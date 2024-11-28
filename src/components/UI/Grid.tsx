import { GridItem } from "@/utils/types";
import { iconMapper } from "@/utils/iconMapper";

type GridProps = {
  items: GridItem[];
  columns?: string;
  gap?: string;
};

const GridCard = ({ item }: { item: GridItem }) =>
  item.src ? (
    <a
      href={item.url}
      target="_blank"
      className="bg-cover bg-center bg-no-repeat pt-[55%] relative shadow-lg rounded-sm group block"
      style={{ backgroundImage: `url(${item.src})` }}
    >
      <div className="bg-zinc-900 text-white w-full h-full top-0 absolute opacity-0 group-hover:opacity-70 flex justify-center items-center cursor-pointer">
        <h2 className="underline">VIEW</h2>
      </div>
    </a>
  ) : (
    <div className="flex justify-between gap-5 items-center sm:mb-0 sm:flex-col">
      {item.id && <i className="hover:text-primary">{iconMapper[item.id]}</i>}
      {item.content && <p>{item.content}</p>}
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
    {items.map((item) => (
      <GridCard key={item.id || item.src} item={item} />
    ))}
  </div>
);
