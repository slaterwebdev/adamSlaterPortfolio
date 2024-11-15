type GridItem = {
  icon?: JSX.Element;
  content?: string;
  url?: string;
  image?: string;
};

type GridProps = {
  items: GridItem[];
  columns?: string;
  gap?: string;
};

export const Grid = ({ items, columns = "1fr", gap = ".5rem" }: GridProps) => (
  <div className="flex flex-col sm:grid" style={{ gridTemplateColumns: columns, gap }}>
    {items.map((item, index) =>
      item.url && item.image ? (
        <a
          key={index}
          href={item.url}
          className="bg-cover bg-center bg-no-repeat h-[200px] shadow-lg rounded-sm cursor-pointer group hover:scale-105"
          style={{ backgroundImage: `url(${item.image})` }}
          aria-label="View details"
        >
          <div className="bg-zinc-900 text-white w-full h-full opacity-0 group-hover:opacity-70 flex justify-center items-center">
            <h2 className="underline">VIEW</h2>
          </div>
        </a>
      ) : (
        <div
          key={index}
          className="flex justify-between gap-5 mb-5 items-center sm:mb-0 sm:flex-col"
        >
          {item.icon && <i className="hover:text-cyan-400">{item.icon}</i>}
          {item.content && <p>{item.content}</p>}
        </div>
      )
    )}
  </div>
);
