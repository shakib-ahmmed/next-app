// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

const tailwindConfig = {
    darkMode: 'class', 
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    light: '#0ea5e9',
                    DEFAULT: '#0284c7',
                    dark: '#0369a1',
                },
                secondary: {
                    light: '#818cf8',
                    DEFAULT: '#6366f1',
                    dark: '#4f46e5',
                },
                background: {
                    light: '#f9fafb',
                    dark: '#1f2937',
                },
                text: {
                    light: '#111827',
                    dark: '#f9fafb',
                },
            },
        },
    },
    plugins: [],
};

export default tailwindConfig;
