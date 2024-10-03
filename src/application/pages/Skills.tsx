import { IntroSection } from "../components/IntroSection";
import skillsHero from "../../assets/pageIntros/skillsHero.jpg"
import { ContentSection } from "../components/ContentSection";
import { Accordion } from "../components/Accordion";

const skills = [
    {title: 'Languages', icons: ["javascript", "html", "css"]},
    {title: 'Frameworks & Libraries', icons: ["react", "nodeJs", "vueJs"]},
    {title: 'Tools', icons: ["sass", "git", "github"]},
]

export const Skills = () => ( 
    <>
        <IntroSection content={{title: "Skills"}} image={skillsHero}/>
        <div className="flex flex-col sm:flex-row gap-10">
            <ContentSection title="What I can offer" titleSize="text-3xl">
                <p>
                    From understanding your requirements, designing a blueprint and delivering the final product, I do everything that falls in between these lines.
                </p>
            </ContentSection>
            <Accordion skills={skills} /> 
        </div>
    </>
);
