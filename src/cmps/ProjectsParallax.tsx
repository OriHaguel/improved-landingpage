import { Tilt } from "./TiltEffect";
import gighub from '../../src/assets/img/gighub.webp'
import fitrack from '../../src/assets/img/fitrack.webp'
import blueMountain from '../assets/img/blueimountain.webp'
import { progress } from "motion";

export function ProjectsParallax() {

    const projects = [

        {
            name: 'FiTrack',
            subText: 'Fitness tracker - track your progress',
            technolegies: 'React, Redux, TypeScript, Tailwind, NestJS, MongoDB',
            colors: 'rgb(156, 85, 246),rgb(25, 141, 200),rgb(188, 233, 255)',
            image: fitrack,
        },
        {
            name: 'Gighub',
            subText: 'Fiverr-inspired Freelance Marketplace',
            technolegies: 'React, Redux, SASS, Node.js, MongoDB',
            colors: 'rgb(56, 162, 88),rgb(124, 202, 147),rgb(203, 238, 214)',
            image: gighub,
        },
    ]

    return (
        <section className=''>
            {projects.map((project, i) => (
                <div key={i} className='parallax-main'>
                    <div style={{
                        backgroundImage: `url(${project.image})`,
                    }} className='bg-parallax absolute inset-0 w-full h-full  overflow-hidden'>
                        <div className='parallax-effect-div bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-blur '>
                            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[min(85vw,500px)] mt-[-3rem] lg:mt-0 lg:grid lg:grid-cols-[1fr_min(85vw,500px)_1fr] lg:max-w-[1440px] lg:mx-auto'>
                                <div className="lg:w-auto w-[min(85vw,500px)] mx-auto lg:mt-0 mt-[-5.2rem] lg:mr-12">
                                    <p className="text-white text-3xl font-[600] ">{project.name}</p>
                                    <small className="text-white text-1xl font-[600]">{project.subText}</small>
                                </div>
                                {/* <p className="ml-8 text-white text-1xl font-[600] w-[350px]"><span className="text-2xl">Technologies: </span>{project.technolegies}</p> */}
                                <Tilt imageUrl={project.image} projecyName={project.name} textColors={project.colors} />
                                <div className="w-[min(85vw,500px)] mx-auto mt-[1.5rem] pb-[3rem] lg:pb-0 lg:mt-0 lg:w-full lg:grid lg:place-items-center">
                                    {/* <div className="w-[250px]">
                                        <p className="text-white text-2xl font-[600]">{project.name}</p>
                                        <small className="text-white font-[600]">{project.subText}</small>
                                    </div> */}

                                    <p className="lg:ml-8 text-white text-1xl font-[600] lg:mr-12"><span className="text-2xl">Technologies: </span>{project.technolegies}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* <div className='parallax-main'>
                <div className='bg-parallax absolute inset-0 w-full h-full  overflow-hidden'>
                    <div className='parallax-effect-div bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-blur '>
                        <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <Tilt imageUrl={projects[0].image} />
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='parallax-main'>
                <div className='absolute inset-0 w-full h-full  overflow-hidden'>
                    <div className='parallax-effect-div bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-blur '>
                        <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            hellohgffhgfhgfhfhfghfg</div>
                    </div>
                </div>

            <div className='parallax-main'>
                <div className='bg-parallax absolute inset-0 w-full h-full  overflow-hidden'>
                    <div className='parallax-effect-div bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-blur '>
                        <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <Tilt imageUrl={gighub} />
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="bg-[url('/src/assets/img/blueimountain.webp')] w-[min(85vw,500px)] h-[min(85vw,500px)] bg-cover bg-center mx-auto mt-[24px] lg:mt-0"
                                style={{
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    perspective: "1000px",
                                    transform: "perspective(1000px)"
                                }}
                            >
                            </div> */}

            {/* <div className='parallax-main'>
                <div className='absolute inset-0 w-full h-full  overflow-hidden'>
                    <div className='parallax-effect-div bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-blur '>
                        <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            hellohgffhgfhgfhfhfghfg</div>
                    </div>
                </div>
            </div> */}

        </section>
    )
}