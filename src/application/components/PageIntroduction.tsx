import { FaPhone, FaMailBulk } from "react-icons/fa";
type IntroSectionProps = {
  content: {
    title: string;
    subTitle?: string;
    tagLine?: string;
    phone?: string;
    email?: string;
  };
  image?: string;
};

// TO DO configure container divs to load in to DOM or not based on if the data exists to fix spacing issues on other pages where subtitle, phone and email do not exist

export const PageIntroduction = ({ content, image }: IntroSectionProps) => (
  <section
    className={`flex sm:justify-between ${content ? "justify-around" : "justify-end mr-28"} h-screen flex-col-reverse sm:flex-row lg:gap-24 mb-12`}
  >
    <div className="flex items-center">
      <div className="text-slate-500 font-playfair flex flex-col gap-5">
        <header className="lg:mb-8">
          <h3 className="font-sans text-md lg:text-lg mb-4">
            {content?.tagLine}
          </h3>
          {(content?.tagLine || content?.title) && (
            <div className="h-1 bg-slate-400 w-20"></div>
          )}
        </header>

        <h1 className="text-5xl lg:text-8xl font-bold text-black leading-tight">
          {content?.title}
        </h1>

        <h2 className="text-3xl lg:text-4xl font-semibold mb-10">
          {content?.subTitle}
        </h2>

        <div className="text-black font-sans">
          {content?.email && (
            <a
              href={`mailto:${content?.email}`}
              className="block flex gap-5 items-center mb-2"
            >
              <FaMailBulk className="text-cyan-400" />
              {content.email}
            </a>
          )}
          {content?.phone && (
            <a
              href={`tel:+${content?.phone}`}
              className="flex gap-5 items-center"
            >
              <FaPhone className="text-cyan-400" />
              {content.phone}
            </a>
          )}
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <div className="rounded-full bg-white h-80 w-80 sm:h-96 sm:w-96 flex items-center overflow-hidden">
        <img
          src={image}
          alt={content?.title && `${content?.title} picture`}
          className="object-cover w-full max-w-md"
        />
      </div>
    </div>
  </section>
);
