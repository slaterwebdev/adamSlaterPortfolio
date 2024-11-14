type ContentContainerProps = {
  title: string;
  titleSize?: string;
  children?: React.ReactNode;
  font?: string;
  row?: boolean;
  extraContent?: JSX.Element;
};

export const ContentContainer = ({
  title,
  titleSize = "text-3xl",
  children,
  font = "text-base",
  row = false,
  extraContent,
}: ContentContainerProps) => (
  <div className="flex flex-col justify-between sm:flex-row gap-5 sm:flex-row">
    <div
      className={`flex flex-col mb-12 ${row && "sm:flex-row"} sm:mb-24`}
    >
      {title && (
        <h6 className={`text-cyan-400 mb-5 ${row && "sm:w-1/2"} ${titleSize}`}>
          {title}
        </h6>
      )}
      {children && (
        <div className={`flex-1 text-black ${font}`}>{children}</div>
      )}
    </div>
    {extraContent && extraContent}
  </div>
);
