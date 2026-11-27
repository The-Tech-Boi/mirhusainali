import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live domain. The workers.dev address still works as a fallback.
export default defineConfig({
  site: 'https://mirhusainali.com',
  integrations: [sitemap()],
});
