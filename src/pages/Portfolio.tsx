import { PageTemplate, Section, Grid } from "@/components";
import portfolioHero from "@/assets/heros/portfolio.jpg";
import { B2BImageIds, B2CImageIds } from "@/constants/constants";

export const Portfolio = () => (
  <PageTemplate content={{ title: "Portfolio" }} image={portfolioHero}>
    <Section title="B2C Frontend builds">
      <Grid items={B2CImageIds} />
    </Section>
    <Section title="B2B Frontend Internal Apps">
      <Grid items={B2BImageIds} columns="1fr 1fr" />
    </Section>
  </PageTemplate>
);
