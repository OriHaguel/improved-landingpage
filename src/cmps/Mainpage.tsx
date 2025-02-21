import { useEffect, useState, useRef } from 'react';
import { Parallax } from 'react-parallax';
import sky from '../assets/img/freepik__dd-more-rocks__84491 (1).webp';
import { RockGrid } from './Rocksgrid';
import CloudTrail from './MouseTracker';
import { MainSection } from './Namemainsection';
import { isMobile } from '@/services/utility';

const Mainpage = () => {
    // const [scrollY, setScrollY] = useState(0);
    const parallaxRef = useRef<HTMLDivElement>(null);

    // const handleScroll = () => setScrollY(window.scrollY);

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <div>

            <Parallax
                bgImage={sky}
                strength={400}
                style={{ height: "100vh", position: 'relative' }}
                bgImageStyle={{
                    height: "100%",
                    width: '100%',
                    objectFit: 'cover'
                }}
            >
                <div ref={parallaxRef} style={{ position: 'relative', height: '80vh' }}>
                    {!isMobile() && <CloudTrail containerRef={parallaxRef} />}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            // backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                            transition: 'background-color 0.1s ease',
                            pointerEvents: 'none',
                        }}
                    />
                    <MainSection />
                    <RockGrid />
                </div>
            </Parallax>
        </div>
    );
};

export default Mainpage;
