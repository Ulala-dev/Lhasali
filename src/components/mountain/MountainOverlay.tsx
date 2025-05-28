import React from 'react';
import { cn } from '@/lib/utils';
import { mountainTheme } from './theme';

interface MountainOverlayProps {
    className?: string;
    type?: 'topography' | 'snow' | 'gradient';
    opacity?: number;
    color?: keyof typeof mountainTheme.colors;
}

export const MountainOverlay: React.FC<MountainOverlayProps> = ({
    className,
    type = 'gradient',
    opacity = 0.1,
    color = 'snow',
}) => {
    const getOverlayPattern = () => {
        switch (type) {
            case 'topography':
                return (
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <pattern
                            id="topography"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M0 10 Q5 5, 10 10 T20 10"
                                fill="none"
                                stroke={mountainTheme.colors[color].DEFAULT}
                                strokeWidth="0.5"
                            />
                        </pattern>
                        <rect x="0" y="0" width="100" height="100" fill="url(#topography)" />
                    </svg>
                );

            case 'snow':
                return (
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at center, ${mountainTheme.colors[color].DEFAULT} 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                        }}
                    />
                );

            case 'gradient':
            default:
                return (
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to bottom, ${mountainTheme.colors[color].DEFAULT}00, ${mountainTheme.colors[color].DEFAULT}${Math.round(opacity * 255).toString(16).padStart(2, '0')})`,
                        }}
                    />
                );
        }
    };

    return (
        <div
            className={cn('absolute inset-0 pointer-events-none', className)}
            style={{ opacity }}
        >
            {getOverlayPattern()}
        </div>
    );
}; 