# mirhusainali.com

My personal site. One page, built with Astro, hosted on Cloudflare Workers (static assets). Every push to `main` redeploys it.

```
npm install
npm run dev
```

## Hosting on Cloudflare

The Cloudflare Worker `mirhusainali` is connected to this repo and serves the built `dist` folder at `https://mirhusainali.com` (the `workers.dev` address still works).

The domain is registered at Namecheap with its nameservers pointed at Cloudflare. `mirhusainali.com` and `www.mirhusainali.com` are custom domains on the Worker, and a redirect rule sends www to the bare domain.

## After a domain change

Submit `https://mirhusainali.com/sitemap-index.xml` in Google Search Console once, and update the site URL in `astro.config.mjs`, `public/robots.txt` and the fallback in `src/pages/index.astro` if the domain ever changes.
