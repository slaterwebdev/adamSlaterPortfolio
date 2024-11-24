type SectionProps = {
  title: string;
  titleSize?: string;
  children?: React.ReactNode;
  font?: string;
  row?: boolean;
  sideContent?: JSX.Element;
};

export const Section = ({
  title,
  titleSize = "text-3xl sm:text-5xl",
  children,
  font = "text-base",
  row = false,
  sideContent,
}: SectionProps) => (
  <section className="flex flex-col justify-between sm:flex-row gap-6 sm:flex-row">
    <div
      className={`flex flex-col gap-6 mb-12 ${row && "sm:flex-row"} sm:mb-24 w-full`}
    >
      {title && (
        <h6 className={`text-primary ${row && "sm:w-1/2"} ${titleSize}`}>
          {title}
        </h6>
      )}
      {children && (
        <div className={`flex flex-1 flex-col gap-6 text-black ${font}`}>
          {children}
        </div>
      )}
    </div>
    {sideContent && sideContent}
  </section>
);
