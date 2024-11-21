import { PageTemplate, Container } from "@/application/features/layout";
import portfolioHero from "@/assets/heros/portfolio.jpg";
import { Grid } from "@/application/components/Grid";

export const Portfolio = () => (
  <PageTemplate content={{ title: "Portfolio" }} image={portfolioHero}>
    <Container title="B2C Frontend builds">
      <Grid
        items={["darwin", "goGirl", "arnoldClark", "vp"]}
        columns="1fr 1fr 1fr"
      />
    </Container>
    <Container title="B2B Frontend Internal Apps">
      <Grid items={["howdens", "vpHelp"]} columns="1fr 1fr" />
    </Container>
  </PageTemplate>
);
