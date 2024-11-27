import { portfolioRepoURL } from "@/constants/constants";
import { iconMapper } from "@/utils/iconMapper";
import { ReactNode } from "react";
import { FaPhone, FaMailBulk } from "react-icons/fa";

type PageTemplateProps = {
  content: {
    title: string;
    subTitle?: string;
    tagLine?: string;
    phone?: string;
    email?: string;
  };
  image: string;
  children?: ReactNode;
};

const Introduction = ({ content }: Pick<PageTemplateProps, "content">) => {
  const { tagLine, title, subTitle, email, phone } = content;
  return (
    <div className="flex items-center">
      <div className="text-slate-500 font-playfair flex flex-col gap-5">
        <header>
          {tagLine && (
            <h3 className="font-sans text-md mb-4 lg:text-lg">{tagLine}</h3>
          )}
          {(tagLine || title) && (
            <div className="bg-slate-500 w-20 h-1 mb-4 lg:mb-8"></div>
          )}
          <h1 className="text-5xl font-bold text-black lg:text-8xl">{title}</h1>
          {subTitle && (
            <h2 className="text-3xl font-semibold mb-10 lg:text-4xl">
              {subTitle}
            </h2>
          )}
        </header>
        <div className="text-black font-sans">
          {email && (
            <a
              target="_blank"
              href={`mailto:${email}`}
              className="block flex gap-5 items-center mb-2 hover:scale-105 transition-transform"
            >
              <FaMailBulk className="text-primary" />
              {email}
            </a>
          )}
          {phone && (
            <a
              target="_blank"
              href={`tel:${phone}`}
              className="flex gap-5 items-center hover:scale-105 transition-transform mb-2"
            >
              <FaPhone className="text-primary" />
              {phone}
            </a>
          )}
          <a
            href={portfolioRepoURL}
            target="_blank"
            className="text-black flex items-center gap-5 underline hover:scale-110 mb-5"
          >
            {iconMapper["github"]}
            Site Repository
          </a>
        </div>
        <div className="max-w-max hover:scale-105 transition-transform">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary p-2 text-white rounded"
          >
            View My CV
          </a>
        </div>
      </div>
    </div>
  );
};

const ImageWrapper = ({
  image,
  altText,
}: {
  image: string;
  altText: string;
}) => (
  <div className="flex items-center justify-center">
    <div className="rounded-full bg-white h-80 w-80 overflow-hidden">
      <img
        src={image}
        alt={`${altText} page picture`}
        className="object-cover w-full max-w-md"
        loading="lazy"
      />
    </div>
  </div>
);

export const PageTemplate = ({
  content,
  image,
  children,
}: PageTemplateProps) => (
  <div className="px-4 z-10 max-w-screen-xl w-full">
    <div className="circle-backdrop absolute -right-64 -top-64 rounded-full bg-gradient-to-r from-primary to-gray-50 opacity-50"></div>

    <section className="flex mt-20 sm:mt-0 flex-col-reverse mb-12 sm:flex-row max-h-[800px] justify-between sm:h-screen gap-10 lg:gap-20 relative">
      <Introduction content={content} />
      <ImageWrapper image={image} altText={content.title} />
    </section>

    <section>{children}</section>
  </div>
);
