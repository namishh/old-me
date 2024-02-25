/** @type {import('tailwindcss').Config} */
export default {
  config: {
    variants: {
      extend: {
        translate: ['group-hover', 'hover'],
      },
    },
  },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'sans': ['Product Sans', 'ui-sans-serif', 'system-ui',],
      'serif': ['Bree Serif', 'ui-serif', 'Georgia'],
      'mono': ['Iosevka', 'ui-monospace', 'SFMono-Regular'],
      'latex': ['Lusitana', 'ui-serif'],
    },
    extend: {
      colors: {
        'darker': "#060606",
        'bg': "#090909",
        'mbg': "#131313",
        "bg3": "#272727",
        'fg': "#dfdddd",
        'bright': "#ADA9A9",
        'error': "#c14d53",
        'success': "#56966e",
        'warn': "#e1956c",
        'primary': "#6e95bd",
        'disabled': "#d466e9",
        'secondary': "#6a9f98",
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '960px',
        // => @media (min-width: 960px) { ... }

        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      lineHeight: {
        'extra-loose': '2.5',
        '14': '3rem',
      },
      height: {
        'fuller': '140vh',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
