import blueMountain from '../assets/img/blueimountain.jpg'
import yellowMountain from '../assets/img/yellowmountain.jpg'
import greenMountain from '../assets/img/greenmountain.jpg'
import { isMobile } from '@/services/utility'
import IconCloudDemo from './Iconcloud'
export function AboutCards() {

    const secondaryColor = '118, 200, 147'
    const primaryColor = '30, 141, 227'
    const thirdColor = '217, 237, 146'
    const styles = [
        {
            color: primaryColor,
            mountainimg: blueMountain,
            huecolor: 160
        },
        {
            color: secondaryColor,
            mountainimg: greenMountain,
            huecolor: 100
        },
        {
            color: thirdColor,
            mountainimg: yellowMountain,
            huecolor: 40
        }
    ]
    return (
        <section className="screen-container">
            {isMobile() === false && styles.map((design, i) => (


                <div key={i} className="screen w-[500px]" style={{
                    border: `3px solid rgb(${design.color}, 0.8)`,
                    backgroundColor: `rgb(${design.color}, 0.15)`
                }}>
                    <div className="screen-content">
                        <div
                            className="border-container"
                            style={{ border: `1px solid rgb(${design.color},0.3)` }}

                        >
                            <div className='icon-container'>
                                {i === 2 &&
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