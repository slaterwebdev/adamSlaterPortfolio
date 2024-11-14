type GridProps = {
  items:
    | Array<{
        icon: JSX.Element;
        content: string;
        ariaLabel: string;
      }>
    | Array<string>;
  columns?: string;
  gap?: string;
};

export const Grid = ({
  items,
  columns = "1fr",
  gap = ".5rem",
}: GridProps) => (
  <div
    className="sm:grid"
    style={{ gridTemplateColumns: columns, gap }}
  >
    {items.map((item, index) => {
      const isImageOnly = typeof item === "string";
      return (
        <div
          key={index}
          className="bg-cover bg-center bg-no-repeat"
          style={isImageOnly ? {
            backgroundImage: `url(${item})`,
            height: '200px',
          } : undefined}
        >
          {!isImageOnly && (
            <div
              className={`flex justify-between gap-5 mb-5 items-center sm:mb-0 sm:flex-col`}
            >
              <i aria-label={item.ariaLabel} className="hover:text-cyan-400">
                {item.icon}
              </i>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      );
    })}
  </div>
);
