import { AboutCards } from "@/cmps/AboutCards";
import FormMsg from "@/cmps/FormMsg";
import Mainpage from "@/cmps/Mainpage";
import { Projects } from "@/cmps/Projects";
import Lenis from "lenis";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {

        const lenis = new Lenis()
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
            {/* <FormMsg /> */}
            {/* <div className="h-[100vh] bg-black"></div> */}
        </div>
    )
};

export default HomePage;