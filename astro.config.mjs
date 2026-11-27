import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live domain. The workers.dev address still works as a fallback.
export default defineConfig({
  site: 'https://mirhusainali.com',
  // Inline the CSS so the first paint doesn't wait on a separate stylesheet request.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap({ serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }) })],
});
