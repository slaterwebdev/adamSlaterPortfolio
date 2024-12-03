import { PageTemplate, Section, Grid } from "@/components";
import portfolioHero from "@/assets/heros/portfolio.jpg";
import { portfolioImages } from "@/utils/imageMapper";

export const Portfolio = () => (
  <PageTemplate content={{ title: "Portfolio" }} image={portfolioHero}>
    <Section title="Key B2C Frontend builds" contentStyles="font-playfair">
      <p>
        A few handpicked examples of many B2C client-facing websites where I
        made major contributions or led the frontend development, delivering
        high-quality, scalable solutions. Each project involved crafting
        responsive, user-focused interfaces, working with large data sets and
        user data extraction, and collaborating with teams to ensure seamless
        functionality and exceptional user experiences.
      </p>
      <Grid items={portfolioImages.B2C} />
    </Section>
    <Section title="B2B Frontend Internal Apps" contentStyles="font-playfair">
      <p>
        I have previously developed private internal applications for enterprise
        clients, providing critical business solutions. Due to IP restrictions,
        these projects cannot be publicly displayed, but they were instrumental
        in streamlining workflows, integrating complex APIs, and supporting
        essential client operations.
      </p>
      <p>
        At Victorian Plumbing, I created internal tools that improved
        operational efficiency, some of which directly supported the codebase
        for the customer-facing B2C site. Many other tools were developed to
        address specific business challenges within VP, and the links featured
        in the Help Centre highlight areas where these applications effectively
        resolved issues.
      </p>
      <Grid items={portfolioImages.B2B} columns="1fr 1fr" />
    </Section>
    <Section title="Previous Employers">
      <Grid items={portfolioImages.employers} columns="1fr 1fr" />
    </Section>
  </PageTemplate>
);
