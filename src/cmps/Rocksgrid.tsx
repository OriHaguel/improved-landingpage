import { useState, useCallback } from 'react';
import flyingrock from '../assets/img/flygridrock.webp';
import { throttle } from 'lodash';

export function RockGrid() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
        throttle((e: any) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

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
                        style={{
                            transform: `rotate(${i * 10}deg)`,
                        }}
                    />
                </div>
            ))}
        </section>
    );
}
