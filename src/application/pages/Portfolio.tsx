import { PageIntroduction } from "@/application/components/PageIntroduction";
import portfolioHero from "@/assets/headerImages/portfolioHero.jpg";
import { ContentContainer } from "@/application/components/ContentContainer";
import { Grid } from "@/application/components/Grid";
import { employers } from "@/constants/constants";

export const Portfolio = () => (
  <>
    <PageIntroduction content={{ title: "Portfolio" }} image={portfolioHero} />
    <ContentContainer title="Frontend builds">
      <Grid items={employers} columns="1fr 1fr 1fr" />
    </ContentContainer>
  </>
);
