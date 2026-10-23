/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#E8DDD3',
          500: '#A37252',
          600: '#36261d',
          800: '#4A3427',
          900: '#2A1D16',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

@theme {
  /* Brand Color Palette */
  --color-brand-50: #FAF8F5;
  --color-brand-100: #F4EFEA;
  --color-brand-200: #E8DDD3;
  --color-brand-500: #A37252;
  --color-brand-600: #36261d;
  --color-brand-800: #4A3427;
  --color-brand-900: #2A1D16;

  /* Typography Settings */
  --font-serif: "Georgia", serif;
  --font-sans: "Inter", sans-serif;
}
