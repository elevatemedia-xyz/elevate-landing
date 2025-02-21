import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollTypographyProps {
    children: React.ReactNode;
    initialScale?: number;
    finalScale?: number;
    initialYOffset?: number;
    finalYOffset?: number;
    className?: string;
    textClassName?: string;
}

const ScrollTypography: React.FC<ScrollTypographyProps> = ({
    children,
    initialScale = 1.25,
    finalScale = 1,
    initialYOffset = -40,
    finalYOffset = 0,
    className = "w-full h-screen flex items-center justify-center",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Capture the scroll progress for the container.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    // Map the scroll progress into a scale value ranging from initialScale to finalScale.
    const scale = useTransform(scrollYProgress, [0.3, 0.55], [initialScale, finalScale]);
    const translateY = useTransform(scrollYProgress, [0.3, 0.55], [initialYOffset, finalYOffset]);

    return (
        <div className='w-full flex justify-center'>
            <motion.h3
                ref={containerRef}
                className={className}
                style={{ scale, translateY }}
            >
                {children}
            </motion.h3>
        </div>
    );
};

export default ScrollTypography;
