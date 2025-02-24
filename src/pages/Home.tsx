import { AboutCards } from "@/cmps/AboutCards";
import Mainpage from "@/cmps/Mainpage";
import { Projects } from "@/cmps/Projects";
import StyledText from "@/cmps/TextEffect";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const HomePage = () => {
    return (
        <div>

            <Mainpage />
            <AboutCards />
            <Projects />
            <div className="h-[100vh] bg-black"></div>
        </div>
    )
};

export default HomePage;