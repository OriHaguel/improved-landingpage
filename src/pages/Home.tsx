import { AboutCards } from "@/cmps/AboutCards";
import IconCloudDemo from "@/cmps/Iconcloud";
import Mainpage from "@/cmps/Mainpage";
import StyledText from "@/cmps/TextEffect";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const HomePage = () => {
    return (
        <div style={{
            // backgroundColor: 'black',
            // height: '100vh'
        }}>

            <Mainpage />
            <AboutCards />
            {/* <div className="veloscroll-container">
                <VelocityScroll className="veloscroll"> About Me </VelocityScroll>

                <div className="about-icon-container">
                    <div className="icon-container">
                        <IconCloudDemo />
                    </div>
                </div>
            </div> */}

        </div>
    )
};

export default HomePage;