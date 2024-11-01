import { FaLaptop, FaMobile, FaPen } from "react-icons/fa";
import profilePic from "../../assets/pageIntros/profilePic.png";
import { IntroSection } from "../components/IntroSection";
import { Grid } from "../components/Grid";
import { ContentSection } from "../components/ContentSection";

const introContent = {
  tagLine: "HELLO, MY NAME IS",
  title: "Adam Slater",
  subTitle: "Full-Stack dev",
  phone: "07547620652",
  email: "adamslater1996@outlook.com",
};

const gridItems = [
  {
    icon: <FaLaptop size={24} />,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
    ariaLabel: "Laptop Icon",
  },
  {
    icon: <FaMobile size={24} />,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
    ariaLabel: "Mobile Icon",
  },
  {
    icon: <FaPen size={24} />,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
    ariaLabel: "Pen Icon",
  },
];

export const Home = () => (
  <div className="flex flex-col">
    <IntroSection content={introContent} image={profilePic} />

    <ContentSection title="About me" titleSize="text-3xl">
      <p className="font-playfair text-3xl sm:text-5xl font-semibold">
        I am an enthusiastic web developer based in New York, with a rich
        experience of over 6 years in website & product design.
      </p>
    </ContentSection>

    <ContentSection
      titleSize="text-3xl sm:text-5xl"
      title="I build professional & beautiful websites"
      row
    >
      <p>
        With years of experience in graphic and web design I have mastered the
        skills of understanding client requirements according to the latest
        trends. I have worked with businesses from different niches so you can
        rely on me for yours.
        <br />
        <br />
        I've spent most of these years working across different areas of design
        like front-end development, landing pages, email design, app UI/UX, to
        my current role designing products for mobile platforms. Having worked
        on various projects that are already live, I can help you with the best
        possible suggestions and ideas that we can proceed with. With me, you
        aren't forced to accept anything. I give you a variety of options we can
        work on together.
      </p>
    </ContentSection>

    <ContentSection title="What I do">
      <Grid
        items={gridItems}
        columns="1fr 1fr 1fr"
        gap="2rem"
        className="sm:flex-row items-center"
      />
    </ContentSection>
  </div>
);
