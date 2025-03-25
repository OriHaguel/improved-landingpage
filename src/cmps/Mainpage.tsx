import { useRef } from 'react';
import { Parallax } from 'react-parallax';
import sky from '../assets/img/freepik__dd-more-rocks__84491 (1).webp';
import { RockGrid } from './Rocksgrid';
import { MainSection } from './Namemainsection';
import { isMobile } from '@/services/utility';

const Mainpage = () => {
    const parallaxRef = useRef<HTMLDivElement>(null);

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
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            transition: 'background-color 0.1s ease',
                            pointerEvents: 'none',
                        }}
                    />
                    <MainSection />
                    {!isMobile() && <RockGrid />}

                </div>
            </Parallax>
        </div>
    );
};

export default Mainpage;
