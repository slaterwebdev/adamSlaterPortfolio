import { PageIntroduction } from "@/application/components/PageIntroduction";
import skillsHero from "@/assets/headerImages/skillsHero.jpg";
import { ContentSection } from "@/application/components/ContentSection";
import { Accordion } from "@/application/components/Accordion";
import { skillsMapper } from "@/constants/constants";

export const About = () => (
  <>
    <PageIntroduction content={{ title: "About" }} image={skillsHero} />
    <ContentSection
      title="What I can offer"
      extraContent={<Accordion skills={skillsMapper} />}
    >
      <p>
        From understanding your requirements, designing a blueprint and
        delivering the final product, I do everything that falls in between
        these lines.
      </p>
    </ContentSection>
  </>
)
