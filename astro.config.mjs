import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When mirhusainali.com is attached, change this to 'https://mirhusainali.com'.
export default defineConfig({
  site: 'https://mirhusainali.mirhusainalimohammed.workers.dev',
  integrations: [sitemap()],
});
