import profilePic from "../../assets/pageIntros/profilePic.png";
import { IntroSection } from "../components/IntroSection";

export const Contact = () => {
    const introContent = {
        title: "Get in touch",
    }
    return ( 
        <>
            <IntroSection content={introContent} image={profilePic}/>
        </>
     );
}
 