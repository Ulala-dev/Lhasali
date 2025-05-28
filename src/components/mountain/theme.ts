export const mountainTheme = {
    colors: {
        // Primary colors
        maroon: {
            light: '#9B4B4B',  // Light maroon
            DEFAULT: '#7B2D26', // Primary maroon
            dark: '#5A1212',   // Deep maroon
        },
        earth: {
            light: '#D4B483',  // Light sandy brown
            DEFAULT: '#8B7355', // Rich earthy brown
            dark: '#5C4B3C',   // Deep brown
        },
        forest: {
            light: '#7D9F85',  // Light forest green
            DEFAULT: '#2F4F4F', // Deep forest green
            dark: '#1A2F1A',   // Dark forest green
        },
        snow: {
            light: '#FFFFFF',  // Pure white
            DEFAULT: '#F5F5F5', // Off-white
            dark: '#E0E0E0',   // Light gray
        },
        accent: {
            light: '#FF8C42',  // Light orange
            DEFAULT: '#F26722', // Primary orange
            dark: '#D45A1E',   // Dark orange
        },
        // Overlay colors
        overlay: {
            light: 'rgba(255, 255, 255, 0.1)',
            DEFAULT: 'rgba(0, 0, 0, 0.2)',
            dark: 'rgba(0, 0, 0, 0.4)',
        },
    },
    // Typography
    typography: {
        fontFamily: {
            heading: 'var(--font-heading)',
            body: 'var(--font-body)',
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
        },
    },
    // Spacing
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
    },
    // Animation
    animation: {
        duration: {
            fast: '150ms',
            normal: '300ms',
            slow: '500ms',
        },
        easing: {
            default: 'cubic-bezier(0.4, 0, 0.2, 1)',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
    },
} as const;

export type MountainTheme = typeof mountainTheme; 