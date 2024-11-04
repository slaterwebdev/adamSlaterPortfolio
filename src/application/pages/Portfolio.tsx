import { IntroSection } from "@/application/components/IntroSection";
import portfolioHero from "@/assets/headerImages/portfolioHero.jpg";
export const Portfolio = () => {
  const introContent = {
    title: "Portfolio",
  };
  return (
    <>
      <IntroSection content={introContent} image={portfolioHero} />
    </>
  );
};
