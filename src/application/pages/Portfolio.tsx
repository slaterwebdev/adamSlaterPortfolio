import { PageIntroduction } from "@/application/components/PageIntroduction";
import portfolioHero from "@/assets/headerImages/portfolioHero.jpg";
import { ContentContainer } from "@/application/components/ContentContainer";
import { Grid } from "@/application/components/Grid";
import { darwin, goGirl, arnoldClark, VP } from "@/assets/porfolioImages";

export const Portfolio = () => {
  return (
    <>
      <PageIntroduction
        content={{ title: "Portfolio" }}
        image={portfolioHero}
      />
      <ContentContainer title="Frontend builds">
        <Grid
          items={[darwin, goGirl, arnoldClark, VP]}
          columns="1fr 1fr 1fr"
          // className="items-center sm:flex-row"
        />
      </ContentContainer>
    </>
  );
};
