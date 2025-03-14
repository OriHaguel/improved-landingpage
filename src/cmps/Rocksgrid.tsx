import { useState, useCallback } from 'react';

// import flyingrock from '../assets/img/cloud-png-isolated-transparent-background.png';
// import flyingrock from '../assets/img/idknomore.png';
import flyingrock from '../assets/img/84e36897-38e2-4123-b7cc-9a06698e1253.png';
// import flyingrock from '../assets/img/af89cd10-9c13-49e3-9d17-308339b80b26.png';
// import flyingrock from '../assets/img/flyrock.webp';
import { throttle } from 'lodash';

export function RockGrid() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
        throttle((e: any) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Adjust sensitivity
            const moveX = (clientX - centerX) * 0.015;
            const moveY = (clientY - centerY) * 0.015;

            setPosition({ x: moveX, y: moveY });
        }, 50),
        []
    );

    return (
        <section
            className='flyingrock-grid'
            onMouseMove={handleMouseMove}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.10s ease-out',

            }}
        >
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className={`max-w-[4rem] md:max-w-[8rem] flyingrock-container-${i} flyingrock`}
                    style={{
                        animation: `float ${5 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                        willChange: 'transform',
                    }}
                >
                    <img
                        className='flyingrock-img'
                        src={flyingrock}
                        alt={`Rock ${i}`}
                        width={300}
                        height={300}
                        loading="lazy"
                        style={{
                            transform: `rotate(${i * 10}deg)`,
                        }}
                    />
                </div>
            ))}
        </section>
    );
}
