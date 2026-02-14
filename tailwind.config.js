/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'zest-yellow': '#FFD700', // Gold/Yellow base
                'zest-yellow-light': '#FFFACD', // LemonChiffon
                'zest-yellow-dark': '#B8860B', // DarkGoldenRod
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Or whatever font we use
            },
        },
    },
    plugins: [],
}
