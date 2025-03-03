export function ProjectsParallax() {
    return (
        <section className=''>

            <div className='parallax-main'>
                <div className='absolute inset-0 w-full h-full  overflow-hidden'>
                    <div className='parallax-effect-div bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-blur '>
                        <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <div className="bg-[url('/src/assets/img/blueimountain.webp')] w-[min(85vw,500px)] h-[min(85vw,500px)] bg-cover bg-center mx-auto mt-[24px] lg:mt-0"
                                style={{
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    perspective: "1000px",
                                    transform: "perspective(1000px)"
                                }}
                            >
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='parallax-main'>
                <div className='absolute inset-0 w-full h-full  overflow-hidden'>
                    <div className='parallax-effect-div bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-blur '>
                        <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            hellohgffhgfhgfhfhfghfg</div>
                    </div>
                </div>
            </div>

        </section>
    )
}