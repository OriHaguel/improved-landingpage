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
            <img
                className="full-img"
                src="src/assets/img/porject-bg.jpg"
                style={{
                    transform: `translate3d(0px, ${scrolly * 3 + -200}px, 0px) scale3d(1, 1, 1)`
                }}
            />
        </section>
    );
}
