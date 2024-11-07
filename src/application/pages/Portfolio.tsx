import { PageIntroduction } from "@/application/components/PageIntroduction";
import portfolioHero from "@/assets/headerImages/portfolioHero.jpg";

export const Portfolio = () => {
  return (
    <>
      <PageIntroduction content={{ title: "Portfolio" }} image={portfolioHero} />
    </>
  );
};
