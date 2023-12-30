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
        'darker': "#15181b",
        'bg': "#171b1e",
        'mbg': "#1B1F23",
        "bg3": "#222629",
        'fg': "#dcdee6",
        'error': "#E5A3A1",
        'success': "#B4E3AD",
        'warn': "#F1C192",
        'primary': "#A3CBE7",
        'disabled': "#CEACE8",
        'secondary': "#C9D4FF",
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
