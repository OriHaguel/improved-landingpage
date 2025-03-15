
// import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { motion, scroll } from "framer-motion";
import useMousePosition from "./useMousePosition";


export default function MaskHover() {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    // const { x, y } = useMousePosition();
    const size: number = isHovered ? 400 : 40;
    console.log("🚀 ~ MaskHover ~ size:", size)
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    console.log("🚀 ~ MaskHover ~ coords:", coords)



    return (
        <main className='main' onMouseMove={(e) => setCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })}>

            <motion.div
                className='mask'
                // animate={{
                //     // WebkitMaskPosition: `${x ? x - size / 2 : 0}px ${y ? y - size / 2 : 0}px`,
                //     WebkitMaskPosition: `${coords.x ? coords.x - size / 2 : 0}px ${coords.y ? coords.y - size / 2 : 0}px`,
                //     // WebkitMaskPosition: `${coords.x ? coords.x - size / 2 + 450 : 0}px ${coords.y ? coords.y - size / 2 + 260 : 0}px`,
                //     WebkitMaskSize: `${size}px`,
                // }}
                animate={{
                    WebkitMaskPosition: `${coords.x ? coords.x - size / 2 + (isHovered ? 450 : 0) : 0}px 
                                          ${coords.y ? coords.y - size / 2 + (isHovered ? 260 : 0) : 0}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                style={{
                    // opacity: coords.y > 900 ? 0 : 1
                }}
            >
                <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
                </p>
            </motion.div>

            <div className='body'>
                <p>
                    I'm a <span>selectively skilled</span> product designer with a strong focus on producing high-quality & impactful digital experiences.
                </p>
            </div>
        </main>
    );
}
