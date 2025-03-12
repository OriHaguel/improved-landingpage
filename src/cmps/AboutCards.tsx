import blueMountain from '../assets/img/blueimountain.webp'
import yellowMountain from '../assets/img/yellowmountain.webp'
import greenMountain from '../assets/img/greenmountain.webp'
import { isMobile } from '@/services/utility'
import IconCloudDemo from './Iconcloud'
import StyledText from './TextEffect'
import { title } from 'process'
export function AboutCards() {

    const secondaryColor = '89, 157, 217'
    const primaryColor = '176, 198, 217'
    const thirdColor = '242, 235, 233'
    const getCSSVariable = (name: string) =>
        getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    function extractNumbersAsString(rgb: string): string {
        const matches = rgb.match(/\d+/g);
        return matches ? matches.join(", ") : "";
    }


    console.log(extractNumbersAsString(getCSSVariable("--primary-color")))
    const styles = [
        {
            color: extractNumbersAsString(getCSSVariable("--primary-color")),
            mountainimg: blueMountain,
            huecolor: 190,
            text: 'Technologies',
            titleColor: getCSSVariable("--primary-color")
        },
        {
            color: extractNumbersAsString(getCSSVariable("--secondary-color")),
            mountainimg: greenMountain,
            huecolor: 180,
            text: 'About Me',
            titleColor: getCSSVariable("--secondary-color")
        },
        {
            color: extractNumbersAsString(getCSSVariable("--third-color")),
            mountainimg: yellowMountain,
            huecolor: 40,
            text: 'Experience',
            titleColor: getCSSVariable("--third-color")
        }
    ]
    return (
        <section className="screen-container" id='about'>
            {styles.map((design, i) => (


                <div key={i} className="screen" style={{
                    border: `2px solid rgb(${design.color}, 0.8)`,
                    backgroundColor: `rgb(${design.color}, 0.15)`
                }}>
                    <div className="screen-content">
                        <div
                            className="border-container"
                            style={{ border: `1px solid rgb(${design.color},0.3)` }}

                        >
                            <div>
                                <StyledText color={`${design.titleColor}`} text={`${design.text}`} />
                                {i === 1 && <section className='flex flex-col items-center'>
                                    <div className="cta-container">
                                        {/* <a href='/src/assets/cv/cv.pdf' className="download-cv-btn" download="Ori_Haguel_CV.pdf" aria-label="Download Ori Haguel's CV">Download CV</a> */}
                                    </div>                                    <p className=" tracking-wide  p-4 about-me-text">
                                        I'm  a Full-Stack Developer and Coding Academy graduate (640-hour bootcamp).
                                        I build reliable web apps with React, Redux, TypeScript, MongoDB and NestJS,
                                        always focusing on clean and maintainable code.</p>  </section>}



                                {i === 2 &&
                                    <p className="tracking-wide  p-4 about-me-text">
                                        <span>Error 404: Page Not Found.</span>

                                        Although I don't have professional experience,
                                        I have gained extensive hands-on experience by building my own projects.
                                        I am actively seeking a full-stack developer position to apply my skills and contribute to a dynamic team.
                                    </p>}
                            </div>



                            <div className='icon-container'>
                                {i === 0 &&
                                    <IconCloudDemo />
                                }
                            </div>

                        </div>
                    </div>
                    <div className="screen-img" style={{
                        backgroundImage: `url(${design.mountainimg})`,
                        filter: `sepia(100%) hue-rotate(${design.huecolor}deg)`
                    }}></div>
                    <div className={`screen-overlay-${i}`}> </div>
                </div>
            ))}
            {/* <div className="screen w-[500px]">
                <div className="screen-img"></div>
                <div className="screen-overlay"> </div>
            </div>
            <div className="screen w-[500px]">
                <div className="screen-img"></div>
                <div className="screen-overlay"> </div>
            </div> */}

        </section>

    );
}