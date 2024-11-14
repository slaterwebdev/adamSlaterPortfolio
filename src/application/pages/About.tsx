import { PageIntroduction } from "@/application/components/PageIntroduction";
import { ContentContainer } from "@/application/components/ContentContainer";
import { Accordion } from "@/application/components/Accordion";
import { experienceList, skillsMapper } from "@/constants/constants";
import { ParallaxImage } from "@/application/components/ParallaxImage";
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import skillsHero from "@/assets/headerImages/skillsHero.jpg";
import { FaChevronCircleRight } from "react-icons/fa";

export const About = () => (
  <>
    <PageIntroduction content={{ title: "About" }} image={skillsHero} />
    <ContentContainer title="About me" titleSize="text-3xl">
      <p className="font-playfair text-3xl font-semibold sm:text-5xl">
        I am an enthusiastic web developer based in New York, with a rich
        experience of over 6 years in website & product design.
      </p>
    </ContentContainer>
    <ContentContainer title="Experience" titleSize="text-3xl">
      <ul>
        {experienceList.map((exp, index) => {
          return (
            <li key={index} className="flex justify-between gap-10 border-b py-8">
              <p className="w-1/5">
                <h3>{exp.yearsServed}</h3>
                <h6 className="text-right text-slate-500 flex items-center gap-5">
                  {exp.companyName} <FaChevronCircleRight />
                </h6>
              </p>
              <div className="flex flex-col gap-5">
                <h2 className="text-cyan-500">{exp.jobTitle}</h2>
                <p>{exp.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </ContentContainer>
    <ParallaxImage imageUrl={parallaxImageUrl} />
    <ContentContainer
      title="What I can offer"
      extraContent={<Accordion skills={skillsMapper} />}
    >
      <p>
        From understanding your requirements, designing a blueprint and
        delivering the final product, I do everything that falls in between
        these lines.
      </p>
    </ContentContainer>
  </>
);
