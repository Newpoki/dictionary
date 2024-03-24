import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        screens: {
            md: '768px',
            lg: '1440px',
        },
        colors: {
            transparent: 'transparent',
            black: '#000000',
            white: '#FFFFFF',
            red: {
                500: '#FF5252',
            },
            purple: {
                500: '#A445ED',
                700: '#8F19E8',
            },
            grey: {
                100: '#F4F4F4',
                300: '#E9E9E9',
                400: '#CECECE',
                500: '#757575',
                600: '#3A3A3A',
                700: '#2D2D2D',
                800: '#1F1F1F',
                900: '#050505',
            },
        },
        fontSize: {
            'b-s': [
                '14px',
                {
                    fontWeight: 500,
                    lineHeight: '17px',
                },
            ],
            'b-m': [
                '18px',
                {
                    fontWeight: 500,
                    lineHeight: '24px',
                },
            ],
            'h-s': [
                '20px',
                {
                    fontWeight: 500,
                    lineHeight: '24px',
                },
            ],
            'h-m': [
                '24px',
                {
                    fontWeight: 500,
                    lineHeight: '29px',
                },
            ],
            'h-l': [
                '64px',
                {
                    fontWeight: 700,
                    lineHeight: '77px',
                },
            ],
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
                mono: ['var(--font-mono)', ...fontFamily.mono],
                serif: ['var(--font-serif)', ...fontFamily.serif],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
