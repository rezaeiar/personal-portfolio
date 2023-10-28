/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'Inter-Regular': 'Inter-Regular',
                'Inter-SemiBold': 'Inter-SemiBold'
            }
        },
    },
    plugins: [],
}