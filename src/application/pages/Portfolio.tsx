import { IntroSection } from "../components/IntroSection";
import portfolioHero from "../../assets/pageIntros/portfolioHero.jpg";
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
