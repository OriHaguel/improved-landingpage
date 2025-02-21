import React, { useState, useEffect, useRef } from 'react';

interface Cloud {
    id: string;
    x: number;
    y: number;
    size: number;
}

interface CloudTrailProps {
    containerRef: React.RefObject<HTMLDivElement>;
}

const CloudTrail: React.FC<CloudTrailProps> = ({ containerRef }) => {
    const [clouds, setClouds] = useState<Cloud[]>([]);
    const cloudRef = useRef<Cloud[]>([]); // Use ref to store clouds to avoid unnecessary re-renders

    const maxClouds = 10; // Limit the number of clouds at once

    const handleMouseMove = (e: MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const withinBounds =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

        if (!withinBounds) return;

        const size = Math.random() * 20 + 40;
        const uniqueId = `${Date.now()}-${Math.random()}`;

        const newCloud: Cloud = {
            id: uniqueId,
            x: e.clientX - rect.left, // Relative to container
            y: e.clientY - rect.top,
            size,
        };

        if (cloudRef.current.length >= maxClouds) {
            cloudRef.current.shift(); // Remove the oldest cloud to avoid memory bloat
        }
        cloudRef.current.push(newCloud);

        setClouds([...cloudRef.current]);

        setTimeout(() => {
            cloudRef.current = cloudRef.current.filter(cloud => cloud.id !== newCloud.id);
            setClouds([...cloudRef.current]); // Update state after cloud removal
        }, 700);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('mousemove', handleMouseMove);
        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, [containerRef]);

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
            {clouds.map((cloud) => (
                <div
                    key={cloud.id}
                    style={{
                        position: 'absolute',
                        width: cloud.size,
                        height: cloud.size,
                        top: cloud.y - cloud.size / 2,
                        left: cloud.x - cloud.size / 2,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 70%)',
                        filter: 'blur(10px)',
                        animation: 'fadeOut 0.7s forwards',
                    }}
                />
            ))}
            <style>{`
                @keyframes fadeOut {
                    0% { opacity: 0.9; transform: scale(1); }
                    100% { opacity: 0; transform: scale(1.5); }
                }
            `}</style>
        </div>
    );
};

export default CloudTrail;
