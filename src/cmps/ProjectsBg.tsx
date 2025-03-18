import { isMobile } from "@/services/utility";
import { scroll } from "motion";
import { useState, useEffect } from "react";
import projBg from '../assets/img/test.webp'
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
            <h1 className="sticky top-[15px]  text-center uppercase text-white scramble-text title-wrap"><MaskText phrase="My Projects" /></h1>
            <img
                loading="lazy"
                className="full-img"
                src={projBg}
                style={{
                    transform: isMobile()
                        ? scrolly < 65.78212290502793
                            ? `translate3d(0px, ${scrolly * 4 - 350}px, 0px) scale3d(1, 1, 1)`
                            : `translate3d(0px, ${65.78212290502793 * 4 - 350}px, 0px) scale3d(1, 1, 1)`
                        : scrolly < 50
                            ? `translate3d(0px, ${scrolly * 4 - 250}px, 0px) scale3d(1, 1, 1)`
                            : `translate3d(0px, ${49.95857497928749 * 4 - 250}px, 0px) scale3d(1, 1, 1)`,
                }}

            />
        </section>
    );
}
