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
      'sans': ['Rubik', 'ui-sans-serif', 'system-ui',],
      'serif': ['Bree Serif', 'ui-serif', 'Georgia'],
      'mono': ['Iosevka', 'ui-monospace', 'SFMono-Regular'],
      'latex': ['Lusitana', 'ui-serif'],
    },
    extend: {
      colors: {
        'darker': "#0e0d0f",
        'bg': "#111012",
        'mbg': "#171619",
        "bg3": "#221d23",
        'fg': "#dcdee6",
        'error': "#df7772",
        'success': "#60c481",
        'warn': "#fcc48c",
        'primary': "#a7b3fb",
        'disabled': "#d788f9",
        'secondary': "#97e2f3",
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
