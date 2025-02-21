import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimatedBar: React.FC = () => {
    // Attach a ref to the container element
    const containerRef = useRef<HTMLDivElement>(null);

    // Use Framer Motion's useScroll to get the scroll progress of the container.
    // Adjust the offset values as needed to fine-tune when the bar should start/end filling.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Map scroll progress from 0 (not visible) to 1 (fully visible)
    // into a width percentage from 0% to 100%.
    const width = useTransform(scrollYProgress, [0, 0.55], ["0%", "100%"]);

    return (
        <div
            ref={containerRef}
            className="bg-cover bg-center rounded-[48px] max-md:rounded-[32px] h-[40px] max-lg:h-[40px] max-md:h-[30px] max-sm:h-[20px] max-lg:flex-col max-lg:justify-center max-md:justify-center items-center max-lg:items-start max-md:items-start justify-normal max-sm:justify-between max-lg:top-[90px] overflow-clip w-full max-sm:w-full static bg-white flex"
        >
            <motion.div
                className="flex flex-row max-lg:flex-col items-center bg-cover bg-center h-[100%] max-lg:h-[100%] max-sm:h-[100%] max-lg:w-full max-sm:w-full max-md:gap-[12px] max-sm:gap-[8px] justify-between bg-primary"
                style={{ width }}
            >
                {/* Any content inside the inner div */}
            </motion.div>
        </div>
    );
};

export default ScrollAnimatedBar;
