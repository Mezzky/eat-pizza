/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "320px",
      md: "375px",
      lg: "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        esamanru: "Esamanru",
        gmarket: "Gmarket Sans",
      },
      colors: {
        main: "#F8D55B",
        secondary: {
          DEFAULT: "#75B9C9",
          foreground: "hsl(var(--secondary-foreground))",
        },
        third: "#EF3340",
        dark: "#5C3217",
        black: "#2D2926",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "home-bg": "url('./src/assets/images/section1-bg.png')",
        "wood-bg": "url('./src/assets/images/menu-bg.jpg')",
        "partner-bg": "url('./src/assets/images/partnership-bg.png')",
        "contact": "url('./src/assets/images/contact-img.jpg')",
        "store-bg": "url('./src/assets/images/store-bg.png')",
        "menu-title": "url('./src/assets/images/menu-title.png')",
        "menu-bg": "url('./src/assets/images/menu-bg.png')",
      },
      gridTemplateColumns: {
        "custom-70-30": "70% 30%",
        "custom-80-20": "80% 20%",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      },
      textStrokeWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      textStrokeColor: {
        dark: "#5C3217",
        white: "#fff",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    // Plugin for text shadow and text stroke
    function ({ addUtilities }) {
      const newUtilities = {
        // Text shadow utilities
        ".text-shadow-sm": { textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" },
        ".text-shadow-md": { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" },
        ".text-shadow-lg": { textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)" },
        ".text-shadow-xl": { textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" },
        // Text stroke utilities
        ".text-stroke-1": { "-webkit-text-stroke-width": "1px" },
        ".text-stroke-2": { "-webkit-text-stroke-width": "2px" },
        ".text-stroke-3": { "-webkit-text-stroke-width": "3px" },
        ".text-stroke-dark": { "-webkit-text-stroke-color": "#5C3217" },
        ".text-stroke-white": { "-webkit-text-stroke-color": "#fff" },
      };
      addUtilities(newUtilities);
    },
    require("tailwindcss-animate"),
  ],
};
