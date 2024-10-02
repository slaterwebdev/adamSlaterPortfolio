import { IntroSection } from "../components/IntroSection";
import portfolio from "../../assets/pageIntros/portfolio.jpg";
export const Portfolio = () => {
    const introContent = {
        title: "Portfolio",
    }
    return ( 
        <>
            <IntroSection content={introContent} image={portfolio}/>
        </>
     );
}
