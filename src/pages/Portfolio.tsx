import { PageTemplate, Section, Grid } from "@/components";
import portfolioHero from "@/assets/heros/portfolio.jpg";
import { B2BImages, B2CImages, employers } from "@/utils/imageMapper";

export const Portfolio = () => (
  <PageTemplate
    content={{ title: "Portfolio" }}
    image={portfolioHero}
  >
    <Section title="Key B2C Frontend builds">
      <p className="font-playfair">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ratione
        esse aliquam iusto, nulla doloremque illum earum amet, dolore laborum
        hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        ratione esse aliquam iusto, nulla doloremque illum earum amet, dolore
        laborum hic?
      </p>
      <Grid items={B2CImages} />
    </Section>
    <Section title="B2B Frontend Internal Apps">
      <p className="font-playfair">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ratione
        esse aliquam iusto, nulla doloremque illum earum amet, dolore laborum
        hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        ratione esse aliquam iusto, nulla doloremque illum earum amet, dolore
        laborum hic?
      </p>
      <Grid items={B2BImages} columns="1fr 1fr" />
    </Section>
    <Section title="Previous Employers">
      <p className="font-playfair">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ratione
        esse aliquam iusto, nulla doloremque illum earum amet, dolore laborum
        hic?
      </p>
      <Grid items={employers} columns="1fr 1fr" />
    </Section>
  </PageTemplate>
);
