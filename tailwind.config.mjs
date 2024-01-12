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
        'darker': "#0b0b0b",
        'bg': "#111111",
        'mbg': "#151515",
        "bg3": "#1f1f1f",
        'fg': "#dadada",
        'error': "#e55794",
        'success': "#4be194",
        'warn': "#d9845e",
        'primary': "#1eb1af",
        'disabled': "#a27ae1",
        'secondary': "#618dd9",
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
