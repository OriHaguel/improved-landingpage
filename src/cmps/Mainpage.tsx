import { useEffect, useState, useRef } from 'react';
import { Parallax } from 'react-parallax';
import sky from '../assets/img/freepik__dd-more-rocks__84491.png';
import { RockGrid } from './Rocksgrid';
import CloudTrail from './MouseTracker';

const Mainpage = () => {
    const [scrollY, setScrollY] = useState(0);
    const parallaxRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => setScrollY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const overlayOpacity = Math.min(scrollY / 3300, 0.6);

    return (
        <div>

            <Parallax
                bgImage={sky}
                strength={200}
                style={{ height: "100vh", position: 'relative' }}
            >
                <div ref={parallaxRef} style={{ position: 'relative', height: '100vh' }}>
                    <CloudTrail containerRef={parallaxRef} />
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                            transition: 'background-color 0.1s ease',
                            pointerEvents: 'none',
                        }}
                    />
                    <RockGrid />
                </div>
            </Parallax>

            <div style={{ padding: '20px', height: "100vh", backgroundColor: 'black' }}>
                <h2>Home Page Content</h2>
                <p>This is the home page. Scroll up and down to see the parallax effect in action.</p>
            </div>
        </div>
    );
};

export default Mainpage;
