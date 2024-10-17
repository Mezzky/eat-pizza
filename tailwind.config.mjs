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
        gmarket: 'Gmarket Sans'
      },
      colors: {
        main: '#F8D55B',
        secondary: '#75B9C9',
        third: '#EF3340',
        dark: '#5C3217',
        black: '#2D2926',
      },
    },
	plugins: [],
	}
}
