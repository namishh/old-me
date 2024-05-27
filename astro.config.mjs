import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMdxCodeMeta from 'remark-mdx-code-meta';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import react from "@astrojs/react";
import astroExpressiveCode from "astro-expressive-code";
import { pluginFrames } from 'astro-expressive-code';
import { pluginTextMarkers } from 'astro-expressive-code';
// https://astro.build/config
export default defineConfig({
  site: 'https://chadcat7.github.io',
  base: '/',
  markdown: {
    remarkPlugins: [remarkMdxCodeMeta, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [astroExpressiveCode({
    themes: ['vitesse-black'],
    styleOverrides: {
      codeFontFamily: "Iosevka Nerd Font",
      codeFontSize: '18px',
      uiFontFamily: "Product Sans",
      uiFontSize: "17px",
      codeLineHeight: '1.75',
    },
    plugins: [
      pluginFrames(), pluginTextMarkers()
    ]
  }), mdx(), react(), tailwind()],
  vite: {
    ssr: {
      noExternal: ['mafs']
    }
  }
});
