import { IntroSection } from "@/application/components/IntroSection";
import skillsHero from "@/assets/headerImages/skillsHero.jpg";
import { ContentSection } from "@/application/components/ContentSection";
import { Accordion } from "@/application/components/Accordion";
import { skillsMapper } from "@/constants/constants";

export const Skills = () => (
  <>
    <IntroSection content={{ title: "Skills" }} image={skillsHero} />
    <div className="flex flex-col sm:flex-row gap-10">
      <ContentSection title="What I can offer" titleSize="text-3xl">
        <p>
          From understanding your requirements, designing a blueprint and
          delivering the final product, I do everything that falls in between
          these lines.
        </p>
      </ContentSection>
      <Accordion skills={skillsMapper} />
    </div>
  </>
);
