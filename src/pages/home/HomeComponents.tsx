import { NavLink } from "react-router-dom";
import { serviceOptions } from "@/constants/constants";
import { scrollToTop } from "@/utils/utilities";
import { Section, Grid, StackedCards } from "@/components";
import { B2CImages } from "@/utils/imageMapper";

export const WelcomeSection = () => (
  <>
    <Section
      title="Welcome to My Portfolio!"
      titleStyles="text-5xl"
      contentStyles="font-playfair font-semibold sm:text-2xl"
    >
      <p>
        I am a versatile and highly motivated Web Developer with over three
        years of hands-on experience crafting complex web applications. I am
        currently seeking a new role where I can leverage my specialisations to
        contribute to innovative projects, assist talented teams, and continue
        driving impactful digital solutions.
      </p>
    </Section>
    <Section
      title="I help to transform ideas into efficent user centred digital products"
      titleStyles="text-3xl"
      row
    >
      <p>
        Whether collaborating on cutting-edge solutions or aiding & leading
        teams through challenging sprints, my goal is to create seamless,
        user-focused digital experiences that deliver measurable results.
      </p>
      <p>
        I have contributed to greenfield projects, legacy migrations for the
        e-commerce leader Victorian Plumbing, and CMS-driven websites for
        high-profile insurance clients such as Arnold Clark, DARWIN, and
        Triumph. Recently, I have expanded my expertise into full-stack
        development by exploring Node.js to enhance my technical capabilities.
      </p>
    </Section>
  </>
);

export const ServicesSection = () => (
  <Section title="What I bring to the table" titleStyles="text-3xl">
    <Grid items={serviceOptions} gap="2rem" />
  </Section>
);

export const PortfolioSection = () => (
  <Section
    title="Check out some of my previous work"
    sideContent={<StackedCards cards={B2CImages} />}
  >
    <p>
      I have worked with various employers to create stunning and functional
      websites tailored to their business needs. Go ahead and browse some of my
      available projects.
    </p>
    <div className="text-center sm:text-left">
      <NavLink
        aria-label="View more projects in portfolio"
        className="text-primary underline"
        to={"/portfolio"}
        onClick={() => scrollToTop()}
      >
        VIEW MORE
      </NavLink>
    </div>
  </Section>
);
