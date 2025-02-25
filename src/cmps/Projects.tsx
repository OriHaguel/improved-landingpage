import { scroll } from "motion";
import { useState, useEffect } from "react";

export function Projects() {
    const [scrolly, setScrolly] = useState(0);

    useEffect(() => {
        const unsubscribe = scroll((progress: number) => {
            setScrolly(progress * 100); // Convert to percentage
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    console.log("🚀 ~ Projects ~ scrolly:", scrolly);

    return (
        <section className="relative project-container">
            <h1 className="sticky top-[15px] text-large-size font-bold text-center uppercase text-white scramble-text title-wrap">My Projects</h1>
            <img
                loading="lazy"
                className="full-img"
                src="src/assets/img/project-bg.webp"
                style={{
                    transform: `translate3d(0px, ${scrolly * 4 + -350}px, 0px) scale3d(1, 1, 1)`
                }}
            />
        </section>
    );
}
