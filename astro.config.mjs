import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMdxCodeMeta from 'remark-mdx-code-meta';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://chadcat7.github.io',
  base: '/',
  integrations: [tailwind(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'css-variables'
    },
    remarkPlugins: [remarkMdxCodeMeta, remarkMath],
    rehypePlugins: [rehypeKatex],
    remarkRehype: {
      footnoteLabel: 'Footnotes'
    },
    gfm: false
  }), react()],
  vite: {
    ssr: {
      noExternal: ['mafs'],
    },
  },
});
