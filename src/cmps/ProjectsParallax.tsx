import { Tilt } from "./TiltEffect";
import gighubbg from '../../src/assets/img/gighub.webp'
import gighub from '../../src/assets/img/smallgighub.webp'
import fitrack from '../../src/assets/img/smallfitracker.webp'
import fitrackbg from '../../src/assets/img/fitrack.webp'

export function ProjectsParallax() {

    const projects = [
        {
            name: 'FiTrack',
            subText: 'Fitness tracker - track your progress',
            technolegies: 'React, Redux, TypeScript, Tailwind, NestJS, MongoDB',
            colors: 'rgb(195, 161, 239),rgb(25, 141, 200),rgb(188, 233, 255)',
            image: fitrack,
            bgImg: fitrackbg,
            link: 'https://fitnesstracker-ex8i.onrender.com/'
        },
        {
            name: 'Gighub',
            subText: 'Fiverr-inspired Freelance Marketplace',
            technolegies: 'React, Redux, JavaScript, SASS, Node.js, MongoDB ',
            colors: 'rgb(56, 162, 88),rgb(124, 202, 147),rgb(203, 238, 214)',
            image: gighub,
            bgImg: gighubbg,
            link: 'https://gighub-q0xb.onrender.com/'
        },
    ]

    return (
        <section className=''>
            {projects.map((project, i) => (
                <div key={i} className='parallax-main'>
                    <div style={{
                        backgroundImage: `url(${project.bgImg})`,
                    }} className='bg-parallax absolute inset-0 w-full h-full  overflow-hidden'>
                        <div className='parallax-effect-div bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-blur '>
                            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[min(85vw,500px)] mt-[-3rem] lg:mt-0 lg:grid lg:grid-cols-[1fr_min(85vw,500px)_1fr] lg:max-w-[1440px] lg:mx-auto'>
                                <div className="lg:w-auto w-[min(85vw,500px)] mx-auto lg:mt-0 mt-[-4rem] lg:mr-12 lg:pl-8">
                                    <p style={{ '--gradient': `linear-gradient(90deg,${project.colors})` } as React.CSSProperties} className="dynamic-text text-3xl">{project.name}</p>
                                    <small className="text-white font-[600]">{project.subText}</small>
                                    <a className="view-more-container block mt-4" href={project.link} target="_blank">
                                        <span className="view-more font-[600] text-white text2xl">View More</span>
                                    </a>
                                </div>
                                <a href={project.link} target="_blank" aria-label={`View project: ${project.name}`} rel="noopener noreferrer">
                                    <Tilt imageUrl={project.image} projecyName={project.name} textColors={project.colors} />
                                </a>
                                <div className="w-[min(85vw,500px)] mx-auto mt-[1.5rem] lg:pb-0 lg:mt-0 lg:w-full lg:grid lg:place-items-center">

                                    <p className="lg:ml-12 text-white text-1xl lg:mr-12"><span className="text-2xl"></span>{project.technolegies}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}