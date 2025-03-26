import { isMobile } from "@/services/utility";
import { scroll } from "motion";
import { useState, useEffect } from "react";
import projBg from '../assets/img/secondtest.webp'
// import projBg from '../assets/img/test.webp'
import { MaskText } from "./MaskTextAnimation";
export function ProjectsBg() {
    const [scrolly, setScrolly] = useState(0);


    useEffect(() => {
        const unsubscribe = scroll((progress: number) => {
            setScrolly(progress * 100); // Convert to percentage
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    return (
        <section className="sticky top-0 project-bg-container" >
            {/* <h1 className="sticky top-[15px] text-large-size font-bold text-center uppercase text-white scramble-text title-wrap"> My Projects</h1> */}
            <h1 className="sticky top-[15px]  text-center uppercase text-white scramble-text title-wrap"><MaskText phrase="My Projects" cn="my-proj-txt" /></h1>
            <img
                loading="lazy"
                className="full-img"
                alt="Rocky mountain landscape with a bright sky and clouds"
                src={projBg}
                style={{
                    transform: isMobile()
                        ? scrolly < 41.65
                            ? `translate3d(0px, ${scrolly * 4 - 175}px, 0px) scale3d(1, 1, 1)`
                            : `translate3d(0px, ${41.65 * 4 - 175}px, 0px) scale3d(1, 1, 1)`
                        : scrolly < 41.65
                            ? `translate3d(0px, ${scrolly * 4 - 175}px, 0px) scale3d(1, 1, 1)`
                            : `translate3d(0px, ${41.65 * 4 - 175}px, 0px) scale3d(1, 1, 1)`,
                }}

            />
        </section>
    );
}
