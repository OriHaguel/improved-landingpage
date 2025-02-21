import blueMountain from '../assets/img/blueimountain.webp'
import yellowMountain from '../assets/img/yellowmountain.webp'
import greenMountain from '../assets/img/yellowmountain.webp'
import { isMobile } from '@/services/utility'
import IconCloudDemo from './Iconcloud'
import StyledText from './TextEffect'
import { title } from 'process'
export function AboutCards() {

    const secondaryColor = '118, 200, 147'
    const primaryColor = '30, 141, 227'
    const thirdColor = '217, 237, 146'
    const styles = [
        {
            color: primaryColor,
            mountainimg: blueMountain,
            huecolor: 160,
            text: 'Technologies',
            titleColor: '#1e8de3'
        },
        {
            color: secondaryColor,
            mountainimg: greenMountain,
            huecolor: 100,
            text: 'About Me',
            titleColor: '#76c893'
        },
        {
            color: thirdColor,
            mountainimg: yellowMountain,
            huecolor: 40,
            text: 'Experience',
            titleColor: '#d9ed92'
        }
    ]
    return (
        <section className="screen-container">
            {styles.map((design, i) => (


                <div key={i} className="screen" style={{
                    border: `3px solid rgb(${design.color}, 0.8)`,
                    backgroundColor: `rgb(${design.color}, 0.15)`
                }}>
                    <div className="screen-content">
                        <div
                            className="border-container"
                            style={{ border: `1px solid rgb(${design.color},0.3)` }}

                        >
                            <div>
                                <StyledText color={`${design.titleColor}`} text={`${design.text}`} />
                                {i === 1 && <p className="text-2xl tracking-wide  p-8 about-me-text">
                                    I'm Ori Haguel, a Full-Stack Developer and Coding Academy graduate (640-hour bootcamp).
                                    I build reliable web apps with React, Redux, TypeScript, MongoDB and NestJS,
                                    always focusing on clean and maintainable code.</p>}
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