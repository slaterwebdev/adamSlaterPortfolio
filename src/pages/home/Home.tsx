import parallaxImageUrl from "@/assets/parallax-test.jpg";
import profilePic from "@/assets/heros/profile.png";
import {
  PageTemplate,
  ParallaxImage,
} from "@/components";
import { WelcomeSection, PortfolioSection, ServicesSection } from "./HomeComponents";

export const Home = () => (
  <PageTemplate
    content={{
      tagLine: "HELLO, MY NAME IS",
      title: "Adam Slater",
      subTitle: "Web Developer",
    }}
    image={profilePic}
  >
    <WelcomeSection />
    <ParallaxImage imageUrl={parallaxImageUrl} />
    <ServicesSection />
    <PortfolioSection />
  </PageTemplate>
);
