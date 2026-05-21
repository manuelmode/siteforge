// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import config from './site.config.json' with { type: 'json' };

export default defineConfig({
  site: `https://${config.domain}`,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
  // passthroughImageService — does NOT transform images at build time.
  // Cloudflare's static-assets build env can't compile sharp's native
  // bindings, so the default sharp service silently fell back to runtime
  // _image/ endpoints that 404 on a pure static deploy. Passthrough emits
  // direct URLs to the original src/assets/heros/*.jpg files (bundled by
  // Vite to /_astro/foo.HASH.jpg), losing WebP/AVIF conversion but
  // gaining "the images actually load". JPEGs are pre-sized at 2400w
  // and edge-cached by Cloudflare so LCP is still reasonable.
  image: { service: passthroughImageService() },
  integrations: [sitemap(), mdx()],
  vite: { plugins: [tailwindcss()] },
});
