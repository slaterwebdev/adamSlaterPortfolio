import { PageIntroduction } from "@/application/components/PageIntroduction";
import { Grid } from "@/application/components/Grid";
import { ContentContainer } from "@/application/components/ContentContainer";
import { homeContent, serviceOptions } from "@/constants/constants";
import { ParallaxImage } from "@/application/components/ParallaxImage";
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import profilePic from "@/assets/headerImages/profilePic.png";

export const Home = () => (
  <div className="flex flex-col">
    <PageIntroduction content={homeContent} image={profilePic} />
    <ContentContainer title="About me" titleSize="text-3xl">
      <p className="font-playfair text-3xl sm:text-5xl font-semibold">
        I am an enthusiastic web developer based in New York, with a rich
        experience of over 6 years in website & product design.
      </p>
    </ContentContainer>
    <ContentContainer
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
    </ContentContainer>
    <ContentContainer title="What I do">
      <Grid
        items={serviceOptions}
        columns="1fr 1fr 1fr"
        gap="2rem"
        className="sm:flex-row items-center"
      />
    </ContentContainer>
    <ParallaxImage imageUrl={parallaxImageUrl} />
  </div>
);
