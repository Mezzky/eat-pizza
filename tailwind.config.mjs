/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    screens: {
      'sm': '320px',
      'md': '375px',
      'lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        esamanru: 'Esamanru',
        gmarket: 'Gmarket Sans',
      },
      colors: {
        main: '#F8D55B',
        secondary: '#75B9C9',
        third: '#EF3340',
        dark: '#5C3217',
        black: '#2D2926',
      },
      backgroundImage: {
        'home-bg': "url('/image/section1-bg.png')",
      },
      gridTemplateColumns: {
        // Add your custom grid here
        'custom-70-30': '70% 30%', // Custom grid with 70% and 30% width
      },
      // Add text shadow utility
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'xl': '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
      // Add text stroke utility
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      textStrokeColor: {
        'dark': '#5C3217',
        'white': '#fff',
      },
    },
	},
	plugins: [
    // Plugin for text shadow and text stroke
    function ({ addUtilities }) {
      const newUtilities = {
        // Text shadow utilities
        '.text-shadow-sm': { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' },
        '.text-shadow-md': { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' },
        '.text-shadow-lg': { textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)' },
        '.text-shadow-xl': { textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' },
        // Text stroke utilities
        '.text-stroke-1': { '-webkit-text-stroke-width': '1px' },
        '.text-stroke-2': { '-webkit-text-stroke-width': '2px' },
        '.text-stroke-3': { '-webkit-text-stroke-width': '3px' },
        '.text-stroke-dark': { '-webkit-text-stroke-color': '#5C3217' },
        '.text-stroke-white': { '-webkit-text-stroke-color': '#fff' },
      };
      addUtilities(newUtilities);
    }
  ],
};
