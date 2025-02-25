import { ProjectsBg } from "./ProjectsBg";
import { ProjectsParallax } from "./ProjectsParallax";




export function Projects() {
    return (
        <section className="projects-container" id="projects">
            <ProjectsBg />
            <ProjectsParallax />
        </section>
    )
}