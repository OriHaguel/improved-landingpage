
import { useState } from "react";
import { motion } from "framer-motion";
import { isMobile, numberToHover } from "@/services/utility";
import { MaskText } from "./MaskTextAnimation";

export default function MaskHover() {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const size: number = isHovered ? 400 : 40;
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    return (

        <main className='main' onMouseMove={(e) => setCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })} id="about">
            {!isMobile() && <motion.div
                className='mask'
                animate={{
                    WebkitMaskPosition: `${coords.x ? coords.x - size / 2 + (isHovered ? numberToHover() : 0) : 0}px 
                                          ${coords.y ? coords.y - size / 2 + (isHovered ? 240 : 0) : 0}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            >
                <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    A Junior Developer: Certified Google-Fu Master and Prompt Whisperer. Willing to trade lines of code for slightly above ramen-noodle wages. Anyway... hire me!
                </p>
            </motion.div>}

            <div className="about-me-con">
                <MaskText phrase="About Me" cn="about-me" />
            </div>

            <div className='body'>
                <p>
                    I'm a <span>Full-Stack</span> Developer and Coding Academy graduate, passionate about building scalable and reliable applications using the latest technologies.
                </p>
            </div>
        </main>
    );
}
