import { ReactNode } from "react";
import { FaPhone, FaMailBulk } from "react-icons/fa";

type PageProps = {
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

export const PageTemplate = ({ content, image, children }: PageProps) => {
  const { title, subTitle, tagLine, phone, email } = content;
  return (
    <div className="px-4 z-10 max-w-screen-xl w-full">
      <div className="circleBackdrop absolute -right-64 -top-64 rounded-full bg-gradient-to-r from-primary to-gray-50 opacity-50"></div>
      <section
        className={`flex mt-20 sm:mt-0 flex-col-reverse mb-12 sm:mb-0 max-h-[800px] justify-between sm:flex-row sm:h-screen lg:gap-20 relative`}
      >
        <div className="flex items-center">
          <div className="text-slate-500 font-playfair flex flex-col gap-5">
            <header className="lg:mb-8">
              <h3 className="font-sans text-md mb-4 lg:text-lg">
                {tagLine && tagLine}
              </h3>
              {(tagLine || title) && (
                <div className="h-1 bg-slate-500 w-20"></div>
              )}
            </header>

            <h1 className="text-5xl font-bold text-black leading-tight lg:text-8xl">
              {title}
            </h1>

            {subTitle && (
              <h2 className="text-3xl font-semibold mb-10 lg:text-4xl">
                {subTitle}
              </h2>
            )}

            <div className="text-black font-sans">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="block flex gap-5 items-center mb-2 hover:scale-105"
                >
                  <FaMailBulk className="text-primary" />
                  {email}
                </a>
              )}
              {phone && (
                <a
                  href={`tel:+${phone}`}
                  className="flex gap-5 items-center hover:scale-105"
                >
                  <FaPhone className="text-primary" />
                  {phone}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-full bg-white h-80 w-80 flex items-center overflow-hidden transition-transform duration-500 ease-in-out">
            <img
              src={image}
              alt={title && `${title} picture`}
              className="object-cover w-full max-w-md"
            />
          </div>
        </div>
      </section>
      <section>{children}</section>
    </div>
  );
};