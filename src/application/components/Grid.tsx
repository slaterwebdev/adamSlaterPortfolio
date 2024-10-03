type GridProps = {
    items: Array<{
      icon: JSX.Element;
      content: string;
      ariaLabel: string;
    }>;
    columns?: string;
    gap?: string;
    className?: string;
  };
  
  export const Grid = ({
    items,
    columns = "1fr",
    gap = "1rem",
    className = "",
  }: GridProps) => (
    <div className={`sm:grid ${className}`} style={{ gridTemplateColumns: columns, gap }}>
      {items.map(({ icon, content, ariaLabel }, index) => (
        <div key={index} className="flex flex-row sm:flex-col justify-between gap-5 mb-5 sm:mb-0 px-5 items-center">
          <i aria-label={ariaLabel} className="hover:text-cyan-400">
            {icon}
          </i>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
  