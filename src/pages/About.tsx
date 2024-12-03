import {
  PageTemplate,
  Section,
  ListItem,
  ParallaxImage,
  Accordion,
} from "@/components";
import { experienceList, skillsMapper } from "@/constants/constants";
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import skillsHero from "@/assets/heros/skills.jpg";

export const About = () => (
  <PageTemplate content={{ title: "About" }} image={skillsHero}>
    <Section
      title="About me"
      titleStyles="text-3xl"
      contentStyles="font-playfair text-3xl font-semibold sm:text-5xl"
    >
      <p>
        I am an enthusiastic web developer based in the midlands of the UK, with
        a rich experience of over 3 years in building web applications.
      </p>
    </Section>
    <Section title="Experience" titleStyles="text-3xl">
      <ul>
        {experienceList.map(({ yearsServed, id, jobTitle, content }) => (
          <ListItem
            key={id}
            title={jobTitle}
            description={content}
            data={[{ value: yearsServed, name: id }]}
          />
        ))}
      </ul>
    </Section>
    <ParallaxImage imageUrl={parallaxImageUrl} />
    <Section
      title="What I can offer"
      sideContent={<Accordion items={skillsMapper} />}
    >
      <p>
        From understanding your requirements, designing a blueprint and
        delivering the final product, I do everything that falls in between
        these lines.
      </p>
    </Section>
  </PageTemplate>
);
