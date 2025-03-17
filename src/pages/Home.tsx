import FormMsg from "@/cmps/FormMsg";
import Mainpage from "@/cmps/Mainpage";
import MaskHover from "@/cmps/MaskHover";
import { Projects } from "@/cmps/Projects";
import Lenis from "lenis";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {

        const lenis = new Lenis({
            // lerp: 0.009
            // duration: 1.5
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
            <MaskHover />
            <Projects />
            {/* <FormMsg /> */}
        </div>
    )
};

export default HomePage;