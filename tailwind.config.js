/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true
        },
        extend: {
            fontFamily: {
                'Inter-Regular': 'Inter-Regular',
                'Inter-Medium': 'Inter-Medium',
                'Inter-SemiBold': 'Inter-SemiBold',
                'Inter-Bold': 'Inter-Bold'
            }
        },
    },
    plugins: [],
}