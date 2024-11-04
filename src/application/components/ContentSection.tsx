type ContentSectionProps = {
  title?: string;
  titleSize?: string;
  children: React.ReactNode;
  font?: string;
  row?: boolean;
};

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  titleSize,
  children,
  font,
  row,
}) => (
  <div className={`flex flex-col ${row && "sm:flex-row"} mb-12 sm:mb-24`}>
    {title && (
      <h6
        className={`${row && "sm:w-1/2"} text-cyan-400 mb-5 ${titleSize && titleSize}`}
      >
        {title}
      </h6>
    )}
    <div className={`${font && font} flex-1 text-black`}>{children}</div>
  </div>
);
