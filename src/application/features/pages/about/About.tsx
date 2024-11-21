import { PageTemplate, Section } from "@/application/features/layout";
import { ParallaxImage, Accordion } from "@/application/components";
import {
  experienceList,
  skillsMapper,
} from "@/application/features/pages/constants";
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import skillsHero from "@/assets/heros/skills.jpg";
import { FaChevronCircleRight } from "react-icons/fa";

export const About = () => (
  <PageTemplate content={{ title: "About" }} image={skillsHero}>
    <Section title="About me">
      <p className="font-playfair text-3xl font-semibold sm:text-5xl">
        I am an enthusiastic web developer based in New York, with a rich
        experience of over 6 years in website & product design.
      </p>
    </Section>
    <Section title="Experience">
      <ul>
        {experienceList.map(({id, yearsServed, jobTitle, content}) => (
          <li
            key={id}
            className="flex justify-between gap-5 sm:gap-6 border-b py-8"
          >
            <div className="min-w-24 sm:min-w-36 sm:text-right">
              <h3>{yearsServed}</h3>
              <h6 className="text-slate-500 flex justify-center sm:justify-end items-center gap-2">
                {id}
                <FaChevronCircleRight className="min-w-4" />
              </h6>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-primary">{jobTitle}</h2>
              <p>{content}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
    <ParallaxImage imageUrl={parallaxImageUrl} />
    <Section
      title="What I can offer"
      sideContent={<Accordion skills={skillsMapper} />}
    >
      <p>
        From understanding your requirements, designing a blueprint and
        delivering the final product, I do everything that falls in between
        these lines.
      </p>
    </Section>
  </PageTemplate>
);
