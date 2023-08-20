import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        colors: {
            apple: {
                DEFAULT: '#4F913F',
                100: '#edf6eb',
                200: '#cae5c4',
                300: '#a7d49c',
                400: '#84c375',
                500: '#61b24d',
                600: '#4b8a3c',
                700: '#36632b',
                800: '#203b1a',
                900: '#0b1409',
            },
            'bay-leaf': {
                DEFAULT: '#eef4f0',
                100: '#eef4f0',
                200: '#ccddd1',
                300: '#abc6b3',
                400: '#89af94',
                500: '#679876',
                600: '#50765c',
                700: '#395441',
                800: '#223327',
                900: '#0b110d',
            },
            'gray-nurse': {
                DEFAULT: '#F3F3F2',
                100: '#f1f1f0',
                200: '#d6d6d3',
                300: '#bbbbb5',
                400: '#a0a098',
                500: '#85857a',
                600: '#67675f',
                700: '#4a4a44',
                800: '#2c2c29',
                900: '#0f0f0e',
            },
            camouflage: {
                DEFAULT: '#7C8573',
                100: '#f1f2f0',
                200: '#d4d8d1',
                300: '#b8bdb3',
                400: '#9ca395',
                500: '#7f8976',
                600: '#636a5c',
                700: '#474c42',
                800: '#2a2e27',
                900: '#0e0f0d',
            },
            'outer-space': {
                DEFAULT: '#2B3D38',
                100: '#eef3f2',
                200: '#acc4be',
                300: '#acc4be',
                400: '#8bada3',
                500: '#699689',
                600: '#52746b',
                700: '#3b534c',
                800: '#23322e',
                900: '#0c110f',
            },
            ...colors,
            transparent: 'transparent',
            current: 'currentColor',
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
