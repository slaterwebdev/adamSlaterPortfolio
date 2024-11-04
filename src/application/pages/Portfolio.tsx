import { IntroSection } from "@/application/components/IntroSection";
import portfolioHero from "@/assets/headerImages/portfolioHero.jpg";

export const Portfolio = () => {
  return (
    <>
      <IntroSection content={{ title: "Portfolio" }} image={portfolioHero} />
    </>
  );
};
