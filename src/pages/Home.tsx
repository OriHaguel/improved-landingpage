import { AboutCards } from "@/cmps/AboutCards";
import Mainpage from "@/cmps/Mainpage";
import { Projects } from "@/cmps/Projects";
import { ProjectsParallax } from "@/cmps/ProjectsParallax";
import StyledText from "@/cmps/TextEffect";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Lenis from "lenis";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {

        const lenis = new Lenis({
            lerp: 0.1,

        })
        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])

    return (
        <div>

            <Mainpage />
            <AboutCards />
            <Projects />
            {/* <ProjectsParallax /> */}
            {/* <div className="h-[100vh] bg-black"></div> */}
        </div>
    )
};

export default HomePage;