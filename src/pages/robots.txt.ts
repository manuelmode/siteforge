import type { APIRoute } from 'astro';
import { config } from '../lib/config';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: https://${config.domain}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
