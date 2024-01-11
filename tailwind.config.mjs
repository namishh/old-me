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
        'darker': "#0f1215",
        'bg': "#14171b",
        'mbg': "#181c21",
        "bg3": "#242a32",
        'fg': "#dcdee6",
        'error': "#ee7a84",
        'success': "#68cd7f",
        'warn': "#eeaa77",
        'primary': "#68c495",
        'disabled': "#b994df",
        'secondary': "#8fa7e6",
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
