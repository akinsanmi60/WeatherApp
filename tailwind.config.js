/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxlA: { min: '1440px' },

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1028px' },
      // => @media (max-width: 1028px) { ... }

      minlg: { max: '1024px' },
      // => @media (max-width: 1023px) { ... }

      mdxl: { max: '950px' },

      md: { max: '834px' },

      // => @media (min-width: 7px) { ... }
      sixm: { max: '768px' },

      xlsm: { max: '550px' },
      // => @media (max-width: 550px) { ... }

      sm: { max: '375px' },
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
      },
    },
    extend: {
      maxWidth: {
        '8xl': '1980px',
      },
    },
  },
  plugins: [],
};
