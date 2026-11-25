# mirhusainali.com

My personal site. One page, built with Astro, deployed to GitHub Pages on every push to `main`.

```
npm install
npm run dev
```

## Attaching mirhusainali.com

Once the domain is bought on Namecheap:

1. **DNS at Namecheap** (Domain List → Manage → Advanced DNS). Remove the default parking records, then add:
   - Four `A` records, host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record, host `www`, value `the-tech-boi.github.io.`
2. **Verify the domain on GitHub** (Settings → Pages → Verified domains on my profile). This stops anyone else claiming it for their Pages site.
3. **Point this repo at it**: repo Settings → Pages → Custom domain → `mirhusainali.com`, save, wait for the DNS check, then tick **Enforce HTTPS** once the certificate is issued (can take up to an hour).
4. **Update the site URL** in two places and push:
   - `astro.config.mjs`: `site: 'https://mirhusainali.com'`
   - `public/robots.txt`: the `Sitemap:` line
5. Check `https://mirhusainali.com` and `https://www.mirhusainali.com` both load, then submit `https://mirhusainali.com/sitemap-index.xml` in Google Search Console.
