import parallaxImageUrl from "@/assets/parallax-test.jpg";
import profilePic from "@/assets/heros/profile.png";
import {
  PageTemplate,
  ParallaxImage,
} from "@/components";
import { homeContent } from "@/constants/constants";
import { AboutSection, PortfolioSection, ServicesSection } from "./HomeComponents";

export const Home = () => (
  <PageTemplate content={homeContent} image={profilePic}>
    <AboutSection />
    <ParallaxImage imageUrl={parallaxImageUrl} />
    <ServicesSection />
    <PortfolioSection />
  </PageTemplate>
);