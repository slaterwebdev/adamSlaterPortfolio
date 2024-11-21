import { NavLink } from "react-router-dom";
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import profilePic from "@/assets/heros/profile.png";
import { homeContent, serviceOptions } from "@/application/utils/constants";
import { scrollToTop } from "@/application/utils/utilities";
import { PageTemplate, Container } from "@/application/features/layout";
import { Grid, ParallaxImage, StackedCards } from "@/application/components";

export const Home = () => (
  <PageTemplate content={homeContent} image={profilePic}>
    <Container title="About me" titleSize="text-3xl">
      <p className="font-playfair font-semibold text-3xl sm:text-5xl">
        I am an enthusiastic web developer based in New York, with a rich
        experience of over 6 years in website & product design.
      </p>
    </Container>
    <Container title="I build professional & beautiful websites" row>
      <p className="mb-6">
        With years of experience in graphic and web design I have mastered the
        skills of understanding client requirements according to the latest
        trends. I have worked with businesses from different niches so you can
        rely on me for yours.
      </p>
      <p>
        I've spent most of these years working across different areas of design
        like front-end development, landing pages, email design, app UI/UX, to
        my current role designing products for mobile platforms. Having worked
        on various projects that are already live, I can help you with the best
        possible suggestions and ideas that we can proceed with. With me, you
        aren't forced to accept anything. I give you a variety of options we can
        work on together.
      </p>
    </Container>
    <ParallaxImage imageUrl={parallaxImageUrl} />
    <Container title="What I do">
      <Grid items={serviceOptions} columns="1fr 1fr 1fr" gap="2rem" />
    </Container>
    <Container
      title="Check out some of my previous work"
      extraContent={
        <StackedCards cards={["darwin", "goGirl", "arnoldClark", "vp"]} />
      }
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        deleniti sapiente reiciendis nesciunt quia in, voluptas fugiat
        voluptates amet doloribus quod, similique autem dicta!
      </p>

      <div className="flex justify-center sm:justify-start mt-8">
        <NavLink
          className="text-primary underline"
          to={"/portfolio"}
          onClick={() => scrollToTop()}
        >
          VIEW MORE
        </NavLink>
      </div>
    </Container>
  </PageTemplate>
);
