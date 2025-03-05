import { Tilt } from "./TiltEffect";
import gighub from '../../src/assets/img/gighub.webp'
import fitrack from '../../src/assets/img/fitrack.webp'
import blueMountain from '../assets/img/blueimountain.webp'

export function ProjectsParallax() {

    const projects = [

        {
            image: fitrack,
        },
        {
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
                            <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <Tilt imageUrl={project.image} />
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