const { withTV } = require('tailwind-variants/transformer');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                smoke: {
                    DEFAULT: '#f5f5f5',
                },
                aquamarine: {
                    DEFAULT: '#189cb4',
                },
                jungle: {
                    DEFAULT: '#152228',
                },
                geyser: {
                    DEFAULT: '#d5dfe6',
                },
                river: {
                    DEFAULT: '#4A5153',
                },
                marble: {
                    DEFAULT: '#56717f',
                },
            },
            fontFamily: {
                sans: ['var(--font-poppins)'],
            },
        },
    },
    plugins: [],
});
