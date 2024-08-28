/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#D87D4A',
        'dark': '#101010',
        'light-gray-1': '#F1F1F1',
        'light-gray-2': '#FAFAFA',
        'accent-orange': '#fbaf85',
        'white': '#FFFFFF',
        'black': '#000000',

      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '58px', letterSpacing: '2px' }], 
        'h2': ['40px', { lineHeight: '44px', letterSpacing: '1.5px' }], 
        'h3': ['32px', { lineHeight: '36px', letterSpacing: '1.15px' }],
        'h4': ['28px', { lineHeight: '38px', letterSpacing: '2px' }],
        'h5': ['24px', { lineHeight: '33px', letterSpacing: '1.7px' }],
        'h6': ['18px', { lineHeight: '24px', letterSpacing: '1.3px' }],
        'overline': ['14px', { lineHeight: '19px', letterSpacing: '10px' }], 
        'subtitle': ['13px', { lineHeight: '25px', letterSpacing: '1px' }],
        'body': ['15px', { lineHeight: '25px' }], 
      },
      fontWeight: {
        thin: 200,
        medium: 500,
        bold: 700,
        extrabold: 800,
      },
      letterSpacing: {
        tightest: '1px',
        tighter: '1.15px',
        tight: '1.3px',
        normal: '1.5px',
        wide: '1.7px',
        wider: '2px',
        widest: '10px',
      },
      lineHeight: {
        'extra-tight': '19px',
        'tight': '24px',
        'snug': '25px',
        'normal': '33px',
        'relaxed': '36px',
        'loose': '38px',
        'extra-loose': '44px',
        'mega': '58px',
      },
      screens: {
        'sm': { 'max': '320px' },    // Mobile screen size
        'md': { 'max': '800px' },    // Tablet screen size (if needed)
        'lg': { 'max': '1024px' },   // Desktop screen size
        'xl': { 'max': '1440px' },   // Large desktop screen size
      },
    },
  },
  plugins: [],
}


