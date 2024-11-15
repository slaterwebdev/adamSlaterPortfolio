import { PageTemplate } from "@/application/components/PageTemplate";
import { Container } from "@/application/components/Container";
import { Accordion } from "@/application/components/Accordion";
import { experienceList, skillsMapper } from "@/constants/constants";
import { ParallaxImage } from "@/application/components/ParallaxImage";
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import skillsHero from "@/assets/heros/skills.jpg";
import { FaChevronCircleRight } from "react-icons/fa";

export const About = () => (
  <PageTemplate content={{ title: "About" }} image={skillsHero}>
    <Container title="About me" titleSize="text-3xl">
      <p className="font-playfair text-3xl font-semibold sm:text-5xl">
        I am an enthusiastic web developer based in New York, with a rich
        experience of over 6 years in website & product design.
      </p>
    </Container>
    <Container title="Experience" titleSize="text-3xl">
      <ul>
        {experienceList.map((exp, index) => {
          return (
            <li
              key={index}
              className="flex justify-between gap-10 border-b py-8"
            >
              <div className="w-1/5">
                <h3>{exp.yearsServed}</h3>
                <h6 className="text-right text-slate-500 flex items-center gap-5">
                  {exp.companyName} <FaChevronCircleRight />
                </h6>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-primary">{exp.jobTitle}</h2>
                <p>{exp.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
    <ParallaxImage imageUrl={parallaxImageUrl} />
    <Container
      title="What I can offer"
      extraContent={<Accordion skills={skillsMapper} />}
    >
      <p>
        From understanding your requirements, designing a blueprint and
        delivering the final product, I do everything that falls in between
        these lines.
      </p>
    </Container>
  </PageTemplate>
);
