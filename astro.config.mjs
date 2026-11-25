import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When the custom domain is live, change this to 'https://mirhusainali.com'.
export default defineConfig({
  site: 'https://the-tech-boi.github.io',
  integrations: [sitemap()],
});
