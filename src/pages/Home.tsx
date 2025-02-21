import { AboutCards } from "@/cmps/AboutCards";
import Mainpage from "@/cmps/Mainpage";
import StyledText from "@/cmps/TextEffect";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const HomePage = () => {
    return (
        <div>

            <Mainpage />
            <AboutCards />

        </div>
    )
};

export default HomePage;