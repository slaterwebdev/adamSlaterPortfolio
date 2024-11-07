import { PageIntroduction } from "@/application/components/PageIntroduction";
import { ContentContainer } from "@/application/components/ContentContainer";
import { Accordion } from "@/application/components/Accordion";
import { skillsMapper } from "@/constants/constants";
import { ParallaxImage } from "@/application/components/ParallaxImage";
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import skillsHero from "@/assets/headerImages/skillsHero.jpg";

export const About = () => (
  <>
    <PageIntroduction content={{ title: "About" }} image={skillsHero} />
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
    <ContentContainer title="About me" titleSize="text-3xl">
      <p className="font-playfair text-3xl sm:text-5xl font-semibold">
        I am an enthusiastic web developer based in New York, with a rich
        experience of over 6 years in website & product design.
      </p>
    </ContentContainer>
    <ParallaxImage imageUrl={parallaxImageUrl} />
  </>
);
