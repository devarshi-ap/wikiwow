/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],    
    theme: {
        extend: {
            fontFamily: {
                RobotoMono: ['Roboto Mono', 'monospace'],
            },
            animation: {
                'hover': 'bounce 2s linear infinite',
            }
        },
        colors: {
            'white': '#fff',
            'coolwhite': '#EBF1F6',
            'black_two': '#313236',
            'dark_gray': '#222222',
            'gray': '#444444',
            'black': '#000',
            
            'orange': '#E73F2E',
            'ecru': '#E0D3BF',
            'brown': '#6E524B',
            'tea': '#5C7470',
            'babyblue': '#ABC3DD',
            'skyblue': '#74B1CE',
            'deep_purple': '#A29BFE',
            'purple': '#7E57C2',
            'pink': '#E91E63',
            'green': '#388E3C',
            
            'blue': '#3F577B',
            // 'b_white': '#F6FAFD',
            // 'b_navyblue': '#0C253F',
            // 'c_taupe': '#F2EDED',
            // 'c_darkgreen': '#142824',
        },
        backgroundSize: {
            'size-200': '200% 200%',
        },
        backgroundPosition: {
            'pos-0': '0% 0%',
            'pos-100': '100% 100%',
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}