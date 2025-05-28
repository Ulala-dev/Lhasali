import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxContainerProps {
    className?: string;
    speed?: number;
    children: React.ReactNode;
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
    className,
    speed = 0.5,
    children,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Only apply parallax when element is in viewport
                if (rect.top < viewportHeight && rect.bottom > 0) {
                    const newScrollY = window.scrollY * speed;
                    setScrollY(newScrollY);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div
            ref={containerRef}
            className={cn('relative overflow-hidden', className)}
        >
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    transform: `translateY(${scrollY}px)`,
                    willChange: 'transform',
                }}
            >
                {children}
            </div>
        </div>
    );
}; 