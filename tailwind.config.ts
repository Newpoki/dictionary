import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
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
        extend: {},
    },
    plugins: [],
}
export default config
