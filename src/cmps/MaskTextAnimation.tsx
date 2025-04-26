import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';

interface Mask {
    phrase: string,
    cn?: string
}

export function MaskText({ phrase, cn }: Mask) {

    const animation = {
        initial: { y: "100%" },
        enter: (i: number) => ({
            y: "0",
            transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.075 * i,
            },
        }),
    };


    const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    return (
        <div ref={ref} className='text-animation-con'>

            <div className='lineMask'>
                <motion.h2 className={cn} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.h2>
            </div>

        </div>
    )
}