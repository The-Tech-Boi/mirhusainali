# mirhusainali.com

My personal site. One page, built with Astro, hosted on Cloudflare Pages. Every push to `main` redeploys it.

```
npm install
npm run dev
```

## Hosting on Cloudflare Pages

The Cloudflare project is connected to this repo:

- Project name: `mirhusainali` (gives `https://mirhusainali.pages.dev`)
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

## Attaching mirhusainali.com

1. **Get the domain onto Cloudflare.** Either buy it from Cloudflare Registrar (Domain Registration → Register Domains), or, if it was bought on Namecheap, add it as a site in Cloudflare (free plan) and change the nameservers at Namecheap (Domain List → Manage → Nameservers → Custom DNS) to the two Cloudflare gives you. Wait for Cloudflare to show the domain as Active.
2. **Attach it to the project:** Workers & Pages → `mirhusainali` → Custom domains → Set up a custom domain → `mirhusainali.com`. Repeat for `www.mirhusainali.com`. Cloudflare creates the DNS records and the certificate.
3. **Redirect www to the bare domain** (optional): Rules → Redirect Rules → "Redirect from WWW to root".
4. **Update the site URL** in three places and push:
   - `astro.config.mjs`: `site: 'https://mirhusainali.com'`
   - `public/robots.txt`: the `Sitemap:` line
   - `src/pages/index.astro`: the fallback `site` URL
5. Check `https://mirhusainali.com` loads, then submit `https://mirhusainali.com/sitemap-index.xml` in Google Search Console.
