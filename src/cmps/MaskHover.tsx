
// import styles from "./page.module.scss";
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
                // animate={{
                //     // WebkitMaskPosition: `${x ? x - size / 2 : 0}px ${y ? y - size / 2 : 0}px`,
                //     // WebkitMaskPosition: `${coords.x ? coords.x - size / 2 : 0}px ${coords.y ? coords.y - size / 2 : 0}px`,
                //     // WebkitMaskPosition: `${coords.x ? coords.x + size / 1.6 : 0}px ${coords.y ? coords.y + size / 6 : 0}px`,
                //     // WebkitMaskPosition: `${coords.x ? coords.x + size / 1.6 : 0}px ${coords.y ? coords.y + size / 6 : 0}px`,
                //     WebkitMaskSize: `${size}px`,
                // }}
                animate={{
                    WebkitMaskPosition: `${coords.x ? coords.x - size / 2 + (isHovered ? numberToHover() : 0) : 0}px 
                                          ${coords.y ? coords.y - size / 2 + (isHovered ? 240 : 0) : 0}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            >
                <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    A Junior Developer: Certified Google-Fu Master and Prompt Whisperer. Willing to trade lines of code for slightly above ramen-noodle wages. Anyway... hire me!
                    {/* A Junior Developer: Certified Google-Fu Master and Prompt Whisperer. Willing to trade lines of code for slightly above ramen-noodle wages. anyway... hire me! */}
                    {/* Junior developer: Certified Google-Fu Master and Prompt Whisperer. Willing to trade lines of code for slightly above ramen-noodle wages. (Available until ai take my job) */}
                    {/* A Junior developer with decent creativity and an expert at googling and prompting code. Willing to work for peanuts before ai will take my job. */}
                </p>
            </motion.div>}






            <div className="about-me-con">
                {/* <p className="about-me text-white">About me</p> */}
                <MaskText phrase="About Me" cn="about-me" />
            </div>

            <div className='body'>

                <p>
                    {/* I'm a <span>selectively skilled</span> product designer with a strong focus on producing high-quality & impactful digital experiences. */}
                    {/* I'm a <span>dedicated</span> full-stack developer focused on building reliable, scalable applications with clean code and smooth user experiences. */}
                    {/* I'm a <span>Full-Stack</span> developer and Coding Academy graduate,building scalable and reliable applications with the latest technologies. */}
                    I'm a <span>Full-Stack</span> Developer and Coding Academy graduate, passionate about building scalable and reliable applications using the latest technologies.
                </p>
            </div>
        </main>
    );
}
