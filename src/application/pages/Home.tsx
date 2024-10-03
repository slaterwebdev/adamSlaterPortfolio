import profilePic from "../../assets/pageIntros/profilePic.png";
import { IntroSection } from "../components/IntroSection";

export const Home = () => {
    const introContent = {
        tagLine: "HELLO, MY NAME IS",
        title: "Adam Slater",
        subTitle: "Full-Stack dev",
        phone: '07547620652',
        email: 'adamslater1996@outlook.com'
    }
    return <div className="flex flex-col">
        <IntroSection content={introContent} image={profilePic}/>
        
        <div className="grow flex flex-col mb-24">
            <h6 className="text-cyan-400 mb-5">About me</h6>
            <p className="font-playfair text-3xl sm:text-5xl font-semibold">
                I am an enthusiastic web developer based in New York, with a rich experience of over 6 years in website & product design.
            </p>
        </div> 

        <div className="grow flex flex-col sm:flex-row gap-12">
            <h6 className="text-cyan-400 text-3xl sm:text-5xl mb-5 flex-1 sm:w-1/2">
                I build professional & beautiful websites
            </h6>
            <p className="sm:w-1/2">
                With years of experience in graphic and web design I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches so you can rely on me for yours.
                <br/>
                <br/>
                I've spent most of these years working across different areas of design like front-end development, landing pages, email design, app UI/UX, to my current role designing products for mobile platforms. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren't forced to accept anything. I give you a variety of options we can work on together.
            </p>
        </div>
    </div>
};
