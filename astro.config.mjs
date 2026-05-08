// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import config from './site.config.json' with { type: 'json' };

export default defineConfig({
  site: `https://${config.domain}`,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap(), mdx()],
  vite: { plugins: [tailwindcss()] },
});
