import React from 'react';
import { cn } from '@/lib/utils';
import { mountainTheme } from './theme';

interface MountainBackgroundProps {
    className?: string;
    layers?: number;
    opacity?: number;
    color?: keyof typeof mountainTheme.colors;
    children?: React.ReactNode;
}

export const MountainBackground: React.FC<MountainBackgroundProps> = ({
    className,
    layers = 3,
    opacity = 0.1,
    color = 'forest',
    children,
}) => {
    const generateLayers = () => {
        return Array.from({ length: layers }, (_, i) => {
            const scale = 1 - (i * 0.15); // Each layer is 15% smaller
            const translateY = i * 20; // Each layer is 20px lower
            const opacity = 1 - (i * 0.2); // Each layer is 20% more transparent

            return (
                <div
                    key={i}
                    className="absolute inset-0 w-full h-full"
                    style={{
                        transform: `scale(${scale}) translateY(${translateY}px)`,
                        opacity: opacity * (opacity || 1),
                    }}
                >
                    <svg
                        viewBox="0 0 1000 500"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,500 L0,350 L100,300 L200,350 L300,250 L400,300 L500,200 L600,250 L700,150 L800,200 L900,100 L1000,150 L1000,500 Z"
                            fill={mountainTheme.colors[color].DEFAULT}
                        />
                    </svg>
                </div>
            );
        });
    };

    return (
        <div className={cn('relative w-full h-full overflow-hidden', className)}>
            {generateLayers()}
            {children}
        </div>
    );
}; 