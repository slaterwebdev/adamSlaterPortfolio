import { NavLink } from "react-router-dom";
import { serviceOptions } from "@/constants/constants";
import { scrollToTop } from "@/utils/utilities";
import {
  Section,
  Grid,
  StackedCards,
} from "@/components";
import { B2CImages } from "@/utils/imageMapper";

export const AboutSection = () => (
  <>
    <Section title="About me" titleSize="text-3xl">
      <p className="font-playfair font-semibold sm:text-5xl">
        I am an enthusiastic web developer based in New York, with a rich
        experience of over 6 years in website & product design.
      </p>
    </Section>
    <Section title="I build professional & beautiful websites" row>
      <p>
        With years of experience in graphic and web design I have mastered the
        skills of understanding client requirements according to the latest
        trends.
      </p>
      <p>
        I have worked on various projects that are already live, and I can help
        you with the best possible suggestions and ideas.
      </p>
    </Section>
  </>
);

export const ServicesSection = () => (
  <Section title="What I do" titleSize="text-3xl">
    <Grid items={serviceOptions} gap="2rem" />
  </Section>
);

export const PortfolioSection = () => (
  <Section
    title="Check out some of my previous work"
    sideContent={<StackedCards cards={B2CImages} />}
  >
    <p>
      I have worked with various clients to create stunning and functional
      websites tailored to their business needs. Explore more of my projects
      below.
    </p>
    <NavLink
      aria-label="View more projects in portfolio"
      className="text-primary underline block text-center sm:text-left"
      to={"/portfolio"}
      onClick={() => scrollToTop()}
    >
      VIEW MORE
    </NavLink>
  </Section>
);
