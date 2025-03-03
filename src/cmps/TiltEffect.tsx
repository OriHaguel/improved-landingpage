import { useRef, useState } from "react";

export function Tilt() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const tiltRef = useRef<HTMLDivElement>(null);

    // Handle mouse movement for tilt effect
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!tiltRef.current) return;

        const rect = tiltRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setPosition({ x: x * 2 - 1, y: y * 2 - 1 });
    };

    return (
        <div
            ref={tiltRef}
            className="bg-[url('/src/assets/img/blueimountain.webp')] w-[min(85vw,500px)] h-[min(85vw,500px)] bg-cover bg-center mx-auto mt-[24px] lg:mt-0"
            style={{
                perspective: "1000px",
                transform: isHovering
                    ? `perspective(1000px) rotateY(${position.x * 15}deg) rotateX(${-position.y * 15}deg)`
                    : 'perspective(1000px)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.35s ease-out'
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        />
    );
}