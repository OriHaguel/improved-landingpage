import { useState } from 'react';
import flyingrock from '../assets/img/rough-beige-rock-formation-detailed-closeup.png';
import { MainSection } from './Namemainsection';

export function RockGrid() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Adjust sensitivity
        const moveX = (clientX - centerX) * 0.015;
        const moveY = (clientY - centerY) * 0.015;

        setPosition({ x: moveX, y: moveY });
    };

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
                    className={`max-w-[8rem] flyingrock-container-${i}`}
                    style={{
                        animation: `float ${5 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                    }}
                >
                    <img
                        className='flyingrock'
                        src={flyingrock}
                        alt={`Rock ${i}`}
                        style={{
                            transform: `rotate(${i * 10}deg)`,
                        }}
                    />
                </div>
            ))}
        </section>
    );
}
